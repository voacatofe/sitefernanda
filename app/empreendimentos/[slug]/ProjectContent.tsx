"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ArrowRight, Phone, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  title: string
  description: string
}

interface Floorplan {
  title: string
  description: string
  image: string
}

interface NearbyLocation {
  time: string
  place: string
  description: string
}

interface Location {
  description: string
  nearby: NearbyLocation[]
  mapImage: string
}

interface Differential {
  title: string
  description: string
}

interface Project {
  title: string
  tagline: string
  description: string
  longDescription?: string
  features?: Feature[]
  gallery?: string[]
  heroImage: string
  mainImage?: string
  additionalImages?: string[]
  floorplans?: Floorplan[]
  location?: Location
  differentials?: Differential[]
  fernandasNotes?: string
}

interface ProjectContentProps {
  project: Project
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const [activeTab, setActiveTab] = useState("visao-geral")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src={project.heroImage || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Link
                href="/"
                className="inline-flex items-center text-white mb-6 hover:text-fernanda-gold transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>Voltar para Home</span>
              </Link>
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-fernanda-gold/20 text-white text-sm uppercase tracking-wider border border-fernanda-gold/50">
                  Recomendado por Fernanda
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">{project.title}</h1>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-xl text-white/90 font-light mb-8">{project.tagline}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-dimas-beige sticky top-20 bg-white z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {["Visão Geral", "Galeria", "Plantas", "Localização", "Diferenciais"].map((tab) => {
              const tabId = tab
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/\s+/g, "-")
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tabId)}
                  className={`px-6 py-4 text-sm uppercase tracking-wider whitespace-nowrap ${
                    activeTab === tabId
                      ? "text-fernanda-gold border-b-2 border-fernanda-gold"
                      : "text-dimas-black/60 hover:text-dimas-black"
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Visão Geral */}
          {activeTab === "visao-geral" && project.longDescription && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-light text-dimas-black mb-6">Sobre o {project.title}</h2>
                <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
                <p className="text-dimas-black/80 font-light mb-6">{project.description}</p>
                <p className="text-dimas-black/80 font-light mb-10">{project.longDescription}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {project.features?.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-6 border-l-2 ${index === 0 ? "border-fernanda-gold" : "border-dimas-beige"}`}
                    >
                      <h3 className="text-xl font-light text-dimas-black mb-2">{feature.title}</h3>
                      <p className="text-dimas-black/60 font-light">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {project.fernandasNotes && (
                  <div className="bg-fernanda-gold/10 border border-fernanda-gold/30 p-6 mb-10">
                    <h3 className="flex items-center text-xl font-medium text-dimas-black mb-4">
                      <span className="gold-gradient">Nota de Fernanda</span>
                    </h3>
                    <p className="text-dimas-black/80 italic">"{project.fernandasNotes}"</p>
                  </div>
                )}

                <Button className="bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                  <span>Agende uma visita</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="space-y-8">
                <div className="aspect-[4/3] relative rounded-none overflow-hidden">
                  <Image
                    src={project.mainImage || "/placeholder.svg?height=800&width=1000"}
                    alt={`${project.title} Fachada`}
                    fill
                    className="object-cover"
                  />
                </div>

                {project.additionalImages && (
                  <div className="grid grid-cols-2 gap-4">
                    {project.additionalImages.map((image, index) => (
                      <div key={index} className="aspect-square relative rounded-none overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} Interior ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Galeria */}
          {activeTab === "galeria" && project.gallery && (
            <div>
              <h2 className="text-3xl font-light text-dimas-black mb-6">Galeria {project.title}</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-none overflow-hidden group">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} Imagem ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Plantas */}
          {activeTab === "plantas" && project.floorplans && (
            <div>
              <h2 className="text-3xl font-light text-dimas-black mb-6">Plantas {project.title}</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-12"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {project.floorplans.map((floorplan, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-light text-dimas-black mb-4">{floorplan.title}</h3>
                    <p className="text-dimas-black/80 font-light mb-8">{floorplan.description}</p>

                    <div className="aspect-[4/3] relative rounded-none overflow-hidden">
                      <Image
                        src={floorplan.image || "/placeholder.svg"}
                        alt={`Planta ${floorplan.title}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Localização */}
          {activeTab === "localizacao" && project.location && (
            <div>
              <h2 className="text-3xl font-light text-dimas-black mb-6">Localização {project.title}</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-12"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-dimas-black/80 font-light mb-6">{project.location.description}</p>

                  <div className="space-y-6 mb-10">
                    {project.location.nearby.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-12 h-12 bg-fernanda-gold/10 flex items-center justify-center mr-4">
                          <span className="text-fernanda-gold font-medium">{item.time}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-light text-dimas-black">{item.place}</h3>
                          <p className="text-dimas-black/60 font-light">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                    <span>Como chegar</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="aspect-square relative rounded-none overflow-hidden">
                  <Image
                    src={project.location.mapImage || "/placeholder.svg"}
                    alt="Mapa de Localização"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Diferenciais */}
          {activeTab === "diferenciais" && project.differentials && (
            <div>
              <h2 className="text-3xl font-light text-dimas-black mb-6">Diferenciais {project.title}</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.differentials.map((item, index) => (
                  <div
                    key={index}
                    className="p-8 border border-dimas-beige hover:border-fernanda-gold transition-colors duration-300"
                  >
                    <h3 className="text-xl font-light text-dimas-black mb-4">{item.title}</h3>
                    <p className="text-dimas-black/60 font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-dimas-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light text-dimas-black mb-6">Interessado no {project.title}?</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-lg text-dimas-black/80 font-light">
              Entre em contato com Fernanda para mais informações e agende uma visita personalizada.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-fernanda-gold" />
              </div>
              <div>
                <h3 className="text-lg font-light text-dimas-black mb-1">Telefone</h3>
                <p className="text-dimas-black/60">+55 (XX) XXXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-fernanda-gold" />
              </div>
              <div>
                <h3 className="text-lg font-light text-dimas-black mb-1">E-mail</h3>
                <p className="text-dimas-black/60">fernanda@dimasconstrucoes.com.br</p>
              </div>
            </div>

            <Button className="bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
              <span>Agende uma visita</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Fernanda's Expertise */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block mb-4 px-3 py-1 border border-fernanda-gold/50 bg-fernanda-gold/10">
                <p className="text-fernanda-gold text-sm uppercase tracking-wider">Consultora Especializada</p>
              </div>
              <h2 className="text-3xl font-light text-dimas-black mb-6">
                Por que escolher Fernanda para o seu {project.title}
              </h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-dimas-black/80 font-light mb-8">
                Com mais de 18 anos de experiência no mercado imobiliário, Fernanda conhece profundamente cada detalhe
                dos empreendimentos Dimas e pode oferecer uma consultoria personalizada para encontrar o imóvel ideal
                para você e sua família.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Conhecimento detalhado de cada unidade disponível",
                  "Acompanhamento personalizado durante todo o processo",
                  "Negociação das melhores condições para você",
                  "Suporte pós-venda exclusivo",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-3 mt-0.5">
                      <Check className="h-3 w-3 text-fernanda-gold" />
                    </div>
                    <p className="text-dimas-black/80">{item}</p>
                  </li>
                ))}
              </ul>

              <Button className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                <span>Agende uma consulta exclusiva</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[3/4] relative rounded-none overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Fernanda - Consultora Dimas Construções"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-md border-l-2 border-fernanda-gold">
                <p className="font-light text-dimas-black uppercase tracking-wider text-sm">
                  Especialista em {project.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 