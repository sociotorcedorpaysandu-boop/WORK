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
  paragrafos?: string[];
  detalhes?: string[];
  fluxo?: { etapa: string; label: string }[];
  escopos?: { nome: string; descricao: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'construcao-administracao',
    numero: '01',
    titulo: 'Construção/Administração e desenvolvimento de obras e reformas',
    subtitulo: 'Residencial, Comercial e Industrial',
    descricao:
      'A Work Construtora atua na execução de obras e reformas residenciais, comerciais e industriais, oferecendo soluções completas para diferentes necessidades da construção civil. Trabalhamos em todas as etapas do processo, desde fundações, estrutura, alvenaria e instalações, até revestimentos, pintura, acabamentos e entrega final. Nossa atuação inclui o gerenciamento do cronograma, compra e controle de materiais, gestão de mão de obra e controle de qualidade, garantindo organização, eficiência e acompanhamento em cada etapa da obra.',
    paragrafos: [
      'A Work Construtora atua na execução de obras e reformas residenciais, comerciais e industriais, oferecendo soluções completas para diferentes necessidades da construção civil. Trabalhamos em todas as etapas do processo, desde fundações, estrutura, alvenaria e instalações, até revestimentos, pintura, acabamentos e entrega final.',
      'Nossa atuação inclui o gerenciamento do cronograma, compra e controle de materiais, gestão de mão de obra e controle de qualidade, garantindo organização, eficiência e acompanhamento em cada etapa da obra.'
    ],
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
    titulo: 'BTS (Built to Suit)',
    subtitulo: 'Solução sob medida para empresas',
    descricao:
      'Built to Suit (BTS) é uma solução imobiliária desenvolvida sob medida para atender às necessidades específicas de cada empresa. Cuidamos do desenvolvimento e da construção do empreendimento de acordo com as características e operações do cliente. O modelo proporciona maior personalização, eficiência e planejamento, com possibilidade de contrato de locação de longo prazo após a conclusão da obra.',
    paragrafos: [
      'Built to Suit (BTS) é uma solução imobiliária desenvolvida sob medida para atender às necessidades específicas de cada empresa. Cuidamos do desenvolvimento e da construção do empreendimento de acordo com as características e operações do cliente.',
      'O modelo proporciona maior personalização, eficiência e planejamento, com possibilidade de contrato de locação de longo prazo após a conclusão da obra.'
    ],
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
    subtitulo: 'Disciplinas complementares',
    descricao:
      'Desenvolvimento de projetos complementares para apoiar o planejamento e a execução da obra.',
    escopos: [
      {
        nome: 'Hidráulico',
        descricao: 'Instalações hidráulicas prediais.'
      },
      {
        nome: 'Elétrico',
        descricao: 'Instalações elétricas prediais.'
      },
      {
        nome: 'Estrutural',
        descricao: 'Projetos estruturais e fundações.'
      },
      {
        nome: 'Incêndio',
        descricao: 'Projetos de combate a incêndio e pânico.'
      }
    ]
  }
];
