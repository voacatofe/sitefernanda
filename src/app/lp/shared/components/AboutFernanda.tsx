"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/config/contact';

interface AboutFernandaProps {
  empreendimento: string;
}

// Mapeamento de notas para cada empreendimento
const notasEmpreendimentos: Record<string, string> = {
  "D/VERSE": "O D'VERSE Beach Concept é perfeito para quem busca exclusividade e sofisticação à beira-mar. A localização privilegiada na Praia Brava e os acabamentos de alto padrão fazem deste empreendimento uma excelente opção para investimento ou segunda residência com atmosfera de refúgio.",
  "D/NEX": "O D'NEX representa o novo conceito de morar bem, combinando design moderno, funcionalidade e qualidade de vida. Sua localização estratégica e planejamento inteligente dos espaços fazem deste empreendimento uma excelente opção para famílias contemporâneas.",
  "D/SEASON": "O D'SEASON oferece uma experiência única de moradia, com ambientes pensados para o conforto e bem-estar durante todas as estações do ano. Seus diferenciais de lazer completo e acabamento premium criam um novo padrão de qualidade de vida.",
  "D/SENSE": "O D'SENSE traz uma proposta sensorial única para o mercado imobiliário, com ambientes que despertam os sentidos e promovem bem-estar. O projeto harmoniza estética, conforto e funcionalidade para uma experiência de moradia diferenciada.",
  "D/VERT": " D/Vert é o único residence club na Beira Mar de São José. Um projeto que integra a sua rotina, com a qualidade de viver próximo ao mar."
};

export default function AboutFernanda({ empreendimento }: AboutFernandaProps) {
  // Obtém a nota específica ou usa uma mensagem padrão se não encontrar
  const notaEmpreendimento = notasEmpreendimentos[empreendimento] || 
    `${empreendimento} combina sofisticação, localização privilegiada e acabamentos de alto padrão, sendo uma excelente opção para investimento ou moradia permanente.`;

  return (
    <div className="w-full mx-auto h-full flex items-center py-3 sm:py-4">
      {/* Layout desktop */}
      <div className="hidden sm:grid sm:grid-cols-12 sm:gap-2 sm:items-center w-full">
        {/* Foto da Fernanda - desktop */}
        <div className="col-span-1">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto">
            <Image
              src="/images/fs.jpg"
              alt="Fernanda Soares"
              fill
              className="object-cover"
              style={{ objectPosition: '50% 30%' }} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
        
        {/* Nota de Fernanda - desktop */}
        <div className="col-span-10 pr-1">
          <div className="bg-fernanda-gold/10 border border-fernanda-gold/30 p-4 rounded-sm">
            <h3 className="text-base font-medium text-fernanda-gold mb-1">Nota de Fernanda</h3>
            <p className="text-dimas-black/80 italic text-sm">
              "{notaEmpreendimento}"
            </p>
          </div>
        </div>

        {/* Botão WhatsApp - desktop */}
        <div className="col-span-1 flex justify-center">
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20${empreendimento}.`}
            target="_blank"
            className="w-12 h-12 rounded-full bg-white border border-fernanda-gold/30 flex items-center justify-center hover:bg-fernanda-gold/10 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="24" 
              height="24" 
              className="fill-fernanda-gold"
            >
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Layout mobile */}
      <div className="sm:hidden flex flex-col w-full space-y-3">
        {/* Cabeçalho com foto e botão - mobile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/images/fs.jpg"
                alt="Fernanda Soares"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 30%' }} 
                sizes="100vw"
                priority
              />
            </div>
            <h3 className="text-sm font-medium text-fernanda-gold">Nota de Fernanda</h3>
          </div>
          
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20${empreendimento}.`}
            target="_blank"
            className="w-10 h-10 rounded-full bg-white border border-fernanda-gold/30 flex items-center justify-center hover:bg-fernanda-gold/10 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="20" 
              height="20" 
              className="fill-fernanda-gold"
            >
              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
            </svg>
          </Link>
        </div>
        
        {/* Nota - mobile */}
        <div className="bg-fernanda-gold/10 border border-fernanda-gold/30 p-3 rounded-sm">
          <p className="text-dimas-black/80 italic text-xs">
            "{notaEmpreendimento}"
          </p>
        </div>
      </div>
    </div>
  );
} 