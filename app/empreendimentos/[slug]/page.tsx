import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, Phone, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectContent from "./ProjectContent"

// Mock data for projects
const projectsData = {
  dverse: {
    title: "D'VERSE",
    tagline: "Viva a sofisticação e a beleza natural da Praia Brava",
    description:
      "O D'VERSE é um empreendimento que redefine o conceito de moradia de alto padrão. Com arquitetura contemporânea e acabamentos premium, oferece apartamentos espaçosos e ambientes pensados para proporcionar conforto e exclusividade.",
    longDescription:
      "Localizado em uma área privilegiada, o D'VERSE combina sofisticação, tecnologia e sustentabilidade. Cada detalhe foi cuidadosamente planejado para atender às expectativas dos clientes mais exigentes. Um projeto assinado pelos melhores arquitetos e designers, que traz o que há de mais moderno em termos de construção e acabamento.",
    features: [
      { title: "Apartamentos", description: "De 120 a 200m² com 3 e 4 suítes" },
      { title: "Lazer", description: "Completo com mais de 20 itens" },
      { title: "Localização", description: "Área nobre com fácil acesso" },
      { title: "Entrega", description: "Previsão para Dezembro/2025" },
    ],
    gallery: Array(6).fill("/images/dverse/dverse.jpg"),
    heroImage: "/images/dverse/dverse.jpg",
    mainImage: "/images/dverse/dverse.jpg",
    additionalImages: ["/images/dverse/dverse.jpg", "/images/dverse/dverse.jpg"],
    floorplans: [
      {
        title: "Apartamento 120m²",
        description: "3 suítes, living ampliado, varanda gourmet e cozinha integrada.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 200m²",
        description: "4 suítes, living ampliado, varanda gourmet, cozinha integrada e área de serviço.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description:
        "O D'VERSE está localizado em uma área privilegiada, com fácil acesso às principais vias da cidade e próximo a diversos serviços e conveniências.",
      nearby: [
        { time: "5min", place: "Shopping Center", description: "Fácil acesso ao principal shopping da região" },
        { time: "10min", place: "Parque Municipal", description: "Área verde para lazer e atividades ao ar livre" },
        { time: "15min", place: "Centro da Cidade", description: "Acesso rápido ao centro comercial e financeiro" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Segurança 24h", description: "Sistema de segurança completo com monitoramento 24 horas" },
      { title: "Área de Lazer", description: "Espaços de lazer completos para todas as idades" },
      { title: "Sustentabilidade", description: "Projeto com certificação de sustentabilidade e economia de recursos" },
      { title: "Automação", description: "Preparação para automação residencial em todos os ambientes" },
      { title: "Acabamento Premium", description: "Materiais de primeira linha e acabamentos sofisticados" },
      { title: "Vagas de Garagem", description: "Amplas vagas de garagem com espaço para visitantes" },
    ],
    fernandasNotes:
      "O D'VERSE é perfeito para quem busca exclusividade e sofisticação. A localização privilegiada e os acabamentos de alto padrão fazem deste empreendimento uma excelente opção para investimento ou moradia. Recomendo especialmente para famílias que valorizam espaço e conforto.",
  },
  dseason: {
    title: "D'SEASON",
    tagline: "O primeiro resort urbano Dimas",
    description:
      "O D'SEASON é um empreendimento que valoriza o equilíbrio entre conforto e elegância. Com design contemporâneo e áreas de lazer completas, oferece apartamentos funcionais e bem distribuídos.",
    longDescription:
      "Localizado em uma região em pleno desenvolvimento, o D'SEASON combina praticidade, conforto e estilo. Cada ambiente foi pensado para proporcionar bem-estar e qualidade de vida. Um projeto que atende às necessidades da família moderna, com espaços versáteis e acabamentos de qualidade.",
    features: [
      { title: "Apartamentos", description: "De 80 a 120m² com 2 e 3 dormitórios" },
      { title: "Lazer", description: "Áreas de lazer completas para toda família" },
      { title: "Localização", description: "Região em desenvolvimento com infraestrutura completa" },
      { title: "Entrega", description: "Previsão para Junho/2025" },
    ],
    gallery: Array(6).fill("/images/dseason/dseason.jpg"),
    heroImage: "/images/dseason/dseason.jpg",
    mainImage: "/images/dseason/dseason.jpg",
    additionalImages: ["/images/dseason/dseason.jpg", "/images/dseason/dseason.jpg"],
    floorplans: [
      {
        title: "Apartamento 80m²",
        description: "2 dormitórios, living, varanda e cozinha americana.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 120m²",
        description: "3 dormitórios (1 suíte), living ampliado, varanda e cozinha integrada.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description:
        "O D'SEASON está localizado em uma região em pleno desenvolvimento, com fácil acesso às principais vias da cidade e próximo a diversos serviços e conveniências.",
      nearby: [
        { time: "5min", place: "Shopping Center", description: "Fácil acesso ao principal shopping da região" },
        { time: "10min", place: "Parque Municipal", description: "Área verde para lazer e atividades ao ar livre" },
        { time: "15min", place: "Centro da Cidade", description: "Acesso rápido ao centro comercial e financeiro" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Segurança 24h", description: "Sistema de segurança completo com monitoramento 24 horas" },
      { title: "Área de Lazer", description: "Espaços de lazer completos para todas as idades" },
      { title: "Sustentabilidade", description: "Projeto com certificação de sustentabilidade e economia de recursos" },
      { title: "Automação", description: "Preparação para automação residencial em todos os ambientes" },
      { title: "Acabamento Premium", description: "Materiais de primeira linha e acabamentos sofisticados" },
      { title: "Vagas de Garagem", description: "Amplas vagas de garagem com espaço para visitantes" },
    ],
    fernandasNotes:
      "O D'SEASON é ideal para quem busca qualidade de vida e praticidade. As áreas de lazer são um diferencial, proporcionando uma experiência de resort sem sair de casa. Recomendo para casais jovens e famílias que valorizam momentos de lazer e convivência.",
  },
  dsense: {
    title: "D'SENSE",
    tagline: "Onde estilo, me sinto em casa",
    description:
      "O D'SENSE é um empreendimento que valoriza o estilo e o conforto. Com design contemporâneo e áreas de lazer completas, oferece apartamentos funcionais e bem distribuídos.",
    heroImage: "/images/dsense/dsense.jpg",
    fernandasNotes:
      "O D'SENSE traz uma proposta inovadora de moradia, com ambientes que estimulam os sentidos e proporcionam uma experiência única. Recomendo para pessoas que valorizam design e funcionalidade.",
  },
  dvert: {
    title: "D'VERT",
    tagline: "Viver que transforma",
    description:
      "O D'VERT é um empreendimento que valoriza a integração com a natureza. Com design contemporâneo e áreas verdes, oferece apartamentos funcionais e bem distribuídos.",
    heroImage: "/images/dvert/dvert.jpg",
    fernandasNotes:
      "O D'VERT é perfeito para quem busca uma conexão com a natureza sem abrir mão do conforto urbano. As áreas verdes e a arquitetura sustentável fazem deste empreendimento uma escolha consciente e sofisticada.",
  },
}

// Definir os tipos
type Props = {
  params: Promise<{
    slug: string
  }>
}

// Componente do servidor
export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params
  const project = projectsData[resolvedParams.slug as keyof typeof projectsData]

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Projeto não encontrado</div>
  }

  return <main className="min-h-screen bg-white pt-24">
    <ProjectContent project={project} />
  </main>
}

// Manter generateStaticParams como está
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }))
}

