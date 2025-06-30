import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

export const metadata: Metadata = {
  title: 'Samarth Sangeet Sadhana - Learn Indian Classical Music',
  description: 'Discover the joy of Indian melody and rhythm with Shri Raghunath Bapat. Classes for singing, harmonium, tabla, and keyboard.',
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
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}