import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SitesPage } from './components/SitesPage';
import { SiteDetailPage } from './components/SiteDetailPage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { ContactPage } from './components/ContactPage';
import { useParallax, useReveal } from './components/site/primitives';
import { requestRefresh } from './components/site/cinema';
import { residences } from './data/site';

/*
 * Pages are still switched in state, but the state is mirrored in the URL hash
 * (#/residences/lux, #/contact, …) so the back button, refresh and shared
 * links land on the right page. Hash URLs need no server rewrite on Vercel.
 */
interface Route {
  page: string;
  siteId: string;
}

const slugs: Record<string, string> = {
  home: '',
  sites: 'residences',
  activities: 'commodites',
  contact: 'contact',
};

const toHash = ({ page, siteId }: Route) => {
  if (page === 'site-detail') return `#/residences/${siteId}`;
  if (page === 'contact' && siteId) return `#/contact/${siteId}`;
  return `#/${slugs[page] ?? ''}`;
};

const fromHash = (hash: string): Route => {
  const [section = '', id = ''] = hash.replace(/^#\/?/, '').split('/');
  const known = residences.some((r) => r.id === id);
  if (section === 'residences' && known) return { page: 'site-detail', siteId: id };
  if (section === 'residences') return { page: 'sites', siteId: '' };
  if (section === 'commodites') return { page: 'activities', siteId: '' };
  if (section === 'contact') return { page: 'contact', siteId: known ? id : '' };
  return { page: 'home', siteId: '' };
};

const titles: Record<string, string> = {
  home: 'Djoudi Promotion – Appartements haut standing à Alger',
  sites: 'Nos Résidences – Djoudi Promotion',
  activities: 'Les Commodités – Djoudi Promotion',
  contact: 'Contact – Djoudi Promotion',
};

function App() {
  const [route, setRoute] = useState<Route>(() => fromHash(window.location.hash));
  const { page: currentPage, siteId: selectedSiteId } = route;

  const handleNavigate = (page: string, siteId?: string) => {
    const next = { page, siteId: siteId ?? (page === 'site-detail' ? selectedSiteId : '') };
    const hash = toHash(next);
    if (hash !== window.location.hash) window.history.pushState(null, '', hash);
    setRoute(next);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    const onPop = () => {
      setRoute(fromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const site = residences.find((r) => r.id === selectedSiteId);
    document.title =
      currentPage === 'site-detail' && site ? `${site.name} – ${site.location} | Djoudi Promotion` : titles[currentPage] ?? titles.home;
  }, [currentPage, selectedSiteId]);

  const pageKey = `${currentPage}:${selectedSiteId}`;
  useReveal(pageKey);
  useParallax(pageKey);
  // Scroll scenes measure the page: re-measure whenever its content changes.
  useEffect(requestRefresh, [pageKey]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'sites':
        return <SitesPage onNavigate={handleNavigate} />;
      case 'site-detail':
        return <SiteDetailPage siteId={selectedSiteId} onNavigate={handleNavigate} />;
      case 'activities':
        return <ActivitiesPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage residenceId={selectedSiteId} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* A plain #anchor would be read as a route, so focus the content directly. */}
      <a
        href="#contenu"
        className="dp-skip"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contenu')?.focus();
        }}
      >
        Aller au contenu
      </a>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main id="contenu" tabIndex={-1} className="flex-grow dp-page" style={{ outline: 'none' }} key={pageKey}>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
