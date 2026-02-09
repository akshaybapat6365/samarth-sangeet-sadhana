'use client';

import Link from 'next/link';

import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { buttonClasses } from '@/app/components/ui/Button';
import { Card, GildedCard } from '@/app/components/ui/Card';
import { Reveal } from '@/app/components/ui/Reveal';
import { Section, SectionHeading } from '@/app/components/ui/Section';

export default function EventsPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div>
      <Section className="pb-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.pages.events.title}
            title={t.events.title}
            subtitle={t.pages.events.subtitle}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7">
            <GildedCard className="relative overflow-hidden p-9">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-indigo/15 blur-3xl" />
              <div className="relative">
                <p className="eyebrow">{t.events.subtitle}</p>
                <h3 className="title mt-3 text-3xl">{t.events.event}</h3>
                <p className="mt-5 text-muted leading-relaxed">{t.events.description}</p>
              </div>
            </GildedCard>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.06}>
            <Card className="p-8">
              <h3 className="title text-xl">
                {language === 'mr' ? 'काय अपेक्षित' : 'What to expect'}
              </h3>
              <ul className="mt-5 space-y-3 text-muted">
                {t.events.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={buttonClasses('primary', 'md')}>
                  {t.common.cta}
                </Link>
                <Link href="/classes" className={buttonClasses('ghost', 'md')}>
                  {language === 'mr' ? 'वर्ग' : 'Classes'}
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-10 pb-16">
        <Reveal>
          <SectionHeading
            eyebrow={language === 'mr' ? 'परंपरा' : 'Tradition'}
            title={language === 'mr' ? 'गुरुपौर्णिमा' : 'Gurupournima'}
            subtitle={
              language === 'mr'
                ? 'कृतज्ञता आणि साधनेचा उत्सव.'
                : 'A celebration of gratitude and progress.'
            }
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="p-8">
              <h3 className="title text-xl">
                {language === 'mr' ? 'विद्यार्थ्यांसाठी' : 'For students'}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                {language === 'mr'
                  ? 'कार्यक्रमासाठी रचना निवड, सराव आणि रंगमंचावर सादरीकरणासाठी मार्गदर्शन केले जाते.'
                  : 'We guide students through composition selection, practice, and performance preparation.'}
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="p-8">
              <h3 className="title text-xl">
                {language === 'mr' ? 'कुटुंबासाठी' : 'For families'}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                {language === 'mr'
                  ? 'कुटुंबीय आणि मित्रांसाठी विद्यार्थ्यांच्या प्रगतीचा आनंद घेण्याची सुंदर संधी.'
                  : 'A warm, family-friendly evening to enjoy student progress and celebrate music.'}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

