/**
 * WORK CONSTRUTORA - Catálogo Oficial de Obras e Projetos
 * 
 * Regra estrita: Somente nomes e dados confirmados no briefing original.
 * Dados não confirmados são definidos como null ou "—".
 * Fotos reais são usadas unicamente quando fornecidas oficialmente pela Work.
 * Quando a foto real não estiver disponível, é utilizado placeholder neutro,
 * sem associar fotos de outras obras nem imagens geradas por IA.
 */

import finalImg from '@/src/assets/images/municipalidade_final_1790992266785.jpg';
import execucaoImg from '@/src/assets/images/municipalidade_execucao_1790992253931.jpg';
import estruturaImg from '@/src/assets/images/municipalidade_estrutura_1790992243499.jpg';
import fundacaoImg from '@/src/assets/images/municipalidade_fundacao_1790992233978.jpg';

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
  imagemCapa: string | null;
  galeria: string[];
  temFotoReal: boolean;
  servicos: string[];
  cliente: string | null;
  depoimento: {
    autor: string;
    cargo: string;
    texto: string;
  } | null;
  destaqueHome?: boolean;
}

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
    imagemCapa: null,
    galeria: [],
    temFotoReal: false,
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
    imagemCapa: null,
    galeria: [],
    temFotoReal: false,
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
    imagemCapa: null,
    galeria: [],
    temFotoReal: false,
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
    imagemCapa: null,
    galeria: [],
    temFotoReal: false,
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
    imagemCapa: null,
    galeria: [],
    temFotoReal: false,
    servicos: [],
    cliente: null,
    depoimento: null,
    destaqueHome: false
  },
  {
    id: 'predio-municipalidade',
    slug: 'predio-municipalidade',
    nome: 'Prédio Municipalidade',
    categoria: 'Corporativo',
    ano: null,
    periodo: null,
    metragem: null,
    localizacao: 'Belém — PA',
    acabamento: null,
    descricao: 'Empreendimento corporativo executado pela Work Construtora em Belém.',
    detalhesTecnicos: [],
    imagemCapa: finalImg,
    galeria: [finalImg, execucaoImg, estruturaImg, fundacaoImg],
    temFotoReal: true,
    servicos: ['Construção Civil', 'Execução de Estrutura', 'Fachada'],
    cliente: null,
    depoimento: null,
    destaqueHome: false
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.destaqueHome);
