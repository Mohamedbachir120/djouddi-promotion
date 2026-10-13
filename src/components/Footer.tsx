import { ArrowUp, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { company, residences } from '../data/site';
import { QuickContactForm } from './site/ContactForm';
import { Arrow, telHref } from './site/primitives';

interface FooterProps {
  onNavigate: (page: string, siteId?: string) => void;
}

function TikTok({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.38-2.48V9.66a5.73 5.73 0 0 0-.79-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.29 1.37V7.29a4.28 4.28 0 0 1-3.24-1.47z" />
    </svg>
  );
}

export const socials = [
  { href: company.socials.facebook, label: 'Facebook', icon: <Facebook size={18} strokeWidth={1.5} /> },
  { href: company.socials.instagram, label: 'Instagram', icon: <Instagram size={18} strokeWidth={1.5} /> },
  { href: company.socials.linkedin, label: 'LinkedIn', icon: <Linkedin size={18} strokeWidth={1.5} /> },
  { href: company.socials.youtube, label: 'YouTube', icon: <Youtube size={18} strokeWidth={1.5} /> },
  { href: company.socials.tiktok, label: 'TikTok', icon: <TikTok /> },
];

export function SocialLinks() {
  return (
    <div className="dp-socials">
      {socials.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="dp-footer dp-on-dark">
      <div className="dp-container">
        <div className="dp-footer__top dp-cta">
          <div>
            <span className="dp-eyebrow">Djoudi Promotion</span>
            <p className="dp-h2" style={{ marginTop: 20, maxWidth: '18ch' }}>
              Bien plus que des appartements de <span className="dp-accent">Luxe.</span>
            </p>
          </div>
          <div className="dp-cta__actions">
            <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('contact')}>
              Planifier une visite
              <Arrow />
            </button>
            <a href={telHref(company.phones[0])} className="dp-btn dp-btn--light">
              {company.phones[0]}
            </a>
          </div>
        </div>

        <div className="dp-footer__grid">
          <div className="dp-footer__brand">
            <button type="button" className="dp-brand" onClick={() => onNavigate('home')} aria-label="Accueil">
              <span className="dp-brand__mark">DP</span>
              <span className="dp-brand__name">Djoudi Promotion</span>
            </button>
            <p className="dp-footer__tagline">Appartements haut standing. Durabilité, confort et standing inégalés.</p>
            <address className="dp-footer__links" style={{ marginTop: 28, fontStyle: 'normal' }}>
              <span style={{ color: 'rgba(255,255,255,.66)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {company.address[0]}
                <br />
                {company.address[1]}
              </span>
              {company.phones.map((phone) => (
                <a key={phone} href={telHref(phone)}>
                  {phone}
                </a>
              ))}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </address>
            <div style={{ marginTop: 28 }}>
              <SocialLinks />
            </div>
          </div>

          <nav aria-label="Nos résidences">
            <h3>Nos Résidences</h3>
            <ul className="dp-footer__links">
              {residences.map((site) => (
                <li key={site.id}>
                  <button type="button" onClick={() => onNavigate('site-detail', site.id)}>
                    {site.name.replace('Résidence ', '')}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Liens">
            <h3>Liens</h3>
            <ul className="dp-footer__links">
              <li>
                <button type="button" onClick={() => onNavigate('home')}>
                  Accueil
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('sites')}>
                  Nos Résidences
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('activities')}>
                  Commodités
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div className="dp-footer__form">
            <h3>Contact rapide</h3>
            <QuickContactForm />
          </div>
        </div>

        <div className="dp-footer__bottom">
          <p>&copy; {new Date().getFullYear()} Djoudi Promotion. Tous droits réservés.</p>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Haut de page
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
