"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScheduleVisitForm } from "@/components/ScheduleVisitForm"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/fernandasoares.jpg"
          alt="Sobre Fernanda"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-2xl pl-0 lg:pl-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-fernanda-gold/20 text-white text-sm uppercase tracking-wider border border-fernanda-gold/50">
                  Consultora Imobiliária
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-light mb-6 tracking-wider">
                SOBRE <span className="gold-gradient font-medium">FERNANDA</span>
              </h1>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-white/90 max-w-xl mb-8">
                Conheça a trajetória e experiência da consultora imobiliária de elite da Dimas Construções
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Fernanda */}
      <section className="py-20 overflow-hidden">
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
                  src="/images/fernandasoares3.jpg"
                  alt="Fernanda - Consultora Dimas Construções"
                  fill
                  className="object-cover"
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
              <h2 className="text-3xl md:text-4xl font-light text-dimas-black mb-6">Fernanda</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-dimas-black/80 mb-6">
                Com mais de 18 anos de experiência no mercado imobiliário, Fernanda se destaca como uma das consultoras
                mais respeitadas e bem-sucedidas do setor. Sua trajetória é marcada por conquistas expressivas e um
                profundo conhecimento do mercado de imóveis de alto padrão.
              </p>
              <p className="text-dimas-black/80 mb-10">
                Formada em Administração com MBA em Gestão Comercial, Fernanda combina conhecimento técnico com uma
                abordagem humanizada, entendendo que a compra de um imóvel vai além de uma simples transação comercial –
                é a realização de um sonho.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-6 border-l-2 border-fernanda-gold">
                  <h3 className="text-xl font-light text-dimas-black mb-2">18 Anos</h3>
                  <p className="text-dimas-black/60 font-light">
                    De experiência no mercado imobiliário com resultados comprovados
                  </p>
                </div>

                <div className="p-6 border-l-2 border-dimas-beige">
                  <h3 className="text-xl font-light text-dimas-black mb-2">MBA</h3>
                  <p className="text-dimas-black/60 font-light">
                    Formação em Administração com MBA em Gestão Comercial
                  </p>
                </div>

                <div className="p-6 border-l-2 border-dimas-beige">
                  <h3 className="text-xl font-light text-dimas-black mb-2">R$50 Milhões</h3>
                  <p className="text-dimas-black/60 font-light">Em VGV nos últimos 24 meses</p>
                </div>

                <div className="p-6 border-l-2 border-dimas-beige">
                  <h3 className="text-xl font-light text-dimas-black mb-2">+100</h3>
                  <p className="text-dimas-black/60 font-light">Formações em vendas, gestão, pessoas e liderança</p>
                </div>
              </div>

              <ScheduleVisitForm 
                triggerButton={
                  <Button className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                    <span>Agende uma consulta</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-dimas-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block mb-4 px-3 py-1 border border-fernanda-gold/50 bg-fernanda-gold/10">
                <p className="text-fernanda-gold text-sm uppercase tracking-wider">Filosofia de Trabalho</p>
              </div>
              <h2 className="text-3xl font-light text-white mb-6">Compromisso com a Excelência</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-white/80 mb-6">
                A filosofia de trabalho de Fernanda é baseada em três pilares fundamentais: conhecimento profundo dos
                empreendimentos, atendimento personalizado e compromisso com a satisfação do cliente.
              </p>
              <p className="text-white/80 mb-10">
                "Acredito que cada cliente é único e merece uma atenção especial. Meu objetivo é entender profundamente
                as necessidades e desejos de cada pessoa para oferecer não apenas um imóvel, mas um lar que se encaixe
                perfeitamente em seu estilo de vida."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-fernanda-gold" />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">Excelência</h3>
                  <p className="text-white/60 font-light">Compromisso com a qualidade em cada detalhe</p>
                </div>

                <div className="flex flex-col">
                  <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-fernanda-gold" />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">Personalização</h3>
                  <p className="text-white/60 font-light">Atendimento adaptado às necessidades de cada cliente</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video relative rounded-none overflow-hidden">
                <Image
                  src="/images/fernandasoares4.jpg"
                  alt="Fernanda em ação"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light text-dimas-black mb-6">Conquistas e Reconhecimentos</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-dimas-black/70">
              Ao longo de sua carreira, Fernanda acumulou diversas conquistas e reconhecimentos que atestam sua
              excelência profissional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "Consultora do Ano",
                description: "Reconhecida como a consultora com maior volume de vendas da Dimas Construções.",
              },
              {
                year: "2023",
                title: "Prêmio Excelência",
                description: "Premiada pela qualidade no atendimento e satisfação dos clientes.",
              },
              {
                year: "2022",
                title: "Top Performance",
                description: "Reconhecida por superar em 200% a meta anual de vendas.",
              },
              {
                year: "2021",
                title: "Destaque D'VERSE",
                description: "Maior volume de vendas no lançamento do empreendimento D'VERSE.",
              },
              {
                year: "2020",
                title: "Embaixadora Dimas",
                description: "Selecionada para representar a marca Dimas em eventos exclusivos.",
              },
              {
                year: "2019",
                title: "Inovação em Vendas",
                description: "Reconhecida pela implementação de estratégias inovadoras de vendas.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 shadow-md border-t-2 border-fernanda-gold"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-fernanda-gold text-sm font-medium mb-4">{item.year}</div>
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
            <ScheduleVisitForm 
              triggerButton={
                <Button className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                  <span>Agende uma consulta</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}

