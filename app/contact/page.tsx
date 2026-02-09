'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';

import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import { siteConfig } from '@/app/config/site';
import { sendContact, type ContactFormState } from '@/app/actions/contact';
import { buttonClasses } from '@/app/components/ui/Button';
import { Card, GildedCard } from '@/app/components/ui/Card';
import { Reveal } from '@/app/components/ui/Reveal';
import { Section, SectionHeading } from '@/app/components/ui/Section';

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={buttonClasses('primary', 'lg')} disabled={pending}>
      {pending ? pendingLabel : label}
    </button>
  );
}

const initialState: ContactFormState = { status: 'idle' };

export default function ContactPage() {
  const { language } = useLanguage();
  const t = content[language];

  const [state, formAction] = useFormState(sendContact, initialState);

  return (
    <div>
      <Section className="pb-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.pages.contact.title}
            title={t.pages.contact.title}
            subtitle={t.pages.contact.subtitle}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7">
            <GildedCard className="p-8 sm:p-10">
              <p className="eyebrow">{t.contactForm.title}</p>
              <h3 className="title mt-3 text-3xl">{t.contactForm.title}</h3>
              <p className="mt-3 text-muted">{t.contactForm.subtitle}</p>

              <form action={formAction} className="mt-8 space-y-5">
                {/* Honeypot */}
                <div className="hidden">
                  <label className="text-sm text-muted">
                    {t.contactForm.honeypot}
                    <input name="website" type="text" autoComplete="off" />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium">{t.contactForm.name}</span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-border/15 bg-bg/40 px-4 py-3 text-sm shadow-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      placeholder={language === 'mr' ? 'उदा. अक्षय' : 'e.g. Akshay'}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">{t.contactForm.phone}</span>
                    <input
                      name="phone"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      className="mt-2 w-full rounded-xl border border-border/15 bg-bg/40 px-4 py-3 text-sm shadow-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      placeholder="+91 …"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium">{t.contactForm.email}</span>
                    <input
                      name="email"
                      autoComplete="email"
                      inputMode="email"
                      className="mt-2 w-full rounded-xl border border-border/15 bg-bg/40 px-4 py-3 text-sm shadow-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium">{t.contactForm.mode}</span>
                    <select
                      name="mode"
                      className="mt-2 w-full rounded-xl border border-border/15 bg-bg/40 px-4 py-3 text-sm shadow-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      defaultValue=""
                    >
                      <option value="">{language === 'mr' ? 'निवडा' : 'Select'}</option>
                      <option value="online">{t.contactForm.modeOptions.online}</option>
                      <option value="inPerson">{t.contactForm.modeOptions.inPerson}</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium">{t.contactForm.message}</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-border/15 bg-bg/40 px-4 py-3 text-sm shadow-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    placeholder={
                      language === 'mr'
                        ? 'तुम्हाला काय शिकायचे आहे? वेळ/बॅच प्राधान्य?'
                        : 'What would you like to learn? Any schedule preference?'
                    }
                  />
                </label>

                {state.status === 'error' ? (
                  <div className="rounded-xl border border-maroon/20 bg-maroon/10 px-4 py-3 text-sm text-ink">
                    <strong className="mr-2">{t.contactForm.errorTitle}:</strong>
                    <span>{state.message}</span>
                  </div>
                ) : null}

                {state.status === 'success' ? (
                  <div className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-ink">
                    <strong className="mr-2">{t.contactForm.successTitle}:</strong>
                    <span>{t.contactForm.successBody}</span>
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <SubmitButton label={t.contactForm.submit} pendingLabel={t.contactForm.sending} />
                  <p className="text-xs text-muted">
                    {language === 'mr'
                      ? 'फॉर्म न जमल्यास कृपया कॉल/व्हॉट्सॲप करा.'
                      : 'If the form fails, please call or WhatsApp us.'}
                  </p>
                </div>
              </form>
            </GildedCard>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.06}>
            <Card className="p-8">
              <h3 className="title text-xl">{t.contact.title}</h3>
              <p className="mt-3 text-muted">{t.contact.subtitle}</p>

              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="font-medium">{t.contact.phone}</p>
                  <div className="mt-2 flex flex-col gap-1 text-muted">
                    {siteConfig.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\\s+/g, '')}`} className="hover:text-ink">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-medium">{t.contact.visit}</p>
                  <p className="mt-2 text-muted">{t.contact.address}</p>
                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-ink underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
                  >
                    {language === 'mr' ? 'नकाशात उघडा' : 'Open in Maps'}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses('ghost', 'md')}
                >
                  WhatsApp
                </a>
                <Link href="/" className={buttonClasses('ghost', 'md')}>
                  {language === 'mr' ? 'मुख्यपृष्ठ' : 'Home'}
                </Link>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-6 pb-16">
        <Reveal>
          <Card className="p-8">
            <h3 className="title text-xl">
              {language === 'mr' ? 'लवकर सुरुवात करायची?' : 'Want to start quickly?'}
            </h3>
            <p className="mt-3 text-muted">
              {language === 'mr'
                ? 'तुमच्या आवडीचे गायन/वाद्य, उपलब्ध वेळ, आणि ऑनलाईन/प्रत्यक्ष पर्याय सांगा.'
                : 'Tell us your preferred class (vocals/instrument), availability, and online/in-person preference.'}
            </p>
          </Card>
        </Reveal>
      </Section>
    </div>
  );
}

