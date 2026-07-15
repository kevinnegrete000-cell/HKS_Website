import { motion } from 'framer-motion';

interface RelationshipLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  strength: number;
}

export function RelationshipLine({ x1, y1, x2, y2, strength }: RelationshipLineProps) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.06;
  const path = `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;

  return (
    <motion.path
      d={path}
      fill="none"
      stroke="var(--color-text-primary)"
      strokeWidth={0.75 + strength * 1}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.55 + strength * 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
