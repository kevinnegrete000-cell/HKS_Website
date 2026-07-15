import { useEffect, useMemo, useRef, useState } from 'react';
import { orbitCenters } from '../../data/orbitCenters';
import type { ArchiveObject } from '../../types/archive';
import { OrbitSystem } from './OrbitSystem';
import { RelationshipLine } from './RelationshipLine';
import { ZoomControls } from './ZoomControls';
import { useZoomPan } from '../../hooks/useZoomPan';

interface ObservatoryCanvasProps {
  items: ArchiveObject[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  focusRequest: { id: string; nonce: number } | null;
}

const INITIAL_TRANSFORM = { x: 260, y: 40, k: 0.72 };

export function ObservatoryCanvas({ items, selectedId, onSelect, focusRequest }: ObservatoryCanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { transform, zoomBy, reset, focusOn } = useZoomPan(svgRef, INITIAL_TRANSFORM);

  const itemsById = useMemo(() => new Map(items.map((i) => [i.id, i])), [items]);

  const selectedItem = selectedId ? itemsById.get(selectedId) ?? null : null;

  useEffect(() => {
    if (!focusRequest) return;
    const item = itemsById.get(focusRequest.id);
    if (!item || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    focusOn(item.x, item.y, rect.width, rect.height, 1.3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusRequest]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-[var(--color-bg)]">
      {/* soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 40%, transparent 0%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      <svg
        ref={svgRef}
        className="w-full h-full touch-none"
        onClick={() => onSelect(null)}
      >
        <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.k})`}>
          {/* relationship lines for the currently selected node */}
          {selectedItem &&
            selectedItem.relationships.map((rel, i) => {
              const otherId = rel.source === selectedItem.id ? rel.target : rel.source;
              const other = itemsById.get(otherId);
              if (!other) return null;
              return (
                <RelationshipLine
                  key={i}
                  x1={selectedItem.x}
                  y1={selectedItem.y}
                  x2={other.x}
                  y2={other.y}
                  strength={rel.strength}
                />
              );
            })}

          {orbitCenters.map((center) => (
            <OrbitSystem
              key={center.id}
              center={center}
              items={items.filter((i) => i.orbitCenterId === center.id)}
              selectedId={selectedId}
              hoveredId={hoveredId}
              dimAll={Boolean(selectedId)}
              onHover={setHoveredId}
              onSelect={(id) => onSelect(id)}
            />
          ))}
        </g>
      </svg>

      <ZoomControls onZoomIn={() => zoomBy(1.35)} onZoomOut={() => zoomBy(0.74)} onReset={reset} />
    </div>
  );
}
