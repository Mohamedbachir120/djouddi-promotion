import { ArrowUp, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { company, residences } from '../data/site';
import { QuickContactForm } from './site/ContactForm';
import { FooterFinale } from './site/FooterFinale';
import { Arrow, delay, telHref } from './site/primitives';

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

const communes = residences.map((r) => r.location.split(',')[0]).join(' · ');

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="dp-footer dp-on-dark">
      <div className="dp-container dp-fstage">
        {/* Statement and primary actions */}
        <div className="dp-fstage__lead">
          <button type="button" className="dp-brand" onClick={() => onNavigate('home')} aria-label="Djoudi Promotion – Accueil">
            <img src="/images/brand/logo-djoudi-light.png" alt="" className="dp-fstage__logo" width={300} height={176} loading="lazy" />
          </button>
          <p className="dp-fstage__statement" data-reveal>
            Bien plus que des appartements de <span className="dp-accent">Luxe.</span>
          </p>
          <div className="dp-cta__actions" data-reveal style={delay(0.08)}>
            <button type="button" className="dp-btn dp-btn--primary" onClick={() => onNavigate('contact')}>
              Planifier une visite
              <Arrow />
            </button>
          </div>
        </div>

        {/* Direct contact, set large: it is what most visitors come down here for */}
        <address className="dp-fstage__contact" data-reveal style={delay(0.12)}>
          <span className="dp-flabel">Téléphone</span>
          <div className="dp-fstage__phones">
            {company.phones.map((phone) => (
              <a key={phone} href={telHref(phone)}>
                {phone}
              </a>
            ))}
          </div>
          <span className="dp-flabel">Email</span>
          <a className="dp-fstage__email" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <span className="dp-flabel">Siège</span>
          <p className="dp-fstage__address">
            {company.address[0]}
            <br />
            {company.address[1]}
          </p>
        </address>

        <nav className="dp-fstage__res" aria-label="Nos résidences">
          <span className="dp-flabel">Nos Résidences</span>
          <ul>
            {residences.map((site, i) => (
              <li key={site.id}>
                <button type="button" onClick={() => onNavigate('site-detail', site.id)}>
                  <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="dp-fstage__resname">{site.name.replace('Résidence ', '')}</span>
                  <span className="dp-fstage__resloc">{site.location.split(',')[0]}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="dp-fstage__links" aria-label="Liens">
          <span className="dp-flabel">Liens</span>
          <ul>
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
          <div className="dp-fstage__social">
            <SocialLinks />
          </div>
        </nav>

        <div className="dp-fstage__form">
          <span className="dp-flabel">Contact rapide</span>
          <QuickContactForm />
        </div>
      </div>

      <FooterFinale />

      {/* Title block, as on an architectural drawing */}
      <div className="dp-ftitle">
        <div className="dp-container dp-ftitle__grid">
          <div>
            <span className="dp-flabel">Promoteur</span>
            <p>&copy; {new Date().getFullYear()} Djoudi Promotion. Tous droits réservés.</p>
          </div>
          <div>
            <span className="dp-flabel">Siège</span>
            <p>Dely Brahim, Alger</p>
          </div>
          <div>
            <span className="dp-flabel">Résidences</span>
            <p>{communes}</p>
          </div>
          <div>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Haut de page
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
