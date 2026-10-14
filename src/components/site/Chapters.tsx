import { useRef, type CSSProperties, type ReactNode } from 'react';
import { residences, type Residence } from '../../data/site';
import { gsap, useScene } from './cinema';
import { Arrow, Img, delay } from './primitives';

/*
 * "Nos Projets" as four film chapters. Each chapter is a full-viewport stage
 * built only from the residence's real photographs and renders, choreographed
 * on scroll (pinned, scrubbed) on large screens. Without the cinematic layer
 * (phones, reduced motion) the same stage reads as a simple photo sequence
 * with captions, followed by the residence's text and links.
 */

type Nav = (page: string, siteId?: string) => void;

const site = (id: string) => residences.find((r) => r.id === id)!;
const pad = (n: number) => String(n).padStart(2, '0');

interface Layer {
  key: string;
  src: string;
  alt: string;
  caption?: string;
  /** object-position of the photo, and the point the camera pushes towards. */
  focus?: string;
  /** Only meaningful as part of the choreography (e.g. a closer crop of the same image). */
  cineOnly?: boolean;
}

interface Fact {
  label: string;
  value: string;
}

interface ChapterProps {
  residence: Residence;
  index: number;
  variant: string;
  layers: Layer[];
  facts: Fact[];
  onNavigate: Nav;
  /** Extra decorative elements placed in the stage (sweep line, aperture…). */
  extras?: ReactNode;
  build: (q: (s: string) => Element[], stage: Element) => void;
}

/** Reveal a group of elements at a point of a scrubbed timeline. */
const reveal = (tl: gsap.core.Timeline, targets: Element[], at: number, stagger = 0.18) =>
  tl.fromTo(
    targets,
    { autoAlpha: 0, y: 28 },
    { autoAlpha: 1, y: 0, duration: 0.32, stagger, ease: 'power2.out' },
    at,
  );

