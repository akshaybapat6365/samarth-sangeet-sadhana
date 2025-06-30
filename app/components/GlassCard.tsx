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
        border border-white/30 dark:border-gray-700/30
        shadow-2xl shadow-black/10
        ${className}
      `}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity/100})`,
        backdropFilter: blur === 'sm' ? 'blur(8px)' : blur === 'md' ? 'blur(12px)' : blur === 'lg' ? 'blur(16px)' : 'blur(24px)',
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