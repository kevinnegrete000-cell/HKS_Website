import type { OrbitCenter } from '../types/archive';

// Positions are deliberately asymmetrical and partially off-canvas,
// echoing the curated, non-mathematical composition of the reference material.
export const orbitCenters: OrbitCenter[] = [
  {
    id: 'center-fabrication',
    label: 'Fabrication Systems',
    x: -120,
    y: 520,
    maxRadius: 460,
    ringCount: 5,
  },
  {
    id: 'center-material',
    label: 'Material Research',
    x: 980,
    y: 160,
    maxRadius: 360,
    ringCount: 4,
  },
  {
    id: 'center-typology',
    label: 'Typological Studies',
    x: 720,
    y: 760,
    maxRadius: 300,
    ringCount: 4,
  },
  {
    id: 'center-geometry',
    label: 'Geometry Experiments',
    x: 1420,
    y: 560,
    maxRadius: 340,
    ringCount: 4,
  },
];
