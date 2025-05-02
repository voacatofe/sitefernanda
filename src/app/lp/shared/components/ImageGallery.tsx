"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  title?: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="w-full">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      
      {/* Main gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden rounded-md cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full text-white hover:bg-opacity-30"
            onClick={prevImage}
          >
            &#10094;
          </button>
          
          <div className="relative h-[80vh] w-[80vw]">
            <Image
              src={images[currentImage]}
              alt={`Imagem ampliada ${currentImage + 1}`}
              fill
              sizes="80vw"
              className="object-contain"
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentImage + 1} / {images.length}
            </p>
          </div>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full text-white hover:bg-opacity-30"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
} 