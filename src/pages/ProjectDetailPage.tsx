import React from 'react';
import { PROJECTS } from '@/src/data/projects';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate
}) => {
  const project = PROJECTS.find((p) => p.slug === slug) || PROJECTS[0];

  // Find next project for the footer link
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextIndex];

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check which technical attributes actually have confirmed data
  const hasLocal = Boolean(project.localizacao && project.localizacao !== '—');
  const hasArea = Boolean(project.metragem && project.metragem !== '—');
  const hasPeriodo = Boolean(project.periodo && project.periodo !== '—');
  const hasCategoria = Boolean(project.categoria && project.categoria !== '—');
  const hasAcabamento = Boolean(project.acabamento && project.acabamento !== '—');
  const hasCliente = Boolean(project.cliente && project.cliente !== '—');

  const hasAnyFichaTecnica =
    hasLocal || hasArea || hasPeriodo || hasCategoria || hasAcabamento || hasCliente;

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* 01. Hero Grande da Obra */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pt-32 pb-16 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.imagemCapa}
            alt={project.nome}
            className="w-full h-full object-cover object-center opacity-45 filter brightness-90"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Breadcrumb / Back Link */}
          <button
            onClick={() => handleNav('/obras')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6E6E6]/75 hover:text-[#F58220] transition-colors mb-6 cursor-pointer"
          >
            ← Voltar para Obras
          </button>

          <div className="flex items-center gap-3 text-xs font-mono text-[#F58220] mb-3">
            <span className="font-semibold">WORK / OBRA</span>
            <span>·</span>
            <span>{project.categoria}</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-white max-w-4xl balance">
            {project.nome}
          </h1>
        </div>
      </section>

      {/* 02. Ficha Técnica & Descrição Editorial */}
      <section className="py-20 px-6 md:px-12 bg-[#FFFFFF] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Descrição Principal e Serviços */}
            <div className={`${hasAnyFichaTecnica ? 'lg:col-span-7' : 'lg:col-span-10'} space-y-8`}>
              {project.descricao && (
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block mb-2 font-semibold">
                    MEMORIAL DESCRITIVO
                  </span>
                  <p className="text-xl sm:text-2xl text-[#111111] font-editorial leading-relaxed font-normal">
                    {project.descricao}
                  </p>
                </div>
              )}

              {/* Serviços Executados */}
              {project.servicos && project.servicos.length > 0 && (
                <div className="pt-8 border-t border-[#E6E6E6]">
                  <h3 className="font-editorial text-2xl text-[#111111] mb-4">
                    Escopo de Engenharia e Gestão
                  </h3>
                  <ul className="space-y-2 text-sm text-[#111111]/80">
                    {project.servicos.map((serv, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#F58220] font-mono text-xs mt-0.5">·</span>
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detalhes Técnicos Confirmados */}
              {project.detalhesTecnicos && project.detalhesTecnicos.length > 0 && (
                <div className="pt-8 border-t border-[#E6E6E6]">
                  <h3 className="font-editorial text-2xl text-[#111111] mb-4">
                    Especificações Técnicas no Canteiro
                  </h3>
                  <div className="space-y-2.5 text-sm text-[#111111]/80">
                    {project.detalhesTecnicos.map((detalhe, idx) => (
                      <div key={idx} className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#F58220]">0{idx + 1}</span>
                        <span>{detalhe}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Depoimento somente se existir (sem inventar) */}
              {project.depoimento && (
                <div className="p-6 bg-[#F7F7F5] border-l-2 border-[#F58220] mt-8">
                  <p className="font-editorial text-xl italic text-[#111111]">
                    "{project.depoimento.texto}"
                  </p>
                  <p className="mt-3 text-xs font-mono uppercase text-[#111111]/60">
                    {project.depoimento.autor} — {project.depoimento.cargo}
                  </p>
                </div>
              )}
            </div>

            {/* Ficha Técnica Rigorosa - Renderiza SOMENTE campos com dados reais confirmados */}
            {hasAnyFichaTecnica && (
              <div className="lg:col-span-5">
                <div className="bg-[#F7F7F5] border border-[#E6E6E6] p-8 space-y-6">
                  <div className="border-b border-[#E6E6E6] pb-4 flex justify-between items-baseline">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                      FICHA TÉCNICA
                    </span>
                    <span className="text-xs font-mono text-[#F58220]">
                      WORK // DATA
                    </span>
                  </div>

                  <div className="space-y-4 divide-y divide-[#E6E6E6]">
                    {hasLocal && (
                      <div className="pt-2 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-[#111111]/60 font-sans">
                          LOCAL
                        </span>
                        <span className="font-editorial text-lg text-[#111111]">
                          {project.localizacao}
                        </span>
                      </div>
                    )}

                    {hasArea && (
                      <div className="pt-3 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-[#111111]/60 font-sans">
                          ÁREA
                        </span>
                        <span className="font-editorial text-lg text-[#111111]">
                          {project.metragem}
                        </span>
                      </div>
                    )}

                    {hasPeriodo && (
                      <div className="pt-3 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-[#111111]/60 font-sans">
                          PERÍODO
                        </span>
                        <span className="font-editorial text-lg text-[#111111]">
                          {project.periodo}
                        </span>
                      </div>
                    )}

                    {hasCategoria && (
                      <div className="pt-3 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-[#111111]/60 font-sans">
                          TIPO
                        </span>
                        <span className="font-editorial text-lg text-[#111111]">
                          {project.categoria}
                        </span>
                      </div>
                    )}

                    {hasAcabamento && (
                      <div className="pt-3 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-[#111111]/60 font-sans">
                          ACABAMENTO
                        </span>
                        <span className="font-editorial text-lg text-[#111111] text-right max-w-[200px]">
                          {project.acabamento}
                        </span>
                      </div>
                    )}

                    {hasCliente && (
                      <div className="pt-3 flex justify-between items-baseline">
                        <span className="text-xs uppercase tracking-widest text-[#111111]/60 font-sans">
                          CLIENTE / PARCERIA
                        </span>
                        <span className="font-editorial text-lg text-[#111111] text-right">
                          {project.cliente}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-[#E6E6E6]">
                    <button
                      onClick={() => handleNav('/contato')}
                      className="w-full py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer text-center"
                    >
                      Consultar projeto similar ↗
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 03. Galeria Editorial Assimétrica */}
      {project.galeria && project.galeria.length > 0 && (
        <section className="py-24 px-6 md:px-12 bg-[#F7F7F5]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="pb-8 border-b border-[#E6E6E6]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block mb-2 font-semibold">
                DOCUMENTAÇÃO FOTOGRÁFICA
              </span>
              <h2 className="font-editorial text-4xl text-[#111111] font-normal">
                Galeria da Obra
              </h2>
            </div>

            {/* Imagem Grande */}
            {project.galeria[0] && (
              <div className="overflow-hidden aspect-[16/9] bg-[#E6E6E6] border border-[#E6E6E6]">
                <img
                  src={project.galeria[0]}
                  alt={`${project.nome} - Imagem Principal`}
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            )}

            {/* Dupla de Imagens */}
            {project.galeria.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="overflow-hidden aspect-[4/3] bg-[#E6E6E6] border border-[#E6E6E6]">
                  <img
                    src={project.galeria[1]}
                    alt={`${project.nome} - Detalhe 01`}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden aspect-[4/3] bg-[#E6E6E6] border border-[#E6E6E6]">
                  <img
                    src={project.galeria[2]}
                    alt={`${project.nome} - Detalhe 02`}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Imagem Quase Full Width se houver 4ª foto */}
            {project.galeria[3] && (
              <div className="overflow-hidden aspect-[21/9] bg-[#E6E6E6] border border-[#E6E6E6]">
                <img
                  src={project.galeria[3]}
                  alt={`${project.nome} - Vista Geral`}
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 04. Próximo Projeto Link */}
      <section className="py-20 px-6 md:px-12 bg-[#111111] text-white border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block mb-2 font-semibold">
              PRÓXIMO PROJETO
            </span>
            <h3 className="font-editorial text-4xl sm:text-5xl font-normal text-white">
              {nextProject.nome}
            </h3>
            <p className="text-xs text-[#E6E6E6]/60 mt-1 uppercase tracking-wider font-mono">
              {nextProject.categoria}
              {nextProject.localizacao && ` · ${nextProject.localizacao}`}
            </p>
          </div>

          <button
            onClick={() => handleNav(`/obras/${nextProject.slug}`)}
            className="px-8 py-4 bg-[#F58220] text-[#111111] hover:bg-[#F58220]/90 text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer whitespace-nowrap"
          >
            Acessar projeto ↗
          </button>
        </div>
      </section>
    </div>
  );
};
