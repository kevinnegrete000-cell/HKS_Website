import { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { ArchiveObject, Relationship, RelationshipCategory } from '../../types/archive';
import type { RelationshipMode } from './FilterPanel';

interface RelationshipGraphProps {
  items: ArchiveObject[];
  allRelationships: Relationship[];
  activeCategories: Set<RelationshipCategory>;
  mode: RelationshipMode;
  selectedId: string | null;
  onSelectNode: (id: string) => void;
  selectedRelIndex: number | null;
  onSelectRel: (index: number | null) => void;
}

export const categoryStyle: Record<RelationshipCategory, { dash: string; color: string }> = {
  Material: { dash: '0', color: 'var(--color-text-primary)' },
  Fabrication: { dash: '1 0', color: 'var(--color-accent)' },
  Typology: { dash: '4 3', color: 'var(--color-text-secondary)' },
  Geometry: { dash: '1 4', color: 'var(--color-accent-soft)' },
  'Project Phase': { dash: '8 3', color: 'var(--color-text-tertiary)' },
};

const COLUMN_WIDTH = 240;
const ROW_HEIGHT = 78;

export function RelationshipGraph({
  items,
  allRelationships,
  activeCategories,
  mode,
  selectedId,
  onSelectNode,
  selectedRelIndex,
  onSelectRel,
}: RelationshipGraphProps) {
  const typologies = useMemo(() => Array.from(new Set(items.map((i) => i.typology))), [items]);

  const positions = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    typologies.forEach((typ, colIdx) => {
      const colItems = items.filter((i) => i.typology === typ);
      colItems.forEach((item, rowIdx) => {
        map.set(item.id, {
          x: 140 + colIdx * COLUMN_WIDTH,
          y: 80 + rowIdx * ROW_HEIGHT,
        });
      });
    });
    return map;
  }, [items, typologies]);

  const visibleRelationships = useMemo(() => {
    let rels = allRelationships.filter((r) => activeCategories.has(r.category));
    if (mode === 'direct' && selectedId) {
      rels = rels.filter((r) => r.source === selectedId || r.target === selectedId);
    }
    if (mode === 'strongest') {
      rels = rels.filter((r) => r.strength >= 0.6);
    }
    return rels;
  }, [allRelationships, activeCategories, mode, selectedId]);

  const height = Math.max(...typologies.map((t) => items.filter((i) => i.typology === t).length)) * ROW_HEIGHT + 160;
  const width = typologies.length * COLUMN_WIDTH + 200;

  return (
    <div className="w-full h-full overflow-auto thin-scroll bg-[var(--color-bg)]">
      <svg width={Math.max(width, 900)} height={Math.max(height, 600)}>
        {typologies.map((typ, colIdx) => (
          <text
            key={typ}
            x={140 + colIdx * COLUMN_WIDTH}
            y={36}
            className="font-mono-label"
            fontSize={10}
            fill="var(--color-text-tertiary)"
            textAnchor="middle"
          >
            {typ.toUpperCase()}
          </text>
        ))}

        {visibleRelationships.map((rel, i) => {
          const p1 = positions.get(rel.source);
          const p2 = positions.get(rel.target);
          if (!p1 || !p2) return null;
          const style = categoryStyle[rel.category];
          const isHighlighted = selectedId && (rel.source === selectedId || rel.target === selectedId);
          const midX = (p1.x + p2.x) / 2;
          const path = `M${p1.x},${p1.y} C${midX},${p1.y} ${midX},${p2.y} ${p2.x},${p2.y}`;
          const globalIndex = allRelationships.indexOf(rel);
          return (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke={style.color}
              strokeWidth={selectedRelIndex === globalIndex ? 2 : 0.75 + rel.strength}
              strokeDasharray={style.dash}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHighlighted || !selectedId ? 0.5 + rel.strength * 0.3 : 0.08 }}
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                onSelectRel(globalIndex);
              }}
            />
          );
        })}

        {items.map((item) => {
          const p = positions.get(item.id);
          if (!p) return null;
          const isSelected = item.id === selectedId;
          const r = 3 + item.importance * 1.3;
          return (
            <g
              key={item.id}
              transform={`translate(${p.x}, ${p.y})`}
              onClick={(e) => {
                e.stopPropagation();
                onSelectNode(item.id);
              }}
              style={{ cursor: 'pointer' }}
            >
              <circle r={Math.max(r * 2, 14)} fill="transparent" />
              {isSelected && (
                <circle r={r + 8} fill="none" stroke="var(--color-text-primary)" strokeWidth={1} opacity={0.5} />
              )}
              <circle
                r={r}
                fill="var(--color-text-primary)"
                opacity={isSelected ? 1 : 0.75}
                style={{
                  filter: isSelected ? 'drop-shadow(0 0 8px rgba(233,228,220,0.5))' : 'none',
                }}
              />
              <foreignObject x={r + 8} y={-18} width={170} height={36}>
                <div className="text-[10px] leading-tight text-[var(--color-text-secondary)]">
                  <div className="font-mono-label text-[9px] text-[var(--color-text-tertiary)] uppercase">
                    {item.archiveCode}
                  </div>
                  <div className="truncate">{item.title}</div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
