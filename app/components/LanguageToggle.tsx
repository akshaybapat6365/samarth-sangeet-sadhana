'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-1 flex items-center">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-warm-500 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('mr')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'mr'
              ? 'bg-warm-500 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          मराठी
        </button>
      </div>
    </div>
  );
}