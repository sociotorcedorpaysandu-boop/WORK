/**
 * WORK CONSTRUTORA - Portfólio de Serviços de Engenharia
 * Baseado estritamente nas descrições fornecidas no briefing original.
 */

export interface ServiceItem {
  id: string;
  numero: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
  detalhes?: string[];
  fluxo?: { etapa: string; label: string }[];
  escopos?: { nome: string; descricao: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'construcao-administracao',
    numero: '01',
    titulo: 'Construção, administração e desenvolvimento de obras e reformas',
    subtitulo: 'Residencial, Comercial e Industrial',
    descricao:
      'Execução de obras e reformas residenciais, comerciais e industriais, envolvendo planejamento, cronograma, materiais, mão de obra e controle de qualidade.',
    detalhes: [
      'Planejamento de etapas e cronograma executivo',
      'Gestão de materiais e suprimentos',
      'Coordenação de mão de obra no canteiro',
      'Controle de qualidade em cada etapa da obra'
    ]
  },
  {
    id: 'built-to-suit',
    numero: '02',
    titulo: 'Built to Suit — BTS',
    subtitulo: 'Empreendimentos desenvolvidos sob medida',
    descricao:
      'Empreendimentos desenvolvidos sob medida para atender às necessidades específicas da operação de cada empresa.',
    fluxo: [
      { etapa: '01', label: 'NECESSIDADE' },
      { etapa: '02', label: 'PROJETO' },
      { etapa: '03', label: 'CONSTRUÇÃO' },
      { etapa: '04', label: 'OPERAÇÃO' }
    ]
  },
  {
    id: 'projetos-engenharia',
    numero: '03',
    titulo: 'Projetos de Engenharia',
    subtitulo: 'Disciplinas complementares de engenharia',
    descricao:
      'Desenvolvimento de projetos complementares para compatibilização e conformidade técnica no canteiro.',
    escopos: [
      {
        nome: 'Hidráulico',
        descricao: 'Instalações prediais de água potável, esgoto e drenagem.'
      },
      {
        nome: 'Elétrico',
        descricao: 'Sistemas elétricos prediais, iluminação e quadros de distribuição.'
      },
      {
        nome: 'Estrutural',
        descricao: 'Cálculo e dimensionamento estrutural e fundações.'
      },
      {
        nome: 'Incêndio',
        descricao: 'Instalações de proteção e combate a incêndio.'
      }
    ]
  }
];
