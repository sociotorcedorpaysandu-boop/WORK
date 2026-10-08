import React, { useState, useEffect, useRef } from 'react';
import portico1Img from '@/src/assets/images/municipalidade_portico_1.jpeg';
import ifcImg from '@/src/assets/images/ifc_work.png';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';
import { ProjectPlaceholder } from '@/src/components/ProjectPlaceholder';
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

  // Garante que Municipalidade é o 1º de exatamente 3 destaques
  const featuredThree = FEATURED_PROJECTS.slice(0, 3);

  // Controle de scroll para o frame sticky desktop (3 etapas em wrapper de 300vh)
  const desktopStickyWrapperRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!desktopStickyWrapperRef.current) return;
      const rect = desktopStickyWrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Offset de ancoragem sticky no topo
      const stickyOffset = 96;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      const currentScrolled = stickyOffset - rect.top;
      const progress = Math.min(Math.max(currentScrolled / totalScrollableDistance, 0), 1);

      // Divisão proporcional em 3 etapas para as 3 obras
      let index = 0;
      if (progress < 0.33) {
        index = 0;
      } else if (progress < 0.67) {
        index = 1;
      } else {
        index = 2;
      }
      setActiveProjectIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* ========================================================
          1. HERO SECTION (Imagem Municipalidade Pórtico 1 + Slow Zoom / Ken Burns)
      ======================================================== */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        {/* Foto real municipalidade portico 1 com movimento de aproximação suave e contínuo (Ken Burns) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={portico1Img}
            alt="Work Construtora — Prédio Municipalidade"
            className="w-full h-full object-cover object-center opacity-45 filter brightness-95 animate-slow-zoom"
            loading="eager"
          />
          {/* Gradientes elegantes calibrados para contraste e alta legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/85 via-[#111111]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-12">
          <div className="max-w-3xl space-y-6">
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

            <div className="pt-4 flex flex-wrap items-center gap-4">
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
          - Ordem: 1. Prédio Municipalidade | 2. Edson Corporate | 3. Vila Nova Corporate
          - Desktop (lg: >=1024px): Seção sticky controlada pelo scroll (wrapper 300vh, 1 obra por etapa)
          - Mobile / Tablet (<1024px): Rolagem normal sequencial (imagem → título → descrição → botão)
          - CTA Geral: FORA da área sticky, em fluxo normal da página
      ======================================================== */}
      <section id="obras-destaque" className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          {/* Header da Seção */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
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

          {/* ====================================================
              DESKTOP (lg: >= 1024px): Sticky Controlado pelo Scroll
              - Wrapper com 300vh para 3 etapas naturais de rolagem
              - Apenas UMA obra visível por vez no frame sticky
              - Imagem à esquerda com crossfade + conteúdo à direita com fade suave
              - Sem textos decorativos 01/03 ou DESTAQUE PRIORITÁRIO
          ==================================================== */}
          <div className="hidden lg:block mt-8">
            <div ref={desktopStickyWrapperRef} className="relative h-[300vh]">
              {/* Frame visual sticky que permanece centralizado durante a rolagem */}
              <div className="sticky top-20 lg:top-24 h-[calc(100vh-6rem)] min-h-[560px] max-h-[760px] flex items-center justify-center">
                <div className="w-full bg-white border border-[#E6E6E6] shadow-sm p-8 lg:p-12 work-corner-accent">
                  <div className="grid grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Frame da Imagem à Esquerda com Crossfade Suave */}
                    <div className="col-span-7 relative overflow-hidden aspect-[16/10] bg-[#F7F7F5] border border-[#E6E6E6] w-full">
                      {featuredThree.map((project, idx) => {
                        const isActive = activeProjectIndex === idx;
                        return (
                          <div
                            key={project.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                            }`}
                          >
                            {project.imagemCapa ? (
                              <img
                                src={project.imagemCapa}
                                alt={project.nome}
                                className={`w-full h-full object-cover img-editorial transition-transform duration-1000 ease-out ${
                                  isActive ? 'scale-100' : 'scale-105'
                                }`}
                                referrerPolicy="no-referrer"
                                loading={idx === 0 ? 'eager' : 'lazy'}
                              />
                            ) : (
                              <ProjectPlaceholder
                                nome={project.nome}
                                categoria={project.categoria}
                                aspect="h-full min-h-[340px]"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Conteúdo à Direita com Fade e Leve Deslocamento */}
                    <div className="col-span-5 relative min-h-[340px] flex items-center">
                      {featuredThree.map((project, idx) => {
                        const isActive = activeProjectIndex === idx;
                        return (
                          <div
                            key={project.id}
                            className={`transition-all duration-500 ease-out space-y-5 w-full ${
                              isActive
                                ? 'opacity-100 translate-y-0 relative z-10 pointer-events-auto'
                                : 'opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none'
                            }`}
                          >
                            {/* Barra de identificação da categoria e progresso suave */}
                            <div className="border-b border-[#E6E6E6] pb-3 flex items-center justify-between">
                              <span className="text-xs font-mono uppercase tracking-wider text-[#F58220] font-semibold">
                                {project.categoria || 'Engenharia'}
                              </span>
                              {/* Marcadores discretos das 3 etapas */}
                              <div className="flex items-center gap-1.5" aria-hidden="true">
                                {featuredThree.map((_, barIdx) => (
                                  <span
                                    key={barIdx}
                                    className={`h-1.5 transition-all duration-300 ${
                                      barIdx === activeProjectIndex
                                        ? 'w-6 bg-[#F58220]'
                                        : 'w-2 bg-[#E6E6E6]'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                                {project.nome}
                              </h3>
                              {project.periodo && (
                                <p className="text-xs font-mono text-[#111111]/60">
                                  Período: {project.periodo}
                                </p>
                              )}
                            </div>

                            {project.descricao && project.descricao !== '—' && (
                              <p className="text-base text-[#111111]/75 leading-relaxed line-clamp-3">
                                {project.descricao}
                              </p>
                            )}

                            <div className="pt-2">
                              <button
                                onClick={() => handleNav(`/obras/${project.slug}`)}
                                className="btn-work-dark cursor-pointer"
                              >
                                Ver detalhes da obra ↗
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================
              MOBILE & TABLET (< 1024px): Rolagem Vertical Normal
              - Sem sticky ou parallax complexo
              - Sequência: Imagem → Título → Descrição → "Ver detalhes da obra"
              - Sem elementos presos ou sobreposição
          ==================================================== */}
          <div className="lg:hidden mt-10 space-y-16">
            {featuredThree.map((project) => (
              <div
                key={project.id}
                className="space-y-5 pb-12 border-b border-[#E6E6E6] last:border-b-0"
              >
                {/* 1. Imagem */}
                <div
                  onClick={() => handleNav(`/obras/${project.slug}`)}
                  className="cursor-pointer overflow-hidden aspect-[16/10] bg-[#F7F7F5] border border-[#E6E6E6] work-corner-accent"
                >
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
                      aspect="h-full min-h-[240px]"
                    />
                  )}
                </div>

                {/* 2. Título */}
                <div className="space-y-1">
                  {project.categoria && (
                    <span className="text-xs font-mono uppercase tracking-wider text-[#F58220] font-semibold block">
                      {project.categoria}
                    </span>
                  )}
                  <h3
                    onClick={() => handleNav(`/obras/${project.slug}`)}
                    className="text-2xl font-heading font-semibold text-[#111111] hover:text-[#F58220] transition-colors leading-tight cursor-pointer"
                  >
                    {project.nome}
                  </h3>
                  {project.periodo && (
                    <p className="text-xs font-mono text-[#111111]/60">
                      Período: {project.periodo}
                    </p>
                  )}
                </div>

                {/* 3. Descrição */}
                {project.descricao && project.descricao !== '—' && (
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    {project.descricao}
                  </p>
                )}

                {/* 4. "Ver detalhes da obra" */}
                <div>
                  <button
                    onClick={() => handleNav(`/obras/${project.slug}`)}
                    className="btn-work-dark cursor-pointer"
                  >
                    Ver detalhes da obra ↗
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ====================================================
              CTA GERAL: "Ver catálogo completo de obras"
              - Posicionado estritamente FORA da área sticky
              - Aparece em fluxo normal da página após o término das 3 obras
              - Sem position:absolute, sem sobreposição
          ==================================================== */}
          <div className="pt-16 pb-6 text-center border-t border-[#E6E6E6] mt-8">
            <button
              onClick={() => handleNav('/obras')}
              className="btn-work-dark cursor-pointer"
            >
              Ver catálogo completo de obras ↗
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SERVIÇOS (Construção, BTS e Projetos de Engenharia)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
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

          {/* Blocos de Serviços com Botões e Cantos Work */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Serviço 01 */}
            <div
              onClick={() => handleNav('/servicos')}
              className="group cursor-pointer flex flex-col justify-between bg-[#F7F7F5] border border-[#E6E6E6] hover:border-[#F58220] transition-all work-corner-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E6E6E6]">
                <img
                  src={estruturaImg}
                  alt="Construção e Administração de Obras"
                  className="w-full h-full object-cover img-editorial"
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
              className="group cursor-pointer flex flex-col justify-between bg-[#F7F7F5] border border-[#E6E6E6] hover:border-[#F58220] transition-all work-corner-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E6E6E6]">
                <img
                  src={finalImg}
                  alt="Built to Suit — BTS"
                  className="w-full h-full object-cover img-editorial"
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
              className="group cursor-pointer flex flex-col justify-between bg-[#F7F7F5] border border-[#E6E6E6] hover:border-[#F58220] transition-all work-corner-accent"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#E6E6E6]">
                <img
                  src={fundacaoImg}
                  alt="Projetos de Engenharia"
                  className="w-full h-full object-cover img-editorial"
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
      ======================================================== */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-16">
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

            {/* Instagram Oficial Ativo e Corrigido */}
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
