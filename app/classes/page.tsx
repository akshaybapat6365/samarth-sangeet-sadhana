'use client';

import Link from 'next/link';

import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { buttonClasses } from '@/app/components/ui/Button';
import { Card, GildedCard } from '@/app/components/ui/Card';
import { Reveal } from '@/app/components/ui/Reveal';
import { Section, SectionHeading } from '@/app/components/ui/Section';
import {
  HarmoniumIcon,
  KeyboardIcon,
  TablaIcon,
  VocalsIcon,
} from '@/app/components/InstrumentIcons';

const classCards = [
  { Icon: VocalsIcon, name: { en: 'Vocals', mr: 'गायन' } },
  { Icon: HarmoniumIcon, name: { en: 'Harmonium', mr: 'हार्मोनियम' } },
  { Icon: TablaIcon, name: { en: 'Tabla', mr: 'तबला' } },
  { Icon: KeyboardIcon, name: { en: 'Keyboard', mr: 'कीबोर्ड' } },
];

export default function ClassesPage() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div>
      <Section className="pb-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.pages.classes.title}
            title={t.classes.title}
            subtitle={t.pages.classes.subtitle}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classCards.map(({ Icon, name }, idx) => (
            <Reveal key={name.en} delay={idx * 0.05}>
              <GildedCard className="p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-maroon/10 text-maroon">
                  <Icon className="h-9 w-9" />
                </div>
                <h3 className="title mt-5 text-lg">{name[language]}</h3>
                <p className="mt-2 text-sm text-muted">
                  {language === 'mr'
                    ? 'मूलभूत ते प्रगत स्तर.'
                    : 'Beginner to advanced.'}
                </p>
              </GildedCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={t.classes.offerings.title}
            title={language === 'mr' ? 'कोर्स' : 'Course offering'}
            subtitle={t.classes.subtitle}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="p-8">
              <h3 className="title text-xl">{t.classes.offerings.singing.title}</h3>
              <p className="mt-3 text-muted">{t.classes.offerings.singing.description}</p>
              <div className="mt-6 rounded-2xl border border-border/15 bg-bg/40 p-5">
                <p className="text-sm text-muted">
                  {language === 'mr'
                    ? 'स्वर, राग, बंदिश, आणि सुगम संगीत.'
                    : 'Swar, raga, bandish, and light music.'}
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="p-8">
              <h3 className="title text-xl">{t.classes.offerings.instruments.title}</h3>
              <p className="mt-3 text-muted">{t.classes.offerings.instruments.description}</p>
              <div className="mt-6 rounded-2xl border border-border/15 bg-bg/40 p-5">
                <p className="text-sm text-muted">
                  {language === 'mr'
                    ? 'ताल समज, साथसंगत, आणि हातांचा व्यायाम.'
                    : 'Rhythm sense, accompaniment, and technique.'}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={language === 'mr' ? 'सोय' : 'Flexibility'}
            title={t.classes.flexible.title}
            subtitle={
              language === 'mr'
                ? 'तुमच्या वेळेनुसार आणि गरजेनुसार पर्याय उपलब्ध.'
                : 'Options that fit your schedule and learning preference.'
            }
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7">
            <Card className="p-8">
              <ul className="space-y-3 text-muted">
                {t.classes.flexible.options.map((opt) => (
                  <li key={opt} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={buttonClasses('primary', 'md')}>
                  {t.common.cta}
                </Link>
                <Link href="/about" className={buttonClasses('ghost', 'md')}>
                  {language === 'mr' ? 'गुरुजींबद्दल' : 'About the Guru'}
                </Link>
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.06}>
            <GildedCard className="p-8">
              <p className="eyebrow">{language === 'mr' ? 'सूचना' : 'Note'}</p>
              <h3 className="title mt-3 text-xl">
                {language === 'mr' ? 'पहिल्या वर्गासाठी' : 'For your first class'}
              </h3>
              <p className="mt-4 text-muted">
                {language === 'mr'
                  ? 'तुमच्या आवडीचे वाद्य/गायन निवडा, आणि आम्ही योग्य बॅच सुचवू.'
                  : 'Tell us what you want to learn, and we will suggest the right batch.'}
              </p>
            </GildedCard>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-10 pb-16">
        <Reveal>
          <SectionHeading
            eyebrow={language === 'mr' ? 'माहिती' : 'Help'}
            title={t.classes.faq.title}
            subtitle={
              language === 'mr'
                ? 'काही सामान्य प्रश्नांची उत्तरे.'
                : 'Answers to common questions.'
            }
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {t.classes.faq.items.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 0.05}>
              <Card className="p-7">
                <h3 className="title text-base">{item.q}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.a}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

