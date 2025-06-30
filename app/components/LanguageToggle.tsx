'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="glass-dark rounded-full p-1 flex items-center">
        <button
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('mr')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            language === 'mr'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          मराठी
        </button>
      </div>
    </motion.div>
  );
}