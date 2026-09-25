import React, { useState } from 'react';
import { PROJECTS } from '@/src/data/projects';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<string>('todos');

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'comercial', label: 'Comercial & BTS' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'institucional', label: 'Institucional' }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'todos') return true;
    if (filter === 'comercial') return proj.categoria.toLowerCase().includes('comercial') || proj.categoria.toLowerCase().includes('bts');
    if (filter === 'residencial') return proj.categoria.toLowerCase().includes('residencial');
    if (filter === 'institucional') return proj.categoria.toLowerCase().includes('institucional') || proj.categoria.toLowerCase().includes('educacional');
    return true;
  });

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono text-[#111111]/50 mb-6">
            <span className="text-[#F58220] font-semibold">03</span>
            <span>·</span>
            <span>PORTFÓLIO DE OBRAS</span>
            <span>·</span>
            <span>BELÉM / PA</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-[1.05] tracking-tight max-w-4xl balance">
            O que construímos <br />
            <span className="text-[#F58220] italic">fala por nós.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#111111]/80 font-light max-w-2xl leading-relaxed">
            Conheça as obras residenciais, corporativas, institucionais e Built to Suit
            desenvolvidas pela Work Construtora em Belém e no Pará.
          </p>

          {/* Interactive Filter (Functional Buttons with Zero-Pill Discipline) */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-[#E6E6E6] pb-4">
            {categories.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`text-xs font-sans uppercase tracking-[0.14em] px-4 py-2 transition-all cursor-pointer border-b-2 -mb-[18px] focus-visible:outline-none ${
                    active
                      ? 'border-[#F58220] text-[#111111] font-semibold'
                      : 'border-transparent text-[#111111]/60 hover:text-[#111111]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asymmetric Editorial Portfolio Listing */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto space-y-24">
          {filteredProjects.map((project, index) => {
            // Alternate layout patterns for asymmetric rhythm
            const isWide = index % 3 === 0;
            const isReverse = index % 2 === 1;

            if (isWide) {
              return (
                <div
                  key={project.id}
                  onClick={() => handleNav(`/obras/${project.slug}`)}
                  className="group cursor-pointer pb-20 border-b border-[#E6E6E6]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 overflow-hidden aspect-[16/9] bg-[#F2F2EF]">
                      <img
                        src={project.imagemCapa}
                        alt={project.nome}
                        className="w-full h-full object-cover img-editorial"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-[#111111]/50 mb-3">
                          <span className="text-[#F58220] font-semibold">
                            0{index + 1}
                          </span>
                          <span>·</span>
                          <span>{project.categoria}</span>
                          {project.localizacao && (
                            <>
                              <span>·</span>
                              <span>{project.localizacao}</span>
                            </>
                          )}
                        </div>
                        <h2 className="font-editorial text-4xl text-[#111111] font-normal leading-tight group-hover:text-[#F58220] transition-colors">
                          {project.nome}
                        </h2>
                        <p className="mt-4 text-sm text-[#111111]/75 leading-relaxed">
                          {project.descricao}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#E6E6E6] flex items-center justify-between">
                        <span className="text-xs uppercase tracking-widest font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1.5">
                          Saiba mais
                          <span className="text-[#F58220]">↗</span>
                        </span>
                        <span className="font-mono text-xs text-[#111111]/40">
                          WORK
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                onClick={() => handleNav(`/obras/${project.slug}`)}
                className="group cursor-pointer pb-20 border-b border-[#E6E6E6]"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isReverse ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`lg:col-span-6 overflow-hidden aspect-[4/3] bg-[#F2F2EF] ${
                      isReverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={project.imagemCapa}
                      alt={project.nome}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isReverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[#111111]/50">
                      <span className="text-[#F58220] font-semibold">
                        0{index + 1}
                      </span>
                      <span>·</span>
                      <span>{project.categoria}</span>
                      {project.localizacao && (
                        <>
                          <span>·</span>
                          <span>{project.localizacao}</span>
                        </>
                      )}
                    </div>
                    <h2 className="font-editorial text-4xl sm:text-5xl text-[#111111] font-normal leading-tight group-hover:text-[#F58220] transition-colors">
                      {project.nome}
                    </h2>
                    <p className="text-base text-[#111111]/75 leading-relaxed">
                      {project.descricao}
                    </p>

                    <div className="pt-6 border-t border-[#E6E6E6] flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1.5">
                        Saiba mais
                        <span className="text-[#F58220]">↗</span>
                      </span>
                      {project.acabamento && project.acabamento !== '—' && (
                        <span className="font-mono text-xs text-[#111111]/50">
                          {project.acabamento}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 md:px-12 bg-[#111111] text-white border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-white">
              Seu empreendimento merece esta precisão.
            </h2>
            <p className="text-sm text-[#E6E6E6]/70 mt-2">
              Converse com a Work para estruturar a construção ou reforma do seu imóvel.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="px-8 py-4 bg-[#F58220] text-[#111111] hover:bg-[#F58220]/90 text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer whitespace-nowrap"
          >
            Fale conosco ↗
          </button>
        </div>
      </section>
    </div>
  );
};
