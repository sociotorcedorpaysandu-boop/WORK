import React from 'react';

interface WorkOrganicPatternProps {
  className?: string;
  variant?: 'top-right' | 'bottom-left' | 'corner' | 'horizontal-band';
}

/**
 * Padrão Gráfico Cinza Work Construtora
 * Inspirado nas formas triangulares/chanfradas da identidade da marca (colunas e vigas angulares),
 * com efeito de "gradiente orgânico" onde as formas diminuem de forma irregular e se dissipam aos poucos,
 * exatamente como elementos arquitetônicos de fachada se dispersando no ar.
 * Em tons sutis de cinza para conferir sofisticação e identidade sem prejudicar a leitura.
 */
export const WorkOrganicPattern: React.FC<WorkOrganicPatternProps> = ({
  className = '',
  variant = 'top-right',
}) => {
  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full"
        preserveAspectRatio={
          variant === 'top-right'
            ? 'xMaxYMin slice'
            : variant === 'bottom-left'
            ? 'xMinYMax slice'
            : 'xMidYMid slice'
        }
      >
        <g opacity="0.85">
          {/* ========================================================
              GRUPO 1: Formas Maiores e Mais Estruturadas (Ponto Focal)
              Triângulos e trapézios chanfrados inspirados no W da Work
          ======================================================== */}
          {/* Módulo Principal chanfrado */}
          <polygon
            points="540,20 590,45 590,130 520,130 520,40"
            fill="#9CA3AF"
            opacity="0.12"
          />
          <polygon
            points="540,20 590,45 570,70 520,40"
            fill="#6B7280"
            opacity="0.14"
          />

          {/* Triângulo diagonal forte */}
          <polygon
            points="480,50 530,25 560,95 490,110"
            fill="#9CA3AF"
            opacity="0.10"
          />
          <polygon
            points="460,90 515,65 530,135 480,145"
            fill="#CBD5E1"
            opacity="0.16"
          />

          {/* ========================================================
              GRUPO 2: Fase Intermediária (Começando a quebrar em módulos menores)
          ======================================================== */}
          <polygon
            points="410,60 450,40 470,95 425,110"
            fill="#9CA3AF"
            opacity="0.09"
          />
          <polygon
            points="440,120 480,100 495,150 450,165"
            fill="#6B7280"
            opacity="0.08"
          />
          <polygon
            points="370,85 410,65 425,120 380,135"
            fill="#CBD5E1"
            opacity="0.13"
          />

          {/* Trapézio fino vertical */}
          <polygon
            points="530,145 560,135 560,210 530,200"
            fill="#D1D5DB"
            opacity="0.11"
          />
          <polygon
            points="490,170 520,155 520,225 490,215"
            fill="#9CA3AF"
            opacity="0.07"
          />

          {/* ========================================================
              GRUPO 3: Dissipação Orgânica (Formas menores e espaçadas irregularmente)
          ======================================================== */}
          <polygon
            points="320,110 355,92 368,140 330,152"
            fill="#9CA3AF"
            opacity="0.08"
          />
          <polygon
            points="350,160 385,142 398,190 360,202"
            fill="#6B7280"
            opacity="0.06"
          />
          <polygon
            points="390,200 425,182 438,230 400,242"
            fill="#CBD5E1"
            opacity="0.10"
          />
          <polygon
            points="440,230 470,215 480,260 450,270"
            fill="#D1D5DB"
            opacity="0.08"
          />

          {/* Pequenos módulos dispersos */}
          <polygon
            points="270,140 298,126 308,165 278,175"
            fill="#9CA3AF"
            opacity="0.06"
          />
          <polygon
            points="300,195 328,181 338,220 308,230"
            fill="#CBD5E1"
            opacity="0.08"
          />
          <polygon
            points="340,240 368,226 378,265 348,275"
            fill="#9CA3AF"
            opacity="0.05"
          />

          {/* Micro fragmentos dissipando para o vazio */}
          <polygon
            points="220,175 242,164 250,195 226,203"
            fill="#6B7280"
            opacity="0.05"
          />
          <polygon
            points="250,225 272,214 280,245 256,253"
            fill="#CBD5E1"
            opacity="0.07"
          />
          <polygon
            points="285,275 307,264 315,295 291,303"
            fill="#9CA3AF"
            opacity="0.04"
          />

          <polygon
            points="175,210 192,201 198,225 180,232"
            fill="#9CA3AF"
            opacity="0.04"
          />
          <polygon
            points="200,260 217,251 223,275 205,282"
            fill="#CBD5E1"
            opacity="0.05"
          />
          <polygon
            points="230,305 247,296 253,320 235,327"
            fill="#6B7280"
            opacity="0.03"
          />

          {/* Pontos mínimos quase invisíveis */}
          <polygon
            points="140,245 152,239 156,255 143,260"
            fill="#9CA3AF"
            opacity="0.03"
          />
          <polygon
            points="160,290 172,284 176,300 163,305"
            fill="#CBD5E1"
            opacity="0.04"
          />
          <polygon
            points="185,335 197,329 201,345 188,350"
            fill="#9CA3AF"
            opacity="0.02"
          />
        </g>
      </svg>
    </div>
  );
};
