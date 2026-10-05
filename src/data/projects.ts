/**
 * WORK CONSTRUTORA - Catálogo Oficial de Obras e Projetos
 * 
 * Regra estrita: Os projetos reais listados abaixo contam com dados
 * e imagens provisórias estritamente para homologação e demonstração ao cliente.
 * 
 * MARCADORES DE DEMONSTRAÇÃO:
 * - isMock: true (indica conteúdo demonstrativo provisório)
 * - MOCK_PROJECT_IMAGE: imagens de arquitetura para visualização
 * - CONTENT_PLACEHOLDER: dados técnicos provisórios fáceis de substituir
 */

// IMAGENS DE CAPA (MOCK_PROJECT_IMAGE)
import edsonCapa from '@/src/assets/images/edson_corporate_building_1790334474133.jpg';
import vilaNovaCapa from '@/src/assets/images/vila_nova_corporate_1790334484578.jpg';
import salinasCapa from '@/src/assets/images/salinas_beachfront_residence_1790334496290.jpg';
import colegioCapa from '@/src/assets/images/colegio_ananindeua_1790334559907.jpg';
import frotaMartinsCapa from '@/src/assets/images/frota_martins_capa_1791222174303.jpg';

// IMAGENS DE GALERIA - EDSON CORPORATE (MOCK_PROJECT_IMAGE)
import edsonG1 from '@/src/assets/images/mock/edson_recepcao.jpg';
import edsonG2 from '@/src/assets/images/mock/edson_detalhe_fachada.jpg';
import edsonG3 from '@/src/assets/images/mock/edson_acesso_terreo.jpg';
import edsonG4 from '@/src/assets/images/mock/edson_acabamentos.jpg';

// IMAGENS DE GALERIA - VILA NOVA CORPORATE (MOCK_PROJECT_IMAGE)
import vilaNovaG1 from '@/src/assets/images/mock/vila_nova_porte_cochere.jpg';
import vilaNovaG2 from '@/src/assets/images/mock/vila_nova_pele_vidro.jpg';
import vilaNovaG3 from '@/src/assets/images/mock/vila_nova_lajes_corporativas.jpg';
import vilaNovaG4 from '@/src/assets/images/mock/vila_nova_integracao.jpg';

// IMAGENS DE GALERIA - REFORMA CASA SALINAS (MOCK_PROJECT_IMAGE)
import salinasG1 from '@/src/assets/images/mock/salinas_varanda_gourmet.jpg';
import salinasG2 from '@/src/assets/images/mock/salinas_deck_piscina.jpg';
import salinasG3 from '@/src/assets/images/mock/salinas_fachada_reforma.jpg';
import salinasG4 from '@/src/assets/images/mock/salinas_paisagismo.jpg';

// IMAGENS DE GALERIA - REFORMA COLÉGIO ANANINDEUA (MOCK_PROJECT_IMAGE)
import colegioG1 from '@/src/assets/images/mock/colegio_fachada_renovada.jpg';
import colegioG2 from '@/src/assets/images/mock/colegio_circulacao_coberta.jpg';
import colegioG3 from '@/src/assets/images/mock/colegio_bloco_didatico.jpg';

