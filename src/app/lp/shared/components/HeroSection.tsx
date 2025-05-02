"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  tagline: string;
  description: string;
  backgroundImage: string;
  empreendimento: string;
  whatsappNumber: string;
  logoUrl?: string;
}

export default function HeroSection({
  title,
  tagline,
  description,
  backgroundImage,
  empreendimento,
  whatsappNumber,
  logoUrl
}: HeroSectionProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Empreendimento */}
          <div className="space-y-6">
            {logoUrl && (
              <div className="mb-8">
                <Image src={logoUrl} alt="Logo" width={180} height={60} />
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-white/90">
              {tagline}
            </p>
            
            <p className="text-base md:text-lg text-white/80 max-w-xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="#formulario"
                className="inline-block px-8 py-4 bg-white text-black font-bold rounded-md transition-transform hover:scale-105"
              >
                Mais informações
              </a>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20${encodeURIComponent(empreendimento)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-md transition-transform hover:scale-105"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  className="fill-current mr-2"
                >
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
                Falar com Fernanda
              </a>
            </div>
          </div>
          
          {/* Right Content - Fernanda */}
          <div className="relative hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-white">
                  <Image 
                    src="/images/fernanda-soares.jpg" 
                    alt="Fernanda Soares" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fernanda Soares</h3>
                  <p className="text-white/80">Especialista em Imóveis de Alto Padrão</p>
                </div>
              </div>
              
              <p className="italic text-white/90 mb-4">
                "Estou aqui para ajudar você a encontrar o imóvel dos seus sonhos. Tenho conhecimento exclusivo sobre este empreendimento e posso oferecer condições especiais."
              </p>
              
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">(48) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">fernanda@soares.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 