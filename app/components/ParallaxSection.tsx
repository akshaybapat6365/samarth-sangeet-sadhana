'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ParallaxSectionProps {
  imageSrc: string;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
}

export default function ParallaxSection({ 
  imageSrc, 
  children, 
  className = '',
  overlayOpacity = 0.7 
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      >
        <Image
          src={imageSrc}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-warm-900/80 to-transparent"
          style={{ opacity: overlayOpacity }}
        ></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}