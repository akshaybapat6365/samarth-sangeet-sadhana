'use client';

import Image from 'next/image';
import { useState } from 'react';
import GlassCard from './GlassCard';
import { useLanguage } from '../context/LanguageContext';

interface Instrument {
  name: { en: string; mr: string };
  description: { en: string; mr: string };
  icon: string;
}

const instruments: Instrument[] = [
  {
    name: { en: 'Harmonium', mr: 'हार्मोनियम' },
    description: { 
      en: 'A keyboard instrument that produces sound by air passing through reeds',
      mr: 'एक कीबोर्ड वाद्य जे रीड्समधून हवा जाऊन आवाज निर्माण करते'
    },
    icon: '🎹',
  },
  {
    name: { en: 'Tabla', mr: 'तबला' },
    description: { 
      en: 'A pair of twin hand drums, fundamental to Indian classical music',
      mr: 'जोडी हाताने वाजवले जाणारे ढोल, भारतीय शास्त्रीय संगीताचे मूलभूत वाद्य'
    },
    icon: '🥁',
  },
  {
    name: { en: 'Keyboard', mr: 'कीबोर्ड' },
    description: { 
      en: 'Modern electronic keyboard for contemporary music education',
      mr: 'समकालीन संगीत शिक्षणासाठी आधुनिक इलेक्ट्रॉनिक कीबोर्ड'
    },
    icon: '🎹',
  },
  {
    name: { en: 'Classical Vocals', mr: 'शास्त्रीय गायन' },
    description: { 
      en: 'The art of Indian classical singing with proper technique',
      mr: 'योग्य तंत्रासह भारतीय शास्त्रीय गायनाची कला'
    },
    icon: '🎤',
  },
];

export default function InstrumentShowcase() {
  const { language } = useLanguage();
  const [selectedInstrument, setSelectedInstrument] = useState<number | null>(null);

  return (
    <div className="relative py-16">
      {/* Background Instrument Circle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative w-96 h-96 md:w-[600px] md:h-[600px]">
          <Image
            src="/images/instrument-circle.png"
            alt="Instrument Circle"
            fill
            className="object-contain animate-spin-slow"
            style={{ animationDuration: '60s' }}
          />
        </div>
      </div>

      {/* Instrument Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {instruments.map((instrument, index) => (
          <GlassCard
            key={index}
            className={`p-6 cursor-pointer transition-all duration-300 ${
              selectedInstrument === index ? 'scale-105 ring-2 ring-warm-400' : ''
            } hover-lift glow-border`}
            onClick={() => setSelectedInstrument(selectedInstrument === index ? null : index)}
          >
            <div className="text-center">
              <div className="text-5xl mb-4 instrument-float">{instrument.icon}</div>
              <h3 className={`text-xl font-semibold gradient-text mb-2 ${
                language === 'mr' ? 'font-devanagari' : ''
              }`}>
                {instrument.name[language]}
              </h3>
              <p className={`text-sm text-gray-600 ${
                language === 'mr' ? 'font-devanagari' : ''
              }`}>
                {instrument.description[language]}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Selected Instrument Detail */}
      {selectedInstrument !== null && (
        <div className="mt-8 fade-in">
          <GlassCard className="p-8 text-center" blur="lg">
            <h4 className={`text-2xl font-bold gradient-text mb-4 ${
              language === 'mr' ? 'font-devanagari' : ''
            }`}>
              {language === 'en' ? 'Learn' : 'शिका'} {instruments[selectedInstrument].name[language]}
            </h4>
            <p className={`text-lg text-gray-700 ${
              language === 'mr' ? 'font-devanagari' : ''
            }`}>
              {language === 'en' 
                ? 'Our expert instructors will guide you through every step of your musical journey.'
                : 'आमचे तज्ञ शिक्षक तुमच्या संगीत प्रवासाच्या प्रत्येक टप्प्यात मार्गदर्शन करतील.'}
            </p>
          </GlassCard>
        </div>
      )}
    </div>
  );
}