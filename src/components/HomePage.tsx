import {
  aboutText,
  company,
  investText,
  media,
  partnerLabels,
  partnerParagraphs,
  residences,
  showApartment,
  whyText,
} from '../data/site';
import { ContactLines } from './ContactPage';
import { Chapters } from './site/Chapters';
import { gsap, useScene } from './site/cinema';
import { useRef } from 'react';
import { Arrow, Gallery, Img, Media, delay, telHref } from './site/primitives';

interface HomePageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

const features = [
  {
    title: 'Haut standing',
    description: 'Des appartements haut standing conçus avec soin selon des normes internationales.',
  },
  {
    title: 'Durabilité',
    description: 'Un investissement sécurisé et pérenne, une valeur sûre pour construire un patrimoine solide.',
  },
  {
    title: 'Confort',
    description:
      'Climatisation centralisée, isolation thermique et phonique, cuisine équipée et douche italienne.',
  },
  {
    title: 'Sécurité 24/7',
    description: 'Des résidences dans un environnement sécurisé et clôturé.',
  },
];

/** Splits a word into letters for the title entrance; screen readers get the h1's label. */
const letters = (word: string, start: number) =>
  Array.from(word).map((ch, i) => (
    <span key={i} className="dp-ltr" style={delay(start + i * 0.045)}>
      {ch}
    </span>
  ));

/*
 * Opening scene: the Lux drone film behind letterboxing that opens on load.
 * On scroll the camera keeps pushing in while the title and the actions drift
 * away at different speeds and the frame fades to black into the next scene.
 */
