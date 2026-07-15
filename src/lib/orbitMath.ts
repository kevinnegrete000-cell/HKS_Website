import { orbitCenters } from '../data/orbitCenters';

export function orbitPosition(centerId: string | null, radius: number, angle: number) {
  const center = orbitCenters.find((c) => c.id === centerId);
  const cx = center?.x ?? 0;
  const cy = center?.y ?? 0;
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  };
}

export const deg = (d: number) => (d * Math.PI) / 180;
