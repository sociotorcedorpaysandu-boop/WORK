import React from 'react';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';
import symbolWork from '@/src/assets/images/Design_sem_nome__85_-removebg-preview.svg';
import { MunicipalidadeEvolution } from '@/src/components/MunicipalidadeEvolution';
import { ProjectPlaceholder } from '@/src/components/ProjectPlaceholder';
import { FEATURED_PROJECTS } from '@/src/data/projects';
import { TEAM, TAREK_IMAGE, GABRIEL_IMAGE, ENGINEERING_TEAM_IMAGE } from '@/src/data/team';

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

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* ========================================================
          1. HERO SECTION (Visual forte, mais claro e direto)
      ======================================================== */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        {/* Foto real da Work como pano de fundo com contraste calibrado */}
        <div className="absolute inset-0 z-0">
          <img
            src={execucaoImg}
            alt="Canteiro de obras Work Construtora"
            className="w-full h-full object-cover object-center opacity-40 filter brightness-95"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full py-12">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs uppercase font-sans tracking-wider text-[#F58220] font-semibold">
              Work Construtora — Belém / PA
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-white leading-[1.08] tracking-tight">
              Engenharia para transformar projetos em realidade.
            </h1>

            <p className="text-lg sm:text-xl text-[#E6E6E6]/90 font-normal max-w-2xl leading-relaxed">
              Planejamento, gestão e execução de obras com precisão em cada etapa.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('obras-destaque')}
                className="px-8 py-4 bg-[#F58220] hover:bg-[#F58220]/90 text-[#111111] font-semibold text-sm tracking-wide uppercase transition-colors cursor-pointer"
              >
                Ver obras ↘
              </button>

              <button
                onClick={() => handleNav('/empresa')}
                className="px-7 py-4 border border-white/40 hover:border-white hover:bg-white/10 text-white font-medium text-sm tracking-wide transition-colors cursor-pointer"
              >
                Sobre a Work →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OBRAS EM DESTAQUE (Posição prioritária na Home)
      ======================================================== */}
      <section id="obras-destaque" className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block mb-2">
                Portfólio Selecionado
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                Obras em destaque
              </h2>
            </div>
            <button
              onClick={() => handleNav('/obras')}
              className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              Ver todas as obras
              <span className="text-[#F58220]">↗</span>
            </button>
          </div>

          {/* Obras alternando posições (imagem esquerda/texto direita, depois invertido) */}
          <div className="mt-14 space-y-20">
            {FEATURED_PROJECTS.map((project, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={project.id}
                  onClick={() => handleNav(`/obras/${project.slug}`)}
                  className="group cursor-pointer pb-16 border-b border-[#E6E6E6] last:border-b-0"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Imagem Real ou Placeholder Neutro Sem IA */}
                    <div
                      className={`lg:col-span-7 overflow-hidden aspect-[16/10] bg-[#F7F7F5] border border-[#E6E6E6] ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
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
                          aspect="h-full min-h-[280px]"
                        />
                      )}
                    </div>

                    {/* Conteúdo Institucional Objetivo */}
                    <div
                      className={`lg:col-span-5 space-y-4 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                        {project.nome}
                      </h3>

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

          {/* CTA geral */}
          <div className="pt-8 text-center">
            <button
              onClick={() => handleNav('/obras')}
              className="px-8 py-4 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Ver todas as obras ↗
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MUNICIPALIDADE / EVOLUÇÃO DA OBRA
      ======================================================== */}
      <MunicipalidadeEvolution />

      {/* ========================================================
          4. SERVIÇOS (Resumo Objetivo — Referência Magma)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block mb-2">
                Atuação da Construtora
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                Nossos Serviços
              </h2>
            </div>
            <button
              onClick={() => handleNav('/servicos')}
              className="text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              Conheça nossos serviços
              <span className="text-[#F58220]">↗</span>
            </button>
          </div>

          {/* Blocos Objetivos de Serviços (Fotos Reais + Título + Resumo Literal + Link) */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Serviço 01 */}
            <div
              onClick={() => handleNav('/servicos')}
              className="group cursor-pointer flex flex-col justify-between bg-[#F7F7F5] border border-[#E6E6E6] hover:border-[#F58220] transition-all"
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
              className="group cursor-pointer flex flex-col justify-between bg-[#F7F7F5] border border-[#E6E6E6] hover:border-[#F58220] transition-all"
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
              className="group cursor-pointer flex flex-col justify-between bg-[#F7F7F5] border border-[#E6E6E6] hover:border-[#F58220] transition-all"
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
          5. EMPRESA (Conteúdo distribuído em blocos + fotos reais)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block mb-2">
                Institucional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
                A Work Construtora
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#111111]/75 max-w-md leading-relaxed">
              Criada em 2022, a Work Construtora atua no setor da construção civil com o propósito de oferecer soluções eficientes e de qualidade para obras e reformas.
            </p>
          </div>

          {/* Bloco 1: História & Atuação Integrada (Com foto real da obra, sem fotos geradas por IA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 overflow-hidden aspect-[4/3] bg-[#E6E6E6] border border-[#E6E6E6]">
              <img
                src={execucaoImg}
                alt="Execução da obra da Work Construtora"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
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

          {/* Bloco 2: Equipe Técnica Confirmada (Composição simples: monograma + nome + cargo) */}
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
              {/* Tarek Abdulmassih */}
              <div className="p-6 bg-white border border-[#E6E6E6] flex gap-4 items-center">
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
              <div className="p-6 bg-white border border-[#E6E6E6] flex gap-4 items-center">
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
              <div className="p-6 bg-white border border-[#E6E6E6] flex gap-4 items-center">
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
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#111111] hover:text-[#F58220] transition-colors border-b border-[#111111] hover:border-[#F58220] pb-1 cursor-pointer"
              >
                Conheça a trajetória completa da Work ↗
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. REDES SOCIAIS / CONTATO (Área visualmente forte, sem formulário)
      ======================================================== */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block mb-2">
                Fale com a Construtora
              </span>
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
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  WhatsApp Oficial
                </span>
                <h4 className="text-xl font-heading font-semibold text-[#111111]">
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
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  E-mail Direto
                </span>
                <h4 className="text-base font-heading font-semibold text-[#111111] truncate">
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

            {/* Instagram - Ação temporariamente oculta */}
            <div className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  Instagram Oficial
                </span>
                <h4 className="text-xl font-heading font-semibold text-[#111111]">
                  Work Construtora
                </h4>
                <p className="text-xs text-[#111111]/70 leading-relaxed">
                  Acompanhe fotos e registros das nossas obras e projetos em Belém.
                </p>
              </div>
            </div>

            {/* Endereço & Mapa */}
            <a
              href="https://maps.google.com/?q=Tv.+Dom+Romualdo+de+Seixas,+567+-+Umarizal,+Belém+-+PA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E6] hover:border-[#F58220] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  Escritório em Belém
                </span>
                <h4 className="text-base font-heading font-semibold text-[#111111]">
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

          {/* Faixa Visual com Registros Reais de Canteiro */}
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]/60">
                Registros do Canteiro de Obras
              </span>
              <span className="text-xs font-medium text-[#111111]/50">
                Fotos reais da obra — Belém / PA
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-[#F7F7F5] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={fundacaoImg}
                  alt="Fundação de obra Work"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-[#F7F7F5] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={estruturaImg}
                  alt="Estrutura de edifício Work"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-[#F7F7F5] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={execucaoImg}
                  alt="Execução de fachada Work"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-[#F7F7F5] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={finalImg}
                  alt="Edifício finalizado Work"
                  className="w-full h-full object-cover img-editorial"
                  style={{ objectPosition: 'center 18%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
