import { useMemo, useState } from 'react';
import type { ArchiveObject } from '../../types/archive';

interface TimelineViewProps {
  items: ArchiveObject[];
  onOpenDetail: (id: string) => void;
}

export function TimelineView({ items, onOpenDetail }: TimelineViewProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const years = useMemo(() => {
    const ys = Array.from(new Set(items.map((i) => i.year))).sort((a, b) => a - b);
    return ys;
  }, [items]);

  const grouped = useMemo(() => {
    const map = new Map<number, ArchiveObject[]>();
    years.forEach((y) => map.set(y, items.filter((i) => i.year === y)));
    return map;
  }, [years, items]);

  return (
    <div className="fixed inset-0 pt-14 bg-[var(--color-bg)] overflow-y-auto thin-scroll">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <h1 className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] mb-1">Timeline</h1>
        <p className="text-[26px] font-light text-[var(--color-text-primary)] mb-10">
          Chronological survey of the archive
        </p>

        <div className="relative pl-6 border-l border-[var(--color-border-strong)]">
          {years.map((year) => (
            <div key={year} className="mb-10 relative">
              <div className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--color-text-primary)]" />
              <div className="font-mono-label text-[13px] text-[var(--color-text-primary)] mb-3">{year}</div>
              <div className="flex flex-col gap-2">
                {grouped.get(year)?.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onOpenDetail(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`text-left flex items-center justify-between gap-4 py-2.5 px-3 rounded-sm border transition-colors ${
                      hoveredId === item.id
                        ? 'border-[var(--color-border-strong)] bg-white/[0.03]'
                        : 'border-transparent'
                    }`}
                  >
                    <div>
                      <div className="font-mono-label text-[9px] text-[var(--color-text-tertiary)] uppercase">
                        {item.archiveCode}
                      </div>
                      <div className="text-[13px] text-[var(--color-text-primary)]">{item.title}</div>
                    </div>
                    <div className="text-[11px] text-[var(--color-text-tertiary)] shrink-0">{item.typology}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
