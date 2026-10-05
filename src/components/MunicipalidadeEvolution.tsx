import React, { useState } from 'react';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';

interface Stage {
  id: string;
  nome: string;
  subtitulo: string;
  descricao: string;
  imagem: string;
  objectPosition?: string;
}

const STAGES: Stage[] = [
  {
    id: 'fundacao',
    nome: 'Fundação',
    subtitulo: 'Etapa inicial da obra',
    descricao: 'Etapas iniciais da execução e preparação da base da edificação.',
    imagem: fundacaoImg,
    objectPosition: 'center 50%'
  },
  {
    id: 'estrutura',
    nome: 'Estrutura',
    subtitulo: 'Desenvolvimento dos pavimentos',
    descricao: 'Evolução da estrutura e desenvolvimento dos pavimentos.',
    imagem: estruturaImg,
    objectPosition: 'center 25%'
  },
  {
    id: 'execucao',
    nome: 'Execução',
    subtitulo: 'Avanço construtivo',
    descricao: 'Continuidade dos serviços e avanço das etapas construtivas.',
    imagem: execucaoImg,
    objectPosition: 'center 30%'
  },
  {
    id: 'resultado',
    nome: 'Projeto final',
    subtitulo: 'Edifício concluído',
    descricao: 'Visualização do resultado final do empreendimento.',
    imagem: finalImg,
    objectPosition: 'center 18%'
  }
];

export const MunicipalidadeEvolution: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        {/* Main Stage Presentation (Foto Real Grande Enquadrada + Texto Objetivo) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Photo Enquadrada */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-[#E6E6E6] overflow-hidden border border-[#E6E6E6] group">
              <img
                src={current.imagem}
                alt={`Prédio Municipalidade — ${current.nome}`}
                className="w-full h-full object-cover img-editorial transition-all duration-300"
                style={{ objectPosition: current.objectPosition || 'center' }}
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 border border-[#E6E6E6] text-xs font-medium text-[#111111] shadow-xs">
                {current.nome}
              </div>

              {/* Ação para ver foto completa */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-4 right-4 bg-white/95 hover:bg-white px-3 py-1.5 border border-[#E6E6E6] text-xs font-medium text-[#111111] hover:text-[#F58220] transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                title="Ampliar foto completa da obra"
              >
                <span>Ampliar foto</span>
                <span>↗</span>
              </button>
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
                      style={{ objectPosition: s.objectPosition || 'center' }}
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

      {/* Modal de foto completa */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 bg-[#111111]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white border border-[#E6E6E6] p-4 flex flex-col items-center shadow-2xl"
          >
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#E6E6E6]">
              <div>
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  Prédio Municipalidade — {current.nome}
                </span>
                <p className="text-xs text-[#111111]/70">{current.subtitulo}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Fechar ✕
              </button>
            </div>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-[#F7F7F5] border border-[#E6E6E6]">
              <img
                src={current.imagem}
                alt={`Prédio Municipalidade — ${current.nome}`}
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
