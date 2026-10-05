import React from 'react';
import { PROJECTS, Project } from '@/src/data/projects';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate
}) => {
  // Localiza a obra pelo slug, id ou alias de rota
  const project: Project =
    PROJECTS.find(
      (p) =>
        p.slug === slug ||
        p.id === slug ||
        (p.aliases && p.aliases.includes(slug))
    ) || PROJECTS[0];

  // Identifica a obra anterior e a próxima no catálogo
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  const prevProject = PROJECTS[prevIndex];
  const nextProject = PROJECTS[nextIndex];

  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hasGaleria = project.galeria && project.galeria.length > 0;

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* ========================================================
          01 & 02. HERO: Foto principal da obra + Nome da obra
      ======================================================== */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-end pt-36 pb-16 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        {/* 1. Foto principal da obra */}
        {project.imagemCapa ? (
          <div className="absolute inset-0 z-0">
            <img
              src={project.imagemCapa}
              alt={`Foto principal de ${project.nome}`}
              className="w-full h-full object-cover object-center opacity-50 filter brightness-95"
              referrerPolicy="no-referrer"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[#141414]">
            {/* Grid técnico arquitetônico para projetos sem foto real */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:40px_40px] opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
            <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:flex flex-col items-end opacity-20 pointer-events-none select-none">
              <span className="font-mono text-7xl font-light text-white tracking-widest">
                WORK
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#F58220]">
                CATÁLOGO DE OBRAS
              </span>
            </div>
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-6">
          {/* Breadcrumb de retorno */}
          <button
            onClick={() => handleNav('/obras')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6E6E6]/75 hover:text-[#F58220] transition-colors cursor-pointer group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Voltar para Catálogo de Obras</span>
          </button>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono text-[#F58220]">
              <span className="font-semibold uppercase tracking-wider">OBRA REGISTRADA</span>
              <span>·</span>
              <span className="text-[#E6E6E6]/70 uppercase tracking-wider">WORK CONSTRUTORA</span>
            </div>

            {/* 2. Nome da obra */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-[1.08] tracking-tight max-w-4xl">
              {project.nome}
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================
          03, 05, 06. DADOS DA OBRA (Período, Metragem, Acabamento)
          Design sóbrio e elegante, sem componentes SaaS
      ======================================================== */}
      <section className="bg-[#FFFFFF] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6E6E6]">
            {/* 3. Ano/mês de execução */}
            <div className="py-6 md:py-0 md:pr-10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold block">
                Ano / Mês de Execução
              </span>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                {project.periodo || '—'}
              </p>
              <span className="text-xs text-[#111111]/50 font-sans block">
                Cronograma e vigência da obra
              </span>
            </div>

            {/* 5. Metragem total em m² */}
            <div className="py-6 md:py-0 md:px-10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold block">
                Metragem Total
              </span>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                {project.metragem && project.metragem !== '—'
                  ? (project.metragem.includes('m²') ? project.metragem : `${project.metragem} m²`)
                  : '—'}
              </p>
              <span className="text-xs text-[#111111]/50 font-sans block">
                Área total construída / executada
              </span>
            </div>

            {/* 6. Nível de acabamento */}
            <div className="py-6 md:py-0 md:pl-10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold block">
                Nível de Acabamento
              </span>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                {project.acabamento || '—'}
              </p>
              <span className="text-xs text-[#111111]/50 font-sans block">
                Padrão de materiais e acabamentos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          04. DESCRIÇÃO & 07. INFORMAÇÕES COMPLEMENTARES
      ======================================================== */}
      <section className="py-16 sm:py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* 4. Breve descrição da obra (Texto Principal) */}
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold block">
              Memorial & Escopo da Obra
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
              Sobre a Obra
            </h2>
            {project.descricao && project.descricao !== '—' ? (
              <p className="text-lg sm:text-xl text-[#111111]/85 leading-relaxed font-sans">
                {project.descricao}
              </p>
            ) : (
              <p className="text-base text-[#111111]/55 leading-relaxed font-sans italic">
                —
              </p>
            )}
          </div>

          {/* 7. Informações complementares (Bloco separado abaixo) */}
          <div className="pt-12 border-t border-[#E6E6E6] max-w-4xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold block">
              Informações Complementares
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#111111]">
              Notas e Diretrizes da Obra
            </h3>
            {project.informacoesComplementares && project.informacoesComplementares !== '—' ? (
              <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-sans">
                {project.informacoesComplementares}
              </p>
            ) : (
              <p className="text-base text-[#111111]/55 leading-relaxed font-sans italic">
                —
              </p>
            )}
          </div>

          {/* Bloco de consulta direta com a Work */}
          <div className="pt-8 border-t border-[#E6E6E6] flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#F7F7F5] p-8 border border-[#E6E6E6]">
            <div>
              <h4 className="text-lg font-heading font-semibold text-[#111111]">
                Deseja consultar especificações técnicas ou projeto similar?
              </h4>
              <p className="text-sm text-[#111111]/70 mt-1">
                Entre em contato direto com a equipe de engenharia e gestão da Work Construtora.
              </p>
            </div>
            <button
              onClick={() => handleNav('/contato')}
              className="px-6 py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              Falar com a equipe ↗
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          08. GALERIA DE FOTOS (Somente exibida quando houver fotos)
      ======================================================== */}
      {hasGaleria && (
        <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="pb-8 border-b border-[#E6E6E6]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block mb-2 font-semibold">
                DOCUMENTAÇÃO FOTOGRÁFICA
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111]">
                Galeria da Obra
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galeria.map((foto, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden aspect-[4/3] bg-white border border-[#E6E6E6]"
                >
                  <img
                    src={foto}
                    alt={`${project.nome} — Registro ${idx + 1}`}
                    className="w-full h-full object-cover img-editorial"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================
          09. NAVEGAÇÃO PARA OBRA ANTERIOR / PRÓXIMA
      ======================================================== */}
      <section className="py-16 sm:py-20 px-6 md:px-12 bg-[#111111] text-white border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A]">
            {/* Obra Anterior */}
            <div
              onClick={() => handleNav(`/obras/${prevProject.slug}`)}
              className="cursor-pointer group flex flex-col justify-between space-y-4 md:pr-12"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold flex items-center gap-1.5 transition-transform group-hover:-translate-x-1">
                  <span>←</span>
                  <span>Obra Anterior</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white group-hover:text-[#F58220] transition-colors leading-tight">
                  {prevProject.nome}
                </h3>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E6E6E6]/60 group-hover:text-white transition-colors">
                Ver detalhes do projeto ↗
              </span>
            </div>

            {/* Próxima Obra */}
            <div
              onClick={() => handleNav(`/obras/${nextProject.slug}`)}
              className="cursor-pointer group flex flex-col justify-between space-y-4 pt-8 md:pt-0 md:pl-12 md:text-right"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold flex items-center justify-start md:justify-end gap-1.5 transition-transform group-hover:translate-x-1">
                  <span>Próxima Obra</span>
                  <span>→</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white group-hover:text-[#F58220] transition-colors leading-tight">
                  {nextProject.nome}
                </h3>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#E6E6E6]/60 group-hover:text-white transition-colors">
                Ver detalhes do projeto ↗
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
