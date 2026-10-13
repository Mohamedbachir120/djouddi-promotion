import { aboutText, company, contactIntro, media, partnerLabels, partnerParagraphs, residences } from '../data/site';
import { SocialLinks } from './Footer';
import { ContactForm } from './site/ContactForm';
import { Arrow, Media, delay, telHref } from './site/primitives';

interface ContactPageProps {
  residenceId?: string;
  onNavigate: (page: string, siteId?: string) => void;
}

/** Phones, email and address as a labelled list; shared by the home page. */
export function ContactLines({ withNote = false }: { withNote?: boolean }) {
  return (
    <dl className="dp-lines">
      <div>
        <dt>Téléphone</dt>
        <dd>
          {company.phones.map((phone) => (
            <a key={phone} href={telHref(phone)}>
              {phone}
            </a>
          ))}
        </dd>
      </div>
      <div>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </dd>
      </div>
      <div>
        <dt>Siège</dt>
        <dd>
          <span>
            {company.address[0]}
            <br />
            {company.address[1]}
          </span>
          {withNote && <small>{company.addressNote}</small>}
        </dd>
      </div>
    </dl>
  );
}

export function ContactPage({ residenceId = '', onNavigate }: ContactPageProps) {
  const site = residences.find((r) => r.id === residenceId);

  return (
    <div>
      <section className="dp-page-hero dp-on-dark">
        <div className="dp-container">
          <span className="dp-eyebrow dp-rise" style={delay(0.1)}>
            Contact
          </span>
          <h1 className="dp-h1 dp-page-hero__title">
            <span className="dp-mask">
              <span style={delay(0.2)}>N'hésitez pas à nous contacter</span>
            </span>
          </h1>
          <p className="dp-lead dp-page-hero__lead dp-rise" style={delay(0.45)}>
            Chez Djoudi Promotion, {contactIntro}
          </p>
        </div>
      </section>

      <section className="dp-section" aria-labelledby="form-title">
        <div className="dp-container dp-contact-page">
          <div className="dp-contact-page__form">
            <span className="dp-eyebrow" data-reveal>
              {site ? site.name : 'Contactez-nous'}
            </span>
            <h2 id="form-title" className="dp-h2 dp-mt-m" data-reveal style={delay(0.08)}>
              Envoyez-nous un message
            </h2>
            <p className="dp-body dp-mt-s" data-reveal style={delay(0.12)}>
              Notre équipe est là pour vous renseigner sur nos résidences ou planifier une visite.
            </p>
            <div className="dp-mt-l" data-reveal style={delay(0.16)}>
              <ContactForm key={residenceId} residenceId={residenceId} />
            </div>
          </div>

          <aside className="dp-contact-page__info" data-reveal style={delay(0.2)}>
            <h2 className="dp-h3" style={{ marginBottom: 24 }}>
              Nos coordonnées
            </h2>
            <ContactLines withNote />
            <div className="dp-mt-m">
              <SocialLinks />
            </div>
          </aside>
        </div>

        <div className="dp-container" style={{ marginTop: 'clamp(72px, 9vw, 128px)' }}>
          <div className="dp-block__head">
            <h2 className="dp-h3">Notre localisation</h2>
            <span className="dp-body">Dely Brahim, Alger</span>
          </div>
          <div className="dp-map" data-reveal>
            <iframe title="Djoudi Promotion - Dely Brahim" src={company.mapEmbedUrl} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="dp-section dp-section--stone" aria-labelledby="who-title">
        <div className="dp-container dp-about">
          <div className="dp-about__text">
            <span className="dp-eyebrow" data-reveal id="who-title">
              Qui sommes-nous ?
            </span>
            <p className="dp-about__statement dp-mt-m" data-reveal style={delay(0.08)}>
              <strong>Djoudi Promotion</strong> {aboutText}.
            </p>
          </div>
          <div className="dp-about__media" style={{ paddingBottom: 0 }}>
            <Media
              src={media.headquarters}
              alt="Entrée du siège de Djoudi Promotion"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="dp-about__img-main"
            />
            <p className="dp-caption">Le siège, au sein de la Résidence Le Versant</p>
          </div>
        </div>

        <div className="dp-container">
          <h2 className="dp-h3" style={{ marginTop: 'clamp(72px, 9vw, 128px)' }} data-reveal>
            Votre partenaire immobilier à Alger
          </h2>
          <div className="dp-pillars dp-pillars--light" style={{ marginTop: 32 }}>
            {partnerParagraphs.map((paragraph, index) => (
              <div key={partnerLabels[index]} className="dp-pillar" data-reveal style={delay(index * 0.08)}>
                <span className="dp-num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{partnerLabels[index]}</h3>
                <p className="dp-body">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dp-section" style={{ paddingBlock: 'clamp(72px, 9vw, 128px)' }}>
        <div className="dp-container dp-cta">
          <div>
            <h2 className="dp-h2" data-reveal>
              Prêt à découvrir nos projets ?
            </h2>
            <p className="dp-lead dp-mt-s" data-reveal style={delay(0.08)}>
              Le Versant, Lux 1 &amp; 2, La Baie d'Alger et Colina del Viento
            </p>
          </div>
          <div className="dp-cta__actions" data-reveal style={delay(0.16)}>
            <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('sites')}>
              Découvrir nos résidences
              <Arrow />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
