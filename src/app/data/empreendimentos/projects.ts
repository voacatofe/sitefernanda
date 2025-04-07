import { Project } from "./types"

export const projectsData: Record<string, Project> = {
  dverse: {
    title: "D'VERSE",
    tagline: "Viva a sofisticação e a beleza natural da Praia Brava",
    description: "O D'VERSE é um empreendimento que redefine o conceito de moradia de alto padrão. Com arquitetura contemporânea e acabamentos premium, oferece apartamentos espaçosos e ambientes pensados para proporcionar conforto e exclusividade.",
    longDescription: "Localizado em uma área privilegiada, o D'VERSE combina sofisticação, tecnologia e sustentabilidade. Cada detalhe foi cuidadosamente planejado para atender às expectativas dos clientes mais exigentes. Um projeto assinado pelos melhores arquitetos e designers, que traz o que há de mais moderno em termos de construção e acabamento.",
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
      description: "O D'VERSE está localizado em uma área privilegiada, com fácil acesso às principais vias da cidade e próximo a diversos serviços e conveniências.",
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
    fernandasNotes: "O D'VERSE é perfeito para quem busca exclusividade e sofisticação. A localização privilegiada e os acabamentos de alto padrão fazem deste empreendimento uma excelente opção para investimento ou moradia.",
    status: "lancamento",
    type: "residencial",
    address: {
      street: "Av. Beira Mar",
      number: "1000",
      neighborhood: "Praia Brava",
      city: "Itajaí",
      state: "SC",
      zipCode: "88306-000",
      coordinates: {
        lat: -26.9433,
        lng: -48.6367
      }
    }
  },
  dseason: {
    title: "D'SEASON",
    tagline: "Viva cada estação com estilo",
    description: "O D'SEASON é um empreendimento que celebra a mudança das estações com espaços versáteis e elegantes. Projetado para proporcionar conforto durante todo o ano.",
    longDescription: "Com uma arquitetura que privilegia a iluminação natural e a ventilação cruzada, o D'SEASON oferece ambientes que se adaptam perfeitamente a cada estação do ano. Os apartamentos foram pensados para proporcionar o máximo de conforto térmico e acústico.",
    features: [
      { title: "Apartamentos", description: "De 100 a 180m² com 2 e 3 suítes" },
      { title: "Lazer", description: "Áreas cobertas e descobertas" },
      { title: "Localização", description: "Vista privilegiada para o mar" },
      { title: "Entrega", description: "Previsão para Março/2025" },
    ],
    gallery: Array(6).fill("/images/dseason/dseason.jpg"),
    heroImage: "/images/dseason/dseason.jpg",
    mainImage: "/images/dseason/dseason.jpg",
    additionalImages: ["/images/dseason/dseason.jpg", "/images/dseason/dseason.jpg"],
    floorplans: [
      {
        title: "Apartamento 100m²",
        description: "2 suítes, living integrado e varanda gourmet.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 180m²",
        description: "3 suítes, home office e varanda panorâmica.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description: "O D'SEASON está localizado em uma área nobre, com vista privilegiada para o mar e fácil acesso às principais atrações da cidade.",
      nearby: [
        { time: "5min", place: "Praia", description: "Acesso direto à praia" },
        { time: "10min", place: "Centro Gastronômico", description: "Diversos restaurantes e cafés" },
        { time: "15min", place: "Shopping", description: "Principal centro de compras da região" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Vista para o Mar", description: "Apartamentos com vista panorâmica" },
      { title: "Piscina Climatizada", description: "Lazer durante todo o ano" },
      { title: "Spa", description: "Área de relaxamento completa" },
      { title: "Academia", description: "Equipamentos de última geração" },
      { title: "Lounge Gourmet", description: "Espaço para eventos e confraternizações" },
      { title: "Beach Service", description: "Serviço exclusivo de praia" },
    ],
    fernandasNotes: "O D'SEASON é ideal para quem valoriza qualidade de vida e contato com a natureza. A vista privilegiada e os espaços bem planejados tornam cada momento especial.",
    status: "construcao",
    type: "residencial",
    address: {
      street: "Av. Atlântica",
      number: "2000",
      neighborhood: "Centro",
      city: "Balneário Camboriú",
      state: "SC",
      zipCode: "88330-000",
      coordinates: {
        lat: -26.9901,
        lng: -48.6337
      }
    }
  },
  dsense: {
    title: "D'SENSE",
    tagline: "Onde estilo, me sinto em casa",
    description: "O D'SENSE é um empreendimento que valoriza o estilo e o conforto. Com design contemporâneo e áreas de lazer completas, oferece apartamentos funcionais e bem distribuídos.",
    longDescription: "O D'SENSE foi projetado para proporcionar uma experiência única de moradia. Cada detalhe foi pensado para estimular os sentidos e criar ambientes que combinam funcionalidade e sofisticação. Um projeto que traduz o conceito de bem-estar em cada metro quadrado.",
    features: [
      { title: "Apartamentos", description: "De 90 a 150m² com 2 e 3 suítes" },
      { title: "Lazer", description: "Áreas de convivência e bem-estar" },
      { title: "Localização", description: "Região central com fácil acesso" },
      { title: "Entrega", description: "Previsão para Junho/2025" },
    ],
    gallery: Array(6).fill("/images/dsense/dsense.jpg"),
    heroImage: "/images/dsense/dsense.jpg",
    mainImage: "/images/dsense/dsense.jpg",
    additionalImages: ["/images/dsense/dsense.jpg", "/images/dsense/dsense.jpg"],
    floorplans: [
      {
        title: "Apartamento 90m²",
        description: "2 suítes, living integrado e varanda gourmet.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 150m²",
        description: "3 suítes, home office, living ampliado e varanda gourmet.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description: "O D'SENSE está localizado em uma região central, com fácil acesso a todos os pontos da cidade e próximo aos principais centros comerciais e de entretenimento.",
      nearby: [
        { time: "5min", place: "Centro Comercial", description: "Acesso rápido às principais lojas e serviços" },
        { time: "10min", place: "Restaurantes", description: "Diversas opções gastronômicas na região" },
        { time: "15min", place: "Parque da Cidade", description: "Área de lazer com pista de caminhada" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Design Único", description: "Projeto arquitetônico exclusivo com acabamentos diferenciados" },
      { title: "Espaços Zen", description: "Áreas de relaxamento e meditação" },
      { title: "Smart Home", description: "Preparação completa para automação residencial" },
      { title: "Spa Urbano", description: "Espaço de bem-estar com serviços exclusivos" },
      { title: "Coworking", description: "Espaço compartilhado para trabalho e reuniões" },
      { title: "Bike Sharing", description: "Sistema de compartilhamento de bicicletas" },
    ],
    fernandasNotes: "O D'SENSE traz uma proposta inovadora de moradia, com ambientes que estimulam os sentidos e proporcionam uma experiência única.",
    status: "construcao",
    type: "residencial",
    address: {
      street: "Rua Brasil",
      number: "500",
      neighborhood: "Centro",
      city: "Balneário Camboriú",
      state: "SC",
      zipCode: "88330-000",
      coordinates: {
        lat: -26.9901,
        lng: -48.6337
      }
    }
  },
  dvert: {
    title: "D'VERT",
    tagline: "Viver que transforma",
    description: "O D'VERT é um empreendimento que valoriza a integração com a natureza. Com design contemporâneo e áreas verdes, oferece apartamentos funcionais e bem distribuídos.",
    longDescription: "O D'VERT representa uma nova forma de viver em harmonia com a natureza. Com amplas áreas verdes e um projeto sustentável, o empreendimento oferece uma experiência única de conexão com o meio ambiente sem abrir mão do conforto e da modernidade.",
    features: [
      { title: "Apartamentos", description: "De 85 a 140m² com 2 e 3 suítes" },
      { title: "Áreas Verdes", description: "Mais de 5.000m² de área verde" },
      { title: "Localização", description: "Próximo a parques e áreas de preservação" },
      { title: "Entrega", description: "Previsão para Março/2025" },
    ],
    gallery: Array(6).fill("/images/dvert/dvert.jpg"),
    heroImage: "/images/dvert/dvert.jpg",
    mainImage: "/images/dvert/dvert.jpg",
    additionalImages: ["/images/dvert/dvert.jpg", "/images/dvert/dvert.jpg"],
    floorplans: [
      {
        title: "Apartamento 85m²",
        description: "2 suítes, varanda verde e living integrado.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 140m²",
        description: "3 suítes, varanda ampla com jardim vertical e living estendido.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description: "O D'VERT está localizado em uma área privilegiada, cercado por parques e áreas de preservação, proporcionando qualidade de vida em meio à natureza.",
      nearby: [
        { time: "5min", place: "Parque Natural", description: "Área de preservação com trilhas ecológicas" },
        { time: "10min", place: "Centro de Conveniências", description: "Mercados e serviços essenciais" },
        { time: "15min", place: "Centro da Cidade", description: "Fácil acesso à região central" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Jardins Verticais", description: "Paredes verdes e jardins suspensos" },
      { title: "Horta Comunitária", description: "Espaço para cultivo de orgânicos" },
      { title: "Energia Solar", description: "Sistema de energia fotovoltaica" },
      { title: "Reúso de Água", description: "Sistema de captação e reúso de água da chuva" },
      { title: "Coleta Seletiva", description: "Sistema completo de reciclagem" },
      { title: "Mobilidade Verde", description: "Estações de recarga para carros elétricos" },
    ],
    fernandasNotes: "O D'VERT é perfeito para quem busca uma conexão com a natureza sem abrir mão do conforto urbano. As áreas verdes e a arquitetura sustentável fazem deste empreendimento uma escolha consciente e sofisticada.",
    status: "construcao",
    type: "residencial",
    address: {
      street: "Rua das Palmeiras",
      number: "750",
      neighborhood: "Garcia",
      city: "Blumenau",
      state: "SC",
      zipCode: "89021-200",
      coordinates: {
        lat: -26.9147,
        lng: -49.0716
      }
    }
  },
  dyard: {
    title: "D'YARD",
    tagline: "Seu espaço ao ar livre",
    description: "O D'YARD é um empreendimento que celebra a vida ao ar livre. Com amplas áreas de lazer e jardins, oferece um estilo de vida conectado com a natureza.",
    longDescription: "Projetado para quem valoriza momentos ao ar livre, o D'YARD oferece espaços generosos e integrados com a natureza. Os apartamentos foram pensados para proporcionar uma experiência única de moradia, com áreas verdes e de convivência que estimulam o bem-estar.",
    features: [
      { title: "Apartamentos", description: "De 95 a 160m² com 2 e 3 suítes" },
      { title: "Áreas Comuns", description: "Mais de 3.000m² de lazer" },
      { title: "Localização", description: "Região tranquila e arborizada" },
      { title: "Entrega", description: "Previsão para Julho/2025" },
    ],
    gallery: Array(6).fill("/images/dyard/dyard.jpg"),
    heroImage: "/images/dyard/dyard.jpg",
    mainImage: "/images/dyard/dyard.jpg",
    additionalImages: ["/images/dyard/dyard.jpg", "/images/dyard/dyard.jpg"],
    floorplans: [
      {
        title: "Apartamento 95m²",
        description: "2 suítes, varanda ampla e living integrado.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 160m²",
        description: "3 suítes, terraço jardim e espaço gourmet.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description: "O D'YARD está localizado em uma área residencial tranquila, próximo a parques e com fácil acesso ao centro da cidade.",
      nearby: [
        { time: "5min", place: "Parque Municipal", description: "Área verde com equipamentos de lazer" },
        { time: "10min", place: "Supermercado", description: "Principais redes de supermercados" },
        { time: "15min", place: "Shopping", description: "Centro de compras e entretenimento" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Praça Central", description: "Área de convivência com paisagismo" },
      { title: "Playground Natural", description: "Brinquedos integrados à natureza" },
      { title: "Pomar", description: "Árvores frutíferas e ervas aromáticas" },
      { title: "Pet Place", description: "Espaço dedicado aos animais de estimação" },
      { title: "Quadra Poliesportiva", description: "Espaço para diversas modalidades" },
      { title: "Churrasqueira", description: "Área gourmet com vista para o jardim" },
    ],
    fernandasNotes: "O D'YARD é ideal para famílias que valorizam o contato com a natureza e momentos de lazer ao ar livre. A infraestrutura completa e os espaços bem planejados proporcionam qualidade de vida única.",
    status: "breve-lancamento",
    type: "residencial",
    address: {
      street: "Rua das Flores",
      number: "300",
      neighborhood: "Jardim América",
      city: "Balneário Camboriú",
      state: "SC",
      zipCode: "88330-000",
      coordinates: {
        lat: -26.9901,
        lng: -48.6337
      }
    }
  },
  dnex: {
    title: "D'NEX",
    tagline: "O próximo nível em moradia",
    description: "O D'NEX representa o futuro da moradia inteligente. Com tecnologia de ponta e design inovador, oferece uma experiência única de vida conectada.",
    longDescription: "Pensado para atender às demandas do futuro, o D'NEX combina tecnologia, sustentabilidade e conforto. Cada apartamento é equipado com o que há de mais moderno em automação residencial, proporcionando uma experiência de moradia verdadeiramente inteligente.",
    features: [
      { title: "Apartamentos", description: "De 75 a 130m² com 2 e 3 dormitórios" },
      { title: "Tecnologia", description: "100% automatizado" },
      { title: "Localização", description: "Região em desenvolvimento" },
      { title: "Entrega", description: "Previsão para Outubro/2025" },
    ],
    gallery: Array(6).fill("/images/dnex/dnex.jpg"),
    heroImage: "/images/dnex/dnex.jpg",
    mainImage: "/images/dnex/dnex.jpg",
    additionalImages: ["/images/dnex/dnex.jpg", "/images/dnex/dnex.jpg"],
    floorplans: [
      {
        title: "Apartamento 75m²",
        description: "2 dormitórios, escritório e varanda tecnológica.",
        image: "/placeholder.svg?height=800&width=1000",
      },
      {
        title: "Apartamento 130m²",
        description: "3 dormitórios, sala multimídia e varanda gourmet.",
        image: "/placeholder.svg?height=800&width=1000",
      },
    ],
    location: {
      description: "O D'NEX está localizado em uma área em pleno desenvolvimento, com projetos de infraestrutura e mobilidade em andamento.",
      nearby: [
        { time: "5min", place: "Estação de Transporte", description: "Hub de mobilidade integrada" },
        { time: "10min", place: "Centro Tecnológico", description: "Polo de empresas de tecnologia" },
        { time: "15min", place: "Universidade", description: "Principal campus universitário" },
      ],
      mapImage: "/placeholder.svg?height=800&width=800",
    },
    differentials: [
      { title: "Smart Home", description: "Sistema integrado de automação" },
      { title: "Coworking", description: "Espaços de trabalho compartilhado" },
      { title: "Internet 5G", description: "Conexão de alta velocidade em todo o prédio" },
      { title: "Sala de Games", description: "Espaço gamer com equipamentos de última geração" },
      { title: "Cinema", description: "Sala de projeção com tecnologia 4K" },
      { title: "Laboratório Maker", description: "Espaço para criação e inovação" },
    ],
    fernandasNotes: "O D'NEX é perfeito para quem busca uma moradia moderna e conectada. A combinação de tecnologia e conforto faz deste empreendimento uma escolha única para o futuro.",
    status: "breve-lancamento",
    type: "residencial",
    address: {
      street: "Av. Tecnológica",
      number: "1000",
      neighborhood: "Pioneiros",
      city: "Balneário Camboriú",
      state: "SC",
      zipCode: "88330-000",
      coordinates: {
        lat: -26.9901,
        lng: -48.6337
      }
    }
  }
} 