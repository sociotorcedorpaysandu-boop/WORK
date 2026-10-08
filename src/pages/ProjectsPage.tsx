import React, { useState } from 'react';
import { PROJECTS } from '@/src/data/projects';
import { ProjectPlaceholder } from '@/src/components/ProjectPlaceholder';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [filter] = useState<string>('todos');

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'todos') return true;
    return true;
  });

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block">
            Portfólio de Engenharia
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-[#111111] leading-tight tracking-tight max-w-4xl">
            Obras e Empreendimentos
          </h1>

          <p className="text-base sm:text-lg text-[#111111]/75 max-w-2xl leading-relaxed">
            Conheça as obras corporativas e residenciais desenvolvidas e executadas pela Work Construtora em Belém e região.
          </p>
        </div>
      </section>

      {/* Asymmetric Alternating Portfolio Listing */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto space-y-24">
          {filteredProjects.map((project, index) => {
            const pattern = index % 3;

            // Padrão 3: Imagem maior com texto abaixo
            if (pattern === 2) {
              return (
                <div
                  key={project.id}
                  onClick={() => handleNav(`/obras/${project.slug}`)}
                  className="group cursor-pointer pb-20 border-b border-[#E6E6E6] space-y-8"
                >
                  <div className="overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-[#F7F7F5] border border-[#E6E6E6]">
                    {project.imagemCapa ? (
                      <img
                        src={project.imagemCapa}
                        alt={project.nome}
                        className="w-full h-full object-cover img-editorial"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ) : (
                      <ProjectPlaceholder
                        nome={project.nome}
                        categoria={project.categoria}
                        aspect="h-full min-h-[300px]"
                      />
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="space-y-3 max-w-2xl">
                      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                        {project.nome}
                      </h2>
                      {project.descricao && project.descricao !== '—' && (
                        <p className="text-base text-[#111111]/75 leading-relaxed">
                          {project.descricao}
                        </p>
                      )}
                    </div>

                    <span className="text-sm font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors border-b border-[#111111] group-hover:border-[#F58220] pb-1 self-start sm:self-auto whitespace-nowrap">
                      Saiba mais ↗
                    </span>
                  </div>
                </div>
              );
            }

            // Padrão 2: Texto à esquerda / Imagem à direita
            if (pattern === 1) {
              return (
                <div
                  key={project.id}
                  onClick={() => handleNav(`/obras/${project.slug}`)}
                  className="group cursor-pointer pb-20 border-b border-[#E6E6E6]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Texto à Esquerda */}
                    <div className="lg:col-span-5 space-y-4 lg:order-1">
                      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors leading-tight">
                        {project.nome}
                      </h2>

                      {project.descricao && project.descricao !== '—' && (
                        <p className="text-base text-[#111111]/75 leading-relaxed">
                          {project.descricao}
                        </p>
                      )}

                      <div className="pt-3">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors border-b border-[#111111] group-hover:border-[#F58220] pb-1">
                          Saiba mais ↗
                        </span>
                      </div>
                    </div>

                    {/* Imagem à Direita */}
                    <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-[#F7F7F5] border border-[#E6E6E6] lg:order-2">
                      {project.imagemCapa ? (
                        <img
                          src={project.imagemCapa}
                          alt={project.nome}
                          className="w-full h-full object-cover img-editorial"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      ) : (
                        <ProjectPlaceholder
                          nome={project.nome}
                          categoria={project.categoria}
                          aspect="h-full min-h-[280px]"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            // Padrão 1: Imagem à esquerda / Texto à direita
            return (
              <div
                key={project.id}
                onClick={() => handleNav(`/obras/${project.slug}`)}
                className="group cursor-pointer pb-20 border-b border-[#E6E6E6]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  {/* Imagem à Esquerda */}
                  <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-[#F7F7F5] border border-[#E6E6E6]">
                    {project.imagemCapa ? (
                      <img
                        src={project.imagemCapa}
                        alt={project.nome}
                        className="w-full h-full object-cover img-editorial"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ) : (
                      <ProjectPlaceholder
                        nome={project.nome}
                        categoria={project.categoria}
                        aspect="h-full min-h-[280px]"
                      />
                    )}
                  </div>

                  {/* Texto à Direita */}
                  <div className="lg:col-span-5 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors leading-tight">
                      {project.nome}
                    </h2>

                    {project.descricao && project.descricao !== '—' && (
                      <p className="text-base text-[#111111]/75 leading-relaxed">
                        {project.descricao}
                      </p>
                    )}

                    <div className="pt-3">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors border-b border-[#111111] group-hover:border-[#F58220] pb-1">
                        Saiba mais ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111]">
              Tem um projeto ou obra em planejamento?
            </h2>
            <p className="text-sm text-[#111111]/75 mt-2">
              Fale com a equipe de engenharia da Work para avaliar sua proposta técnica.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="btn-work-dark whitespace-nowrap"
          >
            Fale conosco ↗
          </button>
        </div>
      </section>
    </div>
  );
};
