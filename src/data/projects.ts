/**
 * WORK CONSTRUTORA - Catálogo Oficial de Obras e Projetos
 * 
 * Regra estrita: Somente nomes e dados confirmados no briefing original.
 * Dados não confirmados são definidos como null ou "—".
 * Imagens de demonstração de layout marcadas como PLACEHOLDER_IMAGE.
 */

// Imagens de demonstração de layout para visualização
import heroWorkSite from '@/src/assets/images/hero_work_construction_1790334457107.jpg';
import edsonCorporateImg from '@/src/assets/images/edson_corporate_building_1790334474133.jpg';
import vilaNovaCorporateImg from '@/src/assets/images/vila_nova_corporate_1790334484578.jpg';
import salinasResidenceImg from '@/src/assets/images/salinas_beachfront_residence_1790334496290.jpg';
import colegioAnanindeuaImg from '@/src/assets/images/colegio_ananindeua_1790334559907.jpg';

export interface Project {
  id: string;
  slug: string;
  nome: string;
  categoria: string | null;
  ano: string | null;
  periodo: string | null;
  metragem: string | null;
  localizacao: string | null;
  acabamento: string | null;
  descricao: string | null;
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

// Marcação de imagem de demonstração conforme instrução do projeto
export const PLACEHOLDER_IMAGE = true;

export const PROJECTS: Project[] = [
  {
    id: 'edson-corporate',
    slug: 'edson-corporate',
    nome: 'Edson Corporate',
    categoria: null,
    ano: null,
    periodo: null,
    metragem: null,
    localizacao: null,
    acabamento: null,
    descricao: null,
    detalhesTecnicos: [],
    imagemCapa: edsonCorporateImg, // PLACEHOLDER_IMAGE
    galeria: [edsonCorporateImg],
    servicos: [],
    cliente: null,
    depoimento: null,
    destaqueHome: true
  },
  {
    id: 'vila-nova-corporate',
    slug: 'vila-nova-corporate',
    nome: 'Vila Nova Corporate',
    categoria: null,
    ano: null,
    periodo: null,
    metragem: null,
    localizacao: null,
    acabamento: null,
    descricao: null,
    detalhesTecnicos: [],
    imagemCapa: vilaNovaCorporateImg, // PLACEHOLDER_IMAGE
    galeria: [vilaNovaCorporateImg],
    servicos: [],
    cliente: null,
    depoimento: null,
    destaqueHome: true
  },
  {
    id: 'reforma-residencial-salinas',
    slug: 'reforma-residencial-salinas',
    nome: 'Reforma Residencial — Salinas / Andrea Borges',
    categoria: null,
    ano: null,
    periodo: null,
    metragem: null,
    localizacao: null,
    acabamento: null,
    descricao: null,
    detalhesTecnicos: [],
    imagemCapa: salinasResidenceImg, // PLACEHOLDER_IMAGE
    galeria: [salinasResidenceImg],
    servicos: [],
    cliente: null,
    depoimento: null,
    destaqueHome: true
  },
  {
    id: 'colegio-ananindeua',
    slug: 'colegio-ananindeua',
    nome: 'Colégio Ananindeua',
    categoria: null,
    ano: null,
    periodo: null,
    metragem: null,
    localizacao: null,
    acabamento: null,
    descricao: null,
    detalhesTecnicos: [],
    imagemCapa: colegioAnanindeuaImg, // PLACEHOLDER_IMAGE
    galeria: [colegioAnanindeuaImg],
    servicos: [],
    cliente: null,
    depoimento: null,
    destaqueHome: false
  },
  {
    id: 'frota-martins',
    slug: 'frota-martins',
    nome: 'Frota Martins',
    categoria: null,
    ano: null,
    periodo: null,
    metragem: null,
    localizacao: null,
    acabamento: null,
    descricao: null,
    detalhesTecnicos: [],
    imagemCapa: heroWorkSite, // PLACEHOLDER_IMAGE
    galeria: [heroWorkSite],
    servicos: [],
    cliente: null,
    depoimento: null,
    destaqueHome: false
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.destaqueHome);
