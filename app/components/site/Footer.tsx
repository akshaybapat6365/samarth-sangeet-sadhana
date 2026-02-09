'use client';

import Link from 'next/link';
import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { navItems } from '@/app/lib/nav';
import { siteConfig } from '@/app/config/site';
import { OrnamentDivider } from '@/app/components/ui/OrnamentDivider';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="mt-12 border-t border-border/15 bg-bg/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-3">{t.footer.eyebrow}</p>
            <h3 className="title text-3xl leading-tight">{t.site.name}</h3>
            <p className="mt-3 text-muted max-w-md">{t.footer.blurb}</p>
            <div className="mt-6">
              <OrnamentDivider label={t.footer.dividerLabel} />
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="title text-lg">{t.footer.linksTitle}</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((it) => (
                <li key={it.href}>
                  <Link
                    href={it.href}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {t.nav[it.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="title text-lg">{t.footer.contactTitle}</h4>
            <div className="mt-3 space-y-3 text-sm text-muted">
              <div>
                <div className="text-ink font-medium">{t.footer.callLabel}</div>
                <div className="mt-1 flex flex-col gap-1">
                  {siteConfig.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\\s+/g, '')}`} className="hover:text-ink">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-ink font-medium">{t.footer.visitLabel}</div>
                <p className="mt-1">{t.contact.address}</p>
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-ink underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                >
                  {t.footer.mapLink}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
          <p>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  );
}

