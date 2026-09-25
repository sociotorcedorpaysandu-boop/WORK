import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'orange';
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showWordmark = true,
  size = 'md',
  className = ''
}) => {
  // Dimensions
  const sizes = {
    sm: { symbol: 'h-7 w-7', text: 'text-sm', subtext: 'text-[9px] tracking-[0.25em]' },
    md: { symbol: 'h-9 w-9', text: 'text-base', subtext: 'text-[10px] tracking-[0.28em]' },
    lg: { symbol: 'h-12 w-12', text: 'text-xl', subtext: 'text-[12px] tracking-[0.3em]' }
  };

  const currentSize = sizes[size];

  // Colors based on variant
  // 'light' is for dark backgrounds (white text)
  // 'dark' is for light backgrounds (black text)
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#111111]';
  const subtextColor = isLight ? 'text-[#E6E6E6]/70' : 'text-[#111111]/70';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Architectural Work 'W' Symbol */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.symbol} shrink-0 transition-transform duration-300 group-hover:scale-105`}
        aria-hidden="true"
      >
        {/* Left Column Body */}
        <path
          d="M10 24L20 20L30 24V82H10V24Z"
          fill={isLight ? '#FFFFFF' : '#E59866'}
          opacity={isLight ? 0.9 : 0.95}
        />
        {/* Left Column Pitched Top */}
        <path
          d="M10 24L20 20L30 24L20 27L10 24Z"
          fill={isLight ? '#FFFFFF' : '#D35400'}
          opacity={0.8}
        />

        {/* First Diagonal Beam (Work Orange) */}
        <polygon
          points="10,75 55,45 61,53 16,83"
          fill="#F58220"
        />

        {/* Second Diagonal Beam (Work Orange) */}
        <polygon
          points="45,71 65,56 80,72 60,83"
          fill="#F58220"
        />

        {/* Right Column Body */}
        <path
          d="M70 32L80 28L90 32V82H70V32Z"
          fill={isLight ? '#FFFFFF' : '#E59866'}
          opacity={isLight ? 0.9 : 0.95}
        />

        {/* Right Column Orange Cap Accent */}
        <path
          d="M70 32L80 28L90 32V44H70V32Z"
          fill="#D35400"
        />
        {/* Right Column Orange Facet Highlight */}
        <path
          d="M70 32L80 28L90 32L80 35L70 32Z"
          fill="#F58220"
        />
        
        {/* Architectural crisp cutout line */}
        <line
          x1="52"
          y1="48"
          x2="59"
          y2="57"
          stroke={isLight ? '#111111' : '#FFFFFF'}
          strokeWidth="2.5"
        />
      </svg>

      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-interface font-bold ${currentSize.text} tracking-[0.08em] ${textColor}`}
          >
            WORK
          </span>
          <span
            className={`font-interface font-medium ${currentSize.subtext} uppercase mt-1 ${subtextColor}`}
          >
            CONSTRUTORA
          </span>
        </div>
      )}
    </div>
  );
};
