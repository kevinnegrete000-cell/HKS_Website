import { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import type { ViewName } from '../../App';

interface NavItem {
  key: ViewName;
  label: string;
}

const navItems: NavItem[] = [
  { key: 'observatory', label: 'Observatory' },
  { key: 'relationships', label: 'Relationships' },
  { key: 'timeline', label: 'Timeline' },
  { key: 'about', label: 'About' },
];

interface ArchiveHeaderProps {
  activeView: ViewName;
  onNavigate: (view: ViewName) => void;
  onOpenSearch: () => void;
  itemCount: number;
}

export function ArchiveHeader({ activeView, onNavigate, onOpenSearch, itemCount }: ArchiveHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 md:px-8 h-14">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-primary)]" />
          <span className="text-[13px] tracking-[0.02em] font-medium text-[var(--color-text-primary)]">
            HKS Digital Archive
          </span>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`relative text-[12px] uppercase tracking-[0.12em] font-medium pb-1 transition-colors duration-200 ${
                activeView === item.key
                  ? 'text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]'
              }`}
            >
              {item.label}
              {activeView === item.key && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-px bg-[var(--color-text-primary)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 shrink-0">
          <span className="font-mono-label text-[10px] text-[var(--color-text-tertiary)]">
            Archive Items: {itemCount.toLocaleString()}
          </span>
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200 border border-[var(--color-border)] hover:border-[var(--color-border-strong)] rounded-sm px-3 py-1.5"
          >
            <Search size={13} strokeWidth={1.5} />
            Search
          </button>
        </div>

        {/* mobile */}
        <button
          className="md:hidden text-[var(--color-text-secondary)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] px-5 py-3 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onNavigate(item.key);
                setMobileOpen(false);
              }}
              className={`text-left text-[13px] uppercase tracking-[0.1em] ${
                activeView === item.key ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-tertiary)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenSearch();
              setMobileOpen(false);
            }}
            className="flex items-center gap-2 text-[13px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"
          >
            <Search size={14} strokeWidth={1.5} />
            Search
          </button>
        </div>
      )}
    </header>
  );
}
