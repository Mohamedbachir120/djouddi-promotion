import { useEffect, useRef } from 'react';
import { gsap, useScene } from './cinema';

/*
 * The footer's closing image: the logo's two red roofs drawn at monumental
 * scale above a DJOUDI wordmark built as a row of towers, floors and windows
 * included, standing on a ground line. On scroll-in the towers rise out of the
 * ground and the roofs are drawn; on desktop the two layers shift slightly
 * with the pointer for depth. Purely decorative, so hidden from assistive tech.
 *
 * In the cinematic layer this is the film's last scene and it follows the
 * scroll instead: the skyline and the towers rise at different speeds, the
 * roofs are drawn, the sky warms and the windows switch on one by one.
 */

const W = 1440;
const H = 640;
const GROUND = 580;
const CAP_TOP = 282;

// Background skyline: plain slabs with floor lines, a depth layer behind the wordmark.
const skyline = [
  { x: 60, w: 120, top: 330 },
  { x: 200, w: 70, top: 300 },
  { x: 300, w: 150, top: 352 },
  { x: 480, w: 90, top: 316 },
  { x: 600, w: 130, top: 290 },
  { x: 760, w: 80, top: 338 },
  { x: 870, w: 140, top: 306 },
  { x: 1040, w: 100, top: 270 },
  { x: 1170, w: 120, top: 324 },
  { x: 1310, w: 90, top: 296 },
];

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

  useScene(ref, (el) => {
    const q = gsap.utils.selector(el);
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom bottom', scrub: 0.8, refreshPriority: -1 },
    });
    tl.fromTo(q('.dp-finale__skyline'), { y: 140 }, { y: 0, duration: 1 }, 0)
      .fromTo(q('.dp-finale__rise'), { y: 330 }, { y: 0, duration: 1, ease: 'power2.out' }, 0)
      .fromTo(q('.dp-finale__construct'), { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.2)
      .fromTo(q('.dp-finale__roof'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.6, stagger: 0.12, ease: 'power1.inOut' }, 0.35)
      .fromTo(q('.dp-finale__glow'), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.4)
      .fromTo(
        q('.dp-finale__lit'),
        { opacity: 0 },
        { opacity: 0.55, duration: 0.05, stagger: { each: 0.5 / litWindows.length, from: 'random' } },
        0.5,
      );
  });

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
          <radialGradient id="dp-dusk" cx="50%" cy="100%" r="70%">
            <stop offset="0" stopColor="#f04230" stopOpacity="0.16" />
            <stop offset="0.45" stopColor="#f3e2c4" stopOpacity="0.05" />
            <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
          </radialGradient>
          <clipPath id="dp-above-ground">
            <rect x="0" y="0" width={W} height={GROUND} />
          </clipPath>
        </defs>

        {/* Dusk light low on the horizon */}
        <rect x="0" y="0" width={W} height={GROUND} fill="url(#dp-dusk)" className="dp-finale__glow" />

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

        {/* Wordmark towers rising from the ground, in front of a quiet skyline */}
        <g clipPath="url(#dp-above-ground)">
          <g className="dp-finale__skyline">
            {skyline.map((b) => (
              <g key={b.x}>
                <rect x={b.x} y={b.top} width={b.w} height={GROUND - b.top} />
                {Array.from({ length: Math.floor((GROUND - b.top) / 24) }, (_, i) => (
                  <line key={i} x1={b.x} x2={b.x + b.w} y1={b.top + 24 * (i + 1)} y2={b.top + 24 * (i + 1)} />
                ))}
              </g>
            ))}
          </g>
          <g className="dp-finale__rise">
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
