import React, { useState } from 'react';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';

interface StepData {
  num: string;
  fraction: string;
  titulo: string;
  lead: string;
  descricao: string;
  imagem: string;
  statusTag: string;
  metricLabel: string;
  metricValue: string;
  indicador: string;
  objectPosition?: string;
}

const STEPS: StepData[] = [
  {
    num: '01',
    fraction: '01 / 03',
    titulo: 'PLANEJAR',
    lead: 'Toda obra começa antes da execução.',
    descricao:
      'Planejamento de etapas, cronograma e diretrizes para o início dos trabalhos.',
    imagem: fundacaoImg,
    statusTag: 'PROJETO E DIRETRIZES',
    metricLabel: 'CRONOGRAMA INICIAL',
    metricValue: 'Definição de fases e suprimentos',
    indicador: 'Início da Mobilização'
  },
  {
    num: '02',
    fraction: '02 / 03',
    titulo: 'CONSTRUIR',
    lead: 'Estruturação e execução no canteiro.',
    descricao:
      'Acompanhamento direto no canteiro de obras e controle de materiais.',
    imagem: estruturaImg,
    statusTag: 'CANTEIRO ATIVO',
    metricLabel: 'ACOMPANHAMENTO TÉCNICO',
    metricValue: 'Gestão contínua das etapas',
    indicador: 'Execução Estrutural'
  },
  {
    num: '03',
    fraction: '03 / 03',
    titulo: 'ENTREGAR',
    lead: 'Acabamentos e finalização.',
    descricao:
      'Atenção aos acabamentos finais e entrega formal da obra concluída.',
    imagem: finalImg,
    statusTag: 'OBRA FINALIZADA',
    metricLabel: 'FINALIZAÇÃO',
    metricValue: 'Acabamentos e entrega',
    indicador: 'Conclusão',
    objectPosition: 'center 18%'
  }
];

export const EngineeringInMotion: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const step = STEPS[activeStep];

  return (
    <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#1A1A1A] text-white border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#2A2A2A]">
          <div>
            <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
              MÉTODO WORK
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
              Prédio Municipalidade — Evolução da Obra
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#E6E6E6]/80 max-w-md font-sans leading-relaxed">
            Acompanhamento das etapas construtivas no canteiro de obras.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#F58220] tracking-widest uppercase block">
                {step.fraction} · {step.statusTag}
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white">
                {step.titulo}
              </h3>
              <p className="text-lg text-white/90 font-light">
                {step.lead}
              </p>
              <p className="text-sm text-[#E6E6E6]/80 leading-relaxed font-sans pt-2">
                {step.descricao}
              </p>
            </div>

            <div className="pt-6 border-t border-[#2A2A2A]">
              <div className="flex justify-between items-center text-xs text-[#E6E6E6]/60 mb-2 font-mono">
                <span>ETAPAS DA OBRA</span>
                <span>{step.indicador}</span>
              </div>
              <div className="h-1 bg-[#2A2A2A] w-full overflow-hidden">
                <div
                  className="h-full bg-[#F58220] transition-all duration-500 ease-out"
                  style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              {STEPS.map((s, idx) => (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-3 px-4 border text-left transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'border-[#F58220] bg-white/5 text-white'
                      : 'border-[#2A2A2A] text-[#E6E6E6]/60 hover:border-[#E6E6E6]/40 hover:text-white'
                  }`}
                >
                  <span className="block text-[10px] font-mono text-[#F58220] mb-0.5">
                    {s.num}
                  </span>
                  <span className="text-xs font-sans uppercase tracking-wider font-semibold">
                    {s.titulo}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-[#111111] overflow-hidden border border-[#2A2A2A]">
              <img
                src={step.imagem}
                alt={step.titulo}
                className="w-full h-full object-cover img-editorial"
                style={{ objectPosition: step.objectPosition || 'center' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
