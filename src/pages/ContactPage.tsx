import React, { useState } from 'react';
import { COMPANY_INFO } from '@/src/data/company';

interface ContactMessage {
  id: string;
  data: string;
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'Construção Nova',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.nome.trim()) errs.nome = 'Por favor, informe seu nome.';
    if (!formState.email.trim() || !formState.email.includes('@')) {
      errs.email = 'Informe um e-mail corporativo ou pessoal válido.';
    }
    if (!formState.telefone.trim()) {
      errs.telefone = 'Informe um telefone ou WhatsApp para contato.';
    }
    if (!formState.mensagem.trim()) {
      errs.mensagem = 'Descreva brevemente sua necessidade ou projeto.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newMessage: ContactMessage = {
      id: `msg_${Date.now()}`,
      data: new Date().toISOString(),
      ...formState
    };

    try {
      const stored = localStorage.getItem('work_contact_messages');
      const messages: ContactMessage[] = stored ? JSON.parse(stored) : [];
      messages.push(newMessage);
      localStorage.setItem('work_contact_messages', JSON.stringify(messages));
    } catch {
      // Ignore localStorage exceptions in restrictive sandboxes
    }

    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 md:px-12 bg-[#F7F7F5] border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-xs font-mono text-[#111111]/50 mb-6">
            <span className="text-[#F58220] font-semibold">04</span>
            <span>·</span>
            <span>CONTATO INSTITUCIONAL</span>
            <span>·</span>
            <span>BELÉM / PA</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-[1.05] tracking-tight max-w-4xl balance">
            Vamos conversar sobre o <br />
            <span className="text-[#F58220] italic">próximo projeto.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-[#111111]/80 font-light max-w-2xl leading-relaxed">
            Estamos prontos para atender incorporadoras, investidores, arquitetos e
            empresas que buscam solidez técnica e gestão transparente.
          </p>
        </div>
      </section>

      {/* Grid Principal: Dados Oficiais + Ações Rápidas + Formulário */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Informações Institucionais e Ações Rápidas */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block mb-3 font-semibold">
                  SEDE OPERACIONAL
                </span>
                <h2 className="font-editorial text-3xl text-[#111111] font-normal mb-4">
                  Work Construtora
                </h2>
                <address className="not-italic text-base text-[#111111]/80 space-y-1.5 leading-relaxed">
                  <p>Tv. Dom Romualdo de Seixas, 567</p>
                  <p>Sala B — Umarizal</p>
                  <p>Belém — PA</p>
                  <p className="font-mono text-xs text-[#111111]/60 pt-1">
                    CEP 66050-110
                  </p>
                  <p className="font-mono text-xs text-[#111111]/60">
                    CNPJ: {COMPANY_INFO.cnpj}
                  </p>
                </address>
              </div>

              {/* Ações Rápidas Conforme Requisitado: WhatsApp, E-mail, Como Chegar */}
              <div className="pt-8 border-t border-[#E6E6E6] space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block font-semibold">
                  CANAIS DIRETOS
                </span>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/5591991447742"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#F7F7F5] hover:bg-[#F2F2EF] border border-[#E6E6E6] flex items-center justify-between text-sm font-medium text-[#111111] transition-colors group"
                  >
                    <span>Falar via WhatsApp</span>
                    <span className="text-[#F58220] text-xs font-mono group-hover:translate-x-0.5 transition-transform">
                      (91) 99144-7742 ↗
                    </span>
                  </a>

                  <a
                    href="mailto:abdulmassih.tarek@gmail.com"
                    className="p-4 bg-[#F7F7F5] hover:bg-[#F2F2EF] border border-[#E6E6E6] flex items-center justify-between text-sm font-medium text-[#111111] transition-colors group"
                  >
                    <span>Enviar E-mail Direto</span>
                    <span className="text-[#F58220] text-xs font-mono group-hover:translate-x-0.5 transition-transform truncate max-w-[200px]">
                      abdulmassih.tarek@gmail.com ↗
                    </span>
                  </a>

                  <a
                    href="https://maps.google.com/?q=Tv.+Dom+Romualdo+de+Seixas,+567+-+Umarizal,+Belém+-+PA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#F7F7F5] hover:bg-[#F2F2EF] border border-[#E6E6E6] flex items-center justify-between text-sm font-medium text-[#111111] transition-colors group"
                  >
                    <span>Como Chegar ao Escritório</span>
                    <span className="text-[#F58220] text-xs font-mono group-hover:translate-x-0.5 transition-transform">
                      Google Maps ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Contato com Validação e LocalStorage */}
            <div className="lg:col-span-7">
              <div className="bg-[#F7F7F5] border border-[#E6E6E6] p-8 sm:p-12">
                <div className="border-b border-[#E6E6E6] pb-6 mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F58220] block mb-2 font-semibold">
                    FORMULÁRIO DE PROPOSTA
                  </span>
                  <h3 className="font-editorial text-3xl text-[#111111] font-normal">
                    Envie os detalhes da sua demanda
                  </h3>
                </div>

                {submitted ? (
                  <div className="p-8 bg-white border border-[#E6E6E6] space-y-4">
                    <span className="text-xs font-mono text-[#F58220] uppercase tracking-widest block font-semibold">
                      MENSAGEM REGISTRADA
                    </span>
                    <h4 className="font-editorial text-3xl text-[#111111]">
                      Agradecemos pelo contato.
                    </h4>
                    <p className="text-sm text-[#111111]/80 leading-relaxed">
                      Sua solicitação foi gravada com sucesso. Nossa equipe técnica e
                      administrativa retornará em breve pelo telefone ou e-mail fornecido.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          nome: '',
                          email: '',
                          telefone: '',
                          assunto: 'Construção Nova',
                          mensagem: ''
                        });
                      }}
                      className="mt-4 px-6 py-3 bg-[#111111] text-white hover:bg-[#F58220] hover:text-[#111111] text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-2 font-sans"
                      >
                        Nome Completo *
                      </label>
                      <input
                        id="nome"
                        type="text"
                        value={formState.nome}
                        onChange={(e) =>
                          setFormState({ ...formState, nome: e.target.value })
                        }
                        placeholder="Ex: Carlos Eduardo Silva"
                        className="w-full px-4 py-3.5 bg-white border border-[#E6E6E6] text-sm text-[#111111] focus:border-[#F58220] focus:outline-none transition-colors"
                      />
                      {errors.nome && (
                        <p className="text-xs text-red-600 mt-1.5">{errors.nome}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-2 font-sans"
                        >
                          E-mail Corporativo ou Pessoal *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          placeholder="seuemail@empresa.com.br"
                          className="w-full px-4 py-3.5 bg-white border border-[#E6E6E6] text-sm text-[#111111] focus:border-[#F58220] focus:outline-none transition-colors"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="telefone"
                          className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-2 font-sans"
                        >
                          Telefone / WhatsApp *
                        </label>
                        <input
                          id="telefone"
                          type="tel"
                          value={formState.telefone}
                          onChange={(e) =>
                            setFormState({ ...formState, telefone: e.target.value })
                          }
                          placeholder="(91) 99999-9999"
                          className="w-full px-4 py-3.5 bg-white border border-[#E6E6E6] text-sm text-[#111111] focus:border-[#F58220] focus:outline-none transition-colors"
                        />
                        {errors.telefone && (
                          <p className="text-xs text-red-600 mt-1.5">
                            {errors.telefone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="assunto"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-2 font-sans"
                      >
                        Assunto / Tipologia do Empreendimento
                      </label>
                      <select
                        id="assunto"
                        value={formState.assunto}
                        onChange={(e) =>
                          setFormState({ ...formState, assunto: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-white border border-[#E6E6E6] text-sm text-[#111111] focus:border-[#F58220] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Construção Nova">Construção Nova (Comercial / Residencial)</option>
                        <option value="Built to Suit (BTS)">Built to Suit — BTS</option>
                        <option value="Reforma de Alto Padrão">Reforma de Alto Padrão</option>
                        <option value="Projetos de Engenharia">Projetos Complementares de Engenharia</option>
                        <option value="Parcerias e Outros">Parcerias e Outros Assuntos</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="mensagem"
                        className="block text-xs uppercase tracking-wider font-semibold text-[#111111] mb-2 font-sans"
                      >
                        Mensagem / Descrição da Obra *
                      </label>
                      <textarea
                        id="mensagem"
                        rows={4}
                        value={formState.mensagem}
                        onChange={(e) =>
                          setFormState({ ...formState, mensagem: e.target.value })
                        }
                        placeholder="Descreva a localização, metragem estimada ou cronograma pretendido..."
                        className="w-full px-4 py-3.5 bg-white border border-[#E6E6E6] text-sm text-[#111111] focus:border-[#F58220] focus:outline-none transition-colors"
                      />
                      {errors.mensagem && (
                        <p className="text-xs text-red-600 mt-1.5">
                          {errors.mensagem}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#111111] hover:bg-[#F58220] text-white hover:text-[#111111] text-xs font-semibold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                    >
                      Enviar mensagem para a Work ↗
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
