import { DSenseLanding } from './components/DSenseLanding';
import { Building2, Home, Waves, Sun, Dumbbell, Coffee, Car, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/contact';

const galleryImages = [
  { src: "/images/dsense/dsense.jpg", alt: "Fachada D'SENSE" },
  { src: "/images/dsense/FSC_01_Fachada A_EF2.jpg", alt: "Fachada Principal D'SENSE" },
  { src: "/images/dsense/FSC_02_Fachada B_EF2.jpg", alt: "Fachada B D'SENSE" },
  { src: "/images/dsense/FSC_03_Embasamento_EF2.jpg", alt: "Embasamento D'SENSE" },
  { src: "/images/dsense/FSC_05_Detalhe Arquitetura_EF.jpg", alt: "Detalhe Arquitetura D'SENSE" },
  { src: "/images/dsense/FSC_06_ Playground Externo_EF.jpg", alt: "Playground Externo D'SENSE" },
  { src: "/images/dsense/FSC_07_Churrasqueiras_EF.jpg", alt: "Churrasqueiras D'SENSE" },
  { src: "/images/dsense/FSC_10_ Piscina Rooftop_EF3.jpg", alt: "Piscina Rooftop D'SENSE" },
  { src: "/images/dsense/FSC_11_Jardim_PetPlace_EF.jpg", alt: "Jardim Pet Place D'SENSE" },
  { src: "/images/dsense/FSC_12_ Spa  Massagem_EF.jpg", alt: "Spa e Massagem D'SENSE" },
  { src: "/images/dsense/FSC_13_Academia_EF.jpg", alt: "Academia D'SENSE" },
  { src: "/images/dsense/FSC_14_ Hall_com_Pe_Direito_Duplo_EF2.jpg", alt: "Hall com Pé Direito Duplo D'SENSE" },
  { src: "/images/dsense/FSC_15_Coworking_EF.jpg", alt: "Coworking D'SENSE" },
  { src: "/images/dsense/FSC_16_Brinquedoteca_EF.jpg", alt: "Brinquedoteca D'SENSE" },
  { src: "/images/dsense/FSC_17_Sports_Bar_EF.jpg", alt: "Sports Bar D'SENSE" },
];

const floorPlans = [
  {
    id: "1",
    name: "Apartamento com 3 Suítes",
    image: "/images/dsense/3 suites - 175,60m².png",
    description: "3 suítes | 175,60m² de área privativa | Varanda gourmet"
  },
  {
    id: "2",
    name: "Apartamento com 4 Suítes",
    image: "/images/dsense/4 suites - 219,80m².png",
    description: "4 suítes | 219,80m² de área privativa | Varanda gourmet"
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
    title: "Lazer Completo",
    description: "Áreas de lazer diversificadas para todas as idades"
  },
  {
    icon: <Waves size={32} />,
    title: "Piscina Rooftop",
    description: "Piscina no rooftop com vista privilegiada da cidade"
  },
  {
    icon: <Sun size={32} />,
    title: "Spa e Bem-estar",
    description: "Espaço de spa com salas de massagem e área de relaxamento"
  },
  {
    icon: <Dumbbell size={32} />,
    title: "Academia Completa",
    description: "Academia com equipamentos modernos e espaço para diversas atividades"
  },
  {
    icon: <Coffee size={32} />,
    title: "Coworking",
    description: "Espaço de coworking para trabalho e reuniões"
  },
  {
    icon: <Car size={32} />,
    title: "Bike Sharing",
    description: "Sistema de compartilhamento de bicicletas para os moradores"
  },
  {
    icon: <Lock size={32} />,
    title: "Segurança 24h",
    description: "Sistema de segurança com monitoramento 24 horas por dia"
  }
];

export default function DSensePage() {
  return (
    <DSenseLanding
      galleryImages={galleryImages}
      floorPlans={floorPlans}
      features={features}
      whatsappNumber={WHATSAPP_NUMBER}
    />
  );
} 