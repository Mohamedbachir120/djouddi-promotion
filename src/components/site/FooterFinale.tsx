import { useEffect, useRef } from 'react';

/*
 * The footer's closing image: the logo's two red roofs drawn at monumental
 * scale above a DJOUDI wordmark built as a row of towers, floors and windows
 * included, standing on a ground line. On scroll-in the towers rise out of the
 * ground and the roofs are drawn; on desktop the two layers shift slightly
 * with the pointer for depth. Purely decorative, so hidden from assistive tech.
 */

const W = 1440;
const H = 640;
const GROUND = 580;
const CAP_TOP = 282;

// Deterministic "lit window" cells on the facade grid (28 × 24 units).
const litWindows = (() => {
  const cells: { x: number; y: number; d: number }[] = [];
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let col = 0; col < 50; col++) {
    for (let row = 0; row < 12; row++) {
      if (rand() < 0.06) cells.push({ x: 40 + col * 28 + 6, y: CAP_TOP + row * 24 + 6, d: rand() * 8 });
    }
  }
  return cells;
})();

export function FooterFinale() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
      });
    };
    const onLeave = () => {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="dp-finale" ref={ref} data-reveal="finale" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax meet" focusable="false">
        <defs>
          <pattern id="dp-facade" width="28" height="24" patternUnits="userSpaceOnUse" x="40" y={CAP_TOP}>
            <rect width="28" height="24" fill="#252525" />
            <rect x="6" y="6" width="16" height="12" fill="#2e2e2e" />
            <rect y="22" width="28" height="2" fill="#303030" />
          </pattern>
          <clipPath id="dp-wordmark">
            <text
              x="40"
              y={GROUND}
              textLength={W - 80}
              lengthAdjust="spacingAndGlyphs"
              className="dp-finale__type"
            >
              DJOUDI
            </text>
          </clipPath>
          <clipPath id="dp-above-ground">
            <rect x="0" y="0" width={W} height={GROUND} />
          </clipPath>
        </defs>

        {/* Ground plane */}
        <rect x="0" y={GROUND} width={W} height={H - GROUND} fill="#141414" />

        {/* Construction lines, as on an elevation drawing */}
        <g className="dp-finale__construct">
          <line x1="430" y1="96" x2="430" y2={GROUND} />
          <line x1="1010" y1="20" x2="1010" y2={GROUND} />
          <line x1="0" y1="20" x2={W} y2="20" />
          <line x1="0" y1={CAP_TOP} x2={W} y2={CAP_TOP} />
        </g>

        {/* Roofs from the logo, at architectural scale */}
        <g className="dp-finale__roofs">
          <polyline
            points={`110,262 430,96 750,262`}
            pathLength={1}
            className="dp-finale__roof"
          />
          <polyline
            points={`640,214 1010,20 1400,240`}
            pathLength={1}
            className="dp-finale__roof dp-finale__roof--big"
          />
        </g>

        {/* Wordmark towers rising from the ground */}
        <g clipPath="url(#dp-above-ground)">
          <g className="dp-finale__par">
          <g className="dp-finale__towers">
            <g clipPath="url(#dp-wordmark)">
              <rect x="0" y="0" width={W} height={GROUND} fill="url(#dp-facade)" />
              {litWindows.map((w, i) => (
                <rect
                  key={i}
                  x={w.x}
                  y={w.y}
                  width="16"
                  height="12"
                  className="dp-finale__lit"
                  style={{ animationDelay: `${w.d.toFixed(2)}s` }}
                />
              ))}
            </g>
            <text
              x="40"
              y={GROUND}
              textLength={W - 80}
              lengthAdjust="spacingAndGlyphs"
              className="dp-finale__type dp-finale__outline"
            >
              DJOUDI
            </text>
          </g>
          </g>
        </g>

        {/* Ground line with survey ticks */}
        <line x1="0" y1={GROUND} x2={W} y2={GROUND} className="dp-finale__ground" />
        {Array.from({ length: 25 }, (_, i) => (
          <line key={i} x1={i * 60} y1={GROUND} x2={i * 60} y2={GROUND + (i % 4 === 0 ? 14 : 7)} className="dp-finale__tick" />
        ))}
      </svg>
    </div>
  );
}
