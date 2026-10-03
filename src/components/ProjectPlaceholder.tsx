import React from 'react';
import symbolWork from '@/src/assets/images/Design_sem_nome__85_-removebg-preview.svg';

interface ProjectPlaceholderProps {
  nome: string;
  categoria?: string | null;
  className?: string;
  aspect?: string;
}

export const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({
  nome,
  categoria,
  className = '',
  aspect = 'aspect-[16/10]'
}) => {
  return (
    <div
      className={`relative ${aspect} w-full bg-[#F4F4F2] border border-[#E6E6E6] flex flex-col justify-between p-6 sm:p-8 select-none overflow-hidden ${className}`}
    >
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E6E6E6_1px,transparent_1px),linear-gradient(to_bottom,#E6E6E6_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={symbolWork}
            alt="Work Construtora"
            className="h-6 sm:h-7 w-auto object-contain opacity-80"
          />
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#111111]/50">
            Work Construtora
          </span>
        </div>
        {categoria && categoria !== '—' && (
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#F58220]">
            {categoria}
          </span>
        )}
      </div>

      {/* Center Project Name */}
      <div className="relative z-10 my-auto py-6">
        <h4 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111] leading-tight max-w-md">
          {nome}
        </h4>
        <span className="text-xs text-[#111111]/50 mt-1 block">
          Belém — Pará
        </span>
      </div>

      {/* Bottom Status */}
      <div className="relative z-10 pt-4 border-t border-[#E6E6E6] flex items-center justify-between text-xs text-[#111111]/50">
        <span>Registro Institucional</span>
        <span className="text-[#F58220] font-medium">Acervo fotográfico em consolidação</span>
      </div>
    </div>
  );
};
