import React from 'react';
import { COMPANY_INFO } from '@/src/data/company';
import { TEAM } from '@/src/data/team';
import motionEngineeringImg from '@/src/assets/images/engineering_in_motion_site_1790334507218.jpg';
import teamLeadershipImg from '@/src/assets/images/team_leadership_work_1790336814200.jpg';

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
                  Criada em 2022, a Work Construtora atua no setor da construção civil com o
                  propósito de oferecer soluções eficientes e de qualidade para obras e reformas.
                </p>
                <p>
                  Sua atuação combina planejamento, responsabilidade, organização, qualidade
                  técnica, segurança e transparência em todas as etapas.
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

      {/* Seção Central: DA GESTÃO À EXECUÇÃO */}
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
              Fluxo integrado de gestão e acompanhamento no canteiro de obras.
            </p>
          </div>

          {/* Sequential Flow - Sem ícones */}
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

      {/* Seção EQUIPE (Composição Editorial com Fotografia Neutra Provisória Elegante - Sem a palavra 'FOTO') */}
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

          {/* Fotografia Institucional de Liderança */}
          <div className="mt-16 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#F7F7F5] border border-[#E6E6E6]">
            <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-[#E6E6E6]">
              <img
                src={teamLeadershipImg}
                alt="Corpo técnico e liderança da Work Construtora em planejamento"
                className="w-full h-full object-cover img-editorial"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-12 space-y-4">
              <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block font-semibold">
                GESTÃO & CANTEIRO
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                Integração direta entre diretoria e engenharia.
              </h3>
              <p className="text-sm text-[#111111]/75 leading-relaxed pt-2">
                Na Work, gestão, planejamento e engenharia atuam de forma integrada em
                todas as etapas da obra.
              </p>
            </div>
          </div>

          {/* Editorial Roster Composition - Sem a palavra 'FOTO', com placeholders fotográficos neutros e monogramas técnicos */}
          <div className="space-y-16">
            {/* Liderança e Administrativo */}
            <div className="border-b border-[#E6E6E6] pb-16">
              <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block mb-8 font-semibold">
                DIRETORIA & ADMINISTRAÇÃO
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {TEAM.filter((m) => m.departamento !== 'Engenharia').map((member) => (
                  <div key={member.id} className="flex gap-6 items-start">
                    {/* Placeholder Fotográfico Neutro & Elegante (Provisório sem palavra FOTO) */}
                    <div className="w-24 h-28 sm:w-28 sm:h-36 shrink-0 bg-[#F2F2EF] border border-[#E6E6E6] flex flex-col justify-between p-3 select-none">
                      <span className="font-mono text-[10px] text-[#F58220] font-semibold">
                        WORK
                      </span>
                      <span className="font-editorial text-2xl sm:text-3xl text-[#111111]/70 self-center">
                        {member.iniciais}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#111111]/40">
                        {member.departamento}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-editorial text-3xl text-[#111111] font-normal">
                        {member.nome}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#F58220]">
                        {member.cargo}
                      </p>
                      {member.bioCurta && (
                        <p className="text-sm text-[#111111]/75 leading-relaxed pt-1">
                          {member.bioCurta}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Corpo de Engenharia */}
            <div>
              <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block mb-8 font-semibold">
                CORPO DE ENGENHARIA
              </span>
              <div className="border-y border-[#E6E6E6] divide-y md:divide-y-0 md:divide-x divide-[#E6E6E6] grid grid-cols-1 md:grid-cols-3">
                {TEAM.filter((m) => m.departamento === 'Engenharia').map((member, idx) => (
                  <div
                    key={member.id}
                    className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <span className="font-mono text-xs text-[#F58220] font-semibold block">
                        ENG / 0{idx + 1}
                      </span>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-normal leading-tight">
                        {member.nome}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-[#F58220]">
                        {member.cargo}
                      </p>
                    </div>

                    {member.bioCurta && (
                      <p className="text-sm text-[#111111]/75 leading-relaxed pt-4 border-t border-[#E6E6E6]/60">
                        {member.bioCurta}
                      </p>
                    )}
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
              Vamos construir o próximo projeto?
            </h2>
            <p className="text-sm text-[#111111]/80 mt-2">
              Fale com a Work e apresente sua necessidade.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="px-8 py-4 bg-[#111111] text-white hover:bg-[#181818] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer whitespace-nowrap"
          >
            Fale com a Work ↗
          </button>
        </div>
      </section>
    </div>
  );
};
