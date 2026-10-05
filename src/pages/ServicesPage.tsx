import React from 'react';
import { SERVICES } from '@/src/data/services';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block">
            Serviços de Engenharia
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-[#111111] leading-tight tracking-tight max-w-4xl">
            Soluções completas para cada etapa da obra
          </h1>

          <p className="text-base sm:text-lg text-[#111111]/75 max-w-2xl leading-relaxed">
            Atuamos no planejamento, gestão e execução de obras e projetos de engenharia, oferecendo soluções em construção civil, Built to Suit e projetos complementares.
          </p>
        </div>
      </section>

      {/* Serviço 01: Construção e Administração */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-[#E6E6E6]">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                  Construção Civil
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                  {SERVICES[0].titulo}
                </h2>
              </div>

              <div className="space-y-3 text-base text-[#111111]/80 leading-relaxed">
                {SERVICES[0].paragrafos?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                )) || <p>{SERVICES[0].descricao}</p>}
              </div>

              {/* Detalhamento do Escopo */}
              <div className="pt-4 border-t border-[#E6E6E6] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]/60 block">
                  Escopo de Atuação
                </span>
                <ul className="space-y-2 text-sm text-[#111111]/85">
                  {SERVICES[0].detalhes?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#F58220] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/contato')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:text-[#F58220] transition-colors pb-1 border-b border-[#111111] hover:border-[#F58220] cursor-pointer"
                >
                  Solicitar proposta para obra ↗
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] bg-[#F7F7F5] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={estruturaImg}
                  alt="Execução de obra Work Construtora"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviço 02: Built to Suit (BTS) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                  Solução Imobiliária
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                  {SERVICES[1].titulo}
                </h2>
              </div>

              <div className="space-y-3 text-base text-[#111111]/80 leading-relaxed">
                {SERVICES[1].paragrafos?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                )) || <p>{SERVICES[1].descricao}</p>}
              </div>

              {/* Etapas do Ciclo BTS */}
              <div className="pt-4 border-t border-[#E6E6E6] space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]/60 block">
                  Etapas do Ciclo Built to Suit
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SERVICES[1].fluxo?.map((f) => (
                    <div key={f.etapa} className="p-4 bg-white border border-[#E6E6E6]">
                      <span className="text-xs font-semibold text-[#F58220] block mb-1">
                        Etapa {f.etapa}
                      </span>
                      <span className="text-xs font-semibold tracking-wider text-[#111111]">
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/contato')}
                  className="px-6 py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Consultar sobre Built to Suit ↗
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-white overflow-hidden border border-[#E6E6E6]">
                <img
                  src={finalImg}
                  alt="Empreendimento corporativo Work"
                  className="w-full h-full object-cover img-editorial"
                  style={{ objectPosition: 'center 18%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviço 03: Projetos de Engenharia */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
              Disciplinas Complementares
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111]">
              Projetos de Engenharia
            </h2>
            <p className="text-base text-[#111111]/75 leading-relaxed">
              Desenvolvimento de projetos complementares para apoiar o planejamento e a execução da obra.
            </p>
          </div>

          {/* Grid de 4 Projetos Complementares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES[2].escopos?.map((escopo) => (
              <div key={escopo.nome} className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] space-y-2">
                <h3 className="text-2xl font-heading font-semibold text-[#111111]">
                  Projeto {escopo.nome}
                </h3>
                <p className="text-sm text-[#111111]/75 leading-relaxed">
                  {escopo.descricao}
                </p>
              </div>
            ))}
          </div>

          {/* Imagem Técnica Complementar - Foto Real da Obra */}
          <div className="relative aspect-[21/9] bg-[#F7F7F5] overflow-hidden border border-[#E6E6E6]">
            <img
              src={execucaoImg}
              alt="Execução e projetos de engenharia no canteiro"
              className="w-full h-full object-cover img-editorial"
              loading="lazy"
            />
          </div>
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
              Apresente suas diretrizes ou projeto arquitetônico para análise técnica da Work.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="px-8 py-4 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Fale com nossos engenheiros ↗
          </button>
        </div>
      </section>
    </div>
  );
};
