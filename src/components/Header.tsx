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
  // When scrolled: crisp white background with subtle border
  // When not scrolled: transparent (light logo/text if hero is dark, dark logo/text if hero is light)
  const isTransparent = !isScrolled;
  const isLightText = isTransparent && isHeroDark;

  const navLinks = [
    { label: 'Empresa', path: '/empresa', num: '01' },
    { label: 'Serviços', path: '/servicos', num: '02' },
    { label: 'Obras', path: '/obras', num: '03' },
    { label: 'Contato', path: '/contato', num: '04' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E6E6E6] py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Zone (Single element lockup) */}
          <button
            onClick={() => handleNavClick('/')}
            className="group text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220]"
            aria-label="Work Construtora - Ir para página inicial"
          >
            <Logo variant={isLightText ? 'light' : 'dark'} size="md" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm tracking-wide transition-colors cursor-pointer relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F58220] ${
                    isLightText
                      ? isActive
                        ? 'text-white font-medium'
                        : 'text-white/80 hover:text-white'
                      : isActive
                      ? 'text-[#111111] font-medium'
                      : 'text-[#111111]/75 hover:text-[#111111]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F58220]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Fale conosco */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('/contato')}
              className={`text-xs font-semibold uppercase tracking-[0.12em] transition-all cursor-pointer inline-flex items-center gap-1.5 pb-0.5 border-b focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] ${
                isLightText
                  ? 'text-white border-white/60 hover:border-[#F58220] hover:text-[#F58220]'
                  : 'text-[#111111] border-[#111111] hover:border-[#F58220] hover:text-[#F58220]'
              }`}
            >
              Fale conosco
              <span className="text-[#F58220] font-sans">↗</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] ${
                isLightText && !mobileMenuOpen ? 'text-white' : 'text-[#111111]'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-[1.5px] transition-transform duration-200 ${
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-[7px] bg-white'
                      : isLightText
                      ? 'bg-white'
                      : 'bg-[#111111]'
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] transition-opacity duration-200 ${
                    mobileMenuOpen
                      ? 'opacity-0 bg-white'
                      : isLightText
                      ? 'bg-white'
                      : 'bg-[#111111]'
                  }`}
                />
                <span
                  className={`w-full h-[1.5px] transition-transform duration-200 ${
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

      {/* Mobile Fullscreen Menu (Fundo Preto com números em laranja e links brancos) */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111] transition-all duration-300 md:hidden flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6 mt-8">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className="group flex items-baseline gap-4 text-left py-2 border-b border-[#2A2A2A] transition-colors"
            >
              <span className="text-[#F58220] font-sans text-xs tracking-widest font-semibold">
                {link.num}
              </span>
              <span className="text-white text-3xl font-editorial font-light tracking-wide group-hover:text-[#F58220] transition-colors">
                {link.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-[#2A2A2A]">
          <button
            onClick={() => handleNavClick('/contato')}
            className="w-full py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#111111] bg-[#F58220] hover:bg-[#F58220]/90 transition-colors"
          >
            Fale com a Work ↗
          </button>
          <div className="flex justify-between items-center text-[11px] text-[#E6E6E6]/60 pt-2">
            <span>BELÉM — PARÁ</span>
            <span>(91) 99144-7742</span>
          </div>
        </div>
      </div>
    </>
  );
};