function Chapter({ residence, index, variant, layers, facts, onNavigate, extras, build }: ChapterProps) {
  const ref = useRef<HTMLElement>(null);
  const short = residence.name.replace('Résidence ', '');
  const open = () => onNavigate('site-detail', residence.id);
  const titleId = `chapter-${residence.id}`;

  useScene(ref, (el) => {
    const q = gsap.utils.selector(el) as (s: string) => Element[];
    const stage = q('.dp-ch__stage')[0];
    // Title comes up as the stage arrives, independent of the scrubbed scene.
    gsap.from(q('.dp-ch__title .dp-ch__ln > span'), {
      yPercent: 110,
      duration: 1.4,
      ease: 'expo.out',
      stagger: 0.09,
      scrollTrigger: { trigger: stage, start: 'top 55%' },
    });
    gsap.from(q('.dp-ch__hud > *'), {
      autoAlpha: 0,
      y: 12,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { trigger: stage, start: 'top 55%' },
    });
    build(q, stage);
  });

  return (
    <article
      ref={ref}
      id={`residence-${residence.id}`}
      className={`dp-ch dp-ch--${variant}`}
      aria-labelledby={titleId}
    >
      <div className="dp-ch__stage">
        <div className="dp-ch__cam">
          {layers.map((layer) => (
            <figure
              key={layer.key}
              className={`dp-ch__layer dp-ch__layer--${layer.key}`}
              data-cine-only={layer.cineOnly ? '' : undefined}
              style={layer.focus ? ({ '--focus': layer.focus } as CSSProperties) : undefined}
            >
              <div className="dp-ch__frame" data-reveal="image">
                <Img src={layer.src} alt={layer.alt} sizes="100vw" position={layer.focus} />
              </div>
              {layer.caption && <figcaption className="dp-ch__cap">{layer.caption}</figcaption>}
            </figure>
          ))}
        </div>
        <div className="dp-ch__veil" aria-hidden="true" />
        {extras}

        <div className="dp-ch__hud" aria-hidden="true">
          <span className="dp-num">
            Chapitre {pad(index + 1)} / {pad(residences.length)}
          </span>
          <span>{residence.location}</span>
          <i className="dp-ch__bar">
            <b />
          </i>
        </div>

        <h3 id={titleId} className="dp-ch__title">
          <span className="dp-ch__ln dp-ch__kicker">
            <span>Résidence</span>
          </span>
          <span className="dp-ch__ln">
            <span>{short}</span>
          </span>
        </h3>

        <ul className="dp-ch__facts">
          {facts.map((fact, i) => (
            <li key={fact.label} data-reveal style={delay(i * 0.06)}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="dp-container dp-ch__body">
        <p className="dp-lead dp-ch__summary" data-reveal>
          {residence.summary}
        </p>
        <div className="dp-ch__side" data-reveal style={delay(0.1)}>
          <div className="dp-ch__ctas">
            <button type="button" className="dp-btn dp-btn--primary" onClick={open}>
              Découvrir la résidence
              <Arrow />
            </button>
            <button type="button" className="dp-link" onClick={() => onNavigate('contact', residence.id)}>
              Planifier une visite
              <Arrow />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

const pinned = (stage: Element, length: string) =>
  gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: { trigger: stage, start: 'top top', end: `+=${length}`, pin: true, scrub: 0.8, anticipatePin: 1 },
  });

const surfaces = (r: Residence) => r.typologies.map((t) => ({ label: t.type, value: t.surface ?? '' }));

/* ---------- 01 · Le Versant: day turns to night, then the camera moves in on the lit façade ---------- */

function ChapterVersant({ onNavigate }: { onNavigate: Nav }) {
  const r = site('le-versant');
  return (
    <Chapter
      residence={r}
      index={0}
      variant="versant"
      onNavigate={onNavigate}
      facts={surfaces(r).map((f) => ({ ...f, value: f.value.replace(/\s*m2/g, ' m²').replace(/\s*[-–]\s*/g, ' – ') }))}
      layers={[
        { key: 'day', src: '/images/le-versant/render-jour.jpg', alt: 'Résidence Le Versant, perspective de jour', caption: 'Perspective de jour', focus: '55% 40%' },
        { key: 'night', src: '/images/le-versant/render-nuit.jpg', alt: 'Résidence Le Versant, perspective de nuit', caption: 'Perspective de nuit', focus: '50% 42%' },
      ]}
      extras={<i className="dp-ch__sweep" aria-hidden="true" />}
      build={(q, stage) => {
        const tl = pinned(stage, '220%');
        tl.fromTo(q('.dp-ch__bar b'), { scaleX: 0 }, { scaleX: 1, duration: 3.2 }, 0)
          .fromTo(q('.dp-ch__layer--day img'), { scale: 1.22 }, { scale: 1, duration: 1.3 }, 0)
          .fromTo(
            q('.dp-ch__layer--night'),
            { clipPath: 'inset(0% 0% 0% 100%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power2.inOut' },
            0.9,
          )
          .fromTo(q('.dp-ch__sweep'), { left: '100%', autoAlpha: 1 }, { left: '0%', duration: 1, ease: 'power2.inOut' }, 0.9)
          .to(q('.dp-ch__sweep'), { autoAlpha: 0, duration: 0.1 }, 1.9)
          .fromTo(q('.dp-ch__layer--night img'), { scale: 1.12 }, { scale: 1, duration: 1.2 }, 0.9)
          .to(q('.dp-ch__layer--day .dp-ch__cap'), { autoAlpha: 0, duration: 0.2 }, 0.9);
        reveal(tl, q('.dp-ch__layer--night .dp-ch__cap'), 1.7);
        // Close-up: push in on the lit balconies while the surfaces are read out.
        tl.to(q('.dp-ch__layer--night img'), { scale: 1.6, duration: 1.2, ease: 'power2.inOut' }, 2.0).to(
          q('.dp-ch__veil'),
          { opacity: 0.55, duration: 1 },
          2.1,
        );
        reveal(tl, q('.dp-ch__facts li'), 2.3);
      }}
    />
  );
}

/* ---------- 02 · Lux 1 & 2 (signature): from the city panorama to the façade ---------- */

function ChapterLux({ onNavigate }: { onNavigate: Nav }) {
  const r = site('lux');
  return (
    <Chapter
      residence={r}
      index={1}
      variant="lux"
      onNavigate={onNavigate}
      facts={[
        { label: 'Commune', value: 'Chéraga, Alger' },
        { label: 'Hauteur', value: 'RDC + 11 étages' },
        { label: 'Programme', value: '156 logements, F3 à F5' },
        { label: 'Statut', value: 'Livrée' },
      ]}
      layers={[
        { key: 'city', src: '/images/lux/lux-phase2-panorama-bibron11.jpg', alt: 'La Résidence Lux dans son quartier de Chéraga, vue panoramique', caption: 'Chéraga, vue panoramique', focus: '49% 62%' },
        { key: 'aerial', src: '/images/lux/lux-phase3-completed-dji0187.jpg', alt: 'Résidence Lux 1 & 2, vue aérienne au coucher du soleil', caption: 'Les deux tours livrées', focus: '52% 58%' },
        { key: 'facade', src: '/images/lux/lux-phase3-courtyard-img158.jpg', alt: 'Résidence Lux, façade et balcons au-dessus de la cour aménagée', caption: 'Façade et cour aménagée', focus: '50% 40%' },
      ]}
      build={(q, stage) => {
        const tl = pinned(stage, '380%');
        const facts = q('.dp-ch__facts li');
        tl.fromTo(q('.dp-ch__bar b'), { scaleX: 0 }, { scaleX: 1, duration: 4.2 }, 0)
          // Shot 1: the camera flies from the panorama towards the building.
          .fromTo(q('.dp-ch__layer--city img'), { scale: 1 }, { scale: 2.6, duration: 1.5, ease: 'power2.in' }, 0)
          // Shot 2: dissolve into the aerial view of the delivered towers, still moving in.
          .fromTo(q('.dp-ch__layer--aerial'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, ease: 'power1.inOut' }, 1.1)
          .fromTo(q('.dp-ch__layer--aerial img'), { scale: 1.25 }, { scale: 1.55, duration: 1.8 }, 1.1)
          .to(q('.dp-ch__layer--city .dp-ch__cap'), { autoAlpha: 0, duration: 0.2 }, 1.1);
        reveal(tl, [facts[0]], 0.25);
        reveal(tl, q('.dp-ch__layer--aerial .dp-ch__cap'), 1.5);
        reveal(tl, [facts[1]], 1.6);
        reveal(tl, [facts[2]], 2.1);
        // Shot 3: the façade close-up opens as a tall panel, the aerial falls back.
        tl.to(q('.dp-ch__veil'), { opacity: 0.6, duration: 0.7 }, 2.6)
          .to(q('.dp-ch__layer--aerial .dp-ch__cap'), { autoAlpha: 0, duration: 0.2 }, 2.6)
          .fromTo(
            q('.dp-ch__layer--facade'),
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power3.inOut' },
            2.6,
          )
          .fromTo(q('.dp-ch__layer--facade img'), { scale: 1.45, yPercent: 6 }, { scale: 1.02, yPercent: 0, duration: 1.6 }, 2.6);
        reveal(tl, q('.dp-ch__layer--facade .dp-ch__cap'), 3.2);
        reveal(tl, [facts[3]], 3.3);
      }}
    />
  );
}

/* ---------- 03 · La Baie d'Alger: the show apartment's door opens ---------- */

function ChapterBaie({ onNavigate }: { onNavigate: Nav }) {
  const r = site('la-baie-dalger');
  return (
    <Chapter
      residence={r}
      index={2}
      variant="baie"
      onNavigate={onNavigate}
      facts={[
        { label: 'Commune', value: 'Beb Ezzouar, Alger' },
        { label: 'Programme', value: '147 appartements' },
        { label: 'Typologies', value: 'F2 à F6' },
        { label: 'Visite', value: 'Appartement témoin' },
      ]}
      layers={[
        { key: 'hall', src: '/images/appartement-temoin/dsc04913-living-dining.jpg', alt: 'Appartement témoin, séjour et salle à manger', caption: 'Appartement témoin · Séjour', focus: '30% 50%' },
        { key: 'salon', src: '/images/appartement-temoin/dsc04955-living-closeup.jpg', alt: 'Appartement témoin, coin salon', caption: 'Appartement témoin · Salon', focus: '50% 55%' },
      ]}
      extras={<i className="dp-ch__aperture" aria-hidden="true" />}
      build={(q, stage) => {
        const tl = pinned(stage, '200%');
        const door = { clipPath: 'inset(9% 45% 9% 45%)' };
        tl.fromTo(q('.dp-ch__bar b'), { scaleX: 0 }, { scaleX: 1, duration: 3 }, 0)
          .fromTo(q('.dp-ch__layer--hall'), door, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power2.inOut' }, 0)
          .fromTo(
            q('.dp-ch__aperture'),
            { top: '9%', bottom: '9%', left: '45%', right: '45%', autoAlpha: 1 },
            { top: '0%', bottom: '0%', left: '0%', right: '0%', duration: 1.1, ease: 'power2.inOut' },
            0,
          )
          .to(q('.dp-ch__aperture'), { autoAlpha: 0, duration: 0.15 }, 1.1)
          // Walk in, towards the window at the end of the room.
          .fromTo(q('.dp-ch__layer--hall img'), { scale: 1.35 }, { scale: 1.5, duration: 2.2, ease: 'power1.inOut' }, 0)
          .fromTo(q('.dp-ch__layer--salon'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5, ease: 'power1.inOut' }, 2)
          .fromTo(q('.dp-ch__layer--salon img'), { scale: 1.15 }, { scale: 1, duration: 1 }, 2)
          .to(q('.dp-ch__layer--hall .dp-ch__cap'), { autoAlpha: 0, duration: 0.2 }, 2)
          .to(q('.dp-ch__veil'), { opacity: 0.35, duration: 0.8 }, 1.2);
        reveal(tl, q('.dp-ch__layer--hall .dp-ch__cap'), 0.8);
        reveal(tl, q('.dp-ch__facts li').slice(0, 2), 0.9);
        reveal(tl, q('.dp-ch__facts li').slice(2), 2.2);
        reveal(tl, q('.dp-ch__layer--salon .dp-ch__cap'), 2.4);
      }}
    />
  );
}

/* ---------- 04 · Colina del Viento: the building rises, then the curved balconies ---------- */

function ChapterColina({ onNavigate }: { onNavigate: Nav }) {
  const r = site('colina-del-viento');
  return (
    <Chapter
      residence={r}
      index={3}
      variant="colina"
      onNavigate={onNavigate}
      facts={surfaces(r).map((f) => ({ ...f, value: f.value.replace(/\s*m2/g, ' m²').replace(/\s*[-–]\s*/g, ' · ') }))}
      layers={[
        { key: 'render', src: '/images/colina-del-viento/render.jpg', alt: 'Résidence Colina del Viento à Draria, perspective', caption: 'Perspective de la résidence', focus: '45% 30%' },
      ]}
      extras={<i className="dp-ch__ground" aria-hidden="true" />}
      build={(q, stage) => {
        const tl = pinned(stage, '200%');
        tl.fromTo(q('.dp-ch__bar b'), { scaleX: 0 }, { scaleX: 1, duration: 3 }, 0)
          .fromTo(q('.dp-ch__ground'), { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 0)
          .fromTo(
            q('.dp-ch__layer--render'),
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.1, ease: 'power3.out' },
            0.2,
          )
          .fromTo(q('.dp-ch__layer--render img'), { yPercent: 16, scale: 1.08 }, { yPercent: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, 0.2)
          .to(q('.dp-ch__ground'), { autoAlpha: 0, duration: 0.3 }, 1.3)
          // Close-up on the curved balconies of the upper floors.
          .to(q('.dp-ch__layer--render img'), { scale: 1.5, duration: 1.4, ease: 'power2.inOut' }, 1.5)
          .to(q('.dp-ch__veil'), { opacity: 0.5, duration: 1 }, 1.7);
        reveal(tl, q('.dp-ch__layer--render .dp-ch__cap'), 0.9);
        reveal(tl, q('.dp-ch__facts li'), 2);
      }}
    />
  );
}

export function Chapters({ onNavigate }: { onNavigate: Nav }) {
  return (
    <section className="dp-chapters dp-on-dark" aria-labelledby="projects-title">
      <div className="dp-container dp-chapters__intro">
        <span className="dp-eyebrow" data-reveal>
          Nos Projets
        </span>
        <h2 id="projects-title" className="dp-h1 dp-head__title" data-reveal style={delay(0.08)}>
          Quatre résidences, quatre chapitres
        </h2>
        <p className="dp-lead" data-reveal style={delay(0.16)}>
          Découvrez nos résidences haut standing à Dely Brahim, Chéraga, Beb Ezzouar et Draria.
        </p>
      </div>

      <ChapterVersant onNavigate={onNavigate} />
      <ChapterLux onNavigate={onNavigate} />
      <ChapterBaie onNavigate={onNavigate} />
      <ChapterColina onNavigate={onNavigate} />

      <div className="dp-container dp-chapters__end" data-reveal>
        <button type="button" className="dp-btn dp-btn--light" onClick={() => onNavigate('sites')}>
          Voir toutes nos résidences
          <Arrow />
        </button>
      </div>
    </section>
  );
}
