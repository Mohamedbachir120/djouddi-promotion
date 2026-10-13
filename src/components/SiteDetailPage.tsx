import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { amenities, company, residences, showApartment, typologyRange } from '../data/site';
import { Arrow, Gallery, Media, delay, telHref } from './site/primitives';

interface SiteDetailPageProps {
  siteId: string;
  onNavigate: (page: string, siteId?: string) => void;
}

export function SiteDetailPage({ siteId, onNavigate }: SiteDetailPageProps) {
  const site = residences.find((r) => r.id === siteId) ?? residences[0];
  const index = residences.indexOf(site);
  const others = [1, 2, 3].map((k) => residences[(index + k) % residences.length]);
  const [barVisible, setBarVisible] = useState(false);

  // Mobile call/visit bar appears once the visitor has scrolled past the photograph.
  useEffect(() => {
    const onScroll = () => setBarVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const facts = [
    { title: 'Localisation', value: site.location },
    { title: 'Typologies', value: typologyRange(site) },
    { title: 'Logements', value: site.units ?? 'Appartements haut standing' },
    { title: 'Commodités', value: `${amenities.length} équipements` },
  ];
  const [lead, ...rest] = site.description;
  const inquire = () => onNavigate('contact', site.id);

  return (
    <div className="dp-has-bar">
      <section className="dp-detail-hero" aria-labelledby="residence-title">
        <Media
          src={site.cover}
          alt={site.coverNote ? `${site.name} – ${site.coverNote}` : site.name}
          position={site.coverFocus}
          priority
          reveal={false}
        />
        <div className="dp-detail-hero__shade" />
        <div className="dp-container dp-detail-hero__inner">
          <nav className="dp-crumbs dp-rise" style={delay(0.1)} aria-label="Fil d'Ariane">
            <button type="button" onClick={() => onNavigate('home')}>
              Accueil
            </button>
            <span aria-hidden="true">/</span>
            <button type="button" onClick={() => onNavigate('sites')}>
              Nos Résidences
            </button>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: '#fff' }}>
              {site.name.replace('Résidence ', '')}
            </span>
          </nav>
          <span className="dp-eyebrow dp-rise" style={delay(0.2)}>
            {site.location}
            {site.status && <span className="dp-chip">{site.status}</span>}
          </span>
          <h1 id="residence-title" className="dp-display dp-detail-hero__title">
            <span className="dp-mask">
              <span style={delay(0.3)}>{site.name}</span>
            </span>
          </h1>
          {site.coverNote && (
            <p className="dp-caption dp-rise" style={{ ...delay(0.6), color: 'rgba(255,255,255,.7)' }}>
              Photo : {site.coverNote}
            </p>
          )}
        </div>
      </section>

      <div className="dp-keyfacts">
        <div className="dp-container">
          <dl>
            {facts.map((fact) => (
              <div key={fact.title}>
                <dt>{fact.title}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="dp-section" style={{ paddingTop: 'clamp(72px, 9vw, 128px)' }}>
        <div className="dp-container dp-detail">
          <div className="dp-detail__main">
            <span className="dp-eyebrow" data-reveal>
              À propos du projet
            </span>
            <p className="dp-lead dp-mt-m" data-reveal style={delay(0.08)}>
              {lead}
            </p>
            {rest.map((paragraph, i) => (
              <p key={i} className="dp-body" data-reveal style={delay(0.12)}>
                {paragraph}
              </p>
            ))}

            <div className="dp-block">
              <div className="dp-block__head">
                <h2 className="dp-h2" data-reveal>
                  Les Typologies
                </h2>
              </div>
              <table className="dp-typo" data-reveal style={delay(0.08)}>
                <thead>
                  <tr>
                    <th scope="col">Typologie</th>
                    <th scope="col">Superficie</th>
                  </tr>
                </thead>
                <tbody>
                  {site.typologies.map((typology) => (
                    <tr key={typology.type}>
                      <td>{typology.type}</td>
                      <td>{typology.surface ?? 'Nous consulter'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="dp-block">
              <div className="dp-block__head">
                <h2 className="dp-h2" data-reveal>
                  Les Commodités
                </h2>
              </div>
              <ul className="dp-amen">
                {amenities.map((amenity, i) => (
                  <li key={amenity.id} data-reveal style={delay((i % 2) * 0.06)}>
                    <amenity.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <h3>{amenity.name}</h3>
                      <p>{amenity.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="dp-detail__aside" data-reveal style={delay(0.15)}>
            <div className="dp-inquiry">
              <h2>Intéressé par ce projet ?</h2>
              <p>Contactez-nous pour obtenir des informations sur cette résidence ou planifier une visite.</p>
              <div className="dp-inquiry__actions">
                <button type="button" className="dp-btn dp-btn--primary dp-btn--block" onClick={inquire}>
                  Planifier une visite
                  <Arrow />
                </button>
                <a href={`mailto:${company.email}?subject=${encodeURIComponent(site.name)}`} className="dp-btn dp-btn--light dp-btn--block">
                  {company.email}
                </a>
              </div>
              <div className="dp-inquiry__phones">
                {company.phones.map((phone) => (
                  <a key={phone} href={telHref(phone)}>
                    <Phone size={15} strokeWidth={1.5} />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {site.gallery.length > 0 && (
        <section className="dp-section dp-section--stone" aria-labelledby="gallery-title">
          <div className="dp-container">
            <div className="dp-block__head">
              <h2 id="gallery-title" className="dp-h2" data-reveal>
                Galerie photos
              </h2>
              <span className="dp-body">{site.gallery.length} photos</span>
            </div>
            <Gallery
              images={site.gallery}
              alt={site.name}
              className={`dp-gallery ${site.gallery.length < 3 ? 'dp-gallery--even' : ''}`}
            />
          </div>
        </section>
      )}

      {site.chronology && (
        <section className="dp-section" aria-labelledby="chrono-title">
          <div className="dp-container">
            <div className="dp-block__head">
              <h2 id="chrono-title" className="dp-h2" data-reveal>
                Suivi du chantier
              </h2>
              <span className="dp-body">Du gros œuvre à la livraison</span>
            </div>
            <div className="dp-chrono">
              {site.chronology.map((phase, i) => (
                <div key={phase.title} className="dp-chrono__phase">
                  <div className="dp-chrono__label" data-reveal>
                    <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{phase.title}</h3>
                  </div>
                  <Gallery images={phase.images} alt={`${site.name} – ${phase.title}`} className="dp-chrono__row" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {site.showApartment && (
        <section className="dp-section dp-section--stone" aria-labelledby="show-title">
          <div className="dp-container">
            <div className="dp-block__head">
              <h2 id="show-title" className="dp-h2" data-reveal>
                Appartement Témoin
              </h2>
              <button type="button" className="dp-link dp-link--red" onClick={inquire}>
                Planifier une visite
                <Arrow />
              </button>
            </div>
            <Gallery images={showApartment} alt="Appartement témoin" className="dp-mosaic" sizes="(min-width: 768px) 40vw, 50vw" />
          </div>
        </section>
      )}

      <section className="dp-section" aria-labelledby="others-title">
        <div className="dp-container">
          <div className="dp-block__head">
            <h2 id="others-title" className="dp-h2" data-reveal>
              Nos autres résidences
            </h2>
            <button type="button" className="dp-link" onClick={() => onNavigate('sites')}>
              Toutes nos résidences
              <Arrow />
            </button>
          </div>
          <div className="dp-others">
            {others.map((other, i) => (
              <button
                key={other.id}
                type="button"
                className="dp-other dp-hover-zoom"
                onClick={() => onNavigate('site-detail', other.id)}
              >
                <Media
                  src={other.cover}
                  alt={other.coverNote ? `${other.name} – ${other.coverNote}` : other.name}
                  position={other.coverFocus}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  hover
                  delay={i * 0.08}
                />
                <h3>{other.name}</h3>
                <p>{other.location}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={`dp-mobile-bar ${barVisible ? 'is-visible' : ''}`}>
        <a href={telHref(company.phones[0])} className="dp-btn dp-btn--light">
          <Phone size={16} strokeWidth={1.5} />
          Appeler
        </a>
        <button type="button" className="dp-btn dp-btn--primary" onClick={inquire}>
          Planifier une visite
        </button>
      </div>
    </div>
  );
}
