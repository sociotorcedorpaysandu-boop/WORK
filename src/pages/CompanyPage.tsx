import React from 'react';
import { COMPANY_INFO } from '@/src/data/company';
import { TEAM, TAREK_IMAGE, GABRIEL_IMAGE, ENGINEERING_TEAM_IMAGE } from '@/src/data/team';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import { WorkOrganicPattern } from '@/src/components/WorkOrganicPattern';

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
      {/* 01. Hero Section (Topo / Apresentação) */}
      <section className="relative pt-36 pb-16 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6] overflow-hidden">
        {/* Padrão Gráfico Cinza Orgânico — Dissipativo */}
        <WorkOrganicPattern
          variant="top-right"
          className="absolute top-0 right-0 w-80 sm:w-96 md:w-[480px] h-72 sm:h-80 md:h-96 z-0"
        />

        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block">
            Institucional
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-[#111111] leading-tight tracking-tight max-w-4xl">
            A Work Construtora
          </h1>

          <div className="space-y-2 max-w-3xl">
            <p className="text-base sm:text-lg text-[#111111]/85 leading-relaxed">
              Criada em 2022, a Work Construtora atua no setor da construção civil com o propósito de oferecer soluções eficientes e de qualidade para obras e reformas.
            </p>
            <p className="text-sm sm:text-base text-[#111111]/70 leading-relaxed">
              Desde sua criação, a empresa vem estruturando sua atuação a partir da integração entre gestão, planejamento, engenharia e execução.
            </p>
          </div>
        </div>
      </section>

      {/* 02. Bloco: Missão e Atuação (Texto + Foto Real da Obra) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                Missão & Atuação
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                Construção civil com seriedade e presença no Pará
              </h2>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Nossa missão é transformar projetos em resultados concretos, aliando planejamento, responsabilidade e qualidade técnica em cada etapa da execução.
              </p>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Cada trabalho é conduzido de forma organizada, buscando acompanhar as diferentes fases da obra com clareza e responsabilidade.
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

      {/* 03. Bloco: Qualidade, Segurança e Organização (Texto + Foto Real de Estrutura) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F7F7F5] border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold block">
                Qualidade, Segurança & Organização
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#111111] leading-tight">
                Engenharia presente do escritório ao canteiro
              </h2>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Trabalhamos com compromisso com as normas e requisitos técnicos vigentes, buscando segurança, organização e excelência nos serviços realizados.
              </p>
              <p className="text-base text-[#111111]/80 leading-relaxed">
                Na Work, a gestão atua com foco em planejamento, organização dos processos e relacionamento com clientes e parceiros.
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
            <div className="max-w-md space-y-1.5">
              <p className="text-sm text-[#111111]/80 leading-relaxed">
                Com uma equipe integrada e preparada, a Work Construtora busca consolidar sua atuação no mercado por meio da confiança, transparência e compromisso com seus clientes, parceiros e profissionais.
              </p>
              <p className="text-xs text-[#111111]/60 leading-relaxed">
                A integração entre as áreas contribui para uma comunicação mais próxima e para o acompanhamento das diferentes etapas dos projetos.
              </p>
            </div>
          </div>

          {/* Diretoria & Administrativo: Fotos individuais humanizadas */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#111111]/60 font-semibold block">
              Diretoria e Administração
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tarek Abdulmassih - Foto real */}
              <div className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] flex gap-5 items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white border border-[#E6E6E6] overflow-hidden">
                  <img
                    src={TAREK_IMAGE}
                    alt="Tarek Abdulmassih — Diretor e Administrativo"
                    className="w-full h-full object-cover object-center img-editorial"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-semibold text-[#111111]">
                    Tarek Abdulmassih
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#F58220] font-semibold">
                    Diretor e Administrativo
                  </p>
                </div>
              </div>

              {/* Gabriel Costa - Foto profissional IA */}
              <div className="p-6 bg-[#F7F7F5] border border-[#E6E6E6] flex gap-5 items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-white border border-[#E6E6E6] overflow-hidden">
                  <img
                    src={GABRIEL_IMAGE}
                    alt="Gabriel Costa — Administrativo"
                    className="w-full h-full object-cover object-center img-editorial"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-semibold text-[#111111]">
                    Gabriel Costa
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#F58220] font-semibold">
                    Administrativo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Engenharia: UMA ÚNICA imagem com os 3 engenheiros juntos + nomes separados */}
          <div className="space-y-4 pt-6 border-t border-[#E6E6E6]">
            <span className="text-xs uppercase tracking-wider text-[#111111]/60 font-semibold block">
              Engenharia
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F7F5] border border-[#E6E6E6] p-6 sm:p-8">
              {/* UMA única imagem com os 3 engenheiros juntos */}
              <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-white border border-[#E6E6E6]">
                <img
                  src={ENGINEERING_TEAM_IMAGE}
                  alt="Equipe de Engenharia da Work Construtora"
                  className="w-full h-full object-cover img-editorial"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Identificação do grupo e nomes separados */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] font-semibold block">
                    Corpo Técnico
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                    Engenharia
                  </h3>
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    Acompanhamento técnico, rigor construtivo e presença ativa nas obras.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E6E6] space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#111111]/60 font-semibold block mb-1">
                    Engenheiros Responsáveis
                  </span>

                  <div className="p-3 bg-white border border-[#E6E6E6] flex items-center justify-between">
                    <span className="text-base font-heading font-semibold text-[#111111]">
                      Claudio Porpino
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#F58220] font-medium">
                      Engenharia
                    </span>
                  </div>

                  <div className="p-3 bg-white border border-[#E6E6E6] flex items-center justify-between">
                    <span className="text-base font-heading font-semibold text-[#111111]">
                      Ailton Vale
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#F58220] font-medium">
                      Engenharia
                    </span>
                  </div>

                  <div className="p-3 bg-white border border-[#E6E6E6] flex items-center justify-between">
                    <span className="text-base font-heading font-semibold text-[#111111]">
                      Carlos Rocha
                    </span>
                    <span className="text-xs uppercase tracking-wider text-[#F58220] font-medium">
                      Engenharia
                    </span>
                  </div>
                </div>
              </div>
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
            className="btn-work-dark whitespace-nowrap"
          >
            Fale com a Work ↗
          </button>
        </div>
      </section>
    </div>
  );
};
