'use client';

import { useLanguage } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';
import { content } from './content';

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <main className="min-h-screen">
      <LanguageToggle />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-100 via-warm-50 to-accent-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-warm-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center section-padding py-20 max-w-5xl mx-auto fade-in">
          <h1 className={`text-5xl md:text-7xl font-display font-bold text-gray-800 mb-4 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.hero.title}
          </h1>
          <p className={`text-xl md:text-2xl text-warm-600 mb-8 ${language === 'mr' ? 'font-devanagari' : 'font-display italic'}`}>
            {t.hero.subtitle}
          </p>
          <p className={`text-2xl md:text-3xl text-gray-700 mb-8 ${language === 'mr' ? 'font-devanagari' : 'font-light'}`}>
            {t.hero.tagline}
          </p>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.hero.description}
          </p>
          <a href="#contact" className="inline-block bg-warm-500 hover:bg-warm-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg">
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Guru Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className={`text-4xl font-display font-bold text-gray-800 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.guru.title}
              </h2>
              <div className="space-y-2">
                <h3 className={`text-2xl font-semibold text-warm-600 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.guru.name}
                </h3>
                <p className={`text-lg text-gray-600 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {t.guru.credentials} • {t.guru.institution}
                </p>
              </div>
              <p className={`text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.guru.description}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-warm-200 to-warm-300 rounded-2xl shadow-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-warm-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-warm-50">
        <div className="max-w-6xl mx-auto section-padding">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-display font-bold text-gray-800 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.classes.title}
            </h2>
            <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.classes.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className={`text-2xl font-semibold text-warm-600 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.classes.offerings.title}
              </h3>
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className={`text-xl font-medium text-gray-800 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.classes.offerings.singing.title}
                  </h4>
                  <p className={`text-gray-600 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.classes.offerings.singing.description}
                  </p>
                </div>
                <div>
                  <h4 className={`text-xl font-medium text-gray-800 mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.classes.offerings.instruments.title}
                  </h4>
                  <p className={`text-gray-600 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    {t.classes.offerings.instruments.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className={`text-2xl font-semibold text-warm-600 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                {t.classes.flexible.title}
              </h3>
              <ul className="space-y-4">
                {t.classes.flexible.options.map((option, index) => (
                  <li key={index} className={`flex items-start ${language === 'mr' ? 'font-devanagari' : ''}`}>
                    <span className="text-accent-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className={`text-4xl font-display font-bold text-gray-800 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.certification.title}
          </h2>
          <p className={`text-lg text-gray-600 mb-8 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.certification.description}
          </p>
          <div className="space-y-4">
            {t.certification.institutions.map((institution, index) => (
              <div key={index} className="bg-warm-50 rounded-lg p-4 border border-warm-200">
                <p className={`text-lg font-medium text-gray-800 ${language === 'mr' ? 'font-devanagari' : ''}`}>
                  {institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-br from-warm-100 to-accent-50">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className={`text-4xl font-display font-bold text-gray-800 mb-4 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.events.title}
          </h2>
          <p className={`text-xl text-warm-600 mb-8 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.events.subtitle}
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className={`text-2xl font-semibold text-accent-600 mb-6 ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.events.event}
            </h3>
            <p className={`text-lg text-gray-700 leading-relaxed ${language === 'mr' ? 'font-devanagari' : ''}`}>
              {t.events.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className={`text-4xl font-display font-bold mb-4 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.contact.title}
          </h2>
          <p className={`text-xl mb-12 text-gray-300 ${language === 'mr' ? 'font-devanagari' : ''}`}>
            {t.contact.subtitle}
          </p>
          
          <div className="space-y-6">
            <div>
              <p className={`text-lg font-medium mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>{t.contact.phone}:</p>
              <p className="text-warm-300">+91 98695 15049 | +91 87793 13027 | 022-2538 8296</p>
            </div>
            
            <div>
              <p className={`text-lg font-medium mb-2 ${language === 'mr' ? 'font-devanagari' : ''}`}>{t.contact.visit}:</p>
              <p className={`text-warm-300 ${language === 'mr' ? 'font-devanagari' : ''}`}>{t.contact.address}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}