import React, { useState, useEffect, useRef } from 'react';
import portico1Img from '@/src/assets/images/municipalidade_portico_1.jpeg';
import ifcImg from '@/src/assets/images/ifc_work.png';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';
import engineeringBg from '@/src/assets/images/engineering_in_motion_site_1790334507218.jpg';
import { ProjectPlaceholder } from '@/src/components/ProjectPlaceholder';
import { WorkOrganicPattern } from '@/src/components/WorkOrganicPattern';
import { FEATURED_PROJECTS } from '@/src/data/projects';
import { TAREK_IMAGE, GABRIEL_IMAGE, ENGINEERING_TEAM_IMAGE } from '@/src/data/team';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Garante que Municipalidade é o 1º de exatamente 3 destaques (1. Municipalidade, 2. Edson, 3. Vila Nova)
  const featuredThree = FEATURED_PROJECTS.slice(0, 3);

  // Parallax suave para o fundo da seção Serviços
  const servicesRef = useRef<HTMLElement>(null);
  const [servicesParallaxY, setServicesParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!servicesRef.current) return;
      const rect = servicesRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      if (rect.top < windowH && rect.bottom > 0) {
        // Ponto central relativo da seção
        const centerOffset = (rect.top + rect.height / 2) - (windowH / 2);
        // Efeito parallax suave e discreto (fator 0.10)
        setServicesParallaxY(centerOffset * 0.10);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* ========================================================
          1. HERO SECTION (Imagem Municipalidade Pórtico 1 + Slow Zoom / Ken Burns)
          Espaçamento refinado e sem lacunas excessivas
      ======================================================== */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-center pt-28 pb-14 sm:pb-16 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        {/* Foto real municipalidade portico 1 com movimento contínuo de slow zoom (Ken Burns) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={portico1Img}
            alt="Work Construtora — Prédio Municipalidade"
            className="w-full h-full object-cover object-center opacity-45 filter brightness-95 animate-slow-zoom"
            loading="eager"
          />
          {/* Gradientes elegantes para contraste impecável e legibilidade máxima */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-6 sm:py-8">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F58220] rotate-45 shrink-0" />
              <span className="text-xs uppercase font-sans tracking-widest text-[#F58220] font-semibold">
                Work Construtora — Belém / PA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-[1.08] tracking-tight">
              Engenharia para transformar projetos em realidade.
            </h1>

            <p className="text-lg sm:text-xl text-[#E6E6E6]/90 font-normal max-w-2xl leading-relaxed">
              Planejamento, gestão e execução de obras com precisão em cada etapa.
            </p>

            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('obras-destaque')}
                className="btn-work-primary cursor-pointer"
              >
                Ver obras ↘
              </button>

              <button
                onClick={() => handleNav('/empresa')}
                className="btn-work-outline cursor-pointer"
              >
                Sobre a Work →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OBRAS EM DESTAQUE NA HOME
          - Sem scroll sticky / parallax travado
          - Fluxo normal da página
          - Apresentação alternada e organizada dos 3 destaques:
            1. Prédio Municipalidade
            2. Edson Corporate
            3. Vila Nova Corporate
          - Excelente hierarquia visual e botão "Ver detalhes da obra"
          - Botão geral "Ver catálogo completo de obras" em fluxo normal ao final
      ======================================================== */}
      <section id="obras-destaque" className="py-16 sm:py-20 lg:py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          {/* Header da Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E6E6E6]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#F58220] rotate-45" />
                <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold">
                  Portfólio Selecionado
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                Obras em destaque
              </h2>
            </div>
            <button
              onClick={() => handleNav('/obras')}
              className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer inline-flex items-center gap-1.5 self-start md:self-auto group"
            >
              Ver todas as obras
              <span className="text-[#F58220] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>

          {/* Lista de Obras em Fluxo Normal — Layout Alternado e Sofisticado */}
          <div className="mt-12 sm:mt-16 space-y-16 sm:space-y-20 lg:space-y-24">
            {featuredThree.map((project, idx) => {
              // Alternância visual no Desktop: 0 (Esq/Dir), 1 (Dir/Esq), 2 (Esq/Dir)
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={project.id}
                  className="border-b border-[#E6E6E6] pb-16 sm:pb-20 last:border-b-0 last:pb-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Imagem do Projeto */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div
                        onClick={() => handleNav(`/obras/${project.slug}`)}
                        className="cursor-pointer overflow-hidden aspect-[16/10] bg-[#F7F7F5] border border-[#E6E6E6] group work-corner-accent relative"
                      >
                        {project.imagemCapa ? (
                          <img
                            src={project.imagemCapa}
                            alt={project.nome}
                            className="w-full h-full object-cover img-editorial transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            loading={idx === 0 ? 'eager' : 'lazy'}
                          />
                        ) : (
                          <ProjectPlaceholder
                            nome={project.nome}
                            categoria={project.categoria}
                            aspect="h-full min-h-[300px]"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Informações e Detalhes da Obra */}
                    <div
                      className={`lg:col-span-5 space-y-6 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-[#F58220] rotate-45" />
                          <span className="text-xs font-mono uppercase tracking-wider text-[#F58220] font-semibold">
                            {project.categoria || 'Engenharia'}
                          </span>
                        </div>

                        <h3
                          onClick={() => handleNav(`/obras/${project.slug}`)}
                          className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#111111] hover:text-[#F58220] transition-colors leading-tight cursor-pointer"
                        >
                          {project.nome}
                        </h3>

                        {/* Metadados Técnicos / Metragem / Período */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-[#111111]/65 pt-1">
                          {project.metragem && (
                            <span>Área: {project.metragem}</span>
                          )}
                          {project.periodo && (
                            <>
                              <span className="text-[#111111]/30">•</span>
                              <span>Período: {project.periodo}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {project.descricao && project.descricao !== '—' && (
                        <p className="text-sm sm:text-base text-[#111111]/75 leading-relaxed">
                          {project.descricao}
                        </p>
                      )}

                      {/* Botão de Ação Direta da Obra */}
                      <div className="pt-2">
                        <button
                          onClick={() => handleNav(`/obras/${project.slug}`)}
                          className="btn-work-dark cursor-pointer inline-flex items-center gap-2"
                        >
                          Ver detalhes da obra
                          <span className="text-[#F58220] font-sans">↗</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Geral: Ver catálogo completo de obras (Posicionado em fluxo normal, sem sobreposição) */}
          <div className="pt-14 sm:pt-16 pb-4 text-center border-t border-[#E6E6E6] mt-12 sm:mt-16">
            <button
              onClick={() => handleNav('/obras')}
              className="btn-work-dark cursor-pointer text-sm font-semibold uppercase tracking-wider px-8 py-4 inline-flex items-center gap-2.5"
            >
              Ver catálogo completo de obras
              <span className="text-[#F58220] font-sans">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SERVIÇOS (Construção, BTS e Projetos de Engenharia)
          - Imagem de fundo com efeito parallax suave e discreto
          - Padrão gráfico cinza dissipativo da Work
          - Fundo valoriza a seção mantendo 100% de legibilidade
      ======================================================== */}
      <section
        ref={servicesRef}
        className="relative py-20 sm:py-28 px-6 md:px-12 bg-[#F9F9F8] border-t border-[#E6E6E6] overflow-hidden"
      >
        {/* Imagem de Fundo com Parallax Suave e Gracioso */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={engineeringBg}
            alt=""
            style={{
              transform: `translate3d(0, ${servicesParallaxY.toFixed(1)}px, 0) scale(1.12)`,
            }}
            className="w-full h-full object-cover object-center opacity-12 filter grayscale will-change-transform"
          />
          {/* Véu translúcido para assegurar excelente contraste e clareza */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F8] via-[#F9F9F8]/85 to-[#F9F9F8]" />
        </div>

        {/* Padrão Gráfico Cinza Orgânico — Dissipativo no topo direito */}
        <WorkOrganicPattern
          variant="top-right"
          className="absolute top-0 right-0 w-80 sm:w-96 md:w-[480px] h-72 sm:h-80 md:h-96 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#F58220] rotate-45" />
                <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold">
                  Atuação da Construtora
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                Nossos Serviços
              </h2>
            </div>
            <button
              onClick={() => handleNav('/servicos')}
              className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer inline-flex items-center gap-1.5 self-start md:self-auto group"
            >
              Conheça nossos serviços
              <span className="text-[#F58220] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>

          {/* Blocos de Serviços com Fundo Branco Sólido e Cantos Work */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Serviço 01 */}
            <div
              onClick={() => handleNav('/servicos')}
              className="group cursor-pointer flex flex-col justify-between bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all shadow-xs work-corner-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E6E6E6]">
                <img
                  src={estruturaImg}
                  alt="Construção e Administração de Obras"
                  className="w-full h-full object-cover img-editorial transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors leading-snug">
                    Construção e Administração de Obras
                  </h3>
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    Execução de obras e reformas residenciais, comerciais e industriais, envolvendo planejamento, cronograma, materiais, mão de obra e controle de qualidade.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6E6E6]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1.5">
                    Saiba mais <span>→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Serviço 02 */}
            <div
              onClick={() => handleNav('/servicos')}
              className="group cursor-pointer flex flex-col justify-between bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all shadow-xs work-corner-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E6E6E6]">
                <img
                  src={finalImg}
                  alt="Built to Suit — BTS"
                  className="w-full h-full object-cover img-editorial transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: 'center 18%' }}
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors leading-snug">
                    Built to Suit — BTS
                  </h3>
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    Empreendimentos desenvolvidos sob medida para atender às necessidades específicas da operação de cada empresa.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6E6E6]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1.5">
                    Saiba mais <span>→</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Serviço 03 */}
            <div
              onClick={() => handleNav('/servicos')}
              className="group cursor-pointer flex flex-col justify-between bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all shadow-xs work-corner-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E6E6E6]">
                <img
                  src={fundacaoImg}
                  alt="Projetos de Engenharia"
                  className="w-full h-full object-cover img-editorial transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors leading-snug">
                    Projetos de Engenharia
                  </h3>
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    Desenvolvimento de projetos complementares para apoiar o planejamento e a execução da obra: Hidráulico, Elétrico, Estrutural e Incêndio.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6E6E6]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1.5">
                    Saiba mais <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. A WORK CONSTRUTORA (Com imagem IFC do Drive devidamente enquadrada)
          - Padrão gráfico cinza sutil incorporado
      ======================================================== */}
      <section className="relative py-20 sm:py-28 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6] overflow-hidden">
        {/* Padrão Gráfico Cinza Orgânico — Dissipativo na lateral inferior esquerda */}
        <WorkOrganicPattern
          variant="bottom-left"
          className="absolute -bottom-8 -left-8 w-80 sm:w-96 md:w-[450px] h-72 sm:h-80 md:h-96 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#F58220] rotate-45" />
                <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold">
                  Institucional
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                A Work Construtora
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#111111]/75 max-w-md leading-relaxed">
              Criada em 2022, a Work Construtora atua no setor da construção civil com o propósito de oferecer soluções eficientes e de qualidade para obras e reformas.
            </p>
          </div>

          {/* Bloco: Imagem IFC do Drive + Texto Institucional Integrado */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Imagem IFC (Renderização e Modelagem Técnica BIM / IFC) com enquadramento harmonioso */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#ECECE8] border border-[#E6E6E6] flex items-center justify-center p-4 sm:p-6 work-corner-accent group">
                <img
                  src={ifcImg}
                  alt="Modelagem técnica e planejamento de obra Work Construtora"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 border border-[#E6E6E6] text-[11px] font-mono uppercase tracking-wider text-[#111111]/80">
                  Planejamento BIM & Engenharia
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F58220]">
                Diretoria & Planejamento
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111] leading-tight">
                Gestão e engenharia trabalhando de forma integrada
              </h3>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Na Work, a liderança atua com foco em planejamento, organização dos processos e relacionamento com clientes e parceiros.
              </p>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Sua atuação combina planejamento, responsabilidade, organização, qualidade técnica, segurança e transparência em todas as etapas da construção.
              </p>
            </div>
          </div>

          {/* Bloco Equipe Confirmada com fotos reais/oficiais */}
          <div className="pt-8 border-t border-[#E6E6E6] space-y-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block mb-2">
                Corpo Técnico e Administrativo
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                Nossa Equipe
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tarek Abdulmassih - Foto Real Drive */}
              <div className="p-6 bg-white border border-[#E6E6E6] flex gap-4 items-center work-corner-accent">
                <div className="w-16 h-16 shrink-0 bg-[#F7F7F5] border border-[#E6E6E6] overflow-hidden">
                  <img
                    src={TAREK_IMAGE}
                    alt="Tarek Abdulmassih — Diretor e Administrativo"
                    className="w-full h-full object-cover object-center img-editorial"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-base font-heading font-semibold text-[#111111]">
                    Tarek Abdulmassih
                  </h4>
                  <p className="text-xs text-[#F58220] font-semibold mt-0.5">
                    Diretor e Administrativo
                  </p>
                </div>
              </div>

              {/* Gabriel Costa */}
              <div className="p-6 bg-white border border-[#E6E6E6] flex gap-4 items-center work-corner-accent">
                <div className="w-16 h-16 shrink-0 bg-[#F7F7F5] border border-[#E6E6E6] overflow-hidden">
                  <img
                    src={GABRIEL_IMAGE}
                    alt="Gabriel Costa — Administrativo"
                    className="w-full h-full object-cover object-center img-editorial"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-base font-heading font-semibold text-[#111111]">
                    Gabriel Costa
                  </h4>
                  <p className="text-xs text-[#F58220] font-semibold mt-0.5">
                    Administrativo
                  </p>
                </div>
              </div>

              {/* Engenharia (3 Engenheiros) */}
              <div className="p-6 bg-white border border-[#E6E6E6] flex gap-4 items-center work-corner-accent">
                <div className="w-16 h-16 shrink-0 bg-[#F7F7F5] border border-[#E6E6E6] overflow-hidden">
                  <img
                    src={ENGINEERING_TEAM_IMAGE}
                    alt="Engenharia — Claudio Porpino, Ailton Vale e Carlos Rocha"
                    className="w-full h-full object-cover img-editorial"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-base font-heading font-semibold text-[#111111]">
                    Engenharia
                  </h4>
                  <p className="text-xs text-[#111111]/70 mt-0.5 leading-snug">
                    Claudio Porpino · Ailton Vale · Carlos Rocha
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-start">
              <button
                onClick={() => handleNav('/empresa')}
                className="btn-work-dark cursor-pointer"
              >
                Conheça a trajetória completa da Work ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. REDES SOCIAIS & CANAIS DIRETOS (Com Instagram @workjaconstrutora oficial)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#F58220] rotate-45" />
                <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold">
                  Fale com a Construtora
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                Canais Diretos & Redes Sociais
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#111111]/75 max-w-md leading-relaxed">
              Atendimento ágil para incorporadoras, investidores e proprietários. Entre em contato direto pelos nossos canais oficiais.
            </p>
          </div>

          {/* Grade de Canais Diretos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5591991447742"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group work-corner-accent cursor-pointer"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  WhatsApp Oficial
                </span>
                <h4 className="text-xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                  (91) 99144-7742
                </h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed">
                  Canal direto para falar com a equipe da Work.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1">
                Iniciar conversa ↗
              </span>
            </a>

            {/* E-mail */}
            <a
              href="mailto:abdulmassih.tarek@gmail.com"
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group work-corner-accent cursor-pointer"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  E-mail Direto
                </span>
                <h4 className="text-base font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors truncate">
                  abdulmassih.tarek@gmail.com
                </h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed">
                  Entre em contato para informações, solicitações e orçamentos.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1">
                Enviar e-mail ↗
              </span>
            </a>

            {/* Instagram Oficial Ativo */}
            <a
              href="https://www.instagram.com/workjaconstrutora/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group work-corner-accent cursor-pointer"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  Instagram Oficial
                </span>
                <h4 className="text-xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                  @workjaconstrutora
                </h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed">
                  Acompanhe fotos e registros das nossas obras e projetos em Belém.
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1">
                Acessar perfil ↗
              </span>
            </a>

            {/* Endereço & Mapa */}
            <a
              href="https://maps.google.com/?q=Tv.+Dom+Romualdo+de+Seixas,+567+-+Umarizal,+Belém+-+PA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group work-corner-accent cursor-pointer"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  Escritório em Belém
                </span>
                <h4 className="text-base font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                  Tv. Dom Romualdo de Seixas, 567
                </h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed">
                  Sala B — Umarizal, Belém — PA, CEP 66050-110
                </p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1">
                Ver no Google Maps ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
