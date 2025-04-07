"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DVersePage() {
  const [activeTab, setActiveTab] = useState("visao-geral")

  // Exemplo de imagens para a galeria
  const galleryImages = [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/dverse/dverse.jpg"
            alt="D'Verse"
            fill
            sizes="100vw"
            quality={100}
            priority
            className="object-cover object-center brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Link
                href="/"
                className="inline-flex items-center text-white mb-6 hover:text-amber-400 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>Voltar para Home</span>
              </Link>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">D'VERSE</h1>
              <div className="w-20 h-0.5 bg-amber-500 mb-8"></div>
              <p className="text-xl text-white/90 font-light mb-8">
                Sofisticação e exclusividade em cada detalhe. Um projeto que redefine o conceito de moradia de alto
                padrão.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-zinc-200">
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
                      ? "text-amber-700 border-b-2 border-amber-700"
                      : "text-zinc-600 hover:text-zinc-900"
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
          {activeTab === "visao-geral" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-light text-zinc-900 mb-6">Sobre o D'VERSE</h2>
                <div className="w-20 h-0.5 bg-amber-700 mb-8"></div>
                <p className="text-zinc-700 font-light mb-6">
                  O D'VERSE é um empreendimento que redefine o conceito de moradia de alto padrão. Com arquitetura
                  contemporânea e acabamentos premium, oferece apartamentos espaçosos e ambientes pensados para
                  proporcionar conforto e exclusividade.
                </p>
                <p className="text-zinc-700 font-light mb-6">
                  Localizado em uma área privilegiada, o D'VERSE combina sofisticação, tecnologia e sustentabilidade.
                  Cada detalhe foi cuidadosamente planejado para atender às expectativas dos clientes mais exigentes.
                </p>
                <p className="text-zinc-700 font-light mb-10">
                  Um projeto assinado pelos melhores arquitetos e designers, que traz o que há de mais moderno em termos
                  de construção e acabamento.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="p-6 border-l-2 border-amber-700">
                    <h3 className="text-xl font-light text-zinc-900 mb-2">Apartamentos</h3>
                    <p className="text-zinc-600 font-light">De 120 a 200m² com 3 e 4 suítes</p>
                  </div>

                  <div className="p-6 border-l-2 border-zinc-200">
                    <h3 className="text-xl font-light text-zinc-900 mb-2">Lazer</h3>
                    <p className="text-zinc-600 font-light">Completo com mais de 20 itens</p>
                  </div>

                  <div className="p-6 border-l-2 border-zinc-200">
                    <h3 className="text-xl font-light text-zinc-900 mb-2">Localização</h3>
                    <p className="text-zinc-600 font-light">Área nobre com fácil acesso</p>
                  </div>

                  <div className="p-6 border-l-2 border-zinc-200">
                    <h3 className="text-xl font-light text-zinc-900 mb-2">Entrega</h3>
                    <p className="text-zinc-600 font-light">Previsão para Dezembro/2025</p>
                  </div>
                </div>

                <Button className="bg-amber-700 text-white hover:bg-amber-600 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                  <span>Agende uma visita</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>

              <div className="space-y-8">
                <div className="aspect-[4/3] relative rounded-none overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=1000"
                    alt="D'Verse Fachada"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square relative rounded-none overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="D'Verse Interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative rounded-none overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="D'Verse Lazer"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Galeria */}
          {activeTab === "galeria" && (
            <div>
              <h2 className="text-3xl font-light text-zinc-900 mb-6">Galeria D'VERSE</h2>
              <div className="w-20 h-0.5 bg-amber-700 mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div key={index} className="aspect-[4/3] relative rounded-none overflow-hidden group">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`D'Verse Imagem ${index + 1}`}
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
          {activeTab === "plantas" && (
            <div>
              <h2 className="text-3xl font-light text-zinc-900 mb-6">Plantas D'VERSE</h2>
              <div className="w-20 h-0.5 bg-amber-700 mb-12"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">Apartamento 120m²</h3>
                  <p className="text-zinc-700 font-light mb-8">
                    3 suítes, living ampliado, varanda gourmet e cozinha integrada.
                  </p>

                  <div className="aspect-[4/3] relative rounded-none overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=800&width=1000"
                      alt="Planta 120m²"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-zinc-900 mb-4">Apartamento 200m²</h3>
                  <p className="text-zinc-700 font-light mb-8">
                    4 suítes, living ampliado, varanda gourmet, cozinha integrada e área de serviço.
                  </p>

                  <div className="aspect-[4/3] relative rounded-none overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=800&width=1000"
                      alt="Planta 200m²"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Localização */}
          {activeTab === "localizacao" && (
            <div>
              <h2 className="text-3xl font-light text-zinc-900 mb-6">Localização D'VERSE</h2>
              <div className="w-20 h-0.5 bg-amber-700 mb-12"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-zinc-700 font-light mb-6">
                    O D'VERSE está localizado em uma área privilegiada, com fácil acesso às principais vias da cidade e
                    próximo a diversos serviços e conveniências.
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-amber-700/10 flex items-center justify-center mr-4">
                        <span className="text-amber-700 font-medium">5min</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-zinc-900">Shopping Center</h3>
                        <p className="text-zinc-600 font-light">Fácil acesso ao principal shopping da região</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-amber-700/10 flex items-center justify-center mr-4">
                        <span className="text-amber-700 font-medium">10min</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-zinc-900">Parque Municipal</h3>
                        <p className="text-zinc-600 font-light">Área verde para lazer e atividades ao ar livre</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-amber-700/10 flex items-center justify-center mr-4">
                        <span className="text-amber-700 font-medium">15min</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-zinc-900">Centro da Cidade</h3>
                        <p className="text-zinc-600 font-light">Acesso rápido ao centro comercial e financeiro</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-amber-700 text-white hover:bg-amber-600 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
                    <span>Como chegar</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="aspect-square relative rounded-none overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="Mapa de Localização"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Diferenciais */}
          {activeTab === "diferenciais" && (
            <div>
              <h2 className="text-3xl font-light text-zinc-900 mb-6">Diferenciais D'VERSE</h2>
              <div className="w-20 h-0.5 bg-amber-700 mb-12"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Segurança 24h", description: "Sistema de segurança completo com monitoramento 24 horas" },
                  { title: "Área de Lazer", description: "Espaços de lazer completos para todas as idades" },
                  {
                    title: "Sustentabilidade",
                    description: "Projeto com certificação de sustentabilidade e economia de recursos",
                  },
                  { title: "Automação", description: "Preparação para automação residencial em todos os ambientes" },
                  {
                    title: "Acabamento Premium",
                    description: "Materiais de primeira linha e acabamentos sofisticados",
                  },
                  { title: "Vagas de Garagem", description: "Amplas vagas de garagem com espaço para visitantes" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-8 border border-zinc-200 hover:border-amber-700 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-light text-zinc-900 mb-4">{item.title}</h3>
                    <p className="text-zinc-600 font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light text-zinc-900 mb-6">Interessado no D'VERSE?</h2>
            <div className="w-20 h-0.5 bg-amber-700 mx-auto mb-8"></div>
            <p className="text-lg text-zinc-700 font-light">
              Entre em contato com a consultora Fernanda para mais informações e agende uma visita.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-amber-700/10 flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-light text-zinc-900 mb-1">Telefone</h3>
                <p className="text-zinc-600">(XX) XXXXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-amber-700/10 flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg font-light text-zinc-900 mb-1">E-mail</h3>
                <p className="text-zinc-600">fernanda@dimasconstrucoes.com.br</p>
              </div>
            </div>

            <Button className="bg-amber-700 text-white hover:bg-amber-600 rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
              <span>Agende uma visita</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Dimas Construções Logo"
                width={150}
                height={40}
                className="mb-6 invert"
              />
              <p className="text-zinc-400 mb-6 max-w-md font-light">
                A Dimas Construções é referência no mercado imobiliário, com empreendimentos de alto padrão e
                compromisso com a qualidade.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider mb-6">Empreendimentos</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/empreendimentos/dverse"
                    className="text-zinc-400 hover:text-amber-500 transition-colors font-light"
                  >
                    D'VERSE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empreendimentos/dseason"
                    className="text-zinc-400 hover:text-amber-500 transition-colors font-light"
                  >
                    D'SEASON
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empreendimentos/dvert"
                    className="text-zinc-400 hover:text-amber-500 transition-colors font-light"
                  >
                    D'VERT RESIDENCE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/empreendimentos/dyard"
                    className="text-zinc-400 hover:text-amber-500 transition-colors font-light"
                  >
                    D'YARD
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-amber-700 mr-3" />
                  <span className="text-zinc-400 font-light">(XX) XXXXX-XXXX</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-amber-700 mr-3" />
                  <span className="text-zinc-400 font-light">contato@dimasconstrucoes.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
            <p className="text-zinc-500 font-light">
              © {new Date().getFullYear()} Dimas Construções. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

