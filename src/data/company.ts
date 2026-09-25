/**
 * WORK CONSTRUTORA - Dados Institucionais
 * Baseado estritamente no briefing original da Work Construtora.
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
    'Criada em 2022, a Work Construtora atua no setor da construção civil com o propósito de oferecer soluções eficientes e de qualidade para obras e reformas.',
  pilares: [
    {
      numero: '01',
      titulo: 'Planejamento',
      descricao: 'Estruturação prévia de etapas e prazos para transformar projetos em resultados concretos.'
    },
    {
      numero: '02',
      titulo: 'Responsabilidade',
      descricao: 'Compromisso com o cliente, prazos e integridade em cada obra.'
    },
    {
      numero: '03',
      titulo: 'Organização',
      descricao: 'Processos claros e gestão eficiente do canteiro à administração.'
    },
    {
      numero: '04',
      titulo: 'Qualidade Técnica',
      descricao: 'Engenharia aplicada com foco em materiais, métodos e acabamentos.'
    },
    {
      numero: '05',
      titulo: 'Segurança',
      descricao: 'Atenção constante às práticas seguras de trabalho no canteiro.'
    },
    {
      numero: '06',
      titulo: 'Transparência',
      descricao: 'Relação direta, ética e transparente com clientes e parceiros.'
    }
  ] as CompanyPillar[],

  // Seção DA GESTÃO À EXECUÇÃO (Fluxo confirmado no briefing)
  fluxoExecucao: [
    { numero: '01', nome: 'Planejamento', foco: 'Estruturação de cronograma e diretrizes da obra' },
    { numero: '02', nome: 'Administração', foco: 'Gestão de contratos e acompanhamento geral' },
    { numero: '03', nome: 'Suprimentos', foco: 'Gestão de materiais e logística de entrega' },
    { numero: '04', nome: 'Engenharia', foco: 'Acompanhamento técnico e suporte aos projetos' },
    { numero: '05', nome: 'Execução', foco: 'Atuação direta no canteiro e acompanhamento das etapas' },
    { numero: '06', nome: 'Acabamento', foco: 'Atenção aos detalhes finais de cada ambiente' },
    { numero: '07', nome: 'Entrega', foco: 'Conclusão dos serviços e entrega formal da obra' }
  ] as ExecutionStep[]
};
