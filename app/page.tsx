'use client';

import Image from 'next/image';
import Link from 'next/link';

import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { siteConfig } from '@/app/config/site';
import { buttonClasses } from '@/app/components/ui/Button';
import { Card, GildedCard } from '@/app/components/ui/Card';
import { OrnamentDivider } from '@/app/components/ui/OrnamentDivider';
import { Reveal } from '@/app/components/ui/Reveal';
import { Section, SectionHeading } from '@/app/components/ui/Section';
import { HarmoniumIcon, KeyboardIcon, TablaIcon, VocalsIcon } from '@/app/components/InstrumentIcons';

const homeOfferings = [
  { Icon: VocalsIcon, key: 'vocals', name: { en: 'Vocals', mr: 'गायन' } },
  { Icon: HarmoniumIcon, key: 'harmonium', name: { en: 'Harmonium', mr: 'हार्मोनियम' } },
  { Icon: TablaIcon, key: 'tabla', name: { en: 'Tabla', mr: 'तबला' } },
  { Icon: KeyboardIcon, key: 'keyboard', name: { en: 'Keyboard', mr: 'कीबोर्ड' } },
];

export default function HomePage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div>
      <Section className="pt-10 sm:pt-12 lg:pt-14 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{t.home.highlights.eyebrow}</p>
            <h1 className="title mt-3 text-5xl sm:text-6xl lg:text-7xl leading-[0.98]">
              <span className="bg-gradient-to-r from-ink via-maroon to-indigo bg-clip-text text-transparent">
                {t.hero.title}
              </span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted max-w-xl">
              {t.hero.tagline}
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted max-w-xl">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonClasses('primary', 'lg')}>
                {t.hero.cta}
              </Link>
              <Link href="/classes" className={buttonClasses('ghost', 'lg')}>
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {language === 'mr' ? 'गुरुजी' : 'Guru'}
                </p>
                <p className="mt-1 font-medium">{t.guru.name}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {language === 'mr' ? 'पदवी' : 'Credential'}
                </p>
                <p className="mt-1 font-medium">{t.guru.credentials}</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {language === 'mr' ? 'संस्था' : 'Institution'}
                </p>
                <p className="mt-1 font-medium">{t.guru.institution}</p>
              </Card>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gold/25 via-transparent to-indigo/20 blur-2xl" />
              <GildedCard className="relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/saraswati-veena.webp"
                    alt={language === 'mr' ? 'सरस्वती' : 'Saraswati'}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/15 to-transparent" />
                </div>

                <div className="px-4 pb-4 pt-5">
                  <div className="divider-ornament">
                    <span>{t.hero.subtitle}</span>
                  </div>
                </div>
              </GildedCard>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-6">
        <SectionHeading
          eyebrow={t.home.highlights.eyebrow}
          title={t.home.highlights.title}
          subtitle={t.home.highlights.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {t.home.highlights.cards.map((c, idx) => (
            <Reveal key={c.title} delay={idx * 0.06}>
              <Card className="p-7 hover:shadow-float transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="title text-xl">{c.title}</h3>
                    <p className="mt-3 text-muted">{c.description}</p>
                  </div>
                  <div className="h-9 w-9 rounded-full border border-border/15 bg-gold/15 flex items-center justify-center text-gold">
                    <span className="text-sm">॥</span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.home.offerings.eyebrow}
          title={t.home.offerings.title}
          subtitle={t.home.offerings.subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeOfferings.map(({ Icon, name }) => (
            <Reveal key={name.en}>
              <Link
                href="/classes"
                className="group block rounded-2xl border border-border/15 bg-surface/70 p-6 shadow-paper transition-all hover:-translate-y-1 hover:shadow-float focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-maroon/10 text-maroon">
                    <Icon className="h-9 w-9" />
                  </div>
                  <span className="text-gold/80 text-xs uppercase tracking-[0.18em]">
                    {language === 'mr' ? 'वर्ग' : 'Class'}
                  </span>
                </div>
                <h3 className="title mt-5 text-lg group-hover:text-maroon transition-colors">
                  {name[language]}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {language === 'mr'
                    ? 'मूलभूत ते प्रगत स्तर.'
                    : 'Beginner to advanced.'}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <OrnamentDivider label={language === 'mr' ? 'साधना' : 'Sadhana'} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-5">
            <GildedCard className="p-8">
              <p className="eyebrow">{t.home.eventSpotlight.eyebrow}</p>
              <h3 className="title mt-3 text-3xl">{t.home.eventSpotlight.title}</h3>
              <p className="mt-4 text-muted">{t.home.eventSpotlight.subtitle}</p>
              <Link
                href="/events"
                className="mt-7 inline-flex"
              >
                <span className={buttonClasses('secondary', 'md')}>
                  {t.home.eventSpotlight.cta}
                </span>
              </Link>
            </GildedCard>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.06}>
            <Card className="p-8 overflow-hidden relative">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-indigo/15 blur-3xl" />
              <div className="relative">
                <p className="eyebrow">{language === 'mr' ? 'प्रेरणा' : 'Inspiration'}</p>
                <p className="mt-3 text-muted leading-relaxed">{t.guru.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border/15 bg-bg/40 px-3 py-1 text-xs text-muted">
                    {language === 'mr' ? 'ऑनलाईन उपलब्ध' : 'Online available'}
                  </span>
                  <span className="rounded-full border border-border/15 bg-bg/40 px-3 py-1 text-xs text-muted">
                    {language === 'mr' ? 'गट व वैयक्तिक' : 'Group & private'}
                  </span>
                  <span className="rounded-full border border-border/15 bg-bg/40 px-3 py-1 text-xs text-muted">
                    {language === 'mr' ? 'सर्व वयोगट' : 'All ages'}
                  </span>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.home.galleryPreview.eyebrow}
          title={t.home.galleryPreview.title}
          subtitle={t.home.galleryPreview.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { src: '/images/book-cover.jpg', alt: 'Music book' },
            { src: '/images/saraswati-lotus.webp', alt: 'Saraswati' },
            { src: '/images/instrument-circle.webp', alt: 'Instruments' },
          ].map((img, idx) => (
            <Reveal key={img.src} delay={idx * 0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-border/15 bg-surface/60 shadow-paper">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/gallery" className={buttonClasses('ghost', 'md')}>
            {t.home.galleryPreview.cta}
          </Link>
        </div>
      </Section>

      <Section className="pt-8 pb-16">
        <Reveal>
          <GildedCard className="p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow">{t.pages.contact.title}</p>
                <h3 className="title mt-3 text-3xl sm:text-4xl">
                  {t.contact.title}
                </h3>
                <p className="mt-4 text-muted">{t.contact.subtitle}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact" className={buttonClasses('primary', 'lg')}>
                    {t.common.cta}
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClasses('ghost', 'lg')}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <Card className="p-6">
                  <p className="text-sm font-medium">{t.contact.visit}</p>
                  <p className="mt-2 text-sm text-muted">{t.contact.address}</p>
                  <div className="mt-5 h-px bg-border/10" />
                  <p className="mt-5 text-sm font-medium">{t.contact.phone}</p>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-muted">
                    {siteConfig.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\\s+/g, '')}`} className="hover:text-ink">
                        {p}
                      </a>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </GildedCard>
        </Reveal>
      </Section>
    </div>
  );
}
