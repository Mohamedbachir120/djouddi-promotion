import { residences, typologyRange, type Residence } from '../../data/site';
import { Arrow, Media, delay } from './primitives';

interface ResidenceRowProps {
  site: Residence;
  index: number;
  onNavigate: (page: string, siteId?: string) => void;
}

/** One residence as an editorial spread: large photograph, restrained text column. */
export function ResidenceRow({ site, index, onNavigate }: ResidenceRowProps) {
  const open = () => onNavigate('site-detail', site.id);
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      id={`residence-${site.id}`}
      className={`dp-res dp-hover-zoom ${flip ? 'dp-res--flip' : ''} ${index % 3 === 0 ? 'dp-res--wide' : ''}`}
    >
      <button type="button" className="dp-res__media" onClick={open} aria-label={`Découvrir la ${site.name}`}>
        <Media
          src={site.cover}
          alt={site.coverNote ? `${site.name} – ${site.coverNote}` : site.name}
          sizes="(min-width: 1024px) 58vw, 100vw"
          position={site.coverFocus}
          className="dp-res__frame"
          hover
        >
          {site.status && <span className="dp-res__tag">{site.status}</span>}
          {site.coverNote && <span className="dp-res__note">{site.coverNote}</span>}
        </Media>
      </button>

      <div className="dp-res__body">
        <div className="dp-res__head" data-reveal>
          <span className="dp-eyebrow">{site.location}</span>
          <span className="dp-num" aria-hidden="true">
            {number} / {String(residences.length).padStart(2, '0')}
          </span>
        </div>
        <h3 className="dp-h2 dp-res__name" data-reveal style={delay(0.06)}>
          {site.name}
        </h3>
        <p className="dp-body dp-res__summary" data-reveal style={delay(0.12)}>
          {site.summary}
        </p>
        <dl className="dp-res__meta" data-reveal style={delay(0.18)}>
          <div>
            <dt>Typologies</dt>
            <dd>{typologyRange(site)}</dd>
          </div>
          <div>
            <dt>{site.units ? 'Logements' : 'Commune'}</dt>
            <dd>{site.units ?? site.location.split(',')[0]}</dd>
          </div>
        </dl>
        <div className="dp-res__cta" data-reveal style={delay(0.24)}>
          <button type="button" className="dp-link dp-link--red" onClick={open}>
            Découvrir la résidence
            <Arrow />
          </button>
        </div>
      </div>
    </article>
  );
}
