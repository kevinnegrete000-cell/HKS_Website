interface ImagePlaceholderProps {
  label: string;
  tone: 'light' | 'dark';
  className?: string;
  large?: boolean;
}

export function ImagePlaceholder({ label, tone, className = '', large = false }: ImagePlaceholderProps) {
  const bg = tone === 'light' ? '#c9c4b8' : '#26241f';
  const fg = tone === 'light' ? '#3a362c' : '#8f8c83';

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: bg }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none">
        <defs>
          <pattern id={`diag-${label}`} width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="10" stroke={fg} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#diag-${label})`} />
      </svg>
      <span
        className={`absolute ${large ? 'bottom-3 left-3 text-[11px]' : 'bottom-1.5 left-1.5 text-[9px]'} font-mono-label uppercase`}
        style={{ color: fg }}
      >
        {label}
      </span>
    </div>
  );
}
