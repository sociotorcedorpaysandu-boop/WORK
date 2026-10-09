import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isHeroDark?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  isHeroDark = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine header appearance
  // When scrolled: light frosted glass bar with backdrop blur and high contrast
  // When not scrolled: subtle transparent glass effect (over dark hero or light hero)
  const isTransparent = !isScrolled;
  const isLightText = isTransparent && isHeroDark;

  const navLinks = [
    { label: 'Empresa', path: '/empresa' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Obras', path: '/obras' },
    { label: 'Contato', path: '/contato' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-[#E6E6E6]/80 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
            : isHeroDark
            ? 'bg-black/25 backdrop-blur-md border-b border-white/10 py-4 sm:py-5'
            : 'bg-white/60 backdrop-blur-md border-b border-[#E6E6E6]/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick('/')}
            className="group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] py-0.5"
            aria-label="Work Construtora - Ir para página inicial"
          >
            <Logo variant={isLightText ? 'light' : 'dark'} size="lg" />
          </button>

          {/* Desktop Nav Links (Alta legibilidade e espaçamento refinado) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-[15px] lg:text-base font-medium tracking-normal transition-colors cursor-pointer relative py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F58220] ${
                    isLightText
                      ? isActive
                        ? 'text-white'
                        : 'text-white/90 hover:text-white drop-shadow-xs'
                      : isActive
                      ? 'text-[#111111]'
                      : 'text-[#111111]/85 hover:text-[#F58220]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F58220]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Fale com a Work */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('/contato')}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 border btn-work-chamfer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] ${
                isLightText
                  ? 'text-white border-white/70 bg-white/10 hover:bg-white hover:text-[#111111] backdrop-blur-xs'
                  : 'text-[#111111] border-[#111111] bg-white/40 hover:bg-[#F58220] hover:border-[#F58220] hover:text-[#111111]'
              }`}
            >
              Fale conosco
              <span className="text-[#F58220] group-hover:text-inherit font-sans">↗</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] ${
                isLightText && !mobileMenuOpen ? 'text-white' : 'text-[#111111]'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[2px] transition-transform duration-200 ${
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-[7px] bg-white'
                      : isLightText
                      ? 'bg-white'
                      : 'bg-[#111111]'
                  }`}
                />
                <span
                  className={`w-full h-[2px] transition-opacity duration-200 ${
                    mobileMenuOpen
                      ? 'opacity-0 bg-white'
                      : isLightText
                      ? 'bg-white'
                      : 'bg-[#111111]'
                  }`}
                />
                <span
                  className={`w-full h-[2px] transition-transform duration-200 ${
                    mobileMenuOpen
                      ? '-rotate-45 -translate-y-[7px] bg-white'
                      : isLightText
                      ? 'bg-white'
                      : 'bg-[#111111]'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111] transition-all duration-300 md:hidden flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-5 mt-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-left py-3 border-b border-[#2A2A2A] text-white text-2xl font-semibold hover:text-[#F58220] transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-[#2A2A2A]">
          <button
            onClick={() => handleNavClick('/contato')}
            className="w-full py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] bg-[#F58220] hover:bg-[#F58220]/90 transition-colors"
          >
            Fale com a Work ↗
          </button>
          <div className="flex justify-between items-center text-xs text-[#E6E6E6]/70 pt-2">
            <span>Belém — Pará</span>
            <span>(91) 99144-7742</span>
          </div>
        </div>
      </div>
    </>
  );
};
