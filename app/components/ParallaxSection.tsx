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
          className="object-cover object-top"
          quality={100}
          priority
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to bottom, rgba(0,0,0,${overlayOpacity * 0.8}), rgba(0,0,0,${overlayOpacity * 0.3}))` 
          }}
        ></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}