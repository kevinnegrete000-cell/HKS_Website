import { motion } from 'framer-motion';
import type { ArchiveObject } from '../../types/archive';

interface ArchiveNodeProps {
  item: ArchiveObject;
  isSelected: boolean;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

// four-point sparkle glyph, echoes the "selected" marker in the reference material
function SparkleGlyph({ size, opacity }: { size: number; opacity: number }) {
  const s = size;
  return (
    <path
      d={`M0,-${s} C${s * 0.15},-${s * 0.15} ${s * 0.15},-${s * 0.15} ${s},0 C${s * 0.15},${s * 0.15} ${s * 0.15},${s * 0.15} 0,${s} C-${s * 0.15},${s * 0.15} -${s * 0.15},${s * 0.15} -${s},0 C-${s * 0.15},-${s * 0.15} -${s * 0.15},-${s * 0.15} 0,-${s} Z`}
      fill="var(--color-text-primary)"
      opacity={opacity}
    />
  );
}

export function ArchiveNode({ item, isSelected, isHovered, isDimmed, onHover, onSelect }: ArchiveNodeProps) {
  const baseRadius = 3 + item.importance * 1.6;
  const radius = isSelected ? baseRadius * 1.15 : isHovered ? baseRadius * 1.3 : baseRadius;

  return (
    <g
      transform={`translate(${item.x}, ${item.y})`}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(item.id);
      }}
      style={{ cursor: 'pointer' }}
    >
      {/* invisible larger hit-area for easier interaction */}
      <circle r={Math.max(radius * 2.4, 16)} fill="transparent" />

      {isSelected && (
        <motion.circle
          r={radius + 10}
          fill="none"
          stroke="var(--color-text-primary)"
          strokeWidth={1}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <motion.circle
        r={radius}
        fill={isDimmed ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)'}
        animate={{
          opacity: isDimmed ? 0.25 : isSelected ? 1 : isHovered ? 0.95 : 0.8,
          scale: 1,
        }}
        style={{
          filter: isSelected
            ? 'drop-shadow(0 0 8px rgba(233,228,220,0.55)) drop-shadow(0 0 18px rgba(233,228,220,0.25))'
            : isHovered
            ? 'drop-shadow(0 0 6px rgba(233,228,220,0.35))'
            : 'none',
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      />

      {isSelected && item.importance >= 4 && <SparkleGlyph size={radius + 6} opacity={0.9} />}
    </g>
  );
}
