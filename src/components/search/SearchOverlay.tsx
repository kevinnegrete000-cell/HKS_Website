import { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import type { ArchiveObject } from '../../types/archive';

interface SearchOverlayProps {
  open: boolean;
  items: ArchiveObject[];
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function SearchOverlay({ open, items, onClose, onSelect }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 8);
    return items
      .filter((item) =>
        [item.archiveCode, item.title, item.material, item.typology, String(item.year), item.location]
          .join(' ')
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 20);
  }, [query, items]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-[var(--color-bg)]/95 backdrop-blur-md flex flex-col items-center pt-24 md:pt-32 px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-[var(--color-border-strong)] pb-3 mb-6">
              <Search size={16} strokeWidth={1.5} className="text-[var(--color-text-tertiary)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by archive code, title, material, typology, year, location&hellip;"
                className="flex-1 bg-transparent outline-none text-[15px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]"
              />
              <button onClick={onClose} aria-label="Close search" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col max-h-[55vh] overflow-y-auto thin-scroll">
              {results.length === 0 && (
                <p className="text-[13px] text-[var(--color-text-tertiary)] py-6 text-center">
                  No archive objects match &ldquo;{query}&rdquo;.
                </p>
              )}
              {results.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className="flex items-center justify-between text-left py-3 border-b border-[var(--color-border)] hover:bg-white/[0.03] px-2 transition-colors"
                >
                  <div>
                    <div className="font-mono-label text-[10px] text-[var(--color-text-tertiary)] uppercase">
                      {item.archiveCode}
                    </div>
                    <div className="text-[14px] text-[var(--color-text-primary)]">{item.title}</div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-[11px] text-[var(--color-text-secondary)]">{item.year}</div>
                    <div className="text-[10px] text-[var(--color-text-tertiary)]">{item.typology}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
