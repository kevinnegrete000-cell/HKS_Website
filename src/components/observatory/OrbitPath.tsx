import type { OrbitCenter } from '../../types/archive';

interface OrbitPathProps {
  center: OrbitCenter;
}

export function OrbitPath({ center }: OrbitPathProps) {
  const rings = Array.from({ length: center.ringCount }, (_, i) => {
    const r = center.maxRadius * ((i + 1) / center.ringCount);
    return r;
  });

  return (
    <g>
      {rings.map((r, i) => (
        <circle
          key={i}
          cx={center.x}
          cy={center.y}
          r={r}
          fill="none"
          stroke="var(--color-orbit-line)"
          strokeWidth={1}
        />
      ))}
      {/* faint central body */}
      <circle cx={center.x} cy={center.y} r={5} fill="var(--color-text-tertiary)" opacity={0.5} />
      <text
        x={center.x}
        y={center.y - center.maxRadius - 14}
        textAnchor="middle"
        className="font-mono-label"
        fontSize={10}
        fill="var(--color-text-tertiary)"
        opacity={0.6}
      >
        {center.label.toUpperCase()}
      </text>
    </g>
  );
}
