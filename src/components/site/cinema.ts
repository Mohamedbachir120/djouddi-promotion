import { useLayoutEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/*
 * The cinematic layer. Scroll-choreographed scenes only run on large screens
 * with motion allowed; phones and reduced-motion visitors get the plain,
 * stacked version of the same images (the markup's default layout). The
 * `dp-cine` class on <html> switches the CSS between the two.
 */
export const CINE = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

export function watchCinema() {
  const mq = window.matchMedia(CINE);
  const apply = () => document.documentElement.classList.toggle('dp-cine', mq.matches);
  apply();
  mq.addEventListener('change', apply);
}

let refreshTimer = 0;
/** Coalesces refreshes (image loads, new scenes) and keeps triggers in page order. */
export function requestRefresh() {
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => {
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  }, 120);
}

/**
 * Builds a scene's timelines while the cinematic media query matches and
 * reverts them (inline styles included) when it stops matching or unmounts.
 */
export function useScene(ref: RefObject<HTMLElement | null>, build: (el: HTMLElement) => void) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(CINE, () => build(el), el);

    const imgs = Array.from(el.querySelectorAll('img')).filter((img) => !img.complete);
    imgs.forEach((img) => img.addEventListener('load', requestRefresh, { once: true }));
    requestRefresh();

    return () => {
      imgs.forEach((img) => img.removeEventListener('load', requestRefresh));
      mm.revert();
      requestRefresh();
    };
    // Scenes are static: build once per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export { gsap, ScrollTrigger };
