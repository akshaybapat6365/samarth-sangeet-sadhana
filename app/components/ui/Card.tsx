'use client';

import React from 'react';
import { cn } from '@/app/lib/cn';

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('paper', className)}>{children}</div>;
}

export function GildedCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('paper-gilded', className)}>{children}</div>;
}

