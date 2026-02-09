'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { navItems } from '@/app/lib/nav';
import { cn } from '@/app/lib/cn';
import { buttonClasses } from '@/app/components/ui/Button';
import LanguageToggle from './LanguageToggle';

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = content[language];

  const [mobileOpen, setMobileOpen] = useState(false);

  const items = useMemo(
    () =>
      navItems.map((it) => ({
        ...it,
        label: t.nav[it.key],
        active:
          it.href === '/'
            ? pathname === '/'
            : pathname?.startsWith(it.href + '/') || pathname === it.href,
      })),
    [pathname, t.nav]
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="relative">
        <div className="border-b border-border/15 bg-bg/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-border/15 shadow-float">
              <Image
                src="/images/swami-samarth.jpg"
                alt={t.site.logoAlt}
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="title text-base sm:text-lg">{t.site.name}</div>
              <div className="text-xs text-muted group-hover:text-ink transition-colors">
                {t.site.taglineShort}
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  'relative rounded-full px-3 py-2 text-sm transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
                  it.active ? 'text-ink' : 'text-muted hover:text-ink'
                )}
              >
                <span className="relative z-10">{it.label}</span>
                {it.active ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageToggle className="hidden sm:inline-flex" />
            <Link
              href="/contact"
              className={cn(
                buttonClasses('primary', 'sm'),
                'hidden sm:inline-flex'
              )}
            >
              {t.common.cta}
            </Link>
            <button
              type="button"
              className={cn(
                buttonClasses('ghost', 'sm'),
                'md:hidden px-3'
              )}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden"
            >
              <div
                className="fixed inset-0 z-40 bg-ink/30"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-0 right-0 top-full z-50 border-b border-border/15 bg-surface/95 backdrop-blur-md shadow-float"
              >
                <div className="mx-auto max-w-6xl px-6 py-4">
                  <div className="flex items-center justify-between">
                    <LanguageToggle />
                    <Link
                      href="/contact"
                      className={buttonClasses('primary', 'sm')}
                      onClick={() => setMobileOpen(false)}
                    >
                      {t.common.cta}
                    </Link>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          'rounded-xl border border-border/15 bg-bg/40 px-3 py-2.5 text-sm shadow-paper',
                          it.active ? 'text-ink' : 'text-muted'
                        )}
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
