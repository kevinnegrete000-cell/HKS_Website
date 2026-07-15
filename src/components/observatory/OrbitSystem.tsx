import { AnimatePresence } from 'framer-motion';
import type { ArchiveObject, OrbitCenter } from '../../types/archive';
import { OrbitPath } from './OrbitPath';
import { ArchiveNode } from './ArchiveNode';
import { NodeLabel } from './NodeLabel';

interface OrbitSystemProps {
  center: OrbitCenter;
  items: ArchiveObject[];
  selectedId: string | null;
  hoveredId: string | null;
  dimAll: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

export function OrbitSystem({ center, items, selectedId, hoveredId, dimAll, onHover, onSelect }: OrbitSystemProps) {
  return (
    <g>
      <OrbitPath center={center} />
      {items.map((item) => {
        const isSelected = item.id === selectedId;
        const isHovered = item.id === hoveredId;
        const showLabel = isSelected || isHovered || item.importance >= 5;
        return (
          <g key={item.id}>
            <ArchiveNode
              item={item}
              isSelected={isSelected}
              isHovered={isHovered}
              isDimmed={dimAll && !isSelected && !isHovered}
              onHover={onHover}
              onSelect={onSelect}
            />
            <AnimatePresence>
              {showLabel && (
                <NodeLabel item={item} variant={isSelected ? 'selected' : isHovered ? 'hover' : 'persistent'} />
              )}
            </AnimatePresence>
          </g>
        );
      })}
    </g>
  );
}
