'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/app/lib/cn';

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function GalleryGrid({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(idx)}
            className="group relative overflow-hidden rounded-2xl border border-border/15 bg-surface/70 shadow-paper transition-all hover:-translate-y-1 hover:shadow-float focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-label={img.caption ? `${img.alt}: ${img.caption}` : img.alt}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 360px, 92vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/75 via-transparent to-transparent opacity-80" />
            </div>
            {img.caption ? (
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <p className="text-sm font-medium text-ink">{img.caption}</p>
              </div>
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/40 p-4"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={() => setActive(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border/20 bg-surface shadow-float"
              initial={reduceMotion ? undefined : { scale: 0.98, y: 10, opacity: 0 }}
              animate={reduceMotion ? undefined : { scale: 1, y: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { scale: 0.98, y: 10, opacity: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-bg">
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border/10 px-5 py-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">
                    {images[active].caption ?? images[active].alt}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-xl border border-border/15 bg-bg/40 px-3 py-2 text-sm text-muted hover:text-ink hover:bg-ink/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

