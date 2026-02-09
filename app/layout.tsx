import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { Eczar, Hind } from 'next/font/google';
import Header from './components/site/Header';
import Footer from './components/site/Footer';

const fontDisplay = Eczar({
  subsets: ['latin', 'devanagari'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const fontBody = Hind({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Samarth Sangeet Sadhana',
    template: '%s | Samarth Sangeet Sadhana',
  },
  description:
    'Learn Indian classical and light music with Shri Raghunath Bapat. Classes for vocals, harmonium, tabla, keyboard, and more.',
  icons: {
    icon: '/images/swami-samarth.jpg',
    shortcut: '/images/swami-samarth.jpg',
    apple: '/images/swami-samarth.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontBody.variable} ${fontDisplay.variable}`}>
        <LanguageProvider>
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <div className="app-shell">
            <Header />
            <main id="content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