// IMAGENS DE GALERIA - REFORMA FROTA MARTINS (MOCK_PROJECT_IMAGE)
import frotaMartinsG1 from '@/src/assets/images/mock/frota_martins_pele_vidro.jpg';
import frotaMartinsG2 from '@/src/assets/images/mock/frota_martins_painel_acm.jpg';
import frotaMartinsG3 from '@/src/assets/images/mock/frota_martins_recepcao.jpg';
import frotaMartinsG4 from '@/src/assets/images/mock/frota_martins_sala_reunioes.jpg';

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
  // Marcador explícito de demonstração
  isMock?: boolean;
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
    // MOCK_PROJECT_IMAGE
    imagemCapa: edsonCapa,
    // CONTENT_PLACEHOLDER
    periodo: 'Março/2023 a Novembro/2024',
    descricao:
      'Edifício corporativo de padrão contemporâneo, projetado para abrigar lajes corporativas e escritórios empresariais com circulação fluida, infraestrutura predial integrada e eficiência de operação.',
    metragem: '3.200 m²',
    acabamento: 'Alto padrão / Corporativo comercial',
    informacoesComplementares:
      'Execução completa com controle rigoroso de cronograma, montagem de caixilharia de alto desempenho, instalações prediais, acabamentos nobres em áreas comuns e hall de entrada com controle de acesso.',
    // MOCK_PROJECT_IMAGE (Galeria demonstrativa consistente)
    galeria: [edsonG1, edsonG2, edsonG3, edsonG4],
    isMock: true,
    temFotoReal: false,
    destaqueHome: true,
    categoria: 'Corporativo'
  },
  {
    id: 'vila-nova-corporate',
    slug: 'vila-nova-corporate',
    nome: 'Vila Nova Corporate',
    // MOCK_PROJECT_IMAGE
    imagemCapa: vilaNovaCapa,
    // CONTENT_PLACEHOLDER
    periodo: 'Agosto/2023 a Outubro/2024',
    descricao:
      'Empreendimento comercial corporativo desenvolvido com foco em flexibilidade de layout para empresas, iluminação natural valorizada por pele de vidro e ambientes comuns sóbrios e funcionais.',
    metragem: '2.850 m²',
    acabamento: 'Alto padrão / Corporativo',
    informacoesComplementares:
      'Acompanhamento integral das etapas de fundação, estrutura, fechamentos termoacústicos e revestimentos técnicos para circulação e suporte administrativo.',
    // MOCK_PROJECT_IMAGE (Galeria demonstrativa consistente)
    galeria: [vilaNovaG1, vilaNovaG2, vilaNovaG3, vilaNovaG4],
    isMock: true,
    temFotoReal: false,
    destaqueHome: true,
    categoria: 'Corporativo'
  },
  {
    id: 'reforma-casa-salinas',
    slug: 'reforma-casa-salinas',
    aliases: ['reforma-residencial-salinas'],
    nome: 'Reforma Casa Salinas / Andrea Borges',
    // MOCK_PROJECT_IMAGE
    imagemCapa: salinasCapa,
    // CONTENT_PLACEHOLDER
    periodo: 'Junho/2023 a Janeiro/2024',
    descricao:
      'Reforma residencial completa em Salinas, integrando espaços de convivência social, área gourmet externa e varanda coberta com acabamentos resistentes ao clima litorâneo.',
    metragem: '480 m²',
    acabamento: 'Alto padrão residencial litorâneo',
    informacoesComplementares:
      'Adequação de instalações elétricas e hidrossanitárias, substituição de esquadrias, revitalização de deck externo, impermeabilização de lajes e recomposição de revestimentos cerâmicos.',
    // MOCK_PROJECT_IMAGE (Galeria demonstrativa consistente)
    galeria: [salinasG1, salinasG2, salinasG3, salinasG4],
    isMock: true,
    temFotoReal: false,
    destaqueHome: true,
    categoria: 'Residencial'
  },
  {
    id: 'reforma-colegio-ananindeua',
    slug: 'reforma-colegio-ananindeua',
    aliases: ['colegio-ananindeua'],
    nome: 'Reforma Colégio Ananindeua',
    // MOCK_PROJECT_IMAGE
    imagemCapa: colegioCapa,
    // CONTENT_PLACEHOLDER
    periodo: 'Dezembro/2023 a Fevereiro/2024',
    descricao:
      'Reforma institucional e modernização das instalações educacionais, contemplando renovação de salas de aula, circulação coberta, ambientes pedagógicos e áreas de convivência escolar.',
    metragem: '1.650 m²',
    acabamento: 'Padrão institucional educacional',
    informacoesComplementares:
      'Execução em cronograma intensivo de recesso escolar, recuperação de pisos de alta resistência, revisão completa de cobertura, pintura técnica e adequação de acessibilidade.',
    // MOCK_PROJECT_IMAGE (Galeria demonstrativa consistente)
    galeria: [colegioG1, colegioG2, colegioG3],
    isMock: true,
    temFotoReal: false,
    destaqueHome: false,
    categoria: 'Institucional'
  },
  {
    id: 'reforma-frota-martins',
    slug: 'reforma-frota-martins',
    aliases: ['frota-martins'],
    nome: 'Reforma Frota Martins',
    // MOCK_PROJECT_IMAGE
    imagemCapa: frotaMartinsCapa,
    // CONTENT_PLACEHOLDER
    periodo: 'Novembro/2023 a Abril/2024',
    descricao:
      'Reforma e modernização de edifício comercial, englobando revitalização de fachada, atualização de instalações e readequação de espaços corporativos e administrativos.',
    metragem: '1.120 m²',
    acabamento: 'Comercial corporativo / Médio-alto padrão',
    informacoesComplementares:
      'Reestruturação de divisórias internas em perfis e vidro, novo sistema de iluminação embutida, acabamentos em painéis ripados e atualização da recepção comercial.',
    // MOCK_PROJECT_IMAGE (Galeria demonstrativa consistente)
    galeria: [frotaMartinsG1, frotaMartinsG2, frotaMartinsG3, frotaMartinsG4],
    isMock: true,
    temFotoReal: false,
    destaqueHome: false,
    categoria: 'Comercial'
  }
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.destaqueHome);
