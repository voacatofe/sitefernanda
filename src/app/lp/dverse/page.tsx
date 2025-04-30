import React from 'react';
import HeroSection from '../shared/components/HeroSection';
import FeatureSection from '../shared/components/FeatureSection';
import LocationSection from '../shared/components/LocationSection';
import AboutFernanda from '../shared/components/AboutFernanda';
import FormContact from '../shared/components/FormContact';
import ImageGallery from '../shared/components/ImageGallery';
import { projectsData } from '@/app/data/empreendimentos/projects';
import Head from 'next/head';

export default function DverseLandingPage() {
  const whatsappNumber = "5548999999999"; // Substitua pelo número real da Fernanda
  const dverseData = projectsData.dverse;
  
  // Features do empreendimento
  const features = dverseData.features.map(feature => ({
    title: feature.title,
    description: feature.description
  }));
  
  // Diferenciais do empreendimento
  const differentials = dverseData.differentials?.map(diff => ({
    title: diff.title,
    description: diff.description
  })) || [];
  
  // Destaques da localização
  const locationHighlights = [
    "A apenas 65 metros da areia da Praia Brava",
    "Acesso limitado e poucos terrenos disponíveis, garantindo privacidade",
    "Praia frequentada predominantemente por moradores locais e visitantes seletos",
    "Próximo a restaurantes exclusivos e áreas de lazer",
    "Vista privilegiada para o mar"
  ];

  // Construir endereço completo
  const fullAddress = `${dverseData.address.street}, ${dverseData.address.number} - ${dverseData.address.neighborhood}, ${dverseData.address.city} - ${dverseData.address.state}, ${dverseData.address.zipCode}`;

  // Imagem do mapa (com valor padrão se não existir)
  const mapImageUrl = dverseData.location?.mapImage || "/images/dverse/localizacao.jpg";

  return (
    <>
      <Head>
        <title>D'VERSE Beach Concept | Fernanda Soares Imóveis</title>
        <meta name="description" content="Viva a sofisticação e a beleza natural da Praia Brava com o D'VERSE Beach Concept. Apartamentos exclusivos a 65 metros da areia com vista para o mar." />
        <link rel="canonical" href="https://fernandasoaresimoveis.com.br/lp/dverse" />
        <meta property="og:title" content="D'VERSE Beach Concept | Praia Brava | Fernanda Soares" />
        <meta property="og:description" content="Empreendimento exclusivo na Praia Brava com apartamentos de 2, 3 e 4 suítes. Entre em contato com a especialista Fernanda Soares." />
        <meta property="og:image" content="https://fernandasoaresimoveis.com.br/images/dverse/dverse.jpg" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection 
          title="D'VERSE Beach Concept"
          tagline="Viva a sofisticação e a beleza natural da Praia Brava"
          description="O primeiro empreendimento de alto padrão da Dimas Construções na exclusiva Praia Brava, com acesso limitado e poucos terrenos disponíveis, proporcionando privacidade e tranquilidade à beira-mar."
          backgroundImage={dverseData.heroImage}
          empreendimento="D'VERSE Beach Concept"
          whatsappNumber={whatsappNumber}
        />
        
        {/* Features Section */}
        <FeatureSection 
          title="Características Exclusivas"
          subtitle="Conheça os diferenciais que fazem do D'VERSE sua melhor escolha na Praia Brava"
          features={features}
        />
        
        {/* Imagens do Empreendimento */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Conheça o D'VERSE Beach Concept</h2>
            <ImageGallery 
              images={dverseData.gallery?.slice(0, 12) || []}
            />
          </div>
        </div>
        
        {/* Location Section */}
        <LocationSection 
          title="Localização Privilegiada"
          description="Localizado na Praia Brava em Florianópolis, o D'VERSE combina sofisticação, tecnologia e sustentabilidade. A apenas 65 metros da areia da praia, oferece privacidade e tranquilidade em uma das praias mais reservadas e encantadoras de Florianópolis."
          imageUrl="/images/dverse/dverse (1).webp"
          address={fullAddress}
          mapImageUrl={mapImageUrl}
          highlights={locationHighlights}
        />
        
        {/* Diferenciais Section */}
        <FeatureSection 
          title="Diferenciais Exclusivos"
          subtitle="O que torna o D'VERSE um empreendimento único"
          features={differentials}
          backgroundClass="bg-white"
        />
        
        {/* About Fernanda Section */}
        <AboutFernanda 
          whatsappNumber={whatsappNumber}
        />
        
        {/* Formulário de Contato */}
        <section id="formulario" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quero saber mais sobre o D'VERSE</h2>
              <p className="text-lg text-gray-600">Preencha o formulário abaixo e receba informações exclusivas</p>
            </div>
            
            <FormContact 
              empreendimento="D'VERSE Beach Concept"
              whatsappNumber={whatsappNumber}
            />
          </div>
        </section>
      </main>
    </>
  );
} 