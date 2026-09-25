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
  // Height / aspect ratio mapping
  const heightClasses = {
    sm: showWordmark ? 'h-8' : 'h-7',
    md: showWordmark ? 'h-10' : 'h-9',
    lg: showWordmark ? 'h-14' : 'h-12'
  };

  const isLight = variant === 'light';
  // Text fill color inside SVG
  const primaryTextColor = isLight ? '#FFFFFF' : '#111111';
  const secondaryTextColor = isLight ? '#CCCCCC' : '#444444';

  if (!showWordmark) {
    // Emblem only
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto shrink-0 select-none ${className}`}
        aria-label="Work Construtora"
      >
        {/* Left Column Body */}
        <path
          d="M10 24L20 20L30 24V82H10V24Z"
          fill={isLight ? '#FFFFFF' : '#E59866'}
          opacity={isLight ? 0.95 : 0.95}
        />
        {/* Left Column Pitched Top */}
        <path
          d="M10 24L20 20L30 24L20 27L10 24Z"
          fill={isLight ? '#FFFFFF' : '#D35400'}
          opacity={0.85}
        />

        {/* First Diagonal Beam (Work Orange) */}
        <polygon points="10,75 55,45 61,53 16,83" fill="#F58220" />

        {/* Second Diagonal Beam (Work Orange) */}
        <polygon points="45,71 65,56 80,72 60,83" fill="#F58220" />

        {/* Right Column Body */}
        <path
          d="M70 32L80 28L90 32V82H70V32Z"
          fill={isLight ? '#FFFFFF' : '#E59866'}
          opacity={isLight ? 0.95 : 0.95}
        />

        {/* Right Column Orange Cap Accent */}
        <path d="M70 32L80 28L90 32V44H70V32Z" fill="#D35400" />
        <path d="M70 32L80 28L90 32L80 35L70 32Z" fill="#F58220" />

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
    );
  }

  // Official Complete Logo with Integrated Vector Lettering (No HTML span reconstruction)
  return (
    <svg
      viewBox="0 0 310 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${heightClasses[size]} w-auto shrink-0 select-none ${className}`}
      aria-label="Work Construtora"
    >
      {/* ================= EMBLEM ================= */}
      <g transform="translate(0, 0)">
        {/* Left Column Body */}
        <path
          d="M10 21L20 17L30 21V79H10V21Z"
          fill={isLight ? '#FFFFFF' : '#E59866'}
          opacity={isLight ? 0.95 : 0.95}
        />
        {/* Left Column Pitched Top */}
        <path
          d="M10 21L20 17L30 21L20 24L10 21Z"
          fill={isLight ? '#FFFFFF' : '#D35400'}
          opacity={0.85}
        />

        {/* First Diagonal Beam (Work Orange) */}
        <polygon points="10,72 55,42 61,50 16,80" fill="#F58220" />

        {/* Second Diagonal Beam (Work Orange) */}
        <polygon points="45,68 65,53 80,69 60,80" fill="#F58220" />

        {/* Right Column Body */}
        <path
          d="M70 29L80 25L90 29V79H70V29Z"
          fill={isLight ? '#FFFFFF' : '#E59866'}
          opacity={isLight ? 0.95 : 0.95}
        />

        {/* Right Column Orange Cap Accent */}
        <path d="M70 29L80 25L90 29V41H70V29Z" fill="#D35400" />
        <path d="M70 29L80 25L90 29L80 32L70 29Z" fill="#F58220" />

        {/* Architectural crisp cutout line */}
        <line
          x1="52"
          y1="45"
          x2="59"
          y2="54"
          stroke={isLight ? '#111111' : '#FFFFFF'}
          strokeWidth="2.5"
        />
      </g>

      {/* ================= VECTOR LETTERING LOCKUP ================= */}
      {/* Official WORK Wordmark in SVG Vector Typography */}
      <text
        x="104"
        y="50"
        fill={primaryTextColor}
        fontFamily="'Work Sans', system-ui, sans-serif"
        fontWeight="700"
        fontSize="36"
        letterSpacing="2.8"
      >
        WORK
      </text>

      {/* Official CONSTRUTORA Sub-title in SVG Vector Typography */}
      <text
        x="106"
        y="72"
        fill={secondaryTextColor}
        fontFamily="'Work Sans', system-ui, sans-serif"
        fontWeight="600"
        fontSize="12.5"
        letterSpacing="4.8"
      >
        CONSTRUTORA
      </text>
    </svg>
  );
};
