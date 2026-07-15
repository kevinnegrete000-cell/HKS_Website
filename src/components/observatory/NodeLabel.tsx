import { motion } from 'framer-motion';
import type { ArchiveObject } from '../../types/archive';

interface NodeLabelProps {
  item: ArchiveObject;
  variant: 'hover' | 'selected' | 'persistent';
}

export function NodeLabel({ item, variant }: NodeLabelProps) {
  const offset = 14;
  return (
    <motion.g
      initial={{ opacity: 0, x: -4 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -4 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      pointerEvents="none"
    >
      <foreignObject x={item.x + offset} y={item.y - 24} width={220} height={64}>
        <div
          className={`inline-block leading-tight ${
            variant === 'selected' ? 'bg-black/40 backdrop-blur-sm px-2 py-1 rounded-[2px]' : ''
          }`}
        >
          <div className="font-mono-label text-[9px] text-[var(--color-text-tertiary)] uppercase">
            {item.archiveCode}
          </div>
          <div className="text-[12px] text-[var(--color-text-primary)] font-medium">{item.title}</div>
          {variant === 'selected' && (
            <div className="text-[10px] text-[var(--color-text-secondary)] mt-0.5">
              {item.year} &middot; {item.prototypeType}
            </div>
          )}
        </div>
      </foreignObject>
    </motion.g>
  );
}
