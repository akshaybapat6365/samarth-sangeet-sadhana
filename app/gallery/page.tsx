'use client';

import { content } from '@/app/content';
import { useLanguage } from '@/app/context/LanguageContext';
import GalleryGrid, { type GalleryImage } from '@/app/components/site/GalleryGrid';
import { Reveal } from '@/app/components/ui/Reveal';
import { Section, SectionHeading } from '@/app/components/ui/Section';
import { Card } from '@/app/components/ui/Card';

export default function GalleryPage() {
  const { language } = useLanguage();
  const t = content[language];

  const images: GalleryImage[] = [
    {
      src: '/images/hero-saraswati.jpg',
      alt: language === 'mr' ? 'सरस्वती' : 'Saraswati',
      caption: language === 'mr' ? 'प्रेरणा' : 'Inspiration',
    },
    {
      src: '/images/saraswati-veena.webp',
      alt: language === 'mr' ? 'सरस्वती वीणा' : 'Saraswati with veena',
      caption: language === 'mr' ? 'शास्त्रीय' : 'Classical',
    },
    {
      src: '/images/saraswati-lotus.webp',
      alt: language === 'mr' ? 'कमळ' : 'Lotus',
      caption: language === 'mr' ? 'सौंदर्य' : 'Grace',
    },
    {
      src: '/images/instrument-circle.webp',
      alt: language === 'mr' ? 'वाद्ये' : 'Instruments',
      caption: language === 'mr' ? 'वाद्य' : 'Instruments',
    },
    {
      src: '/images/book-cover.jpg',
      alt: language === 'mr' ? 'पुस्तक' : 'Book cover',
      caption: language === 'mr' ? 'साधना' : 'Practice',
    },
    {
      src: '/images/swami-samarth.jpg',
      alt: t.site.logoAlt,
      caption: language === 'mr' ? 'समर्थ' : 'Samarth',
    },
  ];

  return (
    <div>
      <Section className="pb-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.pages.gallery.title}
            title={t.pages.gallery.title}
            subtitle={t.pages.gallery.subtitle}
          />
        </Reveal>

        {images.length ? (
          <Reveal>
            <GalleryGrid images={images} />
          </Reveal>
        ) : (
          <Card className="p-8">
            <h3 className="title text-xl">{t.gallery.emptyTitle}</h3>
            <p className="mt-3 text-muted">{t.gallery.emptyBody}</p>
          </Card>
        )}
      </Section>

      <Section className="pt-6 pb-16">
        <Reveal>
          <Card className="p-8">
            <h3 className="title text-xl">
              {language === 'mr' ? 'फोटो जोडायचे?' : 'Want to add photos?'}
            </h3>
            <p className="mt-3 text-muted">
              {language === 'mr'
                ? 'नवीन फोटो `public/images/` मध्ये ठेवा आणि या पानातील `images` यादीत एंट्री जोडा.'
                : 'Drop new images into `public/images/` and add an entry in the `images` list on this page.'}
            </p>
          </Card>
        </Reveal>
      </Section>
    </div>
  );
}
