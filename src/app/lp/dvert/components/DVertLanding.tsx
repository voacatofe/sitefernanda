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
import { cn } from "@/lib/utils";

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

interface DVertLandingProps {
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

export function DVertLanding({
  galleryImages,
  floorPlans,
  features,
  whatsappNumber,
}: DVertLandingProps) {
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
        {/* Imagem de fundo do hero */}
        <Image
          src="/images/dvert/fachada.jpg"
          alt="D'VERT - Background"
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
              src="/images/dvert/logo.svg"
              alt="D'VERT"
              width={300}
              height={100}
              className="mx-auto mb-8"
            />
            <p className="text-xl md:text-2xl mb-8 text-fernanda-gold">
            São José ficou tempo demais de costas para o mar
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-fernanda-gold text-fernanda-gold hover:bg-fernanda-gold/10"
              asChild
            >
              <Link
                href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20D/VERT.`}
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
            <AboutFernanda empreendimento="D/VERT" />
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
                Bem-vindo ao D/VERT
              </h2>
              <p className="text-gray-600 mb-6">
              O D/VERT é um empreendimento preocupado com sustentabilidade, que une natureza e conforto, oferecendo uma experiência única de moradia em harmonia com o meio ambiente.<br></br>
              Com espaços amplos, abertos e áreas verdes integradas, o D/VERT proporciona qualidade de vida e bem-estar para você e sua família.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Áreas de lazer que proporcionam qualidade de vida</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Áreas verdes e jardins integrados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Eficiência energética e aproveitamento de água</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Lazer e convivência em ambientes naturais</span>
                </li>
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/dvert/dvert (3).webp"
                alt="Perspectiva D'VERT"
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

      {/* Fale agora no WhatsApp */}
      <div className="py-20 container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-16 text-center relative">
            <span className="border-b-2 border-fernanda-gold pb-2 px-4">FALE AGORA NO WHATSAPP</span>
          </h2>
        </FadeInSection>

        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <p className="text-xl mb-8">
              Converse diretamente com a corretora Fernanda e tire todas as suas dúvidas sobre o D/VERT.
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white py-6 px-8 text-lg rounded-lg flex items-center gap-2 mx-auto shadow-md transition-transform hover:scale-105"
              asChild
            >
              <Link
                href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20D/VERT.`}
                target="_blank"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  className="fill-current mr-2"
                >
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345" />
                  <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
                Falar no WhatsApp agora
              </Link>
            </Button>
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
                  Localização Integrada à Natureza
                </h3>
                <p className="text-gray-600 mb-6">
                  O D/VERT está localizado em uma área privilegiada, 
                  próximo à Beira-Mar de São José, com fácil acesso a todos os 
                  serviços essenciais e principais vias da região.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <MapPin className="text-fernanda-gold" />
                    <span>Próximo a parques e áreas de preservação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="text-fernanda-gold" />
                    <span>Acesso fácil ao comércio e serviços</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="text-fernanda-gold" />
                    <span>Bem conectado às principais vias da cidade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="text-fernanda-gold" />
                    <span>Região com crescente valorização imobiliária</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="relative h-[400px] w-full overflow-hidden mb-6 rounded-lg shadow-md">
                <Image
                  src="/images/dvert/localização.png"
                  alt="Localização D'VERT"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Diferenciais */}
      <div id="features" ref={featuresRef} className="py-20 container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-16 text-center relative">
            <span className="border-b-2 border-fernanda-gold pb-2 px-4">DIFERENCIAIS</span>
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeInSection key={index}>
              <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
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
          <FormContact empreendimento="D/VERT" whatsappNumber={whatsappNumber} />
        </FadeInSection>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} D/VERT. Todos os direitos reservados. 
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