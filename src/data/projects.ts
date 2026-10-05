/**
 * WORK CONSTRUTORA - Catálogo Oficial de Obras e Projetos
 * 
 * Regra estrita: Somente nomes e dados confirmados no briefing original.
 * Estrutura de dados de cada obra:
 * - nome
 * - imagemCapa
 * - periodo
 * - descricao
 * - metragem
 * - acabamento
 * - informacoesComplementares
 * - galeria[]
 * 
 * Quando alguma informação ainda não estiver disponível:
 * usar "—" ou manter o campo preparado no código.
 */

export interface Project {
  id: string;
  slug: string;
  nome: string;
  imagemCapa: string | null;
  periodo: string | null;
  descricao: string | null;
  metragem: string | null;
  acabamento: string | null;
  informacoesComplementares: string | null;
  galeria: string[];
  // Campos complementares de controle e compatibilidade com listagens
  temFotoReal: boolean;
  destaqueHome: boolean;
  categoria?: string | null;
  aliases?: string[];
  detalhesTecnicos?: string[];
  servicos?: string[];
  cliente?: string | null;
  depoimento?: {
    autor: string;
    cargo: string;
    texto: string;
  } | null;
}

export const PROJECTS: Project[] = [
  {
    id: 'edson-corporate',
    slug: 'edson-corporate',
    nome: 'Edson Corporate',
    imagemCapa: null,
    periodo: '—',
    descricao: '—',
    metragem: '—',
    acabamento: '—',
    informacoesComplementares: '—',
    galeria: [],
    temFotoReal: false,
    destaqueHome: true,
    categoria: null
  },
  {
    id: 'vila-nova-corporate',
    slug: 'vila-nova-corporate',
    nome: 'Vila Nova Corporate',
    imagemCapa: null,
    periodo: '—',
    descricao: '—',
    metragem: '—',
    acabamento: '—',
    informacoesComplementares: '—',
    galeria: [],
    temFotoReal: false,
    destaqueHome: true,
    categoria: null
  },
  {
    id: 'reforma-casa-salinas',
    slug: 'reforma-casa-salinas',
    aliases: ['reforma-residencial-salinas'],
    nome: 'Reforma Casa Salinas / Andrea Borges',
    imagemCapa: null,
    periodo: '—',
    descricao: '—',
    metragem: '—',
    acabamento: '—',
    informacoesComplementares: '—',
    galeria: [],
    temFotoReal: false,
    destaqueHome: true,
    categoria: null
  },
  {
    id: 'reforma-colegio-ananindeua',
    slug: 'reforma-colegio-ananindeua',
    aliases: ['colegio-ananindeua'],
    nome: 'Reforma Colégio Ananindeua',
    imagemCapa: null,
    periodo: '—',
    descricao: '—',
    metragem: '—',
    acabamento: '—',
    informacoesComplementares: '—',
    galeria: [],
    temFotoReal: false,
    destaqueHome: false,
    categoria: null
  },
  {
    id: 'reforma-frota-martins',
    slug: 'reforma-frota-martins',
    aliases: ['frota-martins'],
    nome: 'Reforma Frota Martins',
    imagemCapa: null,
    periodo: '—',
    descricao: '—',
    metragem: '—',
    acabamento: '—',
    informacoesComplementares: '—',
    galeria: [],
    temFotoReal: false,
    destaqueHome: false,
    categoria: null
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.destaqueHome);
