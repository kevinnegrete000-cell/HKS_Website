import type { RelationshipCategory } from '../../types/archive';

export type RelationshipMode = 'all' | 'direct' | 'strongest';

interface FilterPanelProps {
  categories: RelationshipCategory[];
  activeCategories: Set<RelationshipCategory>;
  onToggleCategory: (cat: RelationshipCategory) => void;
  mode: RelationshipMode;
  onModeChange: (mode: RelationshipMode) => void;
}

const modes: { key: RelationshipMode; label: string }[] = [
  { key: 'all', label: 'All Relationships' },
  { key: 'direct', label: 'Direct Relationships' },
  { key: 'strongest', label: 'Strongest Similarities' },
];

export function FilterPanel({ categories, activeCategories, onToggleCategory, mode, onModeChange }: FilterPanelProps) {
  return (
    <div className="flex flex-col gap-6 p-5 border-r border-[var(--color-border)] w-full md:w-60 shrink-0 overflow-y-auto thin-scroll">
      <div>
        <h3 className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-3">
          Relationship Mode
        </h3>
        <div className="flex flex-col gap-1">
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => onModeChange(m.key)}
              className={`text-left text-[12px] px-2.5 py-2 rounded-sm border transition-colors ${
                mode === m.key
                  ? 'border-[var(--color-border-strong)] text-[var(--color-text-primary)] bg-white/[0.04]'
                  : 'border-transparent text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)] mb-3">Filters</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 text-[12px] text-[var(--color-text-secondary)] cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={activeCategories.has(cat)}
                onChange={() => onToggleCategory(cat)}
                className="accent-[var(--color-text-primary)] w-3.5 h-3.5"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
