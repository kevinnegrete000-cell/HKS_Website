import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Scan, Share2, Clock, Link2 } from 'lucide-react';
import type { ArchiveObject } from '../../types/archive';
import { MetadataTable } from './MetadataTable';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface ArchiveDetailPanelProps {
  item: ArchiveObject | null;
  onClose: () => void;
  onExploreRelationships: () => void;
}

const actionButtons = (onExploreRelationships: () => void) => [
  { label: 'View 3D Scan', icon: Scan, onClick: () => {} },
  { label: 'Explore Relationships', icon: Link2, onClick: onExploreRelationships },
  { label: 'View Timeline', icon: Clock, onClick: () => {} },
  { label: 'Related Prototypes', icon: Share2, onClick: () => {} },
];

export function ArchiveDetailPanel({ item, onClose, onExploreRelationships }: ArchiveDetailPanelProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const hiddenState = isDesktop ? { x: '100%', y: 0 } : { x: 0, y: '100%' };

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* backdrop for mobile bottom sheet */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            key={item.id}
            className="fixed z-50 bg-[var(--color-bg-panel)] border-[var(--color-border)]
              bottom-0 left-0 right-0 max-h-[86vh] rounded-t-lg border-t
              md:top-14 md:bottom-0 md:left-auto md:right-0 md:w-[40%] md:min-w-[420px] md:max-h-none md:rounded-none md:border-t-0 md:border-l"
            initial={hiddenState}
            animate={{ x: 0, y: 0 }}
            exit={hiddenState}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-full overflow-y-auto thin-scroll px-6 md:px-8 py-6">
              <div className="flex items-center justify-between mb-5">
                <button
                  onClick={onClose}
                  className="hidden md:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  <ArrowLeft size={13} strokeWidth={1.5} />
                  Back to Observatory
                </button>
                <span className="md:hidden w-8 h-1 rounded-full bg-[var(--color-border-strong)] mx-auto" />
                <button
                  onClick={onClose}
                  aria-label="Close panel"
                  className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <div className="font-mono-label text-[10px] text-[var(--color-text-tertiary)] uppercase mb-1.5">
                Confidential Project Code
              </div>
              <h2 className="text-[26px] font-light tracking-tight text-[var(--color-text-primary)] mb-1">
                {item.archiveCode}
              </h2>
              <p className="text-[12px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] mb-6">
                {item.prototypeType} &middot; {item.projectPhase}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                <ImagePlaceholder
                  label="Fig. 01"
                  tone={item.images[0]?.tone ?? 'dark'}
                  large
                  className="col-span-2 h-56 rounded-[2px]"
                />
                {item.images.slice(1, 5).map((im) => (
                  <ImagePlaceholder key={im.id} label={im.label} tone={im.tone} className="h-28 rounded-[2px]" />
                ))}
              </div>

              <section className="mb-6">
                <h3 className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-2">
                  Project Introduction
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{item.introduction}</p>
              </section>

              <section className="mb-6">
                <h3 className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-2">
                  Prototype Description
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
              </section>

              <section className="mb-8">
                <MetadataTable item={item} />
              </section>

              <div className="grid grid-cols-2 gap-2 pb-4">
                {actionButtons(onExploreRelationships).map(({ label, icon: Icon, onClick }) => (
                  <button
                    key={label}
                    onClick={onClick}
                    className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.06em] py-2.5 border border-[var(--color-border-strong)] rounded-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-tertiary)] transition-colors"
                  >
                    <Icon size={13} strokeWidth={1.5} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
