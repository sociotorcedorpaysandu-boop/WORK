import React from 'react';
import { COMPANY_INFO } from '@/src/data/company';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_real.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_real.jpg';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_real.jpg';
import finalImg from '@/src/assets/images/municipalidade_projeto_final_real.jpg';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#111111]">
      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto space-y-4">
          <span className="text-[#F58220] font-sans text-xs uppercase tracking-wider font-semibold block">
            Canais de Comunicação
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-[#111111] leading-tight tracking-tight max-w-4xl">
            Contato e Redes Sociais
          </h1>

          <p className="text-base sm:text-lg text-[#111111]/75 max-w-2xl leading-relaxed">
            Estamos prontos para atender incorporadoras, investidores, parceiros e clientes em suas demandas de construção e reforma.
          </p>
        </div>
      </section>

      {/* Canais Diretos de Atendimento (Sem formulário, comunicação direta) */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="p-8 bg-[#F7F7F5] border border-[#E6E6E6] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  WhatsApp Oficial
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                  (91) 99144-7742
                </h2>
                <p className="text-sm text-[#111111]/75 leading-relaxed">
                  Canal direto para falar com a equipe da Work.
                </p>
              </div>
              <a
                href="https://wa.me/5591991447742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors text-center inline-block"
              >
                Conversar no WhatsApp ↗
              </a>
            </div>

            {/* E-mail */}
            <div className="p-8 bg-[#F7F7F5] border border-[#E6E6E6] flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  E-mail Corporativo
                </span>
                <h2 className="text-lg sm:text-xl font-heading font-semibold text-[#111111] break-all">
                  abdulmassih.tarek@gmail.com
                </h2>
                <p className="text-sm text-[#111111]/75 leading-relaxed">
                  Entre em contato para informações, solicitações e orçamentos.
                </p>
              </div>
              <a
                href="mailto:abdulmassih.tarek@gmail.com"
                className="w-full py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors text-center inline-block"
              >
                Enviar E-mail Direto ↗
              </a>
            </div>

            {/* Instagram Oficial */}
            <div className="p-8 bg-[#F7F7F5] border border-[#E6E6E6] flex flex-col justify-between space-y-6 work-corner-accent">
              <div className="space-y-3">
                <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                  Instagram Oficial
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                  @workconstrutora
                </h2>
                <p className="text-sm text-[#111111]/75 leading-relaxed">
                  Acompanhe fotos de canteiro, etapas de obras e projetos em andamento em Belém.
                </p>
              </div>
              <a
                href="https://www.instagram.com/workconstrutora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors text-center inline-block cursor-pointer btn-work-chamfer"
              >
                Acessar Instagram ↗
              </a>
            </div>
          </div>

          {/* Endereço e Localização */}
          <div className="p-8 sm:p-12 bg-[#F7F7F5] border border-[#E6E6E6] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs uppercase font-semibold text-[#F58220] tracking-wider block">
                Sede Operacional
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111]">
                Work Construtora
              </h3>
              <address className="not-italic text-sm sm:text-base text-[#111111]/80 space-y-1 leading-relaxed">
                <p>Tv. Dom Romualdo de Seixas, 567, Sala B</p>
                <p>Umarizal, Belém — PA, CEP 66050-110</p>
                <p className="text-xs text-[#111111]/60 pt-2 font-mono">CNPJ: {COMPANY_INFO.cnpj}</p>
              </address>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Tv.+Dom+Romualdo+de+Seixas,+567+-+Umarizal,+Belém+-+PA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-wider transition-colors text-center"
              >
                Como Chegar (Google Maps) ↗
              </a>
            </div>
          </div>

          {/* Faixa Fotográfica de Registros Reais (4 Fases Reais da Obra) */}
          <div className="space-y-4 pt-4 border-t border-[#E6E6E6]">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#111111]/60">
                Dia a Dia no Canteiro
              </span>
              <span className="text-xs text-[#111111]/50">
                Fotos reais da obra — Belém — Pará
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-[#E6E6E6] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={fundacaoImg}
                  alt="Fundação de obra Work"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-[#E6E6E6] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={estruturaImg}
                  alt="Estrutura de edifício Work"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-[#E6E6E6] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={execucaoImg}
                  alt="Execução de fachada Work"
                  className="w-full h-full object-cover img-editorial"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square bg-[#E6E6E6] overflow-hidden border border-[#E6E6E6]">
                <img
                  src={finalImg}
                  alt="Projeto Final concluído Work"
                  className="w-full h-full object-cover img-editorial"
                  style={{ objectPosition: 'center 18%' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
