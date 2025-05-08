import { DNexLanding } from './components/DNexLanding';
import { Building2, Home, Waves, Sun, Dumbbell, Coffee, Car, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/contact';

const galleryImages = [
  { src: "/images/dnex/fachada1.jpg", alt: "Fachada D/NEX" },
  { src: "/images/dnex/17_DIMAS_DNEX_PISCINA.jpg", alt: "Piscina D/NEX" },
  { src: "/images/dnex/25_DIMAS_DNEX_HALL.jpg", alt: "Hall de Entrada D/NEX" },
  { src: "/images/dnex/08_DIMAS_DNEX_TERRACO.jpg", alt: "Terraço D/NEX" },
  { src: "/images/dnex/14_DIMAS_DNEX_ACADEMIA.jpg", alt: "Academia D/NEX" },
  { src: "/images/dnex/06_DIMAS_DNEX_FESTAS.jpg", alt: "Salão de Festas D/NEX" },
];

const floorPlans = [
  {
    id: "1",
    name: "Studio - 42m²",
    image: "/images/dnex/Studio - 42m².png",
    description: "Studio com 42m² de área privativa | Design moderno e funcional"
  },
  {
    id: "2",
    name: "Apartamento 2 Quartos - 78m²",
    image: "/images/dnex/2 quartos - 78m².png",
    description: "2 quartos | 78m² de área privativa | Varanda gourmet"
  }
  // Adicionar mais plantas conforme disponíveis
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

export default function DNexPage() {
  return (
    <DNexLanding
      galleryImages={galleryImages}
      floorPlans={floorPlans}
      features={features}
      whatsappNumber={WHATSAPP_NUMBER}
    />
  );
} 