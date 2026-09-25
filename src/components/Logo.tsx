import React from 'react';
import logoDark from '@/src/assets/images/logo_work_oficial_dark.svg';
import logoLight from '@/src/assets/images/logo_work_oficial_light.svg';
import symbolOnly from '@/src/assets/images/Design_sem_nome__85_-removebg-preview.svg';

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
  const heightClasses = {
    sm: showWordmark ? 'h-8' : 'h-7',
    md: showWordmark ? 'h-10' : 'h-9',
    lg: showWordmark ? 'h-14' : 'h-12'
  };

  const isLight = variant === 'light';

  if (!showWordmark) {
    return (
      <img
        src={symbolOnly}
        alt="Work Construtora"
        className={`${heightClasses[size]} w-auto shrink-0 select-none object-contain ${className}`}
        loading="eager"
      />
    );
  }

  // Official complete logo image asset - no HTML lettering, no reconstructed SVG in component code
  return (
    <img
      src={isLight ? logoLight : logoDark}
      alt="Work Construtora"
      className={`${heightClasses[size]} w-auto shrink-0 select-none object-contain ${className}`}
      loading="eager"
    />
  );
};
