"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Contato Fernanda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
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
              FALE COM <span className="gold-gradient font-medium">FERNANDA</span>
            </h1>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-white/90 max-w-xl mx-auto">Entre em contato para agendar uma consulta personalizada</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4 px-3 py-1 border border-fernanda-gold/50 bg-fernanda-gold/10">
                <p className="text-fernanda-gold text-sm uppercase tracking-wider">Consultora Imobiliária</p>
              </div>
              <h2 className="text-3xl font-light text-dimas-black mb-6">Entre em contato</h2>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-dimas-black/80 font-light mb-12">
                Estou à disposição para ajudar você a encontrar o imóvel ideal para suas necessidades. Entre em contato
                para agendar uma consulta personalizada.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-fernanda-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-dimas-black mb-1">Telefone</h3>
                    <p className="text-dimas-black/60">+55 (XX) XXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-fernanda-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-dimas-black mb-1">E-mail</h3>
                    <p className="text-dimas-black/60">fernanda@dimasconstrucoes.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-fernanda-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-dimas-black mb-1">Escritório</h3>
                    <p className="text-dimas-black/60">Endereço da Dimas Construções</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-light text-dimas-black mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-fernanda-gold/10 flex items-center justify-center text-fernanda-gold hover:bg-fernanda-gold hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-fernanda-gold/10 flex items-center justify-center text-fernanda-gold hover:bg-fernanda-gold hover:text-white transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 rounded-full bg-fernanda-gold/10 flex items-center justify-center text-fernanda-gold hover:bg-fernanda-gold hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="aspect-[16/9] relative rounded-none overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Mapa Dimas Construções"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 shadow-md border-t-2 border-fernanda-gold">
                <h3 className="text-2xl font-light text-dimas-black mb-6">Agende uma consulta</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-dimas-black/80 mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-light text-dimas-black/80 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-dimas-black/80 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-light text-dimas-black/80 mb-1">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                    >
                      <option value="">Selecione um empreendimento</option>
                      <option value="dverse">D'VERSE</option>
                      <option value="dseason">D'SEASON</option>
                      <option value="dsense">D'SENSE</option>
                      <option value="dvert">D'VERT</option>
                      <option value="dyard">D'YARD</option>
                      <option value="dnex">D'NEX</option>
                      <option value="other">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-dimas-black/80 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider py-6 transition-colors duration-300 group">
                      <span>Enviar mensagem</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>

              <div className="mt-12 bg-dimas-beige p-8">
                <h3 className="text-xl font-light text-dimas-black mb-6">Horário de Atendimento</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-dimas-black/70">Segunda a Sexta</span>
                    <span className="text-dimas-black font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dimas-black/70">Sábado</span>
                    <span className="text-dimas-black font-medium">9h às 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dimas-black/70">Domingo e Feriados</span>
                    <span className="text-dimas-black font-medium">Mediante agendamento</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dimas-beige">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-light text-dimas-black mb-6">O que dizem sobre Fernanda</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
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
                <p className="text-dimas-black/80 italic">
                  "Fernanda foi excepcional durante todo o processo de compra do meu imóvel. Seu conhecimento sobre os
                  empreendimentos Dimas e sua atenção personalizada fizeram toda a diferença. Recomendo a todos que
                  buscam um imóvel de alto padrão."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

