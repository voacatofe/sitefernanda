import { DSeasonLanding } from './components/DSeasonLanding';
import { Building2, Home, Waves, Sun, Dumbbell, Coffee, Car, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/contact';

const galleryImages = [
  { src: "/images/dseason/dseason.jpg", alt: "Fachada D'SEASON" },
  { src: "/images/dseason/MM-02.jpg", alt: "Perspectiva D'SEASON" },
  { src: "/images/dseason/Ativo 1.png", alt: "Vista D'SEASON" },
  { src: "/images/dseason/Ativo 2.png", alt: "Área Comum D'SEASON" },
  { src: "/images/dseason/Ativo 3.png", alt: "Espaço D'SEASON" },
  { src: "/images/dseason/Ativo 4.png", alt: "Detalhe D'SEASON" },
  { src: "/images/dseason/Ativo 5.png", alt: "Interior D'SEASON" },
  { src: "/images/dseason/Ativo 6.png", alt: "Decoração D'SEASON" },
  { src: "/images/dseason/Ativo 7.png", alt: "Ambiente D'SEASON" },
  { src: "/images/dseason/Ativo 8.png", alt: "Terraço D'SEASON" },
  { src: "/images/dseason/Ativo 9.png", alt: "Apartamento D'SEASON" },
  { src: "/images/dseason/Ativo 10.png", alt: "Sala D'SEASON" },
  { src: "/images/dseason/Ativo 11.png", alt: "Área de Lazer D'SEASON" },
  { src: "/images/dseason/Ativo 12.png", alt: "Piscina D'SEASON" },
  { src: "/images/dseason/Ativo 13.png", alt: "Lobby D'SEASON" },
  { src: "/images/dseason/Ativo 14.png", alt: "Espaço Gourmet D'SEASON" },
  { src: "/images/dseason/Ativo 15.png", alt: "Academia D'SEASON" },
];

const floorPlans = [
  {
    id: "1",
    name: "Apartamento com 3 Suítes",
    image: "/images/dseason/3 suites 157m².png",
    description: "3 suítes | 157m² de área privativa | Varanda gourmet"
  },
  {
    id: "2",
    name: "Apartamento com 4 Suítes",
    image: "/images/dseason/4 suites com 244m².png",
    description: "4 suítes | 244m² de área privativa | Varanda gourmet"
  }
];

const features = [
  {
    icon: <Building2 size={32} />,
    title: "Acabamento Premium",
    description: "Materiais de alta qualidade e acabamentos sofisticados em todos os ambientes"
  },
  {
    icon: <Home size={32} />,
    title: "Varanda Gourmet",
    description: "Espaço gourmet integrado com vista privilegiada"
  },
  {
    icon: <Waves size={32} />,
    title: "Localização",
    description: "Localização privilegiada próxima às principais atrações"
  },
  {
    icon: <Sun size={32} />,
    title: "Piscina",
    description: "Piscina com design moderno e área de relaxamento"
  },
  {
    icon: <Dumbbell size={32} />,
    title: "Academia",
    description: "Academia completa com equipamentos de última geração"
  },
  {
    icon: <Coffee size={32} />,
    title: "Espaço Gourmet",
    description: "Área gourmet com churrasqueira e espaço para eventos"
  },
  {
    icon: <Car size={32} />,
    title: "Garagem",
    description: "Vagas de garagem amplas para todos os apartamentos"
  },
  {
    icon: <Lock size={32} />,
    title: "Segurança",
    description: "Sistema de segurança 24h com câmeras e controle de acesso"
  }
];

export default function DSeasonPage() {
  return (
    <DSeasonLanding
      galleryImages={galleryImages}
      floorPlans={floorPlans}
      features={features}
      whatsappNumber={WHATSAPP_NUMBER}
    />
  );
} 