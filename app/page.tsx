'use client';

import { useLanguage } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import GlassCard from './components/GlassCard';
import InstrumentShowcase from './components/InstrumentShowcase';
import ParallaxSection from './components/ParallaxSection';
import ImageGallery from './components/ImageGallery';
import { FloatingNotes, MusicWave, WesternNote, IndianSwarNotation } from './components/MusicNotations';
import { content } from './content';
import Image from 'next/image';

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  const galleryImages = [
    { src: '/images/saraswati-veena.png', alt: 'Saraswati with Veena', title: language === 'en' ? 'Divine Music' : 'दैवी संगीत' },
    { src: '/images/saraswati-lotus.png', alt: 'Saraswati on Lotus', title: language === 'en' ? 'Sacred Art' : 'पवित्र कला' },
    { src: '/images/instrument-circle.png', alt: 'Musical Instruments', title: language === 'en' ? 'Our Instruments' : 'आमची वाद्ये' },
  ];

  return (
    <main className="min-h-screen relative bg-warm-50">
      <LanguageToggle />
      
      {/* Hero Section - No overlapping elements */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center section-padding py-20 gap-8">
        {/* Left side - Saraswati Image (fully visible) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            <Image
              src="/images/hero-saraswati.jpg"
              alt="Devi Saraswati"
              fill
              className="object-contain rounded-2xl"
              priority
              quality={100}
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          {/* Swami Samarth Icon with Title */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-warm-400/50 shadow-xl">
              <Image
                src="/images/swami-samarth.jpg"
                alt="Swami Samarth"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className={`text-5xl md:text-6xl font-display font-bold text-warm-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.hero.title}
              </h1>
              <p className={`text-xl text-warm-600 ${language === 'mr' ? 'font-devanagari' : 'font-display italic'}`}>
                {t.hero.subtitle}
              </p>
            </div>
          </div>

          {/* Main content */}
          <p className={`text-2xl md:text-3xl text-gray-800 font-medium ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.hero.tagline}
          </p>
          
          <p className={`text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.hero.description}
          </p>

          <MusicWave className="text-warm-400 my-6" />

          <a href="#contact" className="inline-block bg-gradient-to-r from-warm-500 to-accent-500 hover:from-warm-600 hover:to-accent-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg">
            {t.hero.cta}
          </a>

          {/* Floating musical notes */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8">
            {['सा', 'रे', 'ग', 'म', 'प', 'ध', 'नि'].map((swar, i) => (
              <IndianSwarNotation 
                key={i} 
                swar={swar} 
                className="text-warm-500/60 musical-note text-lg" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Guru Section with Saraswati Background */}
      <section id="about" className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/saraswati-veena.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto section-padding relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <GlassCard className="p-8 hover-lift" opacity={10}>
              <h2 className={`text-4xl font-display font-bold text-gray-800 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.guru.title}
              </h2>
              <div className="space-y-2 mb-6">
                <h3 className={`text-2xl font-semibold text-warm-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.guru.name}
                </h3>
                <p className={`text-lg text-gray-700 font-medium ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.guru.credentials} • {t.guru.institution}
                </p>
              </div>
              <p className={`text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.guru.description}
              </p>
              <div className="mt-6 flex gap-4">
                <IndianSwarNotation swar="ॐ" className="text-warm-500" />
                <IndianSwarNotation swar="गं" className="text-accent-500" />
                <IndianSwarNotation swar="गा" className="text-warm-600" />
              </div>
            </GlassCard>
            
            <div className="relative">
              <GlassCard className="p-4" blur="sm" opacity={5}>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/saraswati-lotus.png"
                    alt="Saraswati"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900/20 to-transparent"></div>
                </div>
              </GlassCard>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24">
                <WesternNote className="w-full h-full text-accent-400/30 musical-note" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20">
                <IndianSwarNotation swar="सा" className="text-warm-400/40 musical-note" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section with Instrument Showcase */}
      <section id="classes" className="relative py-20 bg-gradient-to-b from-warm-50 to-accent-50">
        <div className="max-w-6xl mx-auto section-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-display font-bold mb-6 text-warm-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.classes.title}
            </h2>
            <p className={`text-lg text-gray-700 max-w-3xl mx-auto mb-12 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.classes.subtitle}
            </p>
          </div>

          {/* Instrument Showcase */}
          <InstrumentShowcase />

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <GlassCard className="p-8 hover-lift glow-border" opacity={10}>
              <h3 className={`text-2xl font-semibold text-warm-700 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.classes.offerings.title}
              </h3>
              <div className="space-y-6 mt-6">
                <div className="flex items-start gap-4">
                  <WesternNote className="text-warm-500 mt-1" />
                  <div>
                    <h4 className={`text-xl font-medium text-gray-800 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                      {t.classes.offerings.singing.title}
                    </h4>
                    <p className={`text-gray-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                      {t.classes.offerings.singing.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <IndianSwarNotation swar="त" className="text-accent-500 text-2xl mt-1" />
                  <div>
                    <h4 className={`text-xl font-medium text-gray-800 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                      {t.classes.offerings.instruments.title}
                    </h4>
                    <p className={`text-gray-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                      {t.classes.offerings.instruments.description}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 hover-lift glow-border" opacity={10}>
              <h3 className={`text-2xl font-semibold text-warm-700 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.classes.flexible.title}
              </h3>
              <ul className="space-y-4">
                {t.classes.flexible.options.map((option, index) => (
                  <li key={index} className={`flex items-start group ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    <span className="text-accent-500 mr-3 mt-1 group-hover:scale-110 transition-transform">♫</span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option}</span>
                  </li>
                ))}
              </ul>
              <MusicWave className="text-warm-300 mt-6" />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ParallaxSection 
        imageSrc="/images/instrument-circle.png" 
        className="py-20"
        overlayOpacity={0.85}
      >
        <div className="max-w-6xl mx-auto section-padding">
          <h2 className={`text-4xl font-display font-bold text-center mb-12 text-white ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {language === 'en' ? 'Divine Inspiration' : 'दैवी प्रेरणा'}
          </h2>
          <ImageGallery images={galleryImages} />
        </div>
      </ParallaxSection>

      {/* Certification Section */}
      <section id="certification" className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto section-padding text-center relative z-10">
          <GlassCard className="p-12" opacity={10}>
            <h2 className={`text-4xl font-display font-bold mb-6 text-warm-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.certification.title}
            </h2>
            <p className={`text-lg text-gray-700 mb-8 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.certification.description}
            </p>
            <div className="space-y-4">
              {t.certification.institutions.map((institution, index) => (
                <div key={index} className="bg-warm-100 rounded-lg p-4 hover-lift border border-warm-200">
                  <p className={`text-lg font-medium text-gray-800 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {institution}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Events Section with Animated Background */}
      <section id="events" className="relative py-20 overflow-hidden bg-gradient-to-br from-warm-100 to-accent-50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-warm-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-4xl mx-auto section-padding text-center relative z-10">
          <h2 className={`text-4xl font-display font-bold mb-4 text-warm-700 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.events.title}
          </h2>
          <p className={`text-xl text-warm-600 mb-8 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.events.subtitle}
          </p>
          <GlassCard className="p-8" blur="sm" opacity={10}>
            <h3 className={`text-2xl font-semibold text-warm-700 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.events.event}
            </h3>
            <p className={`text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.events.description}
            </p>
            <div className="mt-8 flex justify-center gap-2">
              {['सा', 'रे', 'ग', 'म', 'प', 'ध', 'नि'].map((swar, i) => (
                <IndianSwarNotation 
                  key={i} 
                  swar={swar} 
                  className="text-warm-500/60 musical-note" 
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/swami-samarth.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto section-padding text-center relative z-10">
          <GlassCard className="p-12 bg-gray-900/40" blur="sm">
            <h2 className={`text-4xl font-display font-bold mb-4 text-white ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.contact.title}
            </h2>
            <p className={`text-xl mb-12 text-gray-200 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.contact.subtitle}
            </p>
            
            <div className="space-y-6">
              <div className="hover-lift inline-block">
                <p className={`text-lg font-medium mb-2 text-white ${language === 'mr' ? 'font-devanagari' : ''}`}>{t.contact.phone}:</p>
                <p className="text-warm-300 text-lg">+91 98695 15049 | +91 87793 13027 | 022-2538 8296</p>
              </div>
              
              <div className="hover-lift inline-block">
                <p className={`text-lg font-medium mb-2 text-white ${language === 'mr' ? 'font-devanagari' : ''}`}>{t.contact.visit}:</p>
                <p className={`text-warm-300 ${language === 'mr' ? 'font-devanagari' : ''}`}>{t.contact.address}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}