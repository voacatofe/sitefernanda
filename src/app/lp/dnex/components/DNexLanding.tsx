"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Building, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FormContact from "../../shared/components/FormContact";
import AboutFernanda from "../../shared/components/AboutFernanda";
import { Events, scrollSpy, animateScroll as scroll } from 'react-scroll';

interface GalleryImage {
  src: string;
  alt: string;
}

interface FloorPlan {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface DNexLandingProps {
  galleryImages: GalleryImage[];
  floorPlans: FloorPlan[];
  features: Feature[];
  whatsappNumber: string;
}

// Componente de animação para seções que aparecem quando estão visíveis
const FadeInSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export function DNexLanding({
  galleryImages,
  floorPlans,
  features,
  whatsappNumber,
}: DNexLandingProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Controla a visibilidade do header baseado no scroll
  const [scrollY, setScrollY] = useState(0);
  const headerVisible = scrollY > 100; // Mostra após rolar 100px
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    // Inicializa a rolagem suave
    Events.scrollEvent.register('begin', () => console.log('Scroll começou'));
    Events.scrollEvent.register('end', () => console.log('Scroll terminou'));
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Limpa os eventos de rolagem
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  // Referências para navegação
  const overviewRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const floorplansRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Método para rolagem super suave
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const sectionId = ref.current?.id;
    if (sectionId) {
      scroll.scrollTo(ref.current?.offsetTop || 0, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    } else if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="min-h-screen bg-white text-dimas-black">
      {/* Navegação fixa - aparece ao rolar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-fernanda-gold/20"
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: headerVisible ? 1 : 0,
          y: headerVisible ? 0 : -100,
          pointerEvents: headerVisible ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 hide-scrollbar">
            <Button 
              variant="link" 
              className="text-dimas-black hover:text-fernanda-gold mr-6"
              onClick={() => scrollToSection(overviewRef)}
            >
              VISÃO GERAL
            </Button>
            <Button 
              variant="link" 
              className="text-dimas-black hover:text-fernanda-gold mr-6"
              onClick={() => scrollToSection(galleryRef)}
            >
              GALERIA
            </Button>
            <Button 
              variant="link" 
              className="text-dimas-black hover:text-fernanda-gold mr-6"
              onClick={() => scrollToSection(floorplansRef)}
            >
              PLANTAS
            </Button>
            <Button 
              variant="link" 
              className="text-dimas-black hover:text-fernanda-gold mr-6"
              onClick={() => scrollToSection(locationRef)}
            >
              LOCALIZAÇÃO
            </Button>
            <Button 
              variant="link" 
              className="text-dimas-black hover:text-fernanda-gold mr-6"
              onClick={() => scrollToSection(featuresRef)}
            >
              DIFERENCIAIS
            </Button>
            <Button 
              variant="link" 
              className="text-dimas-black hover:text-fernanda-gold"
              onClick={() => scrollToSection(contactRef)}
            >
              CONTATO
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section - com altura de 80vh */}
      <motion.div
        ref={heroRef}
        style={{ opacity }}
        className="relative h-[80vh]"
      >
        {/* Aqui você pode usar uma imagem em vez de vídeo se o vídeo não estiver disponível */}
        <Image
          src="/images/dnex/fachada1.jpg"
          alt="D'NEX - Background"
          fill
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/dnex/logo.svg"
              alt="D'NEX"
              width={300}
              height={100}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              O novo conceito de morar bem
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-fernanda-gold">
              Modernidade, estilo e localização estratégica
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-fernanda-gold text-fernanda-gold hover:bg-fernanda-gold/10"
              asChild
            >
              <Link
                href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20D/NEX.`}
                target="_blank"
              >
                Agende uma visita
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          onClick={() => scrollToSection(overviewRef)}
        >
          <ChevronDown className="h-10 w-10 text-fernanda-gold animate-bounce cursor-pointer" />
        </motion.div>
      </motion.div>

      {/* Seção da Corretora */}
      <div className="min-h-[20vh] bg-white py-4">
        <div className="container mx-auto px-6 h-full">
          <FadeInSection className="w-full h-full">
            <AboutFernanda empreendimento="D/NEX" />
          </FadeInSection>
        </div>
      </div>

      {/* Visão Geral */}
      <div id="overview" ref={overviewRef} className="py-20 container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-16 text-center relative">
            <span className="border-b-2 border-fernanda-gold pb-2 px-4">VISÃO GERAL</span>
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div>
              <Badge className="bg-fernanda-gold text-white mb-4">
                Lançamento
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Bem-vindo ao D/NEX
              </h2>
              <p className="text-gray-600 mb-6">
                O D/NEX Smart Living é um empreendimento inovador que redefine o conceito de morar bem, 
                combinando praticidade, tecnologia e espaços compartilhados em um só lugar.
                <br /><br />
                Projetado para a vida moderna, o D/NEX oferece ambientes inteligentes que se adaptam 
                ao seu estilo de vida, com uma infraestrutura completa de lazer e serviços que tornam o dia a dia mais prático e agradável.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>studios, um e dois dormitórios, além de opções garden</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Infraestrutura completa de lazer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Área de convivência integrada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Acabamento de qualidade</span>
                </li>
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/dnex/fachada2.jpg"
                alt="Fachada D'NEX"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Galeria */}
      <div id="gallery" ref={galleryRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-16 text-center relative">
              <span className="border-b-2 border-fernanda-gold pb-2 px-4">GALERIA</span>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <FadeInSection key={index} className="h-full">
                <div className="relative aspect-video rounded-lg overflow-hidden group h-full shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Prédio pronto para visitação */}
      <div id="floorplans" ref={floorplansRef} className="py-20 container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-16 text-center relative">
            <span className="border-b-2 border-fernanda-gold pb-2 px-4">PRÉDIO PRONTO PARA VISITAÇÃO</span>
          </h2>
        </FadeInSection>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <FadeInSection>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6 text-fernanda-gold text-center md:text-left">
                O D/NEX já está pronto! Venha conhecer pessoalmente
              </h3>
              <p className="text-gray-600 mb-8 text-lg text-center md:text-left">
                O empreendimento está 100% concluído e disponível para visitação imediata. Agende uma visita e conheça de perto todos os diferenciais, acabamentos e áreas comuns do D/NEX Smart Living.
              </p>
              <Button
                size="lg"
                className="bg-fernanda-gold hover:bg-fernanda-gold/80 text-white px-10 py-6 text-xl h-auto mx-auto md:mx-0"
                asChild
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20agendar%20uma%20visita%20ao%20D/NEX.`}
                  target="_blank"
                >
                  Agendar visita pelo WhatsApp
                </Link>
              </Button>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="relative w-full max-w-md h-80 mx-auto md:mx-0 flex-1">
              <Image
                src="/images/dnex/predio-pronto.jpg"
                alt="Prédio pronto para visitação D'NEX"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Localização */}
      <div id="location" ref={locationRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-16 text-center relative">
              <span className="border-b-2 border-fernanda-gold pb-2 px-4">LOCALIZAÇÃO</span>
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-fernanda-gold">
                  Localização Estratégica
                </h3>
                <p className="text-gray-600 mb-6">
                  O D/NEX está estrategicamente localizado em uma área em desenvolvimento, próximo a 
                  comércios, serviços e com fácil acesso às principais vias da cidade, proporcionando 
                  mobilidade e praticidade.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <MapPin className="text-fernanda-gold" />
                    <span>Próximo aos principais pontos da cidade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="text-fernanda-gold" />
                    <span>Infraestrutura completa no entorno</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="text-fernanda-gold" />
                    <span>Acesso fácil às principais vias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="text-fernanda-gold" />
                    <span>Área em constante valorização</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="relative h-[400px] w-full overflow-hidden mb-6 rounded-lg shadow-md">
                <Image
                  src="/images/dnex/localização.png"
                  alt="Localização D'NEX"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Contato */}
      <div id="contact" ref={contactRef} className="py-20 container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-16 text-center relative">
            <span className="border-b-2 border-fernanda-gold pb-2 px-4">CONTATO</span>
          </h2>
        </FadeInSection>

        <FadeInSection>
          <FormContact empreendimento="D/NEX" whatsappNumber={whatsappNumber} />
        </FadeInSection>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} D'NEX. Todos os direitos reservados. 
            <br />Desenvolvido por <span className="text-fernanda-gold">Fernanda Soares Imóveis</span>
          </p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 text-fernanda-gold hover:text-fernanda-gold/80 transition-colors"
          >
            Voltar ao topo
          </button>
        </div>
      </footer>
    </div>
  );
} 