/**
 * WORK CONSTRUTORA - Dados Institucionais
 */

export interface CompanyPillar {
  numero: string;
  titulo: string;
  descricao: string;
}

export interface ExecutionStep {
  numero: string;
  nome: string;
  foco: string;
}

export const COMPANY_INFO = {
  nome: 'Work Construtora',
  fundacao: '2022',
  sede: 'Belém — Pará',
  enderecoCompleto: 'Tv. Dom Romualdo de Seixas, 567, Sala B, Umarizal, Belém — PA, CEP 66050-110',
  cnpj: '50.236.096/0001-60',
  telefone: '(91) 99144-7742',
  telefoneLink: '5591991447742',
  email: 'abdulmassih.tarek@gmail.com',
  resumo:
    'Criada em 2022, a Work Construtora atua no setor da construção civil com o propósito de oferecer soluções eficientes e de qualidade para obras e reformas. Nossa atuação combina planejamento, responsabilidade, organização, qualidade técnica, segurança e transparência.',
  missao:
    'Integrar gestão orçamentária, engenharia precisa e execução no canteiro para entregar empreendimentos sem surpresas, com rigor técnico e sofisticação construtiva.',
  pilares: [
    {
      numero: '01',
      titulo: 'Planejamento',
      descricao: 'Antecipação de riscos, cronogramas físico-financeiros factíveis e análise minuciosa de cada etapa antes do início no canteiro.'
    },
    {
      numero: '02',
      titulo: 'Responsabilidade',
      descricao: 'Compromisso com prazos, conformidade rigorosa com normas técnicas (ABNT) e respeito inegociável ao investimento do cliente.'
    },
    {
      numero: '03',
      titulo: 'Organização',
      descricao: 'Canteiro limpo, processos padronizados, relatórios periódicos de evolução e transparência em todas as medições.'
    },
    {
      numero: '04',
      titulo: 'Qualidade Técnica',
      descricao: 'Engenharia aplicada com rigor, compatibilização detalhada de projetos e seleção criteriosa de materiais e mão de obra.'
    },
    {
      numero: '05',
      titulo: 'Segurança',
      descricao: 'Cumprimento estrito das Normas Regulamentadoras (NRs), proteção coletiva e individual de todos os trabalhadores.'
    },
    {
      numero: '06',
      titulo: 'Transparência',
      descricao: 'Comunicação direta, prestação de contas clara e acesso irrestrito dos clientes ao andamento físico e contábil da obra.'
    }
  ] as CompanyPillar[],

  // Seção DA GESTÃO À EXECUÇÃO
  fluxoExecucao: [
    { numero: '01', nome: 'Planejamento', foco: 'Estudo de viabilidade, quantitativos e cronograma detalhado' },
    { numero: '02', nome: 'Administração', foco: 'Gestão contratual, custos e controle financeiro diário' },
    { numero: '03', nome: 'Suprimentos', foco: 'Negociação direta, logística de entrega e especificação técnica' },
    { numero: '04', nome: 'Engenharia', foco: 'Compatibilização de projetos complementares e acompanhamento técnico' },
    { numero: '05', nome: 'Execução', foco: 'Mão de obra qualificada no canteiro com supervisão diária' },
    { numero: '06', nome: 'Acabamento', foco: 'Rigor milimétrico em revestimentos, esquadrias e instalações' },
    { numero: '07', nome: 'Entrega', foco: 'Auditoria final, as-built, comissionamento e entrega de chaves' }
  ] as ExecutionStep[]
};
