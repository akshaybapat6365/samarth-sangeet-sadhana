export type NavKey = 'home' | 'about' | 'classes' | 'events' | 'gallery' | 'contact';

export const navItems: Array<{ href: string; key: NavKey }> = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/classes', key: 'classes' },
  { href: '/events', key: 'events' },
  { href: '/gallery', key: 'gallery' },
  { href: '/contact', key: 'contact' },
];

