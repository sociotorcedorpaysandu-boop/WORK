/**
 * WORK CONSTRUTORA - Equipe e Liderança Técnica
 * Baseado estritamente no briefing oficial.
 */

import tarekImg from '@/src/assets/images/tarek_real_drive.jpg';
import gabrielImg from '@/src/assets/images/gabriel_costa.jpg';
import engenhariaImg from '@/src/assets/images/equipe_engenharia.jpg';

export interface TeamMember {
  id: string;
  nome: string;
  cargo: string;
  departamento: 'Diretoria' | 'Administrativo' | 'Engenharia';
  bioCurta?: string;
  iniciais: string;
  foto?: string;
}

export const TEAM: TeamMember[] = [
  {
    id: 'tarek-abdulmassih',
    nome: 'Tarek Abdulmassih',
    cargo: 'Diretor e Administrativo',
    departamento: 'Diretoria',
    bioCurta: 'Diretoria e Administrativo',
    iniciais: 'TA',
    foto: tarekImg
  },
  {
    id: 'gabriel-costa',
    nome: 'Gabriel Costa',
    cargo: 'Administrativo',
    departamento: 'Administrativo',
    bioCurta: 'Administrativo',
    iniciais: 'GC',
    foto: gabrielImg
  },
  {
    id: 'claudio-porpino',
    nome: 'Claudio Porpino',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Acompanhamento técnico de projetos e obras',
    iniciais: 'CP'
  },
  {
    id: 'ailton-vale',
    nome: 'Ailton Vale',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Acompanhamento técnico de projetos e obras',
    iniciais: 'AV'
  },
  {
    id: 'carlos-rocha',
    nome: 'Carlos Rocha',
    cargo: 'Engenharia',
    departamento: 'Engenharia',
    bioCurta: 'Acompanhamento técnico de projetos e obras',
    iniciais: 'CR'
  }
];

export const ENGINEERING_TEAM_IMAGE = engenhariaImg;
export const TAREK_IMAGE = tarekImg;
export const GABRIEL_IMAGE = gabrielImg;
