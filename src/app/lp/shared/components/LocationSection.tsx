import React from 'react';
import Image from 'next/image';

interface LocationSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  address: string;
  mapImageUrl: string;
  highlights?: string[];
  reverseLayout?: boolean;
}

export default function LocationSection({
  title,
  description,
  imageUrl,
  address,
  mapImageUrl,
  highlights = [],
  reverseLayout = false
}: LocationSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Side */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700">{description}</p>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <p className="font-medium text-gray-800 mb-2">Endereço:</p>
              <p className="text-gray-600">{address}</p>
            </div>
            
            {highlights.length > 0 && (
              <div className="space-y-3">
                <p className="font-medium text-gray-800">Destaques da região:</p>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={mapImageUrl}
              alt="Mapa de localização"
              width={1200}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 