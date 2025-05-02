import { DVerseLanding } from './components/DVerseLanding';
import { Building2, Home, Waves, Sun, Dumbbell, Coffee, Car, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/contact';

const galleryImages = [
  { src: "/images/dverse/dverse (1).webp", alt: "Fachada D'VERSE" },
  { src: "/images/dverse/dverse (2).webp", alt: "Piscina D'VERSE" },
  { src: "/images/dverse/dverse (3).webp", alt: "Lobby D'VERSE" },
  { src: "/images/dverse/dverse (4).webp", alt: "Vista D'VERSE" },
  { src: "/images/dverse/dverse (5).webp", alt: "Área de Lazer D'VERSE" },
  { src: "/images/dverse/dverse (6).webp", alt: "Espaço Gourmet D'VERSE" },
  { src: "/images/dverse/dverse (7).webp", alt: "Salão de Festas D'VERSE" },
  { src: "/images/dverse/dverse (8).webp", alt: "Academia D'VERSE" },
  { src: "/images/dverse/dverse (9).webp", alt: "Brinquedoteca D'VERSE" },
  { src: "/images/dverse/dverse (10).webp", alt: "Coworking D'VERSE" },
  { src: "/images/dverse/dverse (11).webp", alt: "Hall D'VERSE" },
  { src: "/images/dverse/dverse (12).webp", alt: "Garagem D'VERSE" },
  { src: "/images/dverse/dverse (13).webp", alt: "Churrasqueira D'VERSE" },
  { src: "/images/dverse/dverse (14).webp", alt: "Espaço Pet D'VERSE" },
  { src: "/images/dverse/dverse (15).webp", alt: "Playground D'VERSE" },
  { src: "/images/dverse/dverse (16).webp", alt: "Salão de Jogos D'VERSE" },
  { src: "/images/dverse/dverse (17).webp", alt: "Sala de Reunião D'VERSE" },
  { src: "/images/dverse/dverse (18).webp", alt: "Espaço Zen D'VERSE" },
  { src: "/images/dverse/dverse (19).webp", alt: "Vista Noturna D'VERSE" },
];

const floorPlans = [
  {
    id: "1",
    name: "Apartamento 102m²",
    image: "/images/dverse/102m².png",
    description: "2 suítes | 102m² de área privativa | Varanda gourmet"
  },
  {
    id: "2",
    name: "Apartamento 215m²",
    image: "/images/dverse/215m².png",
    description: "3 suítes | 215m² de área privativa | Varanda gourmet"
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
    description: "Espaço gourmet integrado com vista para o mar"
  },
  {
    icon: <Waves size={32} />,
    title: "Vista para o Mar",
    description: "Vista permanente para o mar em todas as unidades"
  },
  {
    icon: <Sun size={32} />,
    title: "Piscina",
    description: "Piscina com borda infinita e deck molhado"
  },
  {
    icon: <Dumbbell size={32} />,
    title: "Academia",
    description: "Academia completa com equipamentos de última geração"
  },
  {
    icon: <Coffee size={32} />,
    title: "Espaço Gourmet",
    description: "Área gourmet com churrasqueira e forno de pizza"
  },
  {
    icon: <Car size={32} />,
    title: "Garagem",
    description: "2 vagas de garagem por unidade"
  },
  {
    icon: <Lock size={32} />,
    title: "Segurança",
    description: "Sistema de segurança 24h com câmeras e controle de acesso"
  }
];

export default function DVersePage() {
  return (
    <DVerseLanding
      galleryImages={galleryImages}
      floorPlans={floorPlans}
      features={features}
      whatsappNumber={WHATSAPP_NUMBER}
    />
  );
} 