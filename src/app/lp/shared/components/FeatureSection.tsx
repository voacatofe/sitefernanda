"use client";

import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  backgroundClass?: string;
}

export default function FeatureSection({
  title,
  subtitle,
  features,
  backgroundClass = 'bg-white'
}: FeatureSectionProps) {
  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {feature.icon && (
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
                    <Image 
                      src={feature.icon} 
                      alt={feature.title} 
                      width={32} 
                      height={32} 
                    />
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 