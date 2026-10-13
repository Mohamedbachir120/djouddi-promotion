import { Phone } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { company } from '../data/site';
import { telHref } from './site/primitives';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'sites', label: 'Nos Résidences' },
  { id: 'activities', label: 'Commodités' },
  { id: 'contact', label: 'Contact' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Transparent over the opening photograph, solid once the page scrolls;
  // slides away while reading downwards and returns on the way back up.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 480 && y > lastY.current + 4);
      if (Math.abs(y - lastY.current) > 4) lastY.current = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dp-lock', mobileMenuOpen);
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const isCurrent = (id: string) => currentPage === id || (id === 'sites' && currentPage === 'site-detail');
  const go = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`dp-header ${solid || mobileMenuOpen ? 'is-solid' : ''} ${hidden && !mobileMenuOpen ? 'is-hidden' : ''}`}
      >
        <div className="dp-container dp-header__bar">
          <button type="button" onClick={() => go('home')} className="dp-brand" aria-label="Djoudi Promotion – Accueil">
            <img src="/images/brand/logo-djoudi-light.png" alt="" className="dp-brand__logo" width={300} height={176} />
          </button>

          <nav className="dp-nav" aria-label="Navigation principale">
            {menuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="dp-nav__link"
                aria-current={isCurrent(item.id) ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="dp-header__actions">
            <a href={telHref(company.phones[0])} className="dp-header__phone">
              <Phone size={16} strokeWidth={1.5} />
              {company.phones[0]}
            </a>
            <button type="button" className="dp-btn dp-btn--primary dp-btn--sm" onClick={() => go('contact')}>
              Planifier une visite
            </button>
          </div>

          <button
            type="button"
            className="dp-burger"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="dp-menu"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="dp-burger__lines" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id="dp-menu" className={`dp-menu ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <nav className="dp-menu__list" aria-label="Menu">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className="dp-menu__link"
              style={{ '--i': i } as CSSProperties}
              onClick={() => go(item.id)}
              aria-current={isCurrent(item.id) ? 'page' : undefined}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              <span className="dp-num">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="dp-menu__foot">
          <button
            type="button"
            className="dp-btn dp-btn--primary dp-btn--block"
            onClick={() => go('contact')}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Planifier une visite
          </button>
          <div style={{ display: 'grid', gap: 10 }}>
            {company.phones.map((phone) => (
              <a key={phone} href={telHref(phone)} tabIndex={mobileMenuOpen ? 0 : -1}>
                {phone}
              </a>
            ))}
            <a href={`mailto:${company.email}`} tabIndex={mobileMenuOpen ? 0 : -1}>
              {company.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
