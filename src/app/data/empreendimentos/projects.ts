import { Project } from "./types"

export const projectsData: Record<string, Project> = {
  dverse: {
    title: "D/VERSE Beach Concept",
    tagline: "Viva a sofisticação e a beleza natural da Praia Brava",
    description: "O D/VERSE Beach Concept é o primeiro empreendimento de alto padrão da Dimas Construções na exclusiva Praia Brava. Com acesso limitado e poucos terrenos disponíveis ao redor, o condomínio oferece privacidade e tranquilidade à beira-mar.",
    longDescription: "Localizado na Praia Brava em Florianópolis, o D/VERSE combina sofisticação, tecnologia e sustentabilidade. Cada detalhe das áreas comuns foi projetado pelo renomado escritório Anastassiadis Arquitetura, garantindo ambientes sofisticados e acolhedores pensados para o bem-estar dos futuros moradores. Além disso, o empreendimento inclui um espaço gastronômico integrado ao nível da rua (acessível pela Av. Tom Traugott Wildi) que traz conveniência tanto para os residentes quanto para a comunidade local.",
    features: [
      { title: "Apartamentos", description: "De 2, 3 e 4 suítes, com metragens que variam de aproximadamente 102 m² a 366 m² de área privativa." },
      { title: "Lazer", description: "Completo, cobertura que inclui uma piscina com vista panorâmica do oceano, solário e sky lounge" },
      { title: "Localização", description: "A apenas 65 metros da areia da Praia Brava" },
      { title: "Entrega", description: "Previsão para Dezembro/2025" },
    ],
    gallery: [
      "/images/dverse/dverse (1).webp",
      "/images/dverse/dverse (2).webp",
      "/images/dverse/dverse (3).webp",
      "/images/dverse/dverse (4).webp",
      "/images/dverse/dverse (5).webp",
      "/images/dverse/dverse (6).webp",
      "/images/dverse/dverse (7).webp",
      "/images/dverse/dverse (8).webp",
      "/images/dverse/dverse (9).webp",
      "/images/dverse/dverse (10).webp",
      "/images/dverse/dverse (11).webp",
      "/images/dverse/dverse (12).webp",
      "/images/dverse/dverse (13).webp",
      "/images/dverse/dverse (14).webp",
      "/images/dverse/dverse (15).webp",
      "/images/dverse/dverse (16).webp",
      "/images/dverse/dverse (17).webp",
      "/images/dverse/dverse (18).webp",
      "/images/dverse/dverse (19).webp"
    ],
    heroImage: "/images/dverse/dverse.jpg",
    mainImage: "/images/dverse/dverse (1).webp",
    additionalImages: ["/images/dverse/dverse (2).webp", "/images/dverse/dverse (3).webp"],
    floorplans: [
      {
        title: "Apartamento 102m²",
        description: "2 suítes, living ampliado com cozinha integrada, sacada e área de serviço.",
        image: "/images/dverse/102m².png",
      },
      {
        title: "Apartamento 215m²",
        description: "4 suítes, living/jantar/cozinha integrados com 56m², sacada ampla com 23m² e área de serviço.",
        image: "/images/dverse/215m².png",
      },
    ],
    location: {
      description: "O D/VERSE está localizado em uma área privilegiada, com fácil acesso às principais vias da cidade e próximo a diversos serviços e conveniências.",
      mapImage: "/images/dverse/localização.png",
    },
    differentials: [
      { title: "Lazer na Cobertura", description: "Piscina com vista panorâmica do oceano, solário e sky lounge" },
      { title: "Áreas Comuns by Anastassiadis", description: "Projeto assinado pelo renomado escritório de arquitetura" },
      { title: "Garden Duplex", description: "Apartamentos no térreo com jardim privativo" },
      { title: "Primeira Cobertura Rooftop", description: "A primeira cobertura rooftop da Praia Brava" },
      { title: "Espaço Gastronômico", description: "Espaço gastronômico aberto ao público no térreo" },
      { title: "Sustentabilidade", description: "Reaproveitamento de água da chuva e energia fotovoltaica" },
    ],
    fernandasNotes: "O D/VERSE Beach Concept é perfeito para quem busca exclusividade e sofisticação à beira-mar. A localização privilegiada na Praia Brava e os acabamentos de alto padrão fazem deste empreendimento uma excelente opção para investimento ou segunda residência com atmosfera de refúgio.",
    status: "lancamento",
    type: "residencial",
    address: {
      street: "Av. Tom Traugott Wildi",
      number: "1000",
      neighborhood: "Praia Brava",
      city: "Florianópolis",
      state: "SC",
      zipCode: "88056-600",
      coordinates: {
        lat: -27.3933,
        lng: -48.4367
      }
    },
    salesMaterial: {
      title: "Catálogo Exclusivo D/VERSE",
      description: "Acesse nosso material completo com plantas, acabamentos, fotos e condições especiais para investidores.",
      fileUrl: "/materiais/Material de Introdução  -  Dverse.pdf"
    }
  },
  dseason: {
    title: "D/SEASON Residence Club",
    tagline: "O primeiro resort urbano de Florianópolis",
    description: "O D/SEASON Residence Club é um empreendimento de luxo concebido para ser o primeiro resort urbano da cidade. Projetado para proporcionar conforto e elegância durante todo o ano.",
    longDescription: "Localizado no bairro João Paulo, em Florianópolis, o D/SEASON harmoniza as conveniências da vida urbana com a tranquilidade e o lazer típicos de um resort de praia. Situado em um terreno elevado com vista panorâmica para o mar e para o pôr do sol mais deslumbrante da capital, o projeto foi desenhado para proporcionar uma experiência de vida equilibrada e prazerosa. Com arquitetura que privilegia a iluminação natural e a ventilação cruzada, oferece ambientes que se adaptam perfeitamente a cada estação do ano.",
    features: [
      { title: "Apartamentos", description: "De 2, 3 e 4 dormitórios (suítes) em configurações diversas" },
      { title: "Lazer", description: "infraestrutura de lazer completa digna dos melhores condomínios clube" },
      { title: "Localização", description: "Poucos minutos do Centro e vista para a Baía Norte" },
      { title: "Entrega", description: "Previsão para Outubro/2024" },
    ],
    gallery: [
      "/images/dseason/Ativo 1.png",
      "/images/dseason/Ativo 2.png",
      "/images/dseason/Ativo 3.png",
      "/images/dseason/Ativo 4.png",
      "/images/dseason/Ativo 5.png",
      "/images/dseason/Ativo 6.png",
      "/images/dseason/Ativo 7.png",
      "/images/dseason/Ativo 8.png",
      "/images/dseason/Ativo 9.png",
      "/images/dseason/Ativo 10.png",
      "/images/dseason/Ativo 11.png",
      "/images/dseason/Ativo 12.png",
      "/images/dseason/Ativo 13.png",
      "/images/dseason/Ativo 14.png",
      "/images/dseason/Ativo 15.png",
      "/images/dseason/Ativo 16.png",
      "/images/dseason/Ativo 17.png",
      "/images/dseason/Ativo 18.png",
      "/images/dseason/Ativo 19.png",
      "/images/dseason/Ativo 20.png",
      "/images/dseason/Ativo 21.png",
      "/images/dseason/Ativo 22.png",
      "/images/dseason/Ativo 23.png",
      "/images/dseason/Ativo 24.png"
    ],
    heroImage: "/images/dseason/dseason.jpg",
    mainImage: "/images/dseason/Ativo 1.png",
    additionalImages: ["/images/dseason/Ativo 2.png", "/images/dseason/Ativo 3.png"],
    floorplans: [
      {
        title: "Apartamento 157m²",
        description: "3 suítes, living integrado e varanda gourmet.",
        image: "/images/dseason/3 suites 157m².png",
      },
      {
        title: "Apartamento 244m²",
        description: "4 suítes, amplo living e varanda gourmet.",
        image: "/images/dseason/4 suites com 244m².png",
      },
    ],
    location: {
      description: "O D/SEASON está localizado em uma área nobre, com vista privilegiada para o mar e fácil acesso às principais atrações da cidade.",
      mapImage: "/images/dseason/localização.png",
    },
    differentials: [
      { title: "Vista para o Mar", description: "Apartamentos com vista panorâmica para a Baía Norte" },
      { title: "Complexo de Piscinas", description: "Piscinas externas com design orgânico e piscina interna aquecida" },
      { title: "Spa Completo", description: "Spa equipado com sauna seca, sala de massagem e área de descanso" },
      { title: "Infraestrutura de Resort", description: "Estrutura de lazer comparável a resorts cinco estrelas" },
      { title: "Praia Privativa", description: "Acesso exclusivo à baía com praia privativa e trapiche" },
      { title: "Equipamentos Náuticos", description: "Caiaques e pranchas de stand-up paddle disponíveis para os moradores" },
    ],
    fernandasNotes: "O D/SEASON Residence Club é ideal para quem valoriza qualidade de vida em um verdadeiro resort urbano. A vista privilegiada para a Baía Norte e a incrível infraestrutura de lazer fazem deste empreendimento uma experiência única, onde cada dia pode ser vivido como se estivesse em férias.",
    status: "construcao",
    type: "residencial",
    address: {
      street: "Rod. Haroldo Soares Glavan",
      number: "777",
      neighborhood: "João Paulo",
      city: "Florianópolis",
      state: "SC",
      zipCode: "88030-900",
      coordinates: {
        lat: -27.5601,
        lng: -48.5198
      }
    },
    salesMaterial: {
      title: "Catálogo Exclusivo D/SEASON",
      description: "Acesse nosso material completo com plantas, acabamentos, fotos e condições especiais para investidores.",
      fileUrl: "/materiais/Material de Introdução  - Dseason.pdf"
    }
  },
  dsense: {
    title: "D/SENSE Home Design",
    tagline: "Uma experiência única em Florianópolis",
    description: "O D/SENSE Home Design destaca-se como um empreendimento ícone no centro de Florianópolis, concebido para quem valoriza design, tecnologia e localização excepcional.",
    longDescription: "Localizado em frente ao Parque da Luz, uma extensa área verde ao lado da Ponte Hercílio Luz, o D/SENSE oferece a rara combinação de estar imerso na natureza e, ao mesmo tempo, conectado ao ritmo urbano. Com arquitetura contemporânea assinada por renomados profissionais (incluindo o escritório internacional Triptyque Architecture para o projeto arquitetônico e o paisagismo de Ricardo Cardim), o D/SENSE traz uma proposta de morar inovadora, pautada pelos princípios do design atemporal e da integração com a cidade. O D/SENSE já nasceu premiado: foi reconhecido internacionalmente em 2024 por harmonizar arquitetura moderna com a natureza local, recebendo honrarias como o Loop Design Award e o World Design Award.",
    features: [
      { title: "Apartamentos", description: "De 178 a 398m² com 3 e 4 suítes" },
      { title: "Torres", description: "Torre Parque e Torre Mar" },
      { title: "Localização", description: "Em frente ao Parque da Luz, ao lado da Ponte Hercílio Luz" },
      { title: "Certificação", description: "Fitwel - selo mundial de saúde e bem-estar" },
    ],
    gallery: [
      "/images/dsense/FSC_01_Fachada A_EF2.jpg",
      "/images/dsense/FSC_02_Fachada B_EF2.jpg",
      "/images/dsense/FSC_03_Embasamento_EF2.jpg",
      "/images/dsense/FSC_05_Detalhe Arquitetura_EF.jpg",
      "/images/dsense/FSC_06_ Playground Externo_EF.jpg",
      "/images/dsense/FSC_07_Churrasqueiras_EF.jpg",
      "/images/dsense/FSC_10_ Piscina Rooftop_EF3.jpg",
      "/images/dsense/FSC_11_Jardim_PetPlace_EF.jpg",
      "/images/dsense/FSC_12_ Spa  Massagem_EF.jpg",
      "/images/dsense/FSC_13_Academia_EF.jpg",
      "/images/dsense/FSC_14_ Hall_com_Pe_Direito_Duplo_EF2.jpg",
      "/images/dsense/FSC_15_Coworking_EF.jpg",
      "/images/dsense/FSC_16_Brinquedoteca_EF.jpg",
      "/images/dsense/FSC_17_Sports_Bar_EF.jpg",
      "/images/dsense/FSC_18_Piscina termica infantil_EF_v2.jpg",
      "/images/dsense/FSC_19_Game Room_EF.jpg",
      "/images/dsense/FSC_20_Guest House_EF.jpg",
      "/images/dsense/FSC_21_GourmetPub_EF.jpg",
      "/images/dsense/FSC_22_ Skybar_EF.jpg",
      "/images/dsense/FSC_23_Piscina Termica com Pe Direito Duplo_EF.jpg",
      "/images/dsense/FSC_24_Piscina Termica e Saunas_EF.jpg",
      "/images/dsense/FSC_25_Corredor_Caixas_Vidro_EF.jpg",
      "/images/dsense/FSC_26_Living_Torre_A_EF.jpg",
      "/images/dsense/FSC_27_Living_Torre_B_EF.jpg",
      "/images/dsense/FSC_28_Detalhe_Torre_B_EF2.jpg",
      "/images/dsense/FSC_29_Academia_B_EF.jpg",
      "/images/dsense/FSC_30_GourmetPub_B_EF.jpg",
      "/images/dsense/FSC_31_Skybar_Externo_EF2.jpg",
      "/images/dsense/FSC_32_Skybar_B_EF.jpg",
      "/images/dsense/FSC_33_Living Torre B_layout_EF.jpg"
    ],
    heroImage: "/images/dsense/FSC_01_Fachada A_EF2.jpg",
    mainImage: "/images/dsense/FSC_02_Fachada B_EF2.jpg",
    additionalImages: ["/images/dsense/FSC_03_Embasamento_EF2.jpg", "/images/dsense/FSC_05_Detalhe Arquitetura_EF.jpg"],
    floorplans: [
      {
        title: "Apartamento 90m²",
        description: "4 suítes, living integrado e varanda gourmet.",
        image: "/images/dsense/4 suites - 219,80m².png",
      },
      {
        title: "Apartamento 150m²",
        description: "3 suítes, Terraço, living ampliado e Banheira.",
        image: "/images/dsense/3 suites - 175,60m².png",
      },
    ],
    location: {
      description: "O D/SENSE está localizado em uma região central, com fácil acesso a toO D/Sense está situado na Rua Felipe Schmidt, no Centro de Florianópolis, em um ponto singular que faz fronteira entre o coração urbano e um refúgio verde. Em frente ao empreendimento encontra-se o Parque da Luz, um parque arborizado com mais de 30 mil m², repleto de trilhas, bosque de árvores frutíferas, campo de futebol e playground​. Um verdadeiro respiro de ar puro dentro da cidade. Ao lado, ergue-se a histórica Ponte Hercílio Luz, cartão-postal de Florianópolis, reaberta para pedestres e ciclistas desde 2019, permitindo fácil acesso ao Continente a pé ou de bicicleta. A localização do D/Sense propicia acesso imediato à Beira-Mar Norte (avenida costeira principal da cidade) e à região central, onde encontra-se ampla oferta de comércio, serviços, restaurantes e entretenimento.dos os pontos da cidade e próximo aos principais centros comerciais e de entretenimento.",
      mapImage: "/images/dsense/localização.png",
    },
    differentials: [
      { title: "Prêmios Internacionais", description: "Loop Design Award e World Design Award em 2024" },
      { title: "Design Biofílico", description: "Integração com a natureza e paredes verdes" },
      { title: "Sky Lounge", description: "Área de cobertura com vista panorâmica para a Baía Norte" },
      { title: "Coworking", description: "Espaço de trabalho completo com salas de reunião privativas" },
      { title: "Guest House", description: "Suíte para hóspedes independente na área comum" },
      { title: "Certificação Fitwel", description: "Comprometimento com saúde e bem-estar nos ambientes" },
    ],
    fernandasNotes: "O D/SENSE Home Design é perfeito para quem busca viver em um endereço central icônico, mas com qualidade de vida excepcional. A vista para o Parque da Luz, os prêmios internacionais e o conceito inovador fazem deste empreendimento uma escolha única em Florianópolis.",
    status: "construcao",
    type: "residencial",
    address: {
      street: "Rua Felipe Schmidt",
      number: "500",
      neighborhood: "Centro",
      city: "Florianópolis",
      state: "SC",
      zipCode: "88010-001",
      coordinates: {
        lat: -27.5950,
        lng: -48.5480
      }
    },
    salesMaterial: {
      title: "Catálogo Exclusivo D/SENSE",
      description: "Acesse nosso material completo com plantas, acabamentos, fotos e condições especiais para investidores.",
      fileUrl: "/materiais/Material de Introdução  - Dsense.pdf"
    }
  },
  dvert: {
    title: "D/VERT Residence Club",
    tagline: "Conexão profunda entre moradores e natureza",
    description: "O D/VERT Residence Club traz o conceito de design biofílico e sustentabilidade para a vida cotidiana. Com três torres, propõe uma conexão profunda entre os moradores e a natureza.",
    longDescription: "Localizado na Praia Comprida, em São José (região da Beira-Mar de São José), o D/VERT propõe uma conexão profunda entre os moradores e a natureza, seja por meio de formas orgânicas na arquitetura, da incorporação de vegetação abundante nos edifícios ou de soluções que melhoram a qualidade do ar e o conforto térmico nos ambientes. O nome D/VERT remete ao 'verde' que transborda do projeto – fachadas com jardins verticais, áreas comuns ajardinadas e um paisagismo integrado que cria um oásis natural em meio ao cenário urbano.",
    features: [
      { title: "Apartamentos", description: "De 80 a 160m² com 2 e 3 dormitórios (suítes)" },
      { title: "Lazer", description: "18 áreas de convivência e lazer distribuídas pelo condomínio" },
      { title: "Localização", description: "Próximo à Beira-Mar de São José" },
      { title: "Sustentabilidade", description: "Soluções sustentáveis como energia solar e captação de água da chuva" },
    ],
    gallery: [
      "/images/dvert/dvert.webp",
      "/images/dvert/dvert (2).webp",
      "/images/dvert/dvert (3).webp",
      "/images/dvert/dvert (4).webp",
      "/images/dvert/dvert (5).webp",
      "/images/dvert/dvert (6).webp",
      "/images/dvert/dvert (7).webp",
      "/images/dvert/dvert (8).webp",
      "/images/dvert/dvert (9).webp",
      "/images/dvert/dvert (10).webp",
      "/images/dvert/dvert (11).webp",
      "/images/dvert/dvert (12).webp",
      "/images/dvert/dvert (13).webp",
      "/images/dvert/dvert (14).webp"
    ],
    heroImage: "/images/dvert/dvert.webp",
    mainImage: "/images/dvert/dvert (2).webp",
    additionalImages: ["/images/dvert/dvert (3).webp", "/images/dvert/dvert (4).webp"],
    floorplans: [
      {
        title: "Apartamento 85m²",
        description: "2 suítes, varanda verde e living integrado.",
        image: "/images/dvert/2 suites - 84,32m².bmp",
      },
      {
        title: "Apartamento 140m²",
        description: "3 suítes, varanda ampla com jardim vertical e living estendido.",
        image: "/images/dvert/3 suites - 159,83m².bmp",
      },
    ],
    location: {
      description: "O D/Vert Residence Club está localizado em uma região em crescente valorização imobiliária na Grande Florianópolis. A poucos metros da Beira-Mar de São José, o empreendimento permite que os moradores aproveitem caminhadas matinais apreciando a vista para o mar ou usufruam das ciclovias e espaços de lazer ao longo da orla. O entorno imediato conta com diversas opções de comércio e serviços a distância de uma caminhada: padarias, farmácias, supermercados e restaurantes",
      mapImage: "/images/dvert/localização.png",
    },
    differentials: [
      { title: "Boulevard Ajardinado", description: "Caminho ajardinado entre as torres com pergolados" },
      { title: "Quadra de Beach Tennis", description: "Quadra de areia para prática esportiva ao ar livre" },
      { title: "Piscina Térmica Coberta", description: "Para uso em dias frios ou à noite" },
      { title: "Home Market", description: "Loja de conveniência autônoma dentro do residencial" },
      { title: "Bike Sharing", description: "Estação com bicicletas compartilhadas para os moradores" },
      { title: "Oficina Workshop", description: "Equipada com ferramentas para pequenos reparos e projetos" },
    ],
    fernandasNotes: "O D/VERT Residence Club é perfeito para quem busca uma conexão com a natureza sem abrir mão do conforto urbano. Com três torres, ampla infraestrutura de lazer e soluções sustentáveis, este empreendimento proporciona uma experiência única de moradia na Grande Florianópolis.",
    status: "construcao",
    type: "residencial",
    address: {
      street: "Avenida Constâncio Krummel",
      number: "1795",
      neighborhood: "Praia Comprida",
      city: "São José",
      state: "SC",
      zipCode: "88103-600",
      coordinates: {
        lat: -27.5905,
        lng: -48.6104
      }
    },
    salesMaterial: {
      title: "Catálogo Exclusivo D/VERT",
      description: "Acesse nosso material completo com plantas, acabamentos, fotos e condições especiais para investidores.",
      fileUrl: "/materiais/Material de Introdução  - DVert.pdf"
    }
  },
  dyard: {
    title: "D/YARD Home Design",
    tagline: "Você se conecta ao lugar onde vive",
    description: "O D/YARD Home Design é um empreendimento localizado no coração de Florianópolis que reflete a união entre a conveniência de uma vida urbana e a proximidade com a natureza.",
    longDescription: "Como empreendimento da linha Home Design da Dimas Construções, o D/YARD foi desenvolvido com foco especial no design como solução. Este projeto de torre única surge em um terreno privilegiado na Rua Prefeito Coronel Antenor Mesquita, numa região central onde 'já não existiam mais jardins', e por isso traz a proposta de recriar um grande jardim vertical e horizontal dentro do ambiente urbano. Inspirado pelos conceitos de biofilia e wellness, o D/YARD incorpora abundância de verde em suas áreas comuns, terraços e até na fachada.",
    features: [
      { title: "Apartamentos", description: "De 54 a 202m² com studios, 1, 2 e 3 dormitórios" },
      { title: "Conceito", description: "Jardim vertical e horizontal no ambiente urbano" },
      { title: "Localização", description: "Centro de Florianópolis, com tudo ao seu redor" },
      { title: "Tipologias", description: "Studios, lofts e unidades duplex disponíveis" },
    ],
    gallery: [
      '/images/dyard/FACHADA.png',
      '/images/dyard/FACHADA-DIURNA.png',
      '/images/dyard/FACHADA-HALL.png',
      '/images/dyard/HALL-DE-ENTRADA.png',
      '/images/dyard/COWORKING.png',
      '/images/dyard/GOURMET.png',
      '/images/dyard/GRILL.png',
      '/images/dyard/JOGOS.png',
      '/images/dyard/PISCINA.png',
      '/images/dyard/SALAO-DE-FESTAS.png',
      '/images/dyard/VISTA-ROOFTOP.png',
      '/images/dyard/fitness.png',
      '/images/dyard/praça-externa.png',
      '/images/dyard/BRINQUEDOTECA.png',
      '/images/dyard/Apartamento.png'
    ],
    heroImage: "/images/dyard/FACHADA-DIURNA.png",
    mainImage: "/images/dyard/FACHADA-HALL.png",
    additionalImages: [
      '/images/dyard/COWORKING.png',
      '/images/dyard/VISTA-ROOFTOP.png',
    ],
    /*floorplans: [
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
    ],*/
    location: {
      description: "O D/YARD está localizado em uma área residencial tranquila, próximo a parques e com fácil acesso ao centro da cidade.",
      mapImage: "/images/dyard/localização.png",
    },
    differentials: [
      { title: "Rooftop Panorâmico", description: "Concentra grande parte das áreas comuns, com vistas incríveis" },
      { title: "Coworking Rooftop", description: "Espaço de trabalho compartilhado com design inspirador" },
      { title: "Pista de Corrida", description: "Pista de cooper privativa no alto do prédio" },
      { title: "Espaço Fitness", description: "Academia climatizada com área externa para exercícios" },
      { title: "Sala de Jogos/PUB", description: "Ambiente com mesa de sinuca, jogos e bar interno" },
      { title: "Bike Sharing", description: "Sistema de compartilhamento de bicicletas" },
    ],
    fernandasNotes: "O D/YARD Home Design é perfeito para quem busca a combinação de vida urbana com conexão com a natureza. Este empreendimento no centro de Florianópolis oferece um refúgio verde, seguro e dotado de design contemporâneo exclusivo, onde cada detalhe foi pensado para proporcionar bem-estar e qualidade de vida.",
    status: "breve-lancamento",
    type: "residencial",
    address: {
      street: "Rua Prefeito Coronel Antenor Mesquita",
      number: "300",
      neighborhood: "Centro",
      city: "Florianópolis",
      state: "SC",
      zipCode: "88015-150",
      coordinates: {
        lat: -27.5895,
        lng: -48.5412
      }
    },
    salesMaterial: {
      title: "Catálogo Exclusivo D/YARD",
      description: "Acesse nosso material completo com plantas, acabamentos, fotos e condições especiais para investidores.",
      fileUrl: "/materiais/DYard.pdf"
    }
  },
  dnex: {
    title: "D/NEX Smart Living",
    tagline: "Viver no futuro, só que agora",
    description: "O D/NEX Smart Living marca a chegada de um conceito de moradia inovador ao bairro Estreito, em Florianópolis. Apresentado como o primeiro 'Smart Living' do Estreito, este empreendimento redefine a forma de viver unindo tecnologia, convivência e otimização de espaço.",
    longDescription: "Com duas torres residenciais e um total de 122 unidades, o D/NEX foi planejado para proporcionar experiências que vão além do apartamento em si, transformando as áreas comuns em extensões do lar – perfeitas para trabalho, lazer e interação comunitária. Localizado em um dos principais eixos do continente (Av. Marinheiro Max Schramm), o projeto acompanha o momento de renovação do Estreito: um bairro historicamente residencial que nos últimos anos se reinventou com novos empreendimentos, serviços e uma atmosfera mais cosmopolita.",
    features: [
      { title: "Apartamentos", description: "De 30 a 75m² com studios até 2 dormitórios" },
      { title: "Torres", description: "Duas torres residenciais com 122 unidades" },
      { title: "Localização", description: "Bairro Estreito, próximo à Beira-Mar Continental" },
      { title: "Conceito", description: "Smart Living - praticidade e compartilhamento" },
    ],
    gallery: [
      "/images/dnex/dnex.jpg",
      "/images/dnex/06_DIMAS_DNEX_FESTAS.jpg",
      "/images/dnex/07_DIMAS_DNEX_GOURMET.jpg",
      "/images/dnex/08_DIMAS_DNEX_TERRACO.jpg",
      "/images/dnex/09_DIMAS_DNEX_LAVACAO.jpg",
      "/images/dnex/10_DIMAS_DNEX_ESPACO_PET.jpg",
      "/images/dnex/11_DIMAS_DNEX_KIDS.jpg",
      "/images/dnex/12_DIMAS_DNEX_DELIVERY.jpg",
      "/images/dnex/13_DIMAS_DNEX_OFICINA_KIDS.jpg",
      "/images/dnex/14_DIMAS_DNEX_ACADEMIA.jpg",
      "/images/dnex/15_DIMAS_DNEX_ACADEMIA_EXTERNA.jpg",
      "/images/dnex/16_DIMAS_DNEX_QUADRA_AREIA.jpg",
      "/images/dnex/17_DIMAS_DNEX_PISCINA.jpg",
      "/images/dnex/18_DIMAS_DNEX_GRILL.jpg",
      "/images/dnex/19_DIMAS_DNEX_OFICINA.jpg",
      "/images/dnex/20_DIMAS_DNEX_COWORKING.jpg",
      "/images/dnex/21_DIMAS_DNEX_JOGOS.jpg",
      "/images/dnex/22_DIMAS_DNEX_LAVANDERIA.jpg",
      "/images/dnex/23_DIMAS_DNEX_BIKESHARING.jpg",
      "/images/dnex/24_DIMAS_DNEX_HOMEMARKET.jpg",
      "/images/dnex/25_DIMAS_DNEX_HALL.jpg",
      "/images/dnex/26_DIMAS_DNEX_TERRACO_GOURMET.jpg",
      "/images/dnex/27_DIMAS_DNEX_COWORKING_02.jpg"
    ],
    heroImage: "/images/dnex/dnex.jpg",
    mainImage: "/images/dnex/dnex.jpg",
    additionalImages: [
      "/images/dnex/17_DIMAS_DNEX_PISCINA.jpg",
      "/images/dnex/20_DIMAS_DNEX_COWORKING.jpg"
    ],
    floorplans: [
      {
        title: "Apartamento 75m²",
        description: "2 dormitórios, living integrado e opções com Sacada Gourmet.",
        image: "/images/dnex/2 quartos - 78m².png",
      },
      {
        title: "Apartamento 130m²",
        description: "studios, com opções de garden ou sacada gourmet.",
        image: "/images/dnex/Studio - 42m².png",
      },
    ],
    location: {
      description: "O D/NEX está localizado em uma área em pleno desenvolvimento, com projetos de infraestrutura e mobilidade em andamento.",
      mapImage: "/images/dnex/localização.png",
    },
    differentials: [
      { title: "Smart Market", description: "Mini mercado de conveniência self-service 24h" },
      { title: "Delivery Space", description: "Espaço para recebimento de encomendas com smart lockers" },
      { title: "Lavanderia Compartilhada", description: "Em parceria com a OMO, com máquinas profissionais" },
      { title: "Ático Dedicado ao Lazer", description: "Cada torre possui seu próprio ático com diferentes opções de lazer" },
      { title: "Piscina com Deck e Prainha", description: "Piscina ao ar livre com borda infinita e área rasa para crianças" },
      { title: "Coworking Completo", description: "Com estações compartilhadas, salas de reunião e áreas de estudo" },
    ],
    fernandasNotes: "O D/NEX Smart Living é perfeito para jovens profissionais e pequenos núcleos familiares que buscam praticidade e inovação. Localizado no renovado bairro do Estreito, oferece espaços compartilhados que vão muito além do apartamento, criando uma verdadeira comunidade inteligente e conectada.",
    status: "breve-lancamento",
    type: "residencial",
    address: {
      street: "Av. Marinheiro Max Schramm",
      number: "3028",
      neighborhood: "Estreito",
      city: "Florianópolis",
      state: "SC",
      zipCode: "88095-000",
      coordinates: {
        lat: -27.5865,
        lng: -48.5982
      }
    },
    salesMaterial: {
      title: "Catálogo Exclusivo D/NEX",
      description: "Acesse nosso material completo com plantas, acabamentos, fotos e condições especiais para investidores.",
      fileUrl: "/materiais/Material de Introdução  - Dnex.pdf"
    }
  }
} 