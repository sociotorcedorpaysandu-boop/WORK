/**
 * WORK CONSTRUTORA - Portfólio de Serviços de Engenharia
 */

export interface ServiceItem {
  id: string;
  numero: string;
  titulo: string;
  subtitulo?: string;
  descricao: string;
  detalhes: string[];
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
      'Execução integral de obras novas e reformas de alta complexidade. Gerenciamos todas as etapas do canteiro com rigor técnico, garantindo aderência ao orçamento, respeito aos cronogramas e acabamento impecável.',
    detalhes: [
      'Planejamento físico-financeiro detalhado com medições periódicas',
      'Gestão ativa de suprimentos e negociação direta com fabricantes',
      'Contratação, coordenação e fiscalização diária de equipes especializadas',
      'Controle rigoroso de qualidade de materiais (ensaios tecnológicos de concreto e agregados)',
      'Acompanhamento normativo integral (NRs, NBRs e exigências municipais)'
    ]
  },
  {
    id: 'built-to-suit',
    numero: '02',
    titulo: 'Built to Suit — BTS',
    subtitulo: 'Empreendimentos sob medida para operações corporativas',
    descricao:
      'Desenvolvemos e executamos empreendimentos projetados especificamente para a operação do cliente corporativo. O locatário obtém um imóvel feito sob medida para seu fluxo produtivo, sem necessidade de imobilizar capital próprio em construção.',
    detalhes: [
      'Análise de viabilidade técnica e localização estratégica em Belém e região metropolitana',
      'Adequação completa às exigências operacionais, de logística ou de atendimento ao público',
      'Otimização de custos de implantação e eficiência energética predial',
      'Garantia de entrega no prazo contratual para início da operação comercial'
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
    subtitulo: 'Engenharia de instalações e conformidade técnica',
    descricao:
      'Desenvolvimento de projetos complementares de engenharia civil com integração BIM, garantindo compatibilização milimétrica e prevenindo retrabalhos no canteiro de obras.',
    detalhes: [
      'Compatibilização tridimensional e eliminação de interferências estruturais',
      'Dimensionamento econômico com foco em eficiência de consumo e manutenção futura',
      'Aprovação técnica junto aos órgãos reguladores e concessionárias'
    ],
    escopos: [
      {
        nome: 'Hidráulico',
        descricao:
          'Sistemas de água fria, água quente, esgotamento sanitário, drenagem pluvial e reservatórios com dimensionamento técnico preciso.'
      },
      {
        nome: 'Elétrico',
        descricao:
          'Entrada de energia, quadros de distribuição, subestações, iluminação eficiente, automação e proteção contra descargas atmosféricas (SPDA).'
      },
      {
        nome: 'Estrutural',
        descricao:
          'Dimensionamento de fundações, concreto armado, estruturas metálicas e contenções calculados para máxima segurança e racionalização de aço e concreto.'
      },
      {
        nome: 'Incêndio',
        descricao:
          'Projeto e aprovação de Proteção Contra Incêndio e Pânico (PPCI), redes de hidrantes, sprinklers, detectores e sinalização de emergência perante o Corpo de Bombeiros.'
      }
    ]
  }
];
