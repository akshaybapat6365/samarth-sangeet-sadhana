'use client';

import { useLanguage } from '@/app/context/LanguageContext';
import { cn } from '@/app/lib/cn';

export default function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-border/15 bg-surface/70 p-1 shadow-paper backdrop-blur',
        className
      )}
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={cn(
          'px-3 py-1.5 text-xs rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          language === 'en'
            ? 'bg-gold text-ink shadow'
            : 'text-muted hover:text-ink hover:bg-ink/5'
        )}
        aria-pressed={language === 'en'}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage('mr')}
        className={cn(
          'px-3 py-1.5 text-xs rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          language === 'mr'
            ? 'bg-gold text-ink shadow'
            : 'text-muted hover:text-ink hover:bg-ink/5'
        )}
        aria-pressed={language === 'mr'}
      >
        मराठी
      </button>
    </div>
  );
}

