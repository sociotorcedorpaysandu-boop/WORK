import React from 'react';

interface WorkOrganicPatternProps {
  className?: string;
  variant?: 'top-right' | 'bottom-left' | 'corner' | 'horizontal-band';
}

/**
 * Padrão Gráfico Triangular Work Construtora
 * Diretamente inspirado na geometria triangular e angular do símbolo oficial da marca (Work W):
 * - Formas estritamente triangulares e fragmentos angulares (chanfros, caps e cunhas)
 * - Concentração maior e módulos maiores no canto superior direito
 * - Redução progressiva e irregular de escala, quantidade e opacidade em direção ao centro/esquerda
 * - Sensação arquitetônica de fragmentação/dissolução contínua
 * - Tons de cinza suaves (opacidades entre 4% e 14%), sem tons de laranja
 * - Sem grids regulares, sem quadrados e sem losangos genéricos
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
        <g>
          {/* ========================================================
              1. NÚCLEO SUPERIOR DIREITO (Módulos maiores, 26px a 40px, opacidade 11% a 14%)
          ======================================================== */}
          <polygon points="530.6,40.6 562.0,55.3 532.3,73.6" fill="#64748B" opacity="0.122" />
          <polygon points="553.7,22.0 594.9,45.9 561.3,64.0" fill="#334155" opacity="0.123" />
          <polygon points="582.0,39.4 576.6,77.3 547.8,56.8" fill="#64748B" opacity="0.13" />
          <polygon points="543.0,26.4 550.8,72.8 515.9,58.8" fill="#CBD5E1" opacity="0.124" />
          <polygon points="481.6,24.6 522.6,33.8 507.5,5.3" fill="#334155" opacity="0.122" />
          <polygon points="527.0,53.6 563.7,74.4 534.2,90.8" fill="#475569" opacity="0.124" />
          <polygon points="565.1,20.0 575.8,58.6 539.7,50.9" fill="#CBD5E1" opacity="0.134" />
          <polygon points="552.5,36.4 578.5,64.7 540.3,71.0" fill="#CBD5E1" opacity="0.139" />
          <polygon points="535.8,61.6 548.6,88.7 521.0,87.7" fill="#334155" opacity="0.134" />
          <polygon points="550.5,53.6 569.4,86.6 539.0,85.7" fill="none" stroke="#64748B" strokeWidth="1.2" opacity="0.112" />
          <polygon points="472.5,12.3 511.8,34.2 480.4,51.9" fill="#334155" opacity="0.127" />

          {/* ========================================================
              2. TRANSIÇÃO INTERMEDIÁRIA ALTA (Módulos de 18px a 27px, opacidade 8% a 11%)
          ======================================================== */}
          <polygon points="466.2,134.5 495.6,140.7 474.2,162.0" fill="#334155" opacity="0.099" />
          <polygon points="416.8,71.8 441.4,84.0 417.5,97.9" fill="#475569" opacity="0.084" />
          <polygon points="467.6,61.3 464.5,86.2 448.8,73.7" fill="#94A3B8" opacity="0.099" />
          <polygon points="514.7,134.0 524.0,165.8 498.4,158.8" fill="#334155" opacity="0.081" />
          <polygon points="485.8,65.0 496.6,92.9 469.2,89.8" fill="#64748B" opacity="0.087" />
          <polygon points="451.3,78.7 478.3,91.3 458.4,104.4" fill="#475569" opacity="0.092" />
          <polygon points="473.0,36.9 468.7,57.6 453.5,45.3" fill="#CBD5E1" opacity="0.105" />
          <polygon points="508.1,34.5 535.6,47.1 509.8,63.2" fill="none" stroke="#94A3B8" strokeWidth="1.2" opacity="0.083" />
          <polygon points="420.9,123.1 434.0,144.4 414.0,144.5" fill="#CBD5E1" opacity="0.109" />
          <polygon points="469.8,64.5 500.7,74.0 490.8,51.1" fill="none" stroke="#CBD5E1" strokeWidth="1.2" opacity="0.095" />
          <polygon points="438.8,142.8 445.1,171.7 418.8,164.5" fill="none" stroke="#94A3B8" strokeWidth="1.2" opacity="0.102" />
          <polygon points="502.8,49.8 508.8,77.1 483.9,70.4" fill="#94A3B8" opacity="0.101" />
          <polygon points="434.2,95.2 463.1,108.7 441.8,126.3" fill="#64748B" opacity="0.094" />

          {/* ========================================================
              3. DISPERSÃO CENTRAL (Módulos de 12px a 19px, opacidade 6% a 9%)
          ======================================================== */}
          <polygon points="348.1,98.6 373.2,109.8 351.4,124.9" fill="#94A3B8" opacity="0.088" />
          <polygon points="412.5,188.4 424.8,206.5 403.9,209.6" fill="#64748B" opacity="0.065" />
          <polygon points="392.4,142.0 416.7,152.1 396.1,168.3" fill="#334155" opacity="0.083" />
          <polygon points="364.5,178.6 386.4,188.7 367.8,203.4" fill="#475569" opacity="0.071" />
          <polygon points="426.1,128.4 445.2,143.5 423.8,154.2" fill="none" stroke="#64748B" strokeWidth="1.1" opacity="0.078" />
          <polygon points="338.9,135.2 358.4,147.9 341.2,160.7" fill="#CBD5E1" opacity="0.084" />
          <polygon points="378.2,112.5 398.1,123.6 380.4,137.9" fill="#94A3B8" opacity="0.069" />
          <polygon points="404.6,162.3 421.9,176.8 401.7,184.2" fill="#334155" opacity="0.072" />
          <polygon points="352.6,156.4 371.4,167.8 355.7,180.3" fill="none" stroke="#CBD5E1" strokeWidth="1.1" opacity="0.064" />
          <polygon points="384.7,192.1 401.2,206.4 382.0,214.5" fill="#475569" opacity="0.076" />
          <polygon points="332.0,172.5 350.2,183.1 336.1,196.4" fill="#64748B" opacity="0.062" />
          <polygon points="368.9,141.2 386.5,152.8 370.8,165.4" fill="#CBD5E1" opacity="0.085" />
          <polygon points="418.3,212.0 431.2,227.4 412.5,231.8" fill="#94A3B8" opacity="0.068" />
          <polygon points="345.8,205.2 361.9,218.4 344.6,227.1" fill="#334155" opacity="0.063" />
          <polygon points="395.0,225.4 409.8,238.2 393.2,246.5" fill="#64748B" opacity="0.061" />

          {/* ========================================================
              4. FAIXA DE DISSOLUÇÃO (Módulos de 7px a 12px, opacidade 4% a 6%)
          ======================================================== */}
          <polygon points="284.1,172.2 299.4,181.8 286.2,192.4" fill="#94A3B8" opacity="0.058" />
          <polygon points="312.4,215.1 324.6,226.7 309.8,232.5" fill="#475569" opacity="0.048" />
          <polygon points="262.8,198.4 275.6,207.2 264.1,217.1" fill="#64748B" opacity="0.052" />
          <polygon points="295.6,238.2 306.9,249.1 292.8,255.4" fill="#CBD5E1" opacity="0.046" />
          <polygon points="248.5,224.6 259.8,233.1 249.2,242.8" fill="#334155" opacity="0.042" />
          <polygon points="328.2,252.0 338.4,263.2 325.1,268.4" fill="#94A3B8" opacity="0.054" />
          <polygon points="274.5,254.1 285.2,264.0 271.8,270.2" fill="#475569" opacity="0.049" />
          <polygon points="236.2,248.3 246.4,256.4 237.1,265.1" fill="none" stroke="#64748B" strokeWidth="1" opacity="0.045" />
          <polygon points="305.1,274.2 314.8,284.6 302.2,289.4" fill="#CBD5E1" opacity="0.056" />
          <polygon points="256.7,272.5 266.8,281.8 253.9,287.5" fill="#334155" opacity="0.043" />
          <polygon points="222.4,268.1 231.9,275.8 223.2,284.1" fill="#64748B" opacity="0.041" />
          <polygon points="282.8,292.4 292.1,302.0 279.4,307.2" fill="#94A3B8" opacity="0.051" />
          <polygon points="241.6,295.2 250.7,303.8 238.9,309.4" fill="#CBD5E1" opacity="0.047" />
          <polygon points="268.2,312.4 276.9,321.5 265.1,326.2" fill="#475569" opacity="0.044" />
          <polygon points="228.5,318.1 236.8,326.2 225.6,331.8" fill="#334155" opacity="0.040" />

          {/* ========================================================
              5. MICRO-FRAGMENTOS / DISSIPAÇÃO FINAL (3.5px a 6.5px, opacidade 2% a 4%)
          ======================================================== */}
          <polygon points="198.2,245.1 204.6,250.8 197.8,256.2" fill="#94A3B8" opacity="0.038" />
          <polygon points="175.4,264.2 181.2,269.4 175.1,274.6" fill="#64748B" opacity="0.032" />
          <polygon points="212.8,278.4 218.4,284.1 211.2,288.9" fill="#CBD5E1" opacity="0.035" />
          <polygon points="158.6,288.5 163.9,293.4 158.2,298.2" fill="#334155" opacity="0.028" />
          <polygon points="188.1,304.2 193.4,309.2 187.5,314.1" fill="#475569" opacity="0.031" />
          <polygon points="142.5,312.8 147.4,317.4 142.1,321.8" fill="#94A3B8" opacity="0.024" />
          <polygon points="202.4,328.6 207.2,333.8 200.8,337.9" fill="#CBD5E1" opacity="0.029" />
          <polygon points="168.7,332.1 173.6,336.8 168.1,341.4" fill="#64748B" opacity="0.026" />
          <polygon points="128.2,338.4 132.8,342.8 127.9,346.9" fill="#334155" opacity="0.021" />
          <polygon points="184.5,352.4 189.1,357.0 183.4,361.2" fill="#475569" opacity="0.025" />
          <polygon points="152.4,358.2 156.8,362.5 151.7,366.8" fill="#94A3B8" opacity="0.022" />
          <polygon points="115.6,364.5 119.8,368.6 115.2,372.4" fill="#CBD5E1" opacity="0.020" />
        </g>
      </svg>
    </div>
  );
};
