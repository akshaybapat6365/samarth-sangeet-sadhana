'use client';

import Image from 'next/image';
import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { Card, GildedCard } from '@/app/components/ui/Card';
import { Reveal } from '@/app/components/ui/Reveal';
import { Section, SectionHeading } from '@/app/components/ui/Section';

export default function AboutPage() {
  const { language } = useLanguage();
  const t = content[language];

  const approach =
    language === 'mr'
      ? [
          'स्वरशुद्धी आणि तालबद्धता यावर विशेष भर',
          'रियाजासाठी स्पष्ट, शिस्तबद्ध पद्धत',
          'विद्यार्थ्याच्या गतीनुसार वैयक्तिक मार्गदर्शन',
          'कार्यक्रमासाठी तयारी व सादरीकरण',
        ]
      : [
          'Strong focus on swar-shuddhi and rhythm',
          'Clear, disciplined practice (riyaz) structure',
          'Guidance tailored to the student’s pace',
          'Preparation for performance and confidence',
        ];

  return (
    <div>
      <Section className="pb-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.pages.about.title}
            title={t.guru.title}
            subtitle={t.pages.about.subtitle}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7">
            <GildedCard className="p-8">
              <h3 className="title text-2xl">{t.guru.name}</h3>
              <p className="mt-2 text-muted">
                {t.guru.credentials} • {t.guru.institution}
              </p>
              <div className="mt-6 h-px bg-border/10" />
              <p className="mt-6 text-muted leading-relaxed">{t.guru.description}</p>
            </GildedCard>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.06}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gold/25 via-transparent to-indigo/20 blur-2xl" />
              <Card className="relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/images/hero-saraswati.jpg"
                    alt={language === 'mr' ? 'सरस्वती' : 'Saraswati'}
                    fill
                    sizes="(min-width: 1024px) 420px, 92vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/15 to-transparent" />
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={language === 'mr' ? 'पद्धत' : 'Approach'}
            title={language === 'mr' ? 'शिकण्याची पद्धत' : 'How learning works'}
            subtitle={
              language === 'mr'
                ? 'साधना ही सातत्याने घडते. आम्ही प्रत्येक विद्यार्थ्याला योग्य दिशा देतो.'
                : 'Progress comes from consistent practice. We help you build a steady path.'
            }
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="p-8">
              <h3 className="title text-xl">
                {language === 'mr' ? 'मुख्य लक्ष' : 'Focus areas'}
              </h3>
              <ul className="mt-5 space-y-3 text-muted">
                {approach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.06}>
            <Card className="p-8">
              <h3 className="title text-xl">
                {language === 'mr' ? 'परंपरा आणि आधुनिकता' : 'Tradition, made practical'}
              </h3>
              <p className="mt-5 text-muted leading-relaxed">
                {language === 'mr'
                  ? 'राग, ताल, बंदिश आणि सुगम संगीत यांची सांगड घालून, विद्यार्थ्याला मजबूत पाया आणि आनंददायी अनुभव मिळेल असा अभ्यासक्रम तयार केला आहे.'
                  : 'We blend raga, tala, bandish, and light music in a way that gives you a strong foundation and a joyful learning experience.'}
              </p>
              <div className="mt-6 rounded-2xl border border-border/15 bg-bg/40 p-5">
                <p className="text-sm text-muted">
                  {language === 'mr'
                    ? 'सातत्य, ऐकणे, आणि योग्य मार्गदर्शन: हाच खरा मंत्र.'
                    : 'Consistency, listening, and the right guidance: that is the real mantra.'}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-10 pb-16">
        <Reveal>
          <SectionHeading
            eyebrow={language === 'mr' ? 'प्रमाणपत्र' : 'Certification'}
            title={t.certification.title}
            subtitle={t.certification.description}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.certification.institutions.map((inst, idx) => (
            <Reveal key={inst} delay={idx * 0.06}>
              <GildedCard className="p-6">
                <p className="title text-lg">{inst}</p>
              </GildedCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

