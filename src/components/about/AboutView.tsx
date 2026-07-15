export function AboutView() {
  return (
    <div className="fixed inset-0 pt-14 bg-[var(--color-bg)] overflow-y-auto thin-scroll">
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] mb-1">About</h1>
        <p className="text-[26px] font-light text-[var(--color-text-primary)] mb-8">
          A research instrument for architectural prototypes
        </p>
        <div className="flex flex-col gap-5 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
          <p>
            The HKS Digital Archive collects physical models, material tests, fabrication studies, and
            spatial prototypes produced across the practice&rsquo;s research programs. Each record is
            positioned within an observatory of related work, organized by fabrication method, material
            behavior, typology, and geometric strategy.
          </p>
          <p>
            This interface is an early foundation for that archive: an interaction system for orbiting,
            selecting, and cross-referencing prototypes before the full three-dimensional scan library is
            connected. Positions, clusters, and relationships shown here are illustrative and will be
            refined as the underlying dataset grows.
          </p>
          <p>
            Use the Observatory to browse by cluster, the Relationships view to trace connections between
            objects, the Timeline to move chronologically, and Search to jump directly to a known record.
          </p>
        </div>
      </div>
    </div>
  );
}
