import { company, residences } from '../data/site';
import { ResidenceRow } from './site/ResidenceRow';
import { Arrow, delay, telHref } from './site/primitives';

interface SitesPageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

export function SitesPage({ onNavigate }: SitesPageProps) {
  return (
    <div>
      <section className="dp-page-hero dp-on-dark">
        <div className="dp-container">
          <span className="dp-eyebrow dp-rise" style={delay(0.1)}>
            Nos Projets
          </span>
          <h1 className="dp-display dp-page-hero__title">
            <span className="dp-mask">
              <span style={delay(0.2)}>Nos Résidences</span>
            </span>
          </h1>
          <p className="dp-lead dp-page-hero__lead dp-rise" style={delay(0.45)}>
            Des appartements haut standing à Dely Brahim, Chéraga, Beb Ezzouar et Draria
          </p>

          <nav className="dp-page-hero__index dp-rise" style={delay(0.6)} aria-label="Accès direct">
            {residences.map((site, i) => (
              <a
                key={site.id}
                href={`#/residences/${site.id}`}
                onClick={(e) => {
                  // Jump to the spread on this page; the href stays a real link to the residence.
                  e.preventDefault();
                  document.getElementById(`residence-${site.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                <strong>{site.name.replace('Résidence ', '')}</strong>
                <span className="dp-loc">{site.location}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="dp-section dp-section--stone" aria-label="Nos résidences">
        <div className="dp-container dp-residences">
          {residences.map((site, index) => (
            <ResidenceRow key={site.id} site={site} index={index} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      <section className="dp-section" style={{ paddingBlock: 'clamp(72px, 9vw, 128px)' }}>
        <div className="dp-container dp-cta">
          <div>
            <h2 className="dp-h2" data-reveal>
              Vous avez des questions ?
            </h2>
            <p className="dp-lead dp-mt-s dp-maxw-prose" data-reveal style={delay(0.08)}>
              Notre équipe est là pour vous renseigner sur nos résidences ou planifier une visite
            </p>
          </div>
          <div className="dp-cta__actions" data-reveal style={delay(0.16)}>
            <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('contact')}>
              Contactez-nous
              <Arrow />
            </button>
            <a href={telHref(company.phones[0])} className="dp-btn dp-btn--dark">
              {company.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
