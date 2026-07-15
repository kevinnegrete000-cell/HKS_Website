import { useMemo, useState } from 'react';
import type { ArchiveObject, RelationshipCategory } from '../../types/archive';
import { allRelationships } from '../../data/archiveObjects';
import { FilterPanel, type RelationshipMode } from './FilterPanel';
import { RelationshipGraph } from './RelationshipGraph';
import { RelationshipLegend } from './RelationshipLegend';
import { RelationshipPreview } from './RelationshipPreview';

const ALL_CATEGORIES: RelationshipCategory[] = ['Material', 'Fabrication', 'Typology', 'Geometry', 'Project Phase'];

interface RelationshipsViewProps {
  items: ArchiveObject[];
  onOpenDetail: (id: string) => void;
}

export function RelationshipsView({ items, onOpenDetail }: RelationshipsViewProps) {
  const [activeCategories, setActiveCategories] = useState<Set<RelationshipCategory>>(new Set(ALL_CATEGORIES));
  const [mode, setMode] = useState<RelationshipMode>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedRelIndex, setSelectedRelIndex] = useState<number | null>(null);

  const selectedItem = useMemo(() => items.find((i) => i.id === selectedId) ?? null, [items, selectedId]);
  const activeRel = selectedRelIndex !== null ? allRelationships[selectedRelIndex] : null;

  const toggleCategory = (cat: RelationshipCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <div className="fixed inset-0 pt-14 flex flex-col md:flex-row bg-[var(--color-bg)]">
      <FilterPanel
        categories={ALL_CATEGORIES}
        activeCategories={activeCategories}
        onToggleCategory={toggleCategory}
        mode={mode}
        onModeChange={setMode}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <div
          className="flex-1 min-h-0"
          onClick={() => {
            setSelectedId(null);
            setSelectedRelIndex(null);
          }}
        >
          <RelationshipGraph
            items={items}
            allRelationships={allRelationships}
            activeCategories={activeCategories}
            mode={mode}
            selectedId={selectedId}
            onSelectNode={(id) => {
              setSelectedId(id);
              setSelectedRelIndex(null);
            }}
            selectedRelIndex={selectedRelIndex}
            onSelectRel={setSelectedRelIndex}
          />
        </div>
        <RelationshipLegend />
      </div>

      <RelationshipPreview item={selectedItem} activeRel={activeRel} onOpenDetail={onOpenDetail} />
    </div>
  );
}
