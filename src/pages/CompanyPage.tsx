import React from 'react';
import { COMPANY_INFO } from '@/src/data/company';
import { TEAM } from '@/src/data/team';
import motionEngineeringImg from '@/src/assets/images/engineering_in_motion_site_1790334507218.jpg';

interface CompanyPageProps {
  onNavigate: (path: string) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate }) => {
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
            <span className="text-[#F58220] font-semibold">01</span>
            <span>·</span>
            <span>INSTITUCIONAL</span>
            <span>·</span>
            <span>BELÉM / PA</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-[1.05] tracking-tight max-w-4xl balance">
            Construir exige <br />
            <span className="text-[#F58220] italic">mais do que executar.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#111111]/80 font-light max-w-2xl leading-relaxed">
            {COMPANY_INFO.resumo}
          </p>
        </div>
      </section>

      {/* História, Contexto e Imagem Fotográfica */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block">
                ORIGEM & POSICIONAMENTO
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl text-[#111111] font-normal leading-tight">
                Engenharia de precisão com raízes no Pará.
              </h2>
              <div className="space-y-4 text-base text-[#111111]/80 leading-relaxed">
                <p>
                  Fundada em 2022 na capital paraense, a Work Construtora nasceu da convicção
                  de que a construção civil contemporânea exige uma convergência direta entre
                  rigor gerencial e capacidade técnica in loco.
                </p>
                <p>
                  Comandada por profissionais de sólida formação administrativa e técnica, a
                  empresa opera com metodologias que transformam projetos desafiadores em
                  empreendimentos perfeitamente orçados, com cronogramas cumpridos e
                  acabamento impecável.
                </p>
                <p>
                  Atuamos nos segmentos comercial, corporativo, residencial de alto padrão e
                  institucional, além do modelo de Built to Suit para operações empresariais
                  estratégicas em Belém e região metropolitana.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-[#F2F2EF] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={motionEngineeringImg}
                  alt="Engenharia e gestão técnica da Work Construtora"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 border border-[#E6E6E6] flex justify-between items-center text-xs">
                  <div>
                    <span className="font-mono text-[#F58220] block font-semibold">WORK / CANTEIRO</span>
                    <span className="text-[#111111]/70">Supervisão técnica contínua</span>
                  </div>
                  <span className="font-mono text-[#111111]/40">BELÉM — PA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Institucionais */}
      <section className="py-24 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="pb-16 border-b border-[#E6E6E6]">
            <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
              VALORES FUNDAMENTAIS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#111111] font-normal leading-tight">
              Os 6 pilares da atuação Work.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {COMPANY_INFO.pilares.map((pilar) => (
              <div key={pilar.numero} className="pb-8 border-b border-[#E6E6E6] space-y-3">
                <span className="font-mono text-xl text-[#F58220] font-semibold block">
                  {pilar.numero}
                </span>
                <h3 className="font-editorial text-2xl text-[#111111] font-normal">
                  {pilar.titulo}
                </h3>
                <p className="text-sm text-[#111111]/75 leading-relaxed">
                  {pilar.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Central Obrigatória: DA GESTÃO À EXECUÇÃO */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#111111] text-white border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="pb-16 border-b border-[#2A2A2A] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                METODOLOGIA DE PROCESSO
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                Da Gestão à Execução
              </h2>
            </div>
            <p className="text-xs font-mono text-[#E6E6E6]/60 uppercase tracking-widest max-w-xs">
              Fluxo integrado de governança e controle do canteiro. Sem atalhos, sem improvisos.
            </p>
          </div>

          {/* Sequential Flow - Sem ícones conforme instrução */}
          <div className="mt-16 divide-y divide-[#2A2A2A]">
            {COMPANY_INFO.fluxoExecucao.map((etapa) => (
              <div
                key={etapa.numero}
                className="py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center group hover:bg-[#181818] transition-colors px-2"
              >
                <div className="sm:col-span-2">
                  <span className="font-mono text-xs text-[#F58220] tracking-widest font-semibold">
                    {etapa.numero}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-editorial text-2xl text-white font-normal group-hover:text-[#F58220] transition-colors">
                    {etapa.nome}
                  </h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-xs sm:text-sm text-[#E6E6E6]/70 font-interface">
                    {etapa.foco}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção EQUIPE (Composição Editorial Sem Cards Genéricos) */}
      <section className="py-24 sm:py-32 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="pb-16 border-b border-[#E6E6E6] flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#F58220] font-sans text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                LIDERANÇA & CORPO TÉCNICO
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-tight">
                Nossa Equipe
              </h2>
            </div>
            <p className="text-sm text-[#111111]/70 max-w-sm">
              Profissionais dedicados ao planejamento estratégico, engenharia e
              responsabilidade construtiva em cada canteiro.
            </p>
          </div>

          {/* Editorial Roster Composition */}
          <div className="mt-16 space-y-12">
            {/* Liderança e Administrativo */}
            <div className="border-b border-[#E6E6E6] pb-12">
              <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block mb-6">
                DIRETORIA & ADMINISTRAÇÃO
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TEAM.filter((m) => m.departamento !== 'Engenharia').map((member) => (
                  <div key={member.id} className="space-y-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#F58220] font-semibold">
                        {member.iniciais}
                      </span>
                      <h3 className="font-editorial text-3xl text-[#111111] font-normal">
                        {member.nome}
                      </h3>
                    </div>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#111111]/60">
                      {member.cargo}
                    </p>
                    <p className="text-sm text-[#111111]/80 leading-relaxed pt-2">
                      {member.bioCurta}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corpo de Engenharia */}
            <div>
              <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block mb-6">
                CORPO DE ENGENHARIA
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {TEAM.filter((m) => m.departamento === 'Engenharia').map((member) => (
                  <div key={member.id} className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="font-mono text-xs text-[#F58220] font-semibold">
                        {member.iniciais}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/40">
                        CANTEIRO & PROJETOS
                      </span>
                    </div>
                    <h3 className="font-editorial text-2xl text-[#111111] font-normal">
                      {member.nome}
                    </h3>
                    <p className="text-xs text-[#111111]/60 font-mono">
                      {member.cargo}
                    </p>
                    <p className="text-xs text-[#111111]/75 leading-relaxed pt-2">
                      {member.bioCurta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 md:px-12 bg-[#F58220] text-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal leading-tight text-[#111111]">
              Pronto para construir com segurança e precisão?
            </h2>
            <p className="text-sm text-[#111111]/80 mt-2">
              Nossa equipe está disponível para avaliar seu projeto e apresentar propostas executivas.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="px-8 py-4 bg-[#111111] text-white hover:bg-[#181818] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer whitespace-nowrap shadow-lg"
          >
            Fale com a Work ↗
          </button>
        </div>
      </section>
    </div>
  );
};
