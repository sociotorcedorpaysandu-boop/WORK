import React, { useState, useEffect, useRef } from 'react';
import municipalidadePlanejar from '@/src/assets/images/municipalidade_planejar_1790334529178.jpg';
import municipalidadeConstruir from '@/src/assets/images/municipalidade_construir_1790334539473.jpg';
import municipalidadeEntregar from '@/src/assets/images/municipalidade_entregar_1790334549340.jpg';

interface StepData {
  num: string;
  fraction: string;
  titulo: string;
  lead: string;
  descricao: string;
  image: string;
  labelEtapa: string;
}

const STEPS: StepData[] = [
  {
    num: '01',
    fraction: '01 / 03',
    titulo: 'PLANEJAR',
    lead: 'Toda obra começa antes da execução.',
    descricao:
      'Compatibilização de disciplinas complementares, análise geotécnica, orçamentação paramétrica e cronograma executivo. O planejamento prévio elimina retrabalhos e blinda o investimento.',
    image: municipalidadePlanejar,
    labelEtapa: 'PRÉ-CONSTRUÇÃO'
  },
  {
    num: '02',
    fraction: '02 / 03',
    titulo: 'CONSTRUIR',
    lead: 'Gestão, engenharia e execução trabalhando de forma integrada.',
    descricao:
      'Acompanhamento diário no canteiro, ensaios tecnológicos de concreto e aço, controle rigoroso de suprimentos e segurança do trabalho sob as mais estritas normas da engenharia brasileira.',
    image: municipalidadeConstruir,
    labelEtapa: 'CANTEIRO & EXECUÇÃO'
  },
  {
    num: '03',
    fraction: '03 / 03',
    titulo: 'ENTREGAR',
    lead: 'Do planejamento à entrega.',
    descricao:
      'Vistorias pormenorizadas, comissionamento de sistemas prediais, elaboração de as-built e entrega de chaves com conformidade técnica irretocável.',
    image: municipalidadeEntregar,
    labelEtapa: 'CONCLUSÃO & OPERAÇÃO'
  }
];

export const EngineeringInMotion: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll progression through the section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const progress = -rect.top / totalHeight;
      if (progress < 0.33) {
        setActiveStep(0);
      } else if (progress < 0.68) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#111111] text-white py-24 lg:py-32 relative border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#2A2A2A]">
          <div>
            <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
              MÉTODO & RIGOR
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.05] tracking-tight">
              Engineering in Motion
            </h2>
          </div>
          <div className="text-right">
            <span className="font-mono text-sm tracking-widest text-[#F58220] font-semibold">
              {STEPS[activeStep].fraction}
            </span>
            <p className="text-xs text-[#E6E6E6]/60 mt-1 uppercase tracking-widest">
              Prédio Municipalidade — Estudo de Caso
            </p>
          </div>
        </div>

        {/* Desktop Sticky Scroll Experience */}
        <div ref={containerRef} className="hidden lg:block relative mt-16 min-h-[160vh]">
          <div className="sticky top-28 grid grid-cols-12 gap-12 items-center">
            {/* Left Narrative Stepper */}
            <div className="col-span-5 flex flex-col justify-between h-[480px]">
              {/* Stepper Selection */}
              <div className="space-y-8">
                {STEPS.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  return (
                    <button
                      key={step.num}
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left transition-all duration-300 group cursor-pointer focus-visible:outline-none ${
                        isCurrent ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <span
                          className={`font-mono text-xs font-semibold tracking-wider transition-colors ${
                            isCurrent ? 'text-[#F58220]' : 'text-[#E6E6E6]/60'
                          }`}
                        >
                          {step.num}
                        </span>
                        <div
                          className={`h-[1px] transition-all duration-500 ${
                            isCurrent ? 'w-12 bg-[#F58220]' : 'w-4 bg-white/20'
                          }`}
                        />
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#E6E6E6]/60 font-sans">
                          {step.labelEtapa}
                        </span>
                      </div>
                      <h3 className="font-editorial text-3xl text-white font-normal tracking-tight">
                        {step.titulo}
                      </h3>
                      {isCurrent && (
                        <div className="mt-3 pl-8 border-l border-[#F58220]/40">
                          <p className="text-[#F58220] text-sm font-medium mb-2">
                            {step.lead}
                          </p>
                          <p className="text-xs text-[#E6E6E6]/80 leading-relaxed max-w-sm">
                            {step.descricao}
                          </p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="pt-6 border-t border-[#2A2A2A]">
                <div className="flex justify-between items-center text-xs text-[#E6E6E6]/60 mb-2 font-mono">
                  <span>PROGRESSO METODOLÓGICO</span>
                  <span className="text-[#F58220] font-semibold">{STEPS[activeStep].fraction}</span>
                </div>
                <div className="w-full h-1 bg-[#2A2A2A] overflow-hidden">
                  <div
                    className="h-full bg-[#F58220] transition-all duration-500 ease-out"
                    style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right Architectural Image Canvas */}
            <div className="col-span-7">
              <div className="relative aspect-[16/10] bg-[#181818] overflow-hidden border border-[#2A2A2A]">
                {STEPS.map((step, idx) => (
                  <div
                    key={step.num}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeStep === idx
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={`Obra Municipalidade - ${step.titulo}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <span className="text-[#F58220] text-[10px] font-mono tracking-widest uppercase block mb-1">
                          REGISTRO TÉCNICO // {step.labelEtapa}
                        </span>
                        <p className="text-white text-lg font-editorial">
                          Prédio Municipalidade — {step.titulo}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-[#E6E6E6]/70">
                        WORK / {step.num}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Narrative */}
        <div className="lg:hidden mt-12 space-y-16">
          {STEPS.map((step) => (
            <div key={step.num} className="space-y-5">
              <div className="relative aspect-[16/10] bg-[#181818] overflow-hidden border border-[#2A2A2A]">
                <img
                  src={step.image}
                  alt={`Obra Municipalidade - ${step.titulo}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-[#F58220] text-xs font-mono font-semibold">
                    {step.fraction}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-white/70">
                    {step.labelEtapa}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#F58220] font-mono text-xs font-semibold">
                    {step.num}
                  </span>
                  <div className="h-[1px] w-8 bg-[#F58220]" />
                  <h3 className="font-editorial text-2xl text-white font-normal">
                    {step.titulo}
                  </h3>
                </div>
                <p className="text-[#F58220] text-sm font-medium mb-2 pl-4 border-l border-[#F58220]/40">
                  {step.lead}
                </p>
                <p className="text-xs text-[#E6E6E6]/80 leading-relaxed pl-4">
                  {step.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
