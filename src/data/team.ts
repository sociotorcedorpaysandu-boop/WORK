/**
 * WORK CONSTRUTORA - Equipe e Liderança Técnica
 * Baseado estritamente no briefing oficial.
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
    bioCurta: 'Gestão executiva e administrativa da Work Construtora.',
    iniciais: 'TA'
  },
  {
    id: 'gabriel-costa',
    nome: 'Gabriel Costa',
    cargo: 'Administrativo',
    departamento: 'Administrativo',
    bioCurta: 'Atuação na gestão administrativa e de suprimentos.',
    iniciais: 'GC'
  },
  {
    id: 'claudio-porpino',
    nome: 'Claudio Porpino',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Engenharia e acompanhamento de obras.',
    iniciais: 'CP'
  },
  {
    id: 'ailton-vale',
    nome: 'Ailton Vale',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Engenharia e compatibilização técnica de projetos.',
    iniciais: 'AV'
  },
  {
    id: 'carlos-rocha',
    nome: 'Carlos Rocha',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Engenharia e gestão de canteiro.',
    iniciais: 'CR'
  }
];
