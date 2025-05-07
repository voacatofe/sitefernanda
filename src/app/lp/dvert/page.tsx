import { DVertLanding } from './components/DVertLanding';
import { Building2, Home, Waves, Sun, Dumbbell, Coffee, Car, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/contact';

const galleryImages = [
  { src: "/images/dvert/dvert.webp", alt: "Fachada D/VERT" },
  { src: "/images/dvert/dvert (2).webp", alt: "Vista D/VERT" },
  { src: "/images/dvert/dvert (3).webp", alt: "Perspectiva D/VERT" },
  { src: "/images/dvert/dvert (4).webp", alt: "Área Comum D/VERT" },
  { src: "/images/dvert/dvert (5).webp", alt: "Detalhe D/VERT" },
  { src: "/images/dvert/dvert (6).webp", alt: "Espaço D/VERT" },
  { src: "/images/dvert/dvert (7).webp", alt: "Interior D/VERT" },
  { src: "/images/dvert/dvert (8).webp", alt: "Decoração D/VERT" },
  { src: "/images/dvert/dvert (9).webp", alt: "Acabamento D/VERT" },
  { src: "/images/dvert/dvert (10).webp", alt: "Lazer D/VERT" },
  { src: "/images/dvert/dvert (11).webp", alt: "Ambiente D/VERT" },
  { src: "/images/dvert/dvert (12).webp", alt: "Estrutura D/VERT" },
  { src: "/images/dvert/dvert (13).webp", alt: "Piscina D/VERT" },
  { src: "/images/dvert/dvert (14).webp", alt: "Área Social D/VERT" },
];

const floorPlans = [
  {
    id: "1",
    name: "Apartamento com 2 Suítes",
    image: "/images/dvert/2 suites - 84,32m².bmp",
    description: "2 suítes | 84,32m² de área privativa | Varanda gourmet"
  },
  {
    id: "2",
    name: "Apartamento com 3 Suítes",
    image: "/images/dvert/3 suites - 159,83m².bmp",
    description: "3 suítes | 159,83m² de área privativa | Ampla varanda"
  }
];

const features = [
  {
    icon: <Building2 size={32} />,
    title: "Sustentabilidade",
    description: "Projeto com certificação ambiental e eficiência energética"
  },
  {
    icon: <Home size={32} />,
    title: "Áreas Verdes",
    description: "Jardins integrados e espaços de convivência com a natureza"
  },
  {
    icon: <Waves size={32} />,
    title: "Piscina Natural",
    description: "Piscina com tratamento ecológico sem produtos químicos"
  },
  {
    icon: <Sun size={32} />,
    title: "Energia Solar",
    description: "Sistema de captação de energia solar para áreas comuns"
  },
  {
    icon: <Dumbbell size={32} />,
    title: "Academia Eco",
    description: "Academia com equipamentos sustentáveis e vista para o verde"
  },
  {
    icon: <Coffee size={32} />,
    title: "Horta Comunitária",
    description: "Espaço para cultivo de plantas e ervas orgânicas"
  },
  {
    icon: <Car size={32} />,
    title: "Mobilidade Verde",
    description: "Estações para carros elétricos e bicicletário"
  },
  {
    icon: <Lock size={32} />,
    title: "Segurança Inteligente",
    description: "Sistema de segurança eficiente com baixo consumo energético"
  }
];

export default function DVertPage() {
  return (
    <DVertLanding
      galleryImages={galleryImages}
      floorPlans={floorPlans}
      features={features}
      whatsappNumber={WHATSAPP_NUMBER}
    />
  );
} 