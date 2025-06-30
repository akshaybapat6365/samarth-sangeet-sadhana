'use client';

import { useLanguage } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import { content } from './content';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HarmoniumIcon, TablaIcon, KeyboardIcon, FluteIcon, GuitarIcon, VocalsIcon } from './components/InstrumentIcons';

const instruments = [
  { name: { en: 'Harmonium', mr: 'हार्मोनियम' }, Icon: HarmoniumIcon },
  { name: { en: 'Tabla', mr: 'तबला' }, Icon: TablaIcon },
  { name: { en: 'Keyboard', mr: 'कीबोर्ड' }, Icon: KeyboardIcon },
  { name: { en: 'Flute', mr: 'बांसुरी' }, Icon: FluteIcon },
  { name: { en: 'Guitar', mr: 'गिटार' }, Icon: GuitarIcon },
  { name: { en: 'Vocals', mr: 'गायन' }, Icon: VocalsIcon },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <main className="min-h-screen relative">
      {/* Fixed background elements */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        </motion.div>
      </div>

      <LanguageToggle />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero-saraswati.jpg"
              alt="Devi Saraswati"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 text-center section-padding">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8 inline-block"
          >
            <div className="relative w-32 h-32 mx-auto">
              <Image
                src="/images/swami-samarth.jpg"
                alt="Swami Samarth"
                width={128}
                height={128}
                className="rounded-full border-4 border-amber-500/50 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full glow"></div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={`text-7xl md:text-9xl font-bebas gradient-text text-glow mb-4 ${language === 'mr' ? 'font-devanagari' : ''}`}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={`text-2xl md:text-3xl gradient-text-subtle mb-8 ${language === 'mr' ? 'font-devanagari' : 'font-playfair italic'}`}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.a 
            href="#contact"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-black font-bold text-lg hover-glow"
          >
            {t.hero.cta}
          </motion.a>
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none">
          {['♪', '♫', '♬'].map((note, i) => (
            <motion.div
              key={i}
              className="absolute text-amber-500/30 text-4xl"
              initial={{ x: `${Math.random() * 100}%`, y: '100vh' }}
              animate={{ 
                x: `${Math.random() * 100}%`, 
                y: '-100px',
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {note}
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 flow-section">
        <div className="max-w-7xl mx-auto section-padding">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="glass-dark rounded-3xl p-8 hover-glow">
                  <h2 className={`text-5xl font-bold gradient-text mb-6 ${language === 'mr' ? 'font-devanagari' : 'font-playfair'}`}>
                    {t.guru.title}
                  </h2>
                  <h3 className={`text-3xl text-amber-400 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.guru.name}
                  </h3>
                  <p className={`text-lg text-gray-300 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.guru.credentials} • {t.guru.institution}
                  </p>
                  <p className={`text-xl text-gray-200 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.guru.description}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-3xl overflow-hidden glow"
                >
                  <Image
                    src="/images/saraswati-lotus.png"
                    alt="Saraswati"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`text-6xl font-bold gradient-text mb-6 ${language === 'mr' ? 'font-devanagari' : 'font-playfair'}`}>
              {t.classes.title}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {instruments.map((instrument, index) => (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className="instrument-card p-8 text-center hover-glow"
                >
                  <instrument.Icon className="w-24 h-24 mx-auto mb-4 text-amber-400" />
                  <h3 className={`text-2xl font-bold text-amber-300 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {instrument.name[language]}
                  </h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="relative py-32 flow-section">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <AnimatedSection>
            <div className="glass-dark rounded-3xl p-12">
              <h2 className={`text-5xl font-bold gradient-text mb-8 ${language === 'mr' ? 'font-devanagari' : 'font-playfair'}`}>
                {t.certification.title}
              </h2>
              <p className={`text-xl text-gray-300 mb-8 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.certification.description}
              </p>
              <div className="space-y-4">
                {t.certification.institutions.map((institution, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-2xl border border-amber-500/30 hover:border-amber-500/60 transition-all"
                  >
                    <p className={`text-xl text-amber-300 font-medium ${language === 'mr' ? 'font-devanagari' : ''}`}>
                      {institution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-32">
        <div className="max-w-6xl mx-auto section-padding">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className={`text-6xl font-bold gradient-text mb-4 ${language === 'mr' ? 'font-devanagari' : 'font-playfair'}`}>
                {t.events.title}
              </h2>
              <p className={`text-2xl text-amber-400 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.events.subtitle}
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl filter blur-3xl"></div>
              <div className="relative glass-dark rounded-3xl p-12 text-center">
                <h3 className={`text-4xl font-bold gradient-text mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.events.event}
                </h3>
                <p className={`text-xl text-gray-200 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.events.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <AnimatedSection>
            <h2 className={`text-6xl font-bold gradient-text mb-12 ${language === 'mr' ? 'font-devanagari' : 'font-playfair'}`}>
              {t.contact.title}
            </h2>
            
            <div className="glass-dark rounded-3xl p-12 space-y-8">
              <div>
                <p className={`text-xl text-amber-400 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.contact.phone}
                </p>
                <p className="text-2xl text-white">
                  +91 98695 15049 | +91 87793 13027
                </p>
              </div>
              
              <div>
                <p className={`text-xl text-amber-400 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.contact.visit}
                </p>
                <p className={`text-xl text-gray-300 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.contact.address}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}