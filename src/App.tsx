import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SitesPage } from './components/SitesPage';
import { SiteDetailPage } from './components/SiteDetailPage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { ContactPage } from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSiteId, setSelectedSiteId] = useState<string>('');

  const handleNavigate = (page: string, siteId?: string) => {
    setCurrentPage(page);
    if (siteId) {
      setSelectedSiteId(siteId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
