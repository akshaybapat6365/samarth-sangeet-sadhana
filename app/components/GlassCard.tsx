'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
  onClick?: () => void;
}

export default function GlassCard({ 
  children, 
  className = '', 
  blur = 'md',
  opacity = 20,
  onClick 
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl
        ${blurClasses[blur]}
        bg-white/10 dark:bg-gray-900/10
        border border-white/20 dark:border-gray-700/20
        shadow-xl shadow-warm-500/10
        ${className}
      `}
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,${opacity/100}) 0%, rgba(255,255,255,${opacity/200}) 100%)`,
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}