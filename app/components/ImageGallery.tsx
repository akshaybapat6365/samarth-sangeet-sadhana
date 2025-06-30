'use client';

import Image from 'next/image';
import { useState } from 'react';
import GlassCard from './GlassCard';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
        {images.map((image, index) => (
          <GlassCard
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden group hover-lift"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {image.title && (
                <p className="text-white font-medium">{image.title}</p>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-warm-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}