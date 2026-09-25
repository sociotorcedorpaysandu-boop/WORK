/**
 * WORK CONSTRUTORA - Catálogo Oficial de Obras e Projetos
 * 
 * Regra: Não inventar datas, metragens, clientes ou depoimentos não confirmados.
 * Informações não disponíveis são preenchidas como null ou "—".
 * Imagens de demonstração estão sinalizadas como MOCK_PROJECT_IMAGE.
 */

// Importação das imagens geradas especificamente para o projeto
import heroWorkSite from '@/src/assets/images/hero_work_construction_1790334457107.jpg';
import edsonCorporateImg from '@/src/assets/images/edson_corporate_building_1790334474133.jpg';
import vilaNovaCorporateImg from '@/src/assets/images/vila_nova_corporate_1790334484578.jpg';
import salinasResidenceImg from '@/src/assets/images/salinas_beachfront_residence_1790334496290.jpg';
import motionEngineeringImg from '@/src/assets/images/engineering_in_motion_site_1790334507218.jpg';
import colegioAnanindeuaImg from '@/src/assets/images/colegio_ananindeua_1790334559907.jpg';
import municipalidadePlanejar from '@/src/assets/images/municipalidade_planejar_1790334529178.jpg';
import municipalidadeConstruir from '@/src/assets/images/municipalidade_construir_1790334539473.jpg';
import municipalidadeEntregar from '@/src/assets/images/municipalidade_entregar_1790334549340.jpg';

export interface Project {
  id: string;
  slug: string;
  nome: string;
  categoria: string;
  ano: string | null;
  periodo: string | null;
  metragem: string | null;
  localizacao: string | null;
  acabamento: string | null;
  descricao: string;
  detalhesTecnicos?: string[];
  imagemCapa: string;
  galeria: string[];
  servicos: string[];
  cliente: string | null;
  depoimento: {
    autor: string;
    cargo: string;
    texto: string;
  } | null;
  destaqueHome?: boolean;
}

export const MOCK_PROJECT_IMAGE = true;

export const PROJECTS: Project[] = [
  {
    id: 'edson-corporate',
    slug: 'edson-corporate',
    nome: 'Edson Corporate',
    categoria: 'Comercial & BTS',
    ano: null,
    periodo: '—',
    metragem: '—',
    localizacao: 'Belém — PA',
    acabamento: 'Alto Padrão Corporativo',
    descricao:
      'Empreendimento comercial corporativo desenvolvido com rigor técnico em engenharia estrutural, sistemas prediais de alta eficiência e acabamentos contemporâneos. Gestão completa do planejamento à entrega.',
    detalhesTecnicos: [
      'Estrutura em concreto armado de alto desempenho',
      'Fachada com controle térmico e acústico',
      'Compatibilização total de projetos elétrico, hidráulico e climatização',
      'Controle rigoroso de cronograma e suprimentos'
    ],
    imagemCapa: edsonCorporateImg,
    galeria: [
      edsonCorporateImg,
      motionEngineeringImg,
      municipalidadeConstruir,
      municipalidadeEntregar
    ],
    servicos: [
      'Construção e Administração de Obra',
      'Compatibilização de Projetos',
      'Engenharia Estrutural e Instalações',
      'Controle de Qualidade e Prazos'
    ],
    cliente: null,
    depoimento: null,
    destaqueHome: true
  },
  {
    id: 'vila-nova-corporate',
    slug: 'vila-nova-corporate',
    nome: 'Vila Nova Corporate',
    categoria: 'Comercial',
    ano: null,
    periodo: '—',
    metragem: '—',
    localizacao: 'Belém — PA',
    acabamento: 'Fachada Ventilada e Esquadrias Técnicas',
    descricao:
      'Torre corporativa concebida para atender empresas que exigem excelência operacional e representatividade institucional. Soluções de engenharia inteligente para máxima flexibilidade espacial.',
    detalhesTecnicos: [
      'Execução de lajes nervuradas para grandes vãos livres',
      'Instalações hidrossanitárias e combate a incêndio de alta confiabilidade',
      'Supervisão técnica contínua no canteiro',
      'Eficiência energética e ventilação estratégica'
    ],
    imagemCapa: vilaNovaCorporateImg,
    galeria: [
      vilaNovaCorporateImg,
      heroWorkSite,
      municipalidadePlanejar,
      municipalidadeEntregar
    ],
    servicos: [
      'Gerenciamento e Execução de Obra',
      'Projetos Elétrico e Hidráulico',
      'Supervisão e Planejamento de Canteiro'
    ],
    cliente: null,
    depoimento: null,
    destaqueHome: true
  },
  {
    id: 'reforma-residencial-salinas',
    slug: 'reforma-residencial-salinas',
    nome: 'Reforma Residencial — Salinas',
    categoria: 'Residencial',
    ano: null,
    periodo: '—',
    metragem: '—',
    localizacao: 'Salinópolis — PA',
    acabamento: 'Madeira Natural, Concreto e Esquadrias Minimalistas',
    descricao:
      'Reforma e desenvolvimento residencial com assinatura da arquiteta Andrea Borges. Intervenção estrutural delicada em ambiente litorâneo, demandando materiais específicos contra intempéries salinas e execução milimétrica de acabamentos.',
    detalhesTecnicos: [
      'Tratamento anticorrosivo em estruturas de concreto e aço',
      'Integração de esquadrias embutidas de piso a teto',
      'Paisagismo e áreas molhadas com impermeabilização de alta performance',
      'Racionalização de compras e logística interestadual de acabamentos'
    ],
    imagemCapa: salinasResidenceImg,
    galeria: [
      salinasResidenceImg,
      municipalidadePlanejar,
      motionEngineeringImg
    ],
    servicos: [
      'Execução e Administração de Reforma Residencial',
      'Consultoria Técnica de Materiais',
      'Engenharia de Acabamentos'
    ],
    cliente: 'Andrea Borges (Projeto Arquitetônico)',
    depoimento: null,
    destaqueHome: true
  },
  {
    id: 'colegio-ananindeua',
    slug: 'colegio-ananindeua',
    nome: 'Colégio Ananindeua',
    categoria: 'Institucional & Educacional',
    ano: null,
    periodo: '—',
    metragem: '—',
    localizacao: 'Ananindeua — PA',
    acabamento: 'Resistência Institucional e Ergonomia',
    descricao:
      'Desenvolvimento e intervenção de engenharia para campus educacional, focando em segurança circulatória, normas de acessibilidade, conforto acústico e solidez estrutural para grande fluxo diário.',
    detalhesTecnicos: [
      'Sistemas de proteção e combate a incêndio (PPCI) aprovados',
      'Adequação completa de acessibilidade conforme NBR 9050',
      'Pisos industriais de alta durabilidade e baixo custo de manutenção',
      'Planejamento de execução em etapas para preservação da rotina escolar'
    ],
    imagemCapa: colegioAnanindeuaImg,
    galeria: [
      colegioAnanindeuaImg,
      heroWorkSite,
      municipalidadeConstruir
    ],
    servicos: [
      'Execução de Obras Institucionais',
      'Projeto de Incêndio e Pânico',
      'Projetos Elétrico e Hidráulico'
    ],
    cliente: null,
    depoimento: null,
    destaqueHome: false
  },
  {
    id: 'frota-martins',
    slug: 'frota-martins',
    nome: 'Frota Martins',
    categoria: 'Comercial',
    ano: null,
    periodo: '—',
    metragem: '—',
    localizacao: 'Belém — PA',
    acabamento: 'Alvenaria Estrutural e Infraestrutura Técnica',
    descricao:
      'Obra comercial com foco em dinamismo operacional, solidez de engenharia e otimização de custos através de gestão centralizada de suprimentos e equipe própria especializada.',
    detalhesTecnicos: [
      'Controle tecnológico de concreto e agregados',
      'Planejamento orçamentário transparente e auditoria contínua',
      'Redução de perdas de material no canteiro'
    ],
    imagemCapa: heroWorkSite,
    galeria: [
      heroWorkSite,
      motionEngineeringImg,
      municipalidadeEntregar
    ],
    servicos: [
      'Construção e Administração',
      'Planejamento Físico-Financeiro',
      'Engenharia de Instalações'
    ],
    cliente: null,
    depoimento: null,
    destaqueHome: false
  }
];

// Obras em Destaque na Home conforme briefing
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.destaqueHome);
