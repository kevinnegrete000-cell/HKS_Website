import { Plus, Minus, Maximize2 } from 'lucide-react';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export function ZoomControls({ onZoomIn, onZoomOut, onReset }: ZoomControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-center border border-[var(--color-border)] rounded-sm bg-[var(--color-bg-raised)]/70 backdrop-blur-sm overflow-hidden">
      <button
        onClick={onZoomIn}
        aria-label="Zoom in"
        className="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
      <div className="w-full h-px bg-[var(--color-border)]" />
      <button
        onClick={onZoomOut}
        aria-label="Zoom out"
        className="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <div className="w-full h-px bg-[var(--color-border)]" />
      <button
        onClick={onReset}
        aria-label="Reset view"
        className="w-9 h-9 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
      >
        <Maximize2 size={13} strokeWidth={1.5} />
      </button>
    </div>
  );
}
