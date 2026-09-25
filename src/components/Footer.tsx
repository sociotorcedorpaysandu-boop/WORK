import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-12 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section with Big CTA */}
        <div className="pb-16 border-b border-[#2A2A2A] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-4">
              CONTATO & PROJETOS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.05] tracking-tight">
              Vamos construir juntos?
            </h2>
          </div>
          <div>
            <button
              onClick={() => handleNav('/contato')}
              className="inline-flex items-center gap-3 px-7 py-4 bg-[#F58220] hover:bg-[#F58220]/90 text-[#111111] font-sans font-semibold text-xs tracking-[0.16em] uppercase transition-colors cursor-pointer group"
            >
              Fale com a Work
              <span className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-[#2A2A2A]">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <button
              onClick={() => handleNav('/')}
              className="cursor-pointer text-left focus-visible:outline-none"
              aria-label="Work Construtora - Início"
            >
              <Logo variant="light" size="lg" />
            </button>
            <p className="mt-6 text-sm text-[#E6E6E6]/70 leading-relaxed max-w-sm">
              Engenharia, gestão e execução de obras e reformas de alto padrão,
              Built to Suit e projetos técnicos em Belém, Pará.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-[#E6E6E6]/50">
              <span className="w-1.5 h-1.5 bg-[#F58220]" />
              <span>Belém — Pará</span>
              <span aria-hidden="true">·</span>
              <span>CNPJ 50.236.096/0001-60</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220] mb-6">
              Navegação
            </h3>
            <ul className="space-y-3.5">
              {[
                { label: 'Empresa', path: '/empresa' },
                { label: 'Serviços', path: '/servicos' },
                { label: 'Obras', path: '/obras' },
                { label: 'Contato', path: '/contato' }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="text-sm text-[#E6E6E6]/80 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220] mb-6">
              Escritório
            </h3>
            <address className="not-italic text-sm text-[#E6E6E6]/80 space-y-2 leading-relaxed">
              <p>Tv. Dom Romualdo de Seixas, 567</p>
              <p>Sala B — Umarizal</p>
              <p>Belém — PA, CEP 66050-110</p>
              <div className="pt-2">
                <a
                  href="tel:5591991447742"
                  className="block hover:text-[#F58220] transition-colors"
                >
                  (91) 99144-7742
                </a>
                <a
                  href="mailto:abdulmassih.tarek@gmail.com"
                  className="block hover:text-[#F58220] transition-colors truncate"
                >
                  abdulmassih.tarek@gmail.com
                </a>
              </div>
            </address>
          </div>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F58220] mb-6">
              Conexões
            </h3>
            <ul className="space-y-3.5 text-sm text-[#E6E6E6]/80">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  Instagram
                  <span className="text-[#F58220] text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  LinkedIn
                  <span className="text-[#F58220] text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5591991447742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  WhatsApp
                  <span className="text-[#F58220] text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6E6E6]/50">
          <div>
            <span>WORK CONSTRUTORA © 2026. Todos os direitos reservados.</span>
          </div>
          <div>
            <span>Desenvolvido por Bredi Tecnologia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
