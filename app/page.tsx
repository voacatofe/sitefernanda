"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Award, Users, TrendingUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: "dverse",
      title: "D'VERSE",
      description: "Viva a sofisticação e a beleza natural da Praia Brava",
      image: "/images/dverse/dverse.jpg",
      link: "/empreendimentos/dverse",
    },
    {
      id: "dseason",
      title: "D'SEASON",
      description: "O primeiro resort urbano Dimas",
      image: "/images/dseason/dseason.jpg",
      link: "/empreendimentos/dseason",
    },
    {
      id: "dsense",
      title: "D'SENSE",
      description: "Onde estilo, me sinto em casa",
      image: "/images/dsense/dsense.jpg",
      link: "/empreendimentos/dsense",
    },
    {
      id: "dvert",
      title: "D'VERT",
      description: "Viver que transforma",
      image: "/images/dvert/dvert.jpg",
      link: "/empreendimentos/dvert",
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/florianopolis.webp"
          alt="Empreendimentos de Alto Padrão"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-fernanda-gold/20 text-white text-sm uppercase tracking-wider border border-fernanda-gold/50">
                Consultora Imobiliária Dimas
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-light mb-6 tracking-wider">
              <span className="text-3xl md:text-6xl block mb-2">EMPREENDIMENTOS</span>
              DE <span className="text-fernanda-gold font-medium">ALTO PADRÃO</span>
            </h1>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-white/90 max-w-xl mx-auto mb-12 text-lg">
              Conheça os projetos exclusivos da Dimas Construções com Fernanda,
              consultora especializada com mais de 18 anos de experiência.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-fernanda-gold bg-fernanda-gold/20 text-fernanda-gold hover:bg-fernanda-gold hover:text-dimas-black hover:border-fernanda-gold rounded-none uppercase text-xs tracking-wider px-8 py-6"
            >
              <Link href="/empreendimentos">
                Conheça nossos empreendimentos
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-white rounded-full mt-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Fernanda Introduction */}
      <section className="py-20 bg-dimas-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] relative rounded-none overflow-hidden">
                <Image
                  src="/images/Fernanda Soares.jpg"
                  alt="Fernanda - Consultora Dimas Construções"
                  fill
                  className="object-cover object-top"
                  quality={100}
                  priority
                />
              </div>
              <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-fernanda-gold p-4 md:p-6 shadow-md">
                <p className="font-light text-dimas-black uppercase tracking-wider text-xs md:text-sm">Campeã de Vendas 2024</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-3 py-1 border border-fernanda-gold/50 bg-fernanda-gold/10">
                <p className="text-fernanda-gold text-sm uppercase tracking-wider">Consultora Imobiliária</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Fernanda</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-white/80 mb-10">
                Profissional dedicada com uma trajetória de excelência no mercado imobiliário, pronta para ajudar você a
                encontrar o imóvel ideal. Com mais de 18 anos de experiência, Fernanda se destaca pelo atendimento
                personalizado e conhecimento profundo dos empreendimentos Dimas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 border-l-2 border-fernanda-gold">
                  <h3 className="text-xl font-light text-white mb-2">18 Anos</h3>
                  <p className="text-white/60 font-light">
                    De experiência no mercado imobiliário com resultados comprovados
                  </p>
                </div>

                <div className="p-6 border-l-2 border-dimas-gray/30">
                  <h3 className="text-xl font-light text-white mb-2">MBA</h3>
                  <p className="text-white/60 font-light">Formação em Administração com MBA em Gestão Comercial</p>
                </div>

                <div className="p-6 border-l-2 border-dimas-gray/30">
                  <h3 className="text-xl font-light text-white mb-2">R$50 Milhões</h3>
                  <p className="text-white/60 font-light">Em VGV nos últimos 24 meses</p>
                </div>

                <div className="p-6 border-l-2 border-dimas-gray/30">
                  <h3 className="text-xl font-light text-white mb-2">+100</h3>
                  <p className="text-white/60 font-light">Formações em vendas, gestão, pessoas e liderança</p>
                </div>
              </div>

              <Button className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                <span>Agende uma consulta</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Launches Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-dimas-black mb-6">Empreendimentos em Destaque</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-dimas-black/70">
              Conheça os projetos exclusivos da Dimas Construções, selecionados especialmente por Fernanda para você.
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="px-3 py-1 bg-fernanda-gold text-dimas-black text-xs uppercase tracking-wider">
                          Recomendado por Fernanda
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7 bg-dimas-black text-white p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-light mb-4">{project.title}</h3>
                      <p className="text-white/80 mb-8">{project.description}</p>
                      <div>
                        <Link
                          href={project.link}
                          className="inline-flex items-center text-fernanda-gold hover:text-white transition-colors"
                        >
                          <span className="text-sm uppercase tracking-wider mr-2">Saiba mais</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-7 bg-dimas-black text-white p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                      <h3 className="text-3xl font-light mb-4">{project.title}</h3>
                      <p className="text-white/80 mb-8">{project.description}</p>
                      <div>
                        <Link
                          href={project.link}
                          className="inline-flex items-center text-fernanda-gold hover:text-white transition-colors"
                        >
                          <span className="text-sm uppercase tracking-wider mr-2">Saiba mais</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto order-1 md:order-2">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="px-3 py-1 bg-fernanda-gold text-dimas-black text-xs uppercase tracking-wider">
                          Recomendado por Fernanda
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider px-8 py-6">
              Ver todos os empreendimentos
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dimas-beige overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-dimas-black mb-6">O que dizem os clientes</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-dimas-black/70">
              Depoimentos de clientes que realizaram o sonho da casa própria com a consultoria da Fernanda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-white p-8 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt={`Cliente ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-dimas-black">Cliente {item}</h3>
                    <p className="text-dimas-black/60 text-sm">Proprietário no D'VERSE</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-fernanda-gold" fill="#d4af37" />
                  ))}
                </div>
                <p className="text-dimas-black/80 italic">
                  "A Fernanda foi fundamental na escolha do nosso apartamento. Seu conhecimento sobre os empreendimentos
                  e atenção aos detalhes fizeram toda a diferença. Recomendo a todos que buscam um imóvel de alto
                  padrão."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Fernanda */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-dimas-black mb-6">Por que escolher Fernanda</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-dimas-black/70">
              Diferenciais que fazem da Fernanda a consultora ideal para encontrar seu imóvel Dimas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-fernanda-gold" />,
                title: "Expertise",
                description: "Conhecimento profundo de todos os empreendimentos Dimas e do mercado imobiliário.",
              },
              {
                icon: <Users className="h-8 w-8 text-fernanda-gold" />,
                title: "Atendimento Personalizado",
                description: "Consultoria exclusiva adaptada às necessidades e desejos de cada cliente.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-fernanda-gold" />,
                title: "Resultados Comprovados",
                description: "Histórico de sucesso com mais de R$50 milhões em vendas nos últimos 24 meses.",
              },
              {
                icon: <Star className="h-8 w-8 text-fernanda-gold" />,
                title: "Excelência Reconhecida",
                description: "Premiada como consultora destaque da Dimas Construções por 5 anos consecutivos.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 border border-dimas-beige hover:border-fernanda-gold transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-light text-dimas-black mb-4">{item.title}</h3>
                <p className="text-dimas-black/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-dimas-black text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-light mb-2">Pronto para encontrar o imóvel dos seus sonhos?</h3>
              <p className="text-white/70">Entre em contato com Fernanda e agende uma consulta personalizada.</p>
            </div>
            <Button className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
              <span>Agende uma consulta</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

