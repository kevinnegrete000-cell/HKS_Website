# HKS Digital Archive — Observatory UI Prototype

A phase-one interaction foundation for an architectural prototype archive: an
observatory of radial node clusters, a relationship graph, a timeline, and an
archival detail panel. No 3D models yet — this establishes the UI and
interaction system on top of mock data.

## Stack
React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + D3 (zoom/pan) + lucide-react

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/data` — mock dataset (20 archive objects, 4 orbit centers, 14 relationships)
- `src/types/archive.ts` — shared data types
- `src/lib/orbitMath.ts` — polar → cartesian helper for orbit positions
- `src/components/shell` — top navigation (`ArchiveHeader`)
- `src/components/observatory` — canvas, orbit rings, nodes, labels, relationship
  lines, zoom controls
- `src/components/panel` — sliding archive detail panel + metadata table
- `src/components/relationships` — full-screen relationship graph, filters, legend, preview
- `src/components/timeline` — chronological list view
- `src/components/about` — about page
- `src/components/search` — command-style search overlay
- `src/components/common` — shared bits (grain overlay, image placeholders)

## Notes

- All imagery is placeholder (diagonal-hatch blocks) — swap `ImagePlaceholder`
  usages for real assets or 3D scan viewers in a later phase.
- Orbit centers, radii, and angles are hand-tuned in `src/data/archiveObjects.ts`
  for an asymmetrical, curated composition rather than a perfect grid.
- Reduced motion is respected globally via a `prefers-reduced-motion` media query
  in `src/index.css`.