function Hero({ onNavigate }: HomePageProps) {
  const ref = useRef<HTMLElement>(null);

  useScene(ref, (el) => {
    const q = gsap.utils.selector(el);
    gsap
      .timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: 0.6 } })
      .to(q('.dp-hero__media'), { scale: 1.2, yPercent: 10 }, 0)
      .to(q('.dp-hero__title'), { yPercent: -45, autoAlpha: 0 }, 0)
      .to(q('.dp-hero__lead'), { yPercent: -25, autoAlpha: 0 }, 0)
      .to(q('.dp-hero__row'), { yPercent: -60, autoAlpha: 0 }, 0)
      .to(q('.dp-hero__index'), { y: -40, autoAlpha: 0 }, 0)
      .to(q('.dp-hero__scene'), { autoAlpha: 0 }, 0)
      .to(q('.dp-hero__fade'), { opacity: 1 }, 0.2);
  });

  return (
    <section className="dp-hero" aria-labelledby="hero-title" ref={ref}>
      <div className="dp-hero__media">
        <video
          src={media.heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>
      <div className="dp-hero__shade" />
      <div className="dp-hero__fade" aria-hidden="true" />
      <div className="dp-hero__bars" aria-hidden="true">
        <i />
        <i />
      </div>

      <div className="dp-container dp-hero__content">
        <span className="dp-eyebrow dp-rise dp-hero__lead" style={delay(0.9)}>
          Promotion immobilière haut standing · Alger
        </span>
        <h1 id="hero-title" className="dp-display dp-hero__title" aria-label="Djoudi Promotion">
          <span className="dp-hero__word" aria-hidden="true">
            {letters('Djoudi', 1)}
          </span>
          <span className="dp-hero__word" aria-hidden="true">
            {letters('Promotion', 1.2)}
          </span>
        </h1>
        <div className="dp-hero__row">
          <p className="dp-hero__tagline dp-rise" style={delay(1.7)}>
            Appartements haut standing. Durabilité, confort et standing inégalés.
            <em>Une expérience de Vie Luxueuse</em>
          </p>
          <div className="dp-hero__ctas dp-rise" style={delay(1.85)}>
            <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('sites')}>
              Découvrir nos résidences
              <Arrow />
            </button>
            <button type="button" className="dp-btn dp-btn--light" onClick={() => onNavigate('contact')}>
              Planifier une visite
            </button>
          </div>
        </div>
        <span className="dp-hero__scroll dp-rise" style={delay(2.1)} aria-hidden="true">
          <i />
          Nos résidences
        </span>
      </div>

      <p className="dp-hero__scene dp-rise" style={delay(2)} aria-hidden="true">
        <span className="dp-num">Scène 01</span> Résidence Lux 1 &amp; 2, Chéraga · vue drone
      </p>

      <nav className="dp-hero__index dp-rise" style={delay(2)} aria-label="Nos résidences">
        <ol className="dp-container">
          {residences.map((site, i) => (
            <li key={site.id}>
              <button type="button" onClick={() => onNavigate('site-detail', site.id)}>
                <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{site.name.replace('Résidence ', '')}</strong>
                <span className="dp-hero__loc">{site.location}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Qui sommes-nous */}
      <section className="dp-section" aria-labelledby="about-title">
        <div className="dp-container dp-about">
          <div className="dp-about__text">
            <span className="dp-eyebrow" data-reveal id="about-title">
              Qui sommes-nous ?
            </span>
            <p className="dp-about__statement dp-mt-m" data-reveal style={delay(0.08)}>
              <strong>Djoudi Promotion</strong> {aboutText}.
            </p>
            <dl className="dp-facts" data-reveal style={delay(0.16)}>
              <div>
                <dt>Résidences</dt>
                <dd>{residences.length} à Alger</dd>
              </div>
              <div>
                <dt>Appartements</dt>
                <dd>F2 à F6</dd>
              </div>
            </dl>
          </div>
          <div className="dp-about__media">
            <Media
              src={media.about}
              alt="Résidence Lux, vue depuis un balcon sur la cour intérieure"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="dp-about__img-main"
            />
            <Media
              src="/images/lux/lux-phase3-courtyard-img158.jpg"
              alt="Résidence Lux, la cour centrale aménagée"
              sizes="25vw"
              className="dp-about__img-sub"
              delay={0.25}
            />
          </div>
        </div>
      </section>

      {/* Nos Projets: four film chapters */}
      <Chapters onNavigate={onNavigate} />

      {/* Pourquoi Djoudi Promotion */}
      <section className="dp-section" aria-labelledby="why-title">
        <div className="dp-container dp-split">
          <div className="dp-split__aside">
            <span className="dp-eyebrow" data-reveal>
              Nos engagements
            </span>
            <h2 id="why-title" className="dp-h2 dp-mt-m" data-reveal style={delay(0.08)}>
              Pourquoi Djoudi Promotion ?
            </h2>
            <p className="dp-body dp-mt-m dp-maxw-prose" data-reveal style={delay(0.16)}>
              Chez <span className="dp-accent">Djoudi Promotion</span>, {whyText}
            </p>
          </div>
          <ol className="dp-split__main dp-list">
            {features.map((feature, index) => (
              <li key={feature.title} className="dp-list__item" data-reveal style={delay(index * 0.06)}>
                <span className="dp-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature.title}</h3>
                <p className="dp-body">{feature.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Appartement témoin */}
      <section className="dp-section dp-section--stone" aria-labelledby="interiors-title">
        <div className="dp-container">
          <div className="dp-head dp-head--split">
            <div>
              <span className="dp-eyebrow" data-reveal>
                Intérieurs
              </span>
              <h2 id="interiors-title" className="dp-h1 dp-head__title" data-reveal style={delay(0.08)}>
                Appartement Témoin
              </h2>
            </div>
            <div data-reveal style={delay(0.16)}>
              <p className="dp-body">
                Des appartements de luxe avec une climatisation centralisée, une isolation thermique et phonique,
                une cuisine équipée et une salle de bain aménagée avec douche italienne.
              </p>
              <button type="button" className="dp-link dp-link--red dp-mt-s" onClick={() => onNavigate('contact')}>
                Planifier une visite
                <Arrow />
              </button>
            </div>
          </div>
          <Gallery images={showApartment} alt="Appartement témoin" className="dp-mosaic" sizes="(min-width: 768px) 40vw, 50vw" />
        </div>
      </section>

      {/* Investir / Partenaire */}
      <section className="dp-section dp-section--ink dp-on-dark" aria-labelledby="invest-title">
        <div className="dp-container">
          <div className="dp-head dp-head--split" style={{ marginBottom: 0 }}>
            <div>
              <span className="dp-eyebrow" data-reveal>
                Investir
              </span>
              <h2 id="invest-title" className="dp-h1 dp-head__title" data-reveal style={delay(0.08)}>
                Investir dans l'immobilier avec <span className="dp-accent">Djoudi Promotion</span>
              </h2>
            </div>
            <p className="dp-lead" data-reveal style={delay(0.16)}>
              {investText}
            </p>
          </div>
        </div>

        <div className="dp-container">
          <div className="dp-media dp-invest__band" data-reveal="image">
            <Img
              src="/images/lux/lux-phase3-completed-dji0187.jpg"
              alt="Résidence Lux 1 & 2 à Chéraga, vue aérienne au coucher du soleil"
              sizes="(min-width: 1360px) 1300px, 100vw"
              position="50% 60%"
              parallax
            />
          </div>
          <p className="dp-caption">Résidence Lux 1 &amp; 2, Chéraga · Livrée</p>
        </div>

        <div className="dp-container">
          <h3 className="dp-h3" style={{ marginTop: 'clamp(56px, 8vw, 112px)' }} data-reveal>
            Votre partenaire immobilier à Alger
          </h3>
          <div className="dp-pillars" style={{ marginTop: 32 }}>
            {partnerParagraphs.map((paragraph, index) => (
              <div key={index} className="dp-pillar" data-reveal style={delay(index * 0.08)}>
                <span className="dp-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{partnerLabels[index]}</h3>
                <p className="dp-body">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="dp-section" aria-labelledby="contact-title">
        <div className="dp-container dp-contact">
          <div className="dp-contact__intro">
            <span className="dp-eyebrow" data-reveal>
              Contact
            </span>
            <h2 id="contact-title" className="dp-h1 dp-mt-m" data-reveal style={delay(0.08)}>
              N'hésitez pas à nous contacter
            </h2>
            <p className="dp-lead dp-mt-m dp-maxw-prose" data-reveal style={delay(0.16)}>
              Que vous souhaitiez obtenir des informations sur nos résidences ou planifier une visite, notre équipe
              est là pour vous.
            </p>
            <div className="dp-contact__ctas" data-reveal style={delay(0.24)}>
              <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('contact')}>
                Nous contacter
                <Arrow />
              </button>
              <a href={telHref(company.phones[0])} className="dp-btn dp-btn--dark">
                Appeler le {company.phones[0]}
              </a>
            </div>
          </div>
          <div className="dp-contact__lines" data-reveal style={delay(0.16)}>
            <ContactLines />
          </div>
        </div>
      </section>
    </div>
  );
}
