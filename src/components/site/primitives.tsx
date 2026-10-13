import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '../../data/site';

/** Thin arrow used in buttons and links; nudges right on hover via CSS. */
export function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg className="dp-arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/** Every photo in /images ships with an 800px-wide "-w800" variant for small screens. */
const srcSetFor = (src: string) =>
  src.startsWith('/images/') && src.endsWith('.jpg')
    ? `${src.replace(/\.jpg$/, '-w800.jpg')} 800w, ${src} 1600w`
    : undefined;

interface ImgProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  position?: string;
  className?: string;
  parallax?: boolean;
}

export function Img({ src, alt, sizes = '100vw', priority, position, className, parallax }: ImgProps) {
  return (
    <img
      src={src}
      srcSet={srcSetFor(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      // React 18 warns on camelCase fetchPriority; the lowercase attribute passes through.
      {...(priority ? { fetchpriority: 'high' } : {})}
      className={className}
      data-parallax={parallax ? '' : undefined}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}

/** Image in a fixed-ratio frame, with an optional curtain reveal on scroll. */
export function Media({
  src,
  alt,
  sizes,
  priority,
  position,
  reveal = true,
  hover = false,
  delay,
  className = '',
  children,
}: ImgProps & { reveal?: boolean; hover?: boolean; delay?: number; children?: ReactNode }) {
  return (
    <div
      className={`dp-media ${hover ? 'dp-media--hover' : ''} ${className}`}
      data-reveal={reveal ? 'image' : undefined}
      style={delay ? ({ '--d': `${delay}s` } as CSSProperties) : undefined}
    >
      <Img src={src} alt={alt} sizes={sizes} priority={priority} position={position} />
      {children}
    </div>
  );
}

export const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Observes every [data-reveal] element under the document and adds `.is-in`
 * once it enters the viewport. Re-scans whenever `key` changes (page change).
 */
export function useReveal(key: string) {
  useEffect(() => {
    const root = document.documentElement;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      root.classList.remove('dp-motion');
      return;
    }
    root.classList.add('dp-motion');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [key]);
}

/** Gentle vertical drift on [data-parallax] images, desktop only, no motion when reduced. */
export function useParallax(key: string) {
  useEffect(() => {
    if (prefersReducedMotion() || window.matchMedia('(max-width: 767px)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    if (!els.length) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const el of els) {
        const frame = el.parentElement;
        if (!frame) continue;
        const r = frame.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const progress = (r.top + r.height / 2 - vh / 2) / (vh + r.height);
        el.style.transform = `translate3d(0, ${(progress * -12).toFixed(2)}%, 0) scale(1.18)`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key]);
}

/** Clickable photo grid that opens a full-screen viewer. */
export function Gallery({
  images,
  alt,
  className = 'dp-gallery',
  sizes = '(min-width: 768px) 33vw, 50vw',
}: {
  images: GalleryImage[];
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className={className}>
        {images.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            className="dp-tile"
            onClick={() => setIndex(i)}
            aria-label={`Agrandir : ${image.caption}`}
          >
            <Media
              src={image.src}
              alt={`${alt} – ${image.caption}`}
              sizes={i === 0 ? '(min-width: 768px) 66vw, 100vw' : sizes}
              hover
              delay={Math.min(i, 3) * 0.08}
            />
            <span className="dp-tile__cap">{image.caption}</span>
          </button>
        ))}
      </div>
      <Lightbox images={images} alt={alt} index={index} onChange={setIndex} />
    </>
  );
}

function Lightbox({
  images,
  alt,
  index,
  onChange,
}: {
  images: GalleryImage[];
  alt: string;
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const step = useCallback(
    (dir: number) => {
      if (index === null) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, step]);

  const image = index !== null ? images[index] : null;

  return (
    <dialog
      ref={ref}
      className="dp-lightbox"
      aria-label={alt}
      onClose={() => onChange(null)}
      onClick={(e) => {
        if (e.target === e.currentTarget) onChange(null);
      }}
    >
      {image && (
        <>
          <div className="dp-lightbox__top">
            <span>
              {index! + 1} / {images.length}
            </span>
            <button type="button" className="dp-icon-btn" onClick={() => onChange(null)} aria-label="Fermer">
              <X size={20} />
            </button>
          </div>
          <div className="dp-lightbox__stage" onClick={(e) => e.target === e.currentTarget && onChange(null)}>
            <img src={image.src} alt={`${alt} – ${image.caption}`} />
          </div>
          <div className="dp-lightbox__bottom">
            <span>{image.caption}</span>
            {images.length > 1 && (
              <div className="dp-lightbox__nav">
                <button type="button" className="dp-icon-btn" onClick={() => step(-1)} aria-label="Photo précédente">
                  <ChevronLeft size={20} />
                </button>
                <button type="button" className="dp-icon-btn" onClick={() => step(1)} aria-label="Photo suivante">
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </dialog>
  );
}

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
