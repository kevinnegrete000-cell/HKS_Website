import { useEffect, useRef, useState, type RefObject } from 'react';
import * as d3 from 'd3';

export interface Transform {
  x: number;
  y: number;
  k: number;
}

export function useZoomPan(svgRef: RefObject<SVGSVGElement | null>, initial?: Transform) {
  const [transform, setTransform] = useState<Transform>(initial ?? { x: 0, y: 0, k: 1 });
  const zoomBehavior = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.35, 2.6])
      .filter((event) => {
        // allow wheel always; for mouse, only left-button drag pans
        if (event.type === 'wheel') return true;
        return !event.button;
      })
      .on('zoom', (event) => {
        setTransform({ x: event.transform.x, y: event.transform.y, k: event.transform.k });
      });

    zoomBehavior.current = zoom;
    svg.call(zoom);

    if (initial) {
      svg.call(
        zoom.transform,
        d3.zoomIdentity.translate(initial.x, initial.y).scale(initial.k)
      );
    }

    return () => {
      svg.on('.zoom', null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [svgRef]);

  const zoomBy = (factor: number) => {
    if (!svgRef.current || !zoomBehavior.current) return;
    d3.select(svgRef.current).transition().duration(280).call(zoomBehavior.current.scaleBy, factor);
  };

  const reset = () => {
    if (!svgRef.current || !zoomBehavior.current) return;
    d3.select(svgRef.current)
      .transition()
      .duration(420)
      .call(
        zoomBehavior.current.transform,
        d3.zoomIdentity.translate(initial?.x ?? 0, initial?.y ?? 0).scale(initial?.k ?? 1)
      );
  };

  const focusOn = (x: number, y: number, viewportWidth: number, viewportHeight: number, scale = 1.4) => {
    if (!svgRef.current || !zoomBehavior.current) return;
    const t = d3.zoomIdentity
      .translate(viewportWidth / 2, viewportHeight / 2)
      .scale(scale)
      .translate(-x, -y);
    d3.select(svgRef.current).transition().duration(560).call(zoomBehavior.current.transform, t);
  };

  return { transform, zoomBy, reset, focusOn };
}
