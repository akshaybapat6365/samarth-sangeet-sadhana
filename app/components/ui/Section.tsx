'use client';

import React from 'react';
import { cn } from '@/app/lib/cn';

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn('py-14 sm:py-16 lg:py-20', className)}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('mb-10', align === 'center' && 'text-center')}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="title text-4xl sm:text-5xl leading-[1.02]">
        <span className="bg-gradient-to-r from-ink via-maroon to-indigo bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p className={cn('mt-4 text-base sm:text-lg text-muted max-w-2xl', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
