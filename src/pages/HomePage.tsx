import React from 'react';
import heroWorkSite from '@/src/assets/images/hero_work_construction_1790334457107.jpg';
import teamLeadershipImg from '@/src/assets/images/team_leadership_work_1790336814200.jpg';
import { EngineeringInMotion } from '@/src/components/EngineeringInMotion';
import { FEATURED_PROJECTS } from '@/src/data/projects';
import { SERVICES } from '@/src/data/services';

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
    <div className="w-full bg-[#FFFFFF]">
      {/* 01. HERO SECTION */}
      <section className="relative min-h-[94vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 bg-[#111111] text-white overflow-hidden">
        {/* Background Architectural Canvas with subtle scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroWorkSite}
            alt="Canteiro de obras e engenharia estrutural Work Construtora"
            className="w-full h-full object-cover object-center opacity-35 filter brightness-95"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-transparent to-transparent" />
        </div>

        {/* Top Editorial Metadata Banner */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#E6E6E6]/60 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-[#F58220] font-semibold">WORK / 01</span>
            <span>·</span>
            <span>BELÉM — PA</span>
          </div>
          <div className="tracking-[0.25em] uppercase text-[10px] text-white/70">
            ENGINEERING & CONSTRUCTION
          </div>
        </div>

        {/* Main Headline & Supporting Statement */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#F58220]" />
              <span className="text-xs uppercase font-sans tracking-[0.2em] text-[#F58220] font-semibold">
                CONSTRUÇÃO · ADMINISTRAÇÃO · BTS · PROJETOS
              </span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-white balance">
              Engenharia para <br />
              transformar projetos <br />
              em realidade.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#E6E6E6]/85 font-interface font-light max-w-2xl leading-relaxed">
              Planejamento, gestão e execução de obras com precisão em cada etapa.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                onClick={() => scrollToSection('obras-destaque')}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#F58220] hover:bg-[#F58220]/90 text-[#111111] font-sans font-semibold text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer group"
              >
                Ver obras
                <span className="text-sm transition-transform group-hover:translate-y-0.5">
                  ↘
                </span>
              </button>

              <button
                onClick={() => handleNav('/empresa')}
                className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 hover:border-white text-white font-sans text-xs tracking-[0.16em] uppercase transition-colors cursor-pointer"
              >
                Sobre a Work
                <span className="text-[#F58220]">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hero Trust Metrics / Location Marker */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#E6E6E6]/60">
          <div className="flex items-center gap-6">
            <span>SEDE BELÉM / PA</span>
            <span aria-hidden="true">·</span>
            <span>OBRAS E PROJETOS</span>
          </div>
          <div className="font-mono text-[#F58220]">
            EST. 2022
          </div>
        </div>
      </section>

      {/* 02. INTRODUÇÃO (Composição Editorial com Espaço em Branco) */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
                02 / FILOSOFIA
              </span>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.08] tracking-tight max-w-3xl">
                Construir não começa no canteiro. <br />
                <span className="text-[#F58220] italic">Começa com planejamento.</span>
              </h2>

              <div className="pt-4 border-t border-[#E6E6E6] max-w-2xl">
                <p className="text-lg text-[#111111]/80 leading-relaxed font-interface font-normal">
                  A Work integra gestão, engenharia e execução para transformar projetos em
                  resultados concretos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ENGINEERING IN MOTION (Seção Central Sticky) */}
      <EngineeringInMotion />

      {/* 04. SERVIÇOS (Três Capítulos Distintos em Fundo Neutro Claro) */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#E6E6E6]">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                O QUE FAZEMOS
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.05] tracking-tight">
                Da estratégia <br />
                ao canteiro.
              </h2>
            </div>
            <div>
              <button
                onClick={() => handleNav('/servicos')}
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer inline-flex items-center gap-1.5"
              >
                Conheça todos os serviços
                <span className="text-[#F58220]">↗</span>
              </button>
            </div>
          </div>

          {/* Three Major Chapters */}
          <div className="mt-16 space-y-20">
            {/* Chapter 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 border-b border-[#E6E6E6]">
              <div className="lg:col-span-2">
                <span className="font-mono text-2xl sm:text-3xl text-[#F58220] font-semibold">
                  01
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                  Construção, administração e desenvolvimento de obras e reformas
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                  Residencial · Comercial · Industrial
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  Execução de obras e reformas residenciais, comerciais e industriais,
                  envolvendo planejamento, cronograma, materiais, mão de obra e controle de
                  qualidade.
                </p>
                <div className="mt-6 pt-4 border-t border-[#E6E6E6]/60 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#111111]/60">
                  <span>· Planejamento e cronograma</span>
                  <span>· Materiais e suprimentos</span>
                  <span>· Controle de qualidade</span>
                </div>
              </div>
            </div>

            {/* Chapter 02 - Built to Suit */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 border-b border-[#E6E6E6]">
              <div className="lg:col-span-2">
                <span className="font-mono text-2xl sm:text-3xl text-[#F58220] font-semibold">
                  02
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                  Built to Suit <br />
                  <span className="text-[#F58220]">BTS</span>
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                  Sob medida para a operação de cada empresa
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base text-[#111111]/80 leading-relaxed">
                  Empreendimentos desenvolvidos sob medida para atender às necessidades
                  específicas da operação de cada empresa.
                </p>

                {/* BTS Flow Line */}
                <div className="mt-8 p-4 bg-white border border-[#E6E6E6]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#F58220] block mb-3 font-semibold">
                    FLUXO DE OPERAÇÃO BTS
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold text-[#111111]">
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-[10px] text-[#F58220]">01</span>
                      <span className="tracking-wider">NECESSIDADE</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-[#E6E6E6]">
                      <span className="font-mono text-[10px] text-[#F58220]">02</span>
                      <span className="tracking-wider">PROJETO</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-[#E6E6E6]">
                      <span className="font-mono text-[10px] text-[#F58220]">03</span>
                      <span className="tracking-wider">CONSTRUÇÃO</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-[#E6E6E6]">
                      <span className="font-mono text-[10px] text-[#F58220]">04</span>
                      <span className="tracking-wider">OPERAÇÃO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 03 - Projetos de Engenharia */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-2">
                <span className="font-mono text-2xl sm:text-3xl text-[#F58220] font-semibold">
                  03
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                  Projetos de Engenharia
                </h3>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                  Disciplinas complementares de engenharia
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="divide-y divide-[#E6E6E6]">
                  {[
                    { nome: 'Hidráulico', desc: 'Instalações prediais de água e esgoto' },
                    { nome: 'Elétrico', desc: 'Instalações e circuitos elétricos prediais' },
                    { nome: 'Estrutural', desc: 'Cálculo e dimensionamento estrutural' },
                    { nome: 'Incêndio', desc: 'Instalações de proteção e combate a incêndio' }
                  ].map((item) => (
                    <div key={item.nome} className="py-3.5 flex justify-between items-baseline gap-4">
                      <span className="font-editorial text-xl text-[#111111] font-medium">
                        {item.nome}
                      </span>
                      <span className="text-xs text-[#111111]/60 text-right">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. OBRAS EM DESTAQUE (PROTAGONISMO FOTOGRÁFICO MÁXIMO) */}
      <section id="obras-destaque" className="py-24 sm:py-36 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                OBRAS SELECIONADAS
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.05] tracking-tight">
                O que construímos <br />
                fala por nós.
              </h2>
            </div>
            <div>
              <button
                onClick={() => handleNav('/obras')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] font-sans font-semibold text-xs tracking-[0.16em] uppercase transition-colors cursor-pointer group"
              >
                Todas as obras
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* Galeria de Grande Escala - Imagens Ampliadas e Textos Secundários Reduzidos */}
          <div className="mt-16 space-y-24">
            {/* Obra 1: Edson Corporate - Grande Panorama Arquitetônico */}
            {FEATURED_PROJECTS[0] && (
              <div
                onClick={() => handleNav(`/obras/${FEATURED_PROJECTS[0].slug}`)}
                className="group cursor-pointer space-y-6"
              >
                <div className="overflow-hidden aspect-[16/9] sm:aspect-[21/10] bg-[#F2F2EF] border border-[#E6E6E6]">
                  <img
                    src={FEATURED_PROJECTS[0].imagemCapa}
                    alt={FEATURED_PROJECTS[0].nome}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#E6E6E6] pb-6">
                  <div>
                    <span className="font-mono text-xs text-[#F58220] block mb-1">
                      01{FEATURED_PROJECTS[0].categoria && FEATURED_PROJECTS[0].categoria !== '—' ? ` · ${FEATURED_PROJECTS[0].categoria}` : ''}{FEATURED_PROJECTS[0].localizacao && FEATURED_PROJECTS[0].localizacao !== '—' ? ` · ${FEATURED_PROJECTS[0].localizacao}` : ''}
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-5xl text-[#111111] font-normal group-hover:text-[#F58220] transition-colors">
                      {FEATURED_PROJECTS[0].nome}
                    </h3>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap">
                    Explorar obra
                    <span className="text-[#F58220]">↗</span>
                  </span>
                </div>
              </div>
            )}

            {/* Obras 2 e 3: Composição Assimétrica Forte com Foco nas Imagens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Vila Nova Corporate - Enquadramento Vertical Imponente */}
              {FEATURED_PROJECTS[1] && (
                <div
                  onClick={() => handleNav(`/obras/${FEATURED_PROJECTS[1].slug}`)}
                  className="lg:col-span-5 group cursor-pointer space-y-5"
                >
                  <div className="overflow-hidden aspect-[3/4] bg-[#F2F2EF] border border-[#E6E6E6]">
                    <img
                      src={FEATURED_PROJECTS[1].imagemCapa}
                      alt={FEATURED_PROJECTS[1].nome}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-b border-[#E6E6E6] pb-4">
                    <span className="font-mono text-xs text-[#F58220] block mb-1">
                      02{FEATURED_PROJECTS[1].categoria && FEATURED_PROJECTS[1].categoria !== '—' ? ` · ${FEATURED_PROJECTS[1].categoria}` : ''}{FEATURED_PROJECTS[1].localizacao && FEATURED_PROJECTS[1].localizacao !== '—' ? ` · ${FEATURED_PROJECTS[1].localizacao}` : ''}
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-normal group-hover:text-[#F58220] transition-colors">
                      {FEATURED_PROJECTS[1].nome}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                      Explorar obra ↗
                    </span>
                  </div>
                </div>
              )}

              {/* Reforma Residencial Salinas - Enquadramento Amplo com Offset */}
              {FEATURED_PROJECTS[2] && (
                <div
                  onClick={() => handleNav(`/obras/${FEATURED_PROJECTS[2].slug}`)}
                  className="lg:col-span-7 group cursor-pointer space-y-5 lg:pt-16"
                >
                  <div className="overflow-hidden aspect-[16/10] bg-[#F2F2EF] border border-[#E6E6E6]">
                    <img
                      src={FEATURED_PROJECTS[2].imagemCapa}
                      alt={FEATURED_PROJECTS[2].nome}
                      className="w-full h-full object-cover img-editorial"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-b border-[#E6E6E6] pb-4">
                    <span className="font-mono text-xs text-[#F58220] block mb-1">
                      03{FEATURED_PROJECTS[2].categoria && FEATURED_PROJECTS[2].categoria !== '—' ? ` · ${FEATURED_PROJECTS[2].categoria}` : ''}{FEATURED_PROJECTS[2].localizacao && FEATURED_PROJECTS[2].localizacao !== '—' ? ` · ${FEATURED_PROJECTS[2].localizacao}` : ''}
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-normal group-hover:text-[#F58220] transition-colors">
                      {FEATURED_PROJECTS[2].nome}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-[#111111] group-hover:text-[#F58220] transition-colors">
                      Explorar obra ↗
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 06. COMO TRABALHAMOS (Linha Visual Contínua de Elevação Arquitetônica) */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="pb-16 border-b border-[#E6E6E6]">
            <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
              MÉTODO DE TRABALHO
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#111111] font-normal leading-tight">
              Linha contínua de precisão.
            </h2>
          </div>

          {/* Continuous Progression Track */}
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px] bg-[#E6E6E6]">
              <div className="h-full bg-[#F58220] w-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {[
                {
                  num: '01',
                  etapa: 'Planejamento',
                  foco: 'Estruturação de etapas e cronograma da obra'
                },
                {
                  num: '02',
                  etapa: 'Gestão',
                  foco: 'Administração de suprimentos e processos'
                },
                {
                  num: '03',
                  etapa: 'Engenharia',
                  foco: 'Desenvolvimento e suporte técnico aos projetos'
                },
                {
                  num: '04',
                  etapa: 'Execução',
                  foco: 'Atuação direta no canteiro e acompanhamento das etapas'
                },
                {
                  num: '05',
                  etapa: 'Entrega',
                  foco: 'Conclusão e entrega formal do empreendimento'
                }
              ].map((step) => (
                <div key={step.num} className="pt-8 relative">
                  <div className="hidden lg:block absolute top-[18px] left-0 w-3 h-3 rounded-full bg-[#F58220] border-2 border-white shadow-sm" />
                  
                  <span className="font-mono text-sm text-[#F58220] font-semibold block mb-2">
                    {step.num}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#111111] font-normal mb-2">
                    {step.etapa}
                  </h3>
                  <p className="text-xs text-[#111111]/70 leading-relaxed">
                    {step.foco}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. EMPRESA / EQUIPE (Composição Editorial com Fotografia Real de Liderança) */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Lado Esquerdo: Fotografia Editorial de Liderança */}
            <div className="lg:col-span-6 overflow-hidden aspect-[4/3] bg-[#F2F2EF] border border-[#E6E6E6]">
              <img
                src={teamLeadershipImg}
                alt="Liderança da Work Construtora em planejamento"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
            </div>

            {/* Lado Direito: Declaração Institucional */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block">
                LIDERANÇA & CORPO TÉCNICO
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.08] tracking-tight">
                Engenharia é feita <br />
                <span className="text-[#F58220] italic">por pessoas.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#111111]/80 leading-relaxed font-interface font-normal max-w-xl">
                Na Work, gestão, planejamento e engenharia atuam de forma integrada em
                todas as etapas da obra.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <button
                  onClick={() => handleNav('/empresa')}
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] font-sans font-semibold text-xs tracking-[0.16em] uppercase transition-colors cursor-pointer group"
                >
                  Conheça a equipe
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FINAL CTA (Fundo Laranja de Alto Impacto) */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#F58220] text-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold block mb-4">
              NOVO EMPREENDIMENTO
            </span>
            <h2 className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-tight text-[#111111] balance">
              Vamos construir <br />
              o próximo projeto?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[#111111]/85 font-interface max-w-xl">
              Entre em contato com a equipe da Work Construtora para apresentar seu projeto ou solicitação de obra.
            </p>
          </div>

          <div>
            <button
              onClick={() => handleNav('/contato')}
              className="inline-flex items-center gap-3 px-8 py-5 bg-[#111111] hover:bg-[#181818] text-white font-sans font-semibold text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer group shadow-xl"
            >
              Fale com a Work
              <span className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
