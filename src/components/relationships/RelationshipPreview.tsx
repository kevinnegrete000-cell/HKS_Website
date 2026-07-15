import type { ArchiveObject, Relationship } from '../../types/archive';
import { ImagePlaceholder } from '../common/ImagePlaceholder';

interface RelationshipPreviewProps {
  item: ArchiveObject | null;
  activeRel: Relationship | null;
  onOpenDetail: (id: string) => void;
}

export function RelationshipPreview({ item, activeRel, onOpenDetail }: RelationshipPreviewProps) {
  if (!item) {
    return (
      <div className="hidden lg:flex w-72 shrink-0 border-l border-[var(--color-border)] items-center justify-center p-6">
        <p className="text-[12px] text-[var(--color-text-tertiary)] text-center leading-relaxed">
          Select a node to preview its record and see its connections highlighted.
        </p>
      </div>
    );
  }

  return (
    <div className="hidden lg:flex flex-col w-72 shrink-0 border-l border-[var(--color-border)] p-5 overflow-y-auto thin-scroll">
      <ImagePlaceholder label="Fig. 01" tone={item.images[0]?.tone ?? 'dark'} large className="h-36 rounded-[2px] mb-4" />
      <div className="font-mono-label text-[9px] text-[var(--color-text-tertiary)] uppercase mb-1">{item.archiveCode}</div>
      <h4 className="text-[16px] text-[var(--color-text-primary)] mb-1">{item.title}</h4>
      <p className="text-[11px] text-[var(--color-text-secondary)] mb-4">
        {item.year} &middot; {item.typology}
      </p>
      <p className="text-[12px] leading-relaxed text-[var(--color-text-secondary)] mb-5">{item.description}</p>

      {activeRel && (
        <div className="border-t border-[var(--color-border)] pt-4 mb-5">
          <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-tertiary)] mb-1.5">
            {activeRel.category} Relationship
          </div>
          <p className="text-[12px] leading-relaxed text-[var(--color-text-secondary)]">{activeRel.description}</p>
        </div>
      )}

      <button
        onClick={() => onOpenDetail(item.id)}
        className="mt-auto text-[11px] uppercase tracking-[0.08em] py-2.5 border border-[var(--color-border-strong)] rounded-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
      >
        Open Full Record
      </button>
    </div>
  );
}
