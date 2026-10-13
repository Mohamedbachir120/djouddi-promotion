import { amenities, residences } from '../data/site';
import { Arrow, Media, delay } from './site/primitives';

interface ActivitiesPageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

const pillars = [
  {
    title: 'Sécurité',
    text: 'Un environnement sécurisé et clôturé, et une gestion intérieure qui maintient le calme et la sérénité',
  },
  {
    title: 'Confort',
    text: 'Climatisation centralisée, isolation thermique et phonique, chauffage central, cuisine équipée',
  },
  {
    title: 'Espaces Familiaux',
    text: 'Des aires de jeux et espaces verts, un cadre idéal pour toute la famille',
  },
];

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  const illustrated = amenities.filter((a) => a.image);
  const others = amenities.filter((a) => !a.image);

  return (
    <div>
      <section className="dp-page-hero dp-on-dark">
        <div className="dp-container">
          <span className="dp-eyebrow dp-rise" style={delay(0.1)}>
            Commodités
          </span>
          <h1 className="dp-display dp-page-hero__title">
            <span className="dp-mask">
              <span style={delay(0.2)}>Les Commodités</span>
            </span>
          </h1>
          <p className="dp-lead dp-page-hero__lead dp-rise" style={delay(0.45)}>
            Des appartements de luxe et des résidences pensées pour vôtre confort, à l'intérieur et autour de vôtre
            maison
          </p>
          <dl className="dp-facts dp-facts--4 dp-rise" style={{ ...delay(0.6), marginTop: 'clamp(48px, 6vw, 80px)' }}>
            <div>
              <dt>Commodités</dt>
              <dd>{amenities.length}</dd>
            </div>
            <div>
              <dt>Résidences</dt>
              <dd>{residences.length}</dd>
            </div>
            <div>
              <dt>Sécurité</dt>
              <dd>24/7</dd>
            </div>
            <div>
              <dt>Typologies</dt>
              <dd>F2 à F6</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="dp-section" aria-label="Commodités en images">
        <div className="dp-container">
          <div className="dp-amen-features">
            {illustrated.map((amenity, i) => (
              <article key={amenity.id} className="dp-amen-feature">
                <Media src={amenity.image!} alt={amenity.name} sizes="(min-width: 768px) 50vw, 100vw" />
                <div data-reveal>
                  <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="dp-h3 dp-mt-s">{amenity.name}</h2>
                  <p className="dp-body dp-mt-s dp-maxw-prose">{amenity.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section dp-section--stone" aria-labelledby="also-title">
        <div className="dp-container dp-split">
          <div className="dp-split__aside">
            <span className="dp-eyebrow" data-reveal>
              Au quotidien
            </span>
            <h2 id="also-title" className="dp-h2 dp-mt-m" data-reveal style={delay(0.08)}>
              Et dans chaque résidence
            </h2>
            <p className="dp-body dp-mt-m" data-reveal style={delay(0.16)}>
              Les mêmes commodités sont proposées dans nos {residences.length} résidences :{' '}
              {residences.map((r, i) => (
                <span key={r.id}>
                  <button type="button" className="dp-link dp-link--red" style={{ padding: 0 }} onClick={() => onNavigate('site-detail', r.id)}>
                    {r.name.replace('Résidence ', '')}
                  </button>
                  {i < residences.length - 2 ? ', ' : i === residences.length - 2 ? ' et ' : '.'}
                </span>
              ))}
            </p>
          </div>
          <ul className="dp-split__main dp-amen" style={{ gridTemplateColumns: '1fr' }}>
            {others.map((amenity, i) => (
              <li key={amenity.id} data-reveal style={delay(i * 0.06)}>
                <amenity.icon size={20} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{amenity.name}</h3>
                  <p>{amenity.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dp-section" aria-labelledby="pillars-title">
        <div className="dp-container">
          <div className="dp-head dp-head--split">
            <h2 id="pillars-title" className="dp-h1" data-reveal>
              Bien plus que des appartements de Luxe
            </h2>
            <p className="dp-body" data-reveal style={delay(0.08)}>
              Un cadre de vie alliant haut standing, confort moderne et commodités
            </p>
          </div>
          <div className="dp-pillars dp-pillars--light dp-pillars--3" style={{ marginTop: 0 }}>
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="dp-pillar" data-reveal style={delay(i * 0.08)}>
                <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{pillar.title}</h3>
                <p className="dp-body">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section dp-section--stone" style={{ paddingBlock: 'clamp(72px, 9vw, 128px)' }}>
        <div className="dp-container dp-cta">
          <div>
            <h2 className="dp-h2" data-reveal>
              Découvrez nos résidences
            </h2>
            <p className="dp-lead dp-mt-s dp-maxw-prose" data-reveal style={delay(0.08)}>
              Planifiez une visite pour découvrir nos résidences et notre appartement témoin
            </p>
          </div>
          <div className="dp-cta__actions" data-reveal style={delay(0.16)}>
            <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('sites')}>
              Voir nos résidences
              <Arrow />
            </button>
            <button type="button" className="dp-btn dp-btn--dark" onClick={() => onNavigate('contact')}>
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
