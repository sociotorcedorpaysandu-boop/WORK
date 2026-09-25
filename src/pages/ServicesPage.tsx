import React from 'react';
import { SERVICES } from '@/src/data/services';
import heroWorkSite from '@/src/assets/images/hero_work_construction_1790334457107.jpg';
import edsonCorporateImg from '@/src/assets/images/edson_corporate_building_1790334474133.jpg';
import municipalidadeConstruir from '@/src/assets/images/municipalidade_construir_1790334539473.jpg';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono text-[#111111]/50 mb-6">
            <span className="text-[#F58220] font-semibold">02</span>
            <span>·</span>
            <span>CAPACIDADE TÉCNICA</span>
            <span>·</span>
            <span>SERVIÇOS DE ENGENHARIA</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-[1.05] tracking-tight max-w-4xl balance">
            Engenharia integrada <br />
            <span className="text-[#F58220] italic">para cada etapa.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#111111]/80 font-light max-w-2xl leading-relaxed">
            Atuamos da viabilidade técnica e orçamentária até a entrega formal das chaves,
            oferecendo soluções completas em construção civil, Built to Suit e projetos
            complementares.
          </p>
        </div>
      </section>

      {/* Serviço 01: Construção e Administração */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-[#E6E6E6]">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-3xl text-[#F58220] font-semibold">01</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                  CONSTRUÇÃO CIVIL
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl text-[#111111] font-normal leading-tight">
                {SERVICES[0].titulo}
              </h2>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                {SERVICES[0].descricao}
              </p>

              {/* Detalhamento com linhas discretas */}
              <div className="pt-6 border-t border-[#E6E6E6] space-y-3">
                <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block font-semibold">
                  ESCOPO DE ATUAÇÃO
                </span>
                <ul className="space-y-2.5 text-sm text-[#111111]/85">
                  {SERVICES[0].detalhes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#F58220] font-mono text-xs mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNav('/contato')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer"
                >
                  Solicitar proposta para obra ↗
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] bg-[#F2F2EF] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={heroWorkSite}
                  alt="Execução de obra Work Construtora"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-2 border border-[#E6E6E6] text-xs font-mono text-[#111111]">
                  CANTEIRO ATIVO // RIGOR EXECUTIVO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviço 02: Built to Suit (BTS) - Fundo Escuro Estratégico */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#111111] text-white border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-3xl text-[#F58220] font-semibold">02</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E6E6E6]/60">
                  MODELO CORPORATIVO BTS
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                Built to Suit <br />
                <span className="text-[#F58220] italic">Engenharia sob medida.</span>
              </h2>
              <p className="text-base text-[#E6E6E6]/80 leading-relaxed font-light">
                {SERVICES[1].descricao}
              </p>

              {/* Fluxo BTS */}
              <div className="pt-6 border-t border-[#2A2A2A]">
                <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block mb-4">
                  ETAPAS DO CICLO BUILT TO SUIT
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SERVICES[1].fluxo?.map((f) => (
                    <div key={f.etapa} className="p-4 bg-[#181818] border border-[#2A2A2A]">
                      <span className="font-mono text-xs text-[#F58220] block mb-1">
                        {f.etapa}
                      </span>
                      <span className="text-xs font-semibold tracking-wider text-white">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNav('/contato')}
                  className="px-6 py-3.5 bg-[#F58220] hover:bg-[#F58220]/90 text-[#111111] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  Consultar viabilidade BTS ↗
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-[#181818] overflow-hidden border border-[#2A2A2A]">
                <img
                  src={edsonCorporateImg}
                  alt="Edson Corporate - Empreendimento BTS"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-sm p-4 border border-[#2A2A2A] flex justify-between items-center text-xs">
                  <div>
                    <span className="font-mono text-[#F58220] block font-semibold">EDSON CORPORATE</span>
                    <span className="text-white/70">Modelo BTS para empresa consolidada</span>
                  </div>
                  <span className="font-mono text-white/50">BELÉM / PA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviço 03: Projetos de Engenharia */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="pb-16 border-b border-[#E6E6E6]">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-mono text-3xl text-[#F58220] font-semibold">03</span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#111111]/50">
                DISCIPLINAS TÉCNICAS
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-tight">
              Projetos de Engenharia
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#111111]/80 max-w-2xl font-light">
              Compatibilização detalhada de engenharia complementar para assegurar segurança,
              aprovação célere nos órgãos competentes e ausência de retrabalho na obra.
            </p>
          </div>

          {/* Grid de 4 Projetos Separados por Linhas Rigorosas (Sem Ícones) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {SERVICES[2].escopos?.map((escopo, idx) => (
              <div key={escopo.nome} className="pb-8 border-b border-[#E6E6E6] space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#F58220] font-semibold">
                    03.{idx + 1}
                  </span>
                  <div className="h-[1px] w-6 bg-[#F58220]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/40">
                    DISCIPLINA
                  </span>
                </div>
                <h3 className="font-editorial text-3xl text-[#111111] font-normal">
                  Projeto {escopo.nome}
                </h3>
                <p className="text-sm text-[#111111]/75 leading-relaxed pt-1">
                  {escopo.descricao}
                </p>
              </div>
            ))}
          </div>

          {/* Imagem Técnica Complementar */}
          <div className="mt-16 relative aspect-[21/9] bg-[#F2F2EF] overflow-hidden border border-[#E6E6E6]">
            <img
              src={municipalidadeConstruir}
              alt="Engenharia e compatibilização estrutural"
              className="w-full h-full object-cover img-editorial"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent flex items-center p-8 md:p-16">
              <div className="max-w-md text-white">
                <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block mb-2 font-semibold">
                  INTEGRAÇÃO BIM
                </span>
                <p className="font-editorial text-2xl sm:text-3xl font-light">
                  Todos os projetos compatibilizados antes da primeira concretagem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-editorial text-4xl text-[#111111] font-normal leading-tight">
              Precisa de consultoria ou orçamento para seu projeto?
            </h2>
            <p className="text-sm text-[#111111]/70 mt-2">
              Apresente suas diretrizes ou projeto arquitetônico para análise técnica da Work.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="px-8 py-4 bg-[#111111] text-white hover:bg-[#F58220] hover:text-[#111111] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer whitespace-nowrap"
          >
            Fale com nossos engenheiros ↗
          </button>
        </div>
      </section>
    </div>
  );
};
