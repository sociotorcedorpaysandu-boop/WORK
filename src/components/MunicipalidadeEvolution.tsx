import React, { useState } from 'react';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_1790992233978.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_1790992243499.jpg';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_1790992253931.jpg';
import finalImg from '@/src/assets/images/municipalidade_final_1790992266785.jpg';

interface Stage {
  id: string;
  nome: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
}

const STAGES: Stage[] = [
  {
    id: 'fundacao',
    nome: 'Fundação',
    subtitulo: 'Etapa inicial da obra',
    descricao: 'Etapas iniciais da execução e preparação da base da edificação.',
    imagem: fundacaoImg
  },
  {
    id: 'estrutura',
    nome: 'Estrutura',
    subtitulo: 'Desenvolvimento dos pavimentos',
    descricao: 'Evolução da estrutura e desenvolvimento dos pavimentos.',
    imagem: estruturaImg
  },
  {
    id: 'execucao',
    nome: 'Execução',
    subtitulo: 'Avanço construtivo',
    descricao: 'Continuidade dos serviços e avanço das etapas construtivas.',
    imagem: execucaoImg
  },
  {
    id: 'resultado',
    nome: 'Projeto final',
    subtitulo: 'Edifício concluído',
    descricao: 'Visualização do resultado final do empreendimento.',
    imagem: finalImg
  }
];

export const MunicipalidadeEvolution: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const current = STAGES[activeStage];

  return (
    <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E6E6E6]">
          <div>
            <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block mb-2">
              Acompanhamento de Obra
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#111111] font-semibold tracking-tight">
              Prédio Municipalidade — Evolução da Obra
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111111]/75 max-w-md leading-relaxed">
            Registro fotográfico das etapas construtivas da obra realizada pela Work Construtora em Belém.
          </p>
        </div>

        {/* Stage Selector Tabs (Sem numeração decorativa, claro e direto) */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 border-b border-[#E6E6E6] pb-4">
          {STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`px-4 sm:px-5 py-2.5 text-sm sm:text-base font-medium transition-all cursor-pointer border-b-2 -mb-[18px] focus-visible:outline-none ${
                  isActive
                    ? 'border-[#F58220] text-[#111111] font-semibold bg-white shadow-xs'
                    : 'border-transparent text-[#111111]/60 hover:text-[#111111] hover:border-[#111111]/30'
                }`}
              >
                {stage.nome}
              </button>
            );
          })}
        </div>

        {/* Main Stage Presentation (Foto Real Grande + Texto Objetivo) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Photo */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#E6E6E6] overflow-hidden border border-[#E6E6E6]">
              <img
                src={current.imagem}
                alt={`Prédio Municipalidade — ${current.nome}`}
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 border border-[#E6E6E6] text-xs font-medium text-[#111111]">
                {current.nome}
              </div>
            </div>
          </div>

          {/* Stage Details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                {current.nome}
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111] leading-tight">
                {current.subtitulo}
              </h3>
              <p className="text-sm sm:text-base text-[#111111]/75 leading-relaxed">
                {current.descricao}
              </p>
            </div>

            {/* Stage Navigation & Thumbnails */}
            <div className="pt-6 border-t border-[#E6E6E6] space-y-4">
              <span className="text-xs font-medium text-[#111111]/60 block uppercase tracking-wider">
                Todas as fases da obra
              </span>
              <div className="grid grid-cols-4 gap-2">
                {STAGES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStage(idx)}
                    className={`relative aspect-[4/3] overflow-hidden border-2 transition-all cursor-pointer ${
                      activeStage === idx
                        ? 'border-[#F58220] opacity-100 ring-2 ring-[#F58220]/20'
                        : 'border-[#E6E6E6] opacity-60 hover:opacity-100'
                    }`}
                    title={s.nome}
                  >
                    <img
                      src={s.imagem}
                      alt={s.nome}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-[#111111]/60">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : STAGES.length - 1))}
                  className="hover:text-[#F58220] transition-colors cursor-pointer py-1 font-medium"
                >
                  ← Fase anterior
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev + 1) % STAGES.length)}
                  className="hover:text-[#F58220] transition-colors cursor-pointer py-1 font-medium"
                >
                  Próxima fase →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
