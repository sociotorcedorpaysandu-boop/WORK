import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Read initial route from window.location.pathname or hash
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) {
      return hash;
    }
    const path = window.location.pathname;
    return path || '/';
  });

  // Sync with browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('/')) {
        setCurrentPath(hash);
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', path);
    } catch {
      // Fallback for sandboxes where pushState could be restricted
      window.location.hash = path;
    }

    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine if active hero is dark
  const isHome = currentPath === '/' || currentPath === '';
  const isProjectDetail = currentPath.startsWith('/obras/') && currentPath !== '/obras';
  const isHeroDark = isHome || isProjectDetail;

  // Route Dispatcher
  const renderRoute = () => {
    if (isHome) {
      return <HomePage onNavigate={navigate} />;
    }
    if (currentPath === '/empresa') {
      return <CompanyPage onNavigate={navigate} />;
    }
    if (currentPath === '/servicos') {
      return <ServicesPage onNavigate={navigate} />;
    }
    if (currentPath === '/obras') {
      return <ProjectsPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/obras/')) {
      const slug = currentPath.replace('/obras/', '').split('/')[0];
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (currentPath === '/contato') {
      return <ContactPage />;
    }

    // Default fallback
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#111111] font-interface selection:bg-[#F58220] selection:text-white">
      {/* Universal Header with Top Bar Contract */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        isHeroDark={isHeroDark}
      />

      {/* Main Content Router */}
      <main className="flex-1 w-full">{renderRoute()}</main>

      {/* Universal Institutional Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
