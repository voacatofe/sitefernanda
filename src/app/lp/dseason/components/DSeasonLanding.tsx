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

interface DSeasonLandingProps {
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

export function DSeasonLanding({
  galleryImages,
  floorPlans,
  features,
  whatsappNumber,
}: DSeasonLandingProps) {
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
  const whatsappRef = useRef<HTMLDivElement>(null);
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
              onClick={() => scrollToSection(whatsappRef)}
            >
              CONTATO WHATSAPP
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
        {/* Vídeo de fundo do hero */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/dseason/background-lp.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/dseason/logo.png"
              alt="D'SEASON"
              width={300}
              height={100}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Viva cada estação com estilo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-fernanda-gold">
              Conforto, sofisticação e qualidade de vida
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-fernanda-gold text-fernanda-gold hover:bg-fernanda-gold/10"
              asChild
            >
              <Link
                href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20D/SEASON.`}
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
            <AboutFernanda empreendimento="D/SEASON" />
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
                Bem-vindo ao D/SEASON
              </h2>
              <p className="text-gray-600 mb-6">
                O D/SEASON Residence Club é um empreendimento inovador projetado para 
                oferecer o melhor do estilo de vida resort com a praticidade da vida urbana.
                <br></br><br></br>
                Com uma localização privilegiada e vista para o mar, o D/SEASON 
                proporciona uma experiência única de moradia, combinando sofisticação, 
                conforto e lazer em um só lugar.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Apartamentos com plantas versáteis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Áreas de lazer completas e bem distribuídas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Espaços integrados para convivência</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-fernanda-gold" />
                  <span>Tecnologia e segurança em cada detalhe</span>
                </li>
              </ul>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/images/dseason/Ativo13.png"
                alt="Fachada D'SEASON"
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

      {/* Seção de WhatsApp */}
      <div id="whatsapp" ref={whatsappRef} className="py-20 container mx-auto px-4">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-16 text-center relative">
            <span className="border-b-2 border-fernanda-gold pb-2 px-4">FALE PELO WHATSAPP</span>
          </h2>
        </FadeInSection>

        <div className="flex flex-col items-center justify-center text-center">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-fernanda-gold">
                Tire suas dúvidas diretamente pelo WhatsApp
              </h3>
              <p className="text-gray-600 mb-10 text-lg">
                Converse diretamente com a nossa equipe de vendas e descubra todos os detalhes sobre o D/SEASON. 
                Estamos prontos para atender você e ajudar a encontrar a melhor opção de investimento.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl h-auto"
                asChild
              >
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=Olá%20Fernanda,%20gostaria%20de%20mais%20informações%20sobre%20o%20D/SEASON.`}
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <svg 
                    viewBox="0 0 32 32" 
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M16.004 0h-.008C7.174 0 .004 7.17.004 16c0 3.097.879 5.99 2.4 8.444L.688 30.35l6.094-1.75a15.96 15.96 0 0 0 9.214 2.898h.008c8.822 0 15.996-7.17 15.996-16S24.826 0 16.004 0zm-5.498 12.879a1.9 1.9 0 0 1 1.889-1.889c.86 0 1.889.576 1.889 1.889s-1.1 2.186-2.141 2.186a1.819 1.819 0 0 1-1.637-2.186zm9.58 7.525c-2.065 0-4.37-1.889-6.509-1.889-.852 0-1.683.23-2.349.5-.86.352-1.514.537-2.349.537-.983 0-1.697-.46-1.697-.46l2.603-3.256s1.474.59 1.474-.132-.59-2.141-.59-2.141 1.308-.133 2.074-.354c.765-.222 1.661-.722 2.602-.722 1.339 0 2.095.943 2.095 2.282 0 1.339-.943 2.118-2.095 2.118-1.151 0-1.736-.59-1.736-1.339 0-.624.501-1.072.501-1.072s1.107-.428 1.107-1.072c0-.459-.265-.765-.765-.765s-1.339.826-1.339 2.141c0 1.339 1.185 2.236 2.818 2.236s3.444-1.041 3.444-3.066c0-2.024-1.224-3.151-3.632-3.151s-4.681 1.469-4.681 1.469l-.544-1.081s2.26-1.889 5.695-1.889 5.853 1.983 5.853 5.16-2.603 5.086-4.88 5.086z" />
                  </svg>
                  Falar com a corretora
                </Link>
              </Button>
            </div>
          </FadeInSection>
          
          <FadeInSection className="mt-16">
            <div className="relative w-full max-w-md mx-auto h-80">
              <Image
                src="/images/dseason/whatsapp-mockup.png"
                alt="Atendimento pelo WhatsApp"
                fill
                className="object-contain"
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
                  Localização Privilegiada
                </h3>
                <p className="text-gray-600 mb-6">
                  O D/SEASON está localizado em uma área privilegiada, 
                  com vista para o mar e fácil acesso às principais atrações da cidade.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center gap-2">
                    <MapPin className="text-fernanda-gold" />
                    <span>Proximidade a centros comerciais e serviços</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Building className="text-fernanda-gold" />
                    <span>Região com excelente infraestrutura urbana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="text-fernanda-gold" />
                    <span>Conectividade com as principais vias da cidade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="text-fernanda-gold" />
                    <span>Área com grande potencial de valorização</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="relative h-[400px] w-full overflow-hidden mb-6 rounded-lg shadow-md">
                <Image
                  src="/images/dseason/localização.png"
                  alt="Localização D'SEASON"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Acabamento alto padrão */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Acabamento alto padrão</h3>
                <p className="text-gray-600 text-center">
                  Áreas comuns entregues mobiliadas e finamente decoradas. <br />Materiais e acabamentos de alto padrão em todo o projeto.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Churrasqueira a carvão */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 19h12M6 16h12M9 8v4m6-4v4M4 4h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Churrasqueira a carvão</h3>
                <p className="text-gray-600 text-center">
                  Varandas amplas, abertas com churrasqueira a carvão.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Localização */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Localização</h3>
                <p className="text-gray-600 text-center">
                  Localização privilegiada próximo ao Centro e praias do norte da ilha.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Piscina */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 20c1.333-1.333 2.667-2 4-2s2.667.667 4 2 2.667-2 4-2 2.667.667 4 2" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Piscina</h3>
                <p className="text-gray-600 text-center">
                  3 Piscinas com design moderno e área de relaxamento
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Academia */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm2 12v-2a4 4 0 0 1 8 0v2M4 18v-2a4 4 0 0 1 8 0v2" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Academia</h3>
                <p className="text-gray-600 text-center">
                  Academia completa com vista mar
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Garagem */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 13v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2M5 19h14a2 2 0 0 0 2-2v-4H3v4a2 2 0 0 0 2 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Garagem</h3>
                <p className="text-gray-600 text-center">
                  Vagas de garagem com espera para carregadores de carros elétricos + hobbybox.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Trapiche e Espaço náutico */}
          <FadeInSection>
            <Card className="bg-white border-gray-200 shadow-md h-full hover:border-fernanda-gold/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-fernanda-gold mb-4 flex justify-center items-center h-12">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 20h20M12 4v16M7 8l5-4 5 4" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Trapiche e Espaço náutico</h3>
                <p className="text-gray-600 text-center">
                  O empreendimento terá um trapiche e espaço náutico com caiaques e Stand Up Paddle de uso compartilhado.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>
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
          <FormContact empreendimento="D/SEASON" whatsappNumber={whatsappNumber} />
        </FadeInSection>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} D'SEASON. Todos os direitos reservados. 
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