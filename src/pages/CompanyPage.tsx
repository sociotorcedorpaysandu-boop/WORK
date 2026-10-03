import React from 'react';
import { COMPANY_INFO } from '@/src/data/company';
import { TEAM } from '@/src/data/team';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_1790992253931.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_1790992243499.jpg';

interface CompanyPageProps {
  onNavigate: (path: string) => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* 01. Hero Section (Mais claro, institucional e direto) */}
      <section className="pt-36 pb-16 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block">
            Institucional
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-[#111111] leading-tight tracking-tight max-w-4xl">
            A Work Construtora
          </h1>

          <p className="text-base sm:text-lg text-[#111111]/75 max-w-2xl leading-relaxed">
            {COMPANY_INFO.resumo}
          </p>
        </div>
      </section>

      {/* 02. Bloco: História e Origem (Texto + Foto Real da Obra) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                História e Fundação
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                Construção civil com seriedade e presença no Pará
              </h2>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Criada em 2022 em Belém, a Work Construtora atua no setor da construção civil com o propósito de oferecer soluções eficientes e de qualidade para obras e reformas.
              </p>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Nossa atuação combina planejamento, responsabilidade, organização, qualidade técnica, segurança e transparência em todas as etapas da construção.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden aspect-[4/3] bg-[#F7F7F5] border border-[#E6E6E6]">
                <img
                  src={execucaoImg}
                  alt="Obra da Work Construtora em Belém"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Bloco: Planejamento & Gestão (Texto + Foto Real de Estrutura) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                Planejamento & Gestão
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                Engenharia presente do escritório ao canteiro
              </h2>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Na Work, a gestão atua com foco em planejamento, organização dos processos e relacionamento com clientes e parceiros.
              </p>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                A proximidade entre engenharia e administração garante acompanhamento direto dos trabalhos, alinhamento técnico e cumprimento dos prazos estabelecidos.
              </p>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="overflow-hidden aspect-[4/3] bg-[#E6E6E6] border border-[#E6E6E6]">
                <img
                  src={estruturaImg}
                  alt="Acompanhamento de estrutura no canteiro"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Bloco: Pilares da Atuação */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
              Princípios da Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111]">
              Os pilares da atuação Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.pilares.map((pilar) => (
              <div key={pilar.numero} className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] space-y-2.5">
                <h3 className="text-xl font-heading font-semibold text-[#111111]">
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

      {/* 05. Bloco: Da Gestão à Execução */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E6E6]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block mb-2">
                Metodologia de Trabalho
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111]">
                Da Gestão à Execução
              </h2>
            </div>
            <p className="text-sm text-[#111111]/70 max-w-sm">
              Fluxo integrado de gestão e acompanhamento no canteiro de obras.
            </p>
          </div>

          <div className="divide-y divide-[#E6E6E6] bg-white border border-[#E6E6E6]">
            {COMPANY_INFO.fluxoExecucao.map((etapa) => (
              <div
                key={etapa.numero}
                className="py-5 px-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-[#F7F7F5] transition-colors"
              >
                <div className="sm:col-span-4">
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#111111]">
                    {etapa.nome}
                  </h3>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-sm text-[#111111]/75">
                    {etapa.foco}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Seção Equipe (Composição simples e limpa: monograma + nome + cargo) */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E6E6]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block mb-2">
                Corpo Técnico e Diretoria
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111]">
                Nossa Equipe
              </h2>
            </div>
            <p className="text-sm text-[#111111]/70 max-w-sm">
              Profissionais dedicados ao planejamento, gestão administrativa e acompanhamento de obras.
            </p>
          </div>

          {/* Diretoria & Administrativo */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#111111]/60 font-semibold block">
              Diretoria e Administração
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM.filter((m) => m.departamento !== 'Engenharia').map((member) => (
                <div
                  key={member.id}
                  className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] flex gap-5 items-center"
                >
                  <div className="w-16 h-16 shrink-0 bg-white border border-[#E6E6E6] flex items-center justify-center text-lg font-heading font-semibold text-[#111111]">
                    {member.iniciais}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-[#111111]">
                      {member.nome}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#F58220] font-medium mt-1">
                      {member.cargo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corpo de Engenharia */}
          <div className="space-y-4 pt-6 border-t border-[#E6E6E6]">
            <span className="text-xs uppercase tracking-wider text-[#111111]/60 font-semibold block">
              Corpo de Engenharia
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {TEAM.filter((m) => m.departamento === 'Engenharia').map((member) => (
                <div
                  key={member.id}
                  className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 bg-white border border-[#E6E6E6] flex items-center justify-center text-base font-heading font-semibold text-[#111111]">
                      {member.iniciais}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-[#111111]">
                        {member.nome}
                      </h3>
                      <p className="text-xs text-[#F58220] font-medium">
                        {member.cargo}
                      </p>
                    </div>
                  </div>
                  {member.bioCurta && (
                    <p className="text-xs text-[#111111]/70 leading-relaxed pt-3 border-t border-[#E6E6E6]">
                      {member.bioCurta}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07. CTA Final */}
      <section className="py-20 px-6 md:px-12 bg-[#F58220] text-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
              Vamos construir o próximo projeto?
            </h2>
            <p className="text-base text-[#111111]/85 mt-2">
              Fale com a Work e apresente sua necessidade.
            </p>
          </div>
          <button
            onClick={() => handleNav('/contato')}
            className="px-8 py-4 bg-[#111111] text-white hover:bg-[#181818] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
          >
            Fale com a Work ↗
          </button>
        </div>
      </section>
    </div>
  );
};
