'use client';

import React from 'react';
import { cn } from '@/app/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md') {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ' +
    'disabled:opacity-60 disabled:pointer-events-none';

  const variants: Record<Variant, string> = {
    primary:
      'bg-gold text-ink shadow-float hover:bg-gold2 btn-shine border border-border/10',
    secondary:
      'bg-maroon text-surface hover:bg-maroon/90 shadow-float border border-border/10',
    ghost:
      'bg-transparent text-ink hover:bg-ink/5 border border-border/20',
  };

  const sizes: Record<Size, string> = {
    sm: 'text-sm px-3 py-2',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-5 py-3',
  };

  return cn(base, variants[variant], sizes[size]);
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button className={cn(buttonClasses(variant, size), className)} {...props} />
  );
}

