/**
 * WORK CONSTRUTORA - Equipe e Liderança Técnica
 */

export interface TeamMember {
  id: string;
  nome: string;
  cargo: string;
  departamento: 'Diretoria' | 'Administrativo' | 'Engenharia';
  bioCurta?: string;
  iniciais: string;
}

export const TEAM: TeamMember[] = [
  {
    id: 'tarek-abdulmassih',
    nome: 'Tarek Abdulmassih',
    cargo: 'Diretor e Administrativo',
    departamento: 'Diretoria',
    bioCurta: 'Liderança estratégica, coordenação institucional e gestão executiva das operações e parcerias da Work Construtora.',
    iniciais: 'TA'
  },
  {
    id: 'gabriel-costa',
    nome: 'Gabriel Costa',
    cargo: 'Administrativo',
    departamento: 'Administrativo',
    bioCurta: 'Gestão de processos administrativos, suprimentos e controle orçamentário físico-financeiro.',
    iniciais: 'GC'
  },
  {
    id: 'claudio-porpino',
    nome: 'Claudio Porpino',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Engenharia civil com foco em planejamento executivo, qualidade estrutural e acompanhamento técnico no canteiro.',
    iniciais: 'CP'
  },
  {
    id: 'ailton-vale',
    nome: 'Ailton Vale',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Supervisão técnica, compatibilização de projetos complementares e conformidade normativa.',
    iniciais: 'AV'
  },
  {
    id: 'carlos-rocha',
    nome: 'Carlos Rocha',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Gestão de canteiro, segurança do trabalho, logística de execução e garantia de padrões de acabamento.',
    iniciais: 'CR'
  }
];
