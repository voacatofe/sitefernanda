"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScheduleVisitForm } from "@/components/ScheduleVisitForm"
import JeitoDimas from "@/components/JeitoDimas"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { sendRDStationConversion } from "@/services/rdstation"
import { useGTM } from "@/hooks/use-gtm"

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  })
  
  const { pushEvent } = useGTM()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Enviar dados para o RD Station
      const result = await sendRDStationConversion(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cf_interesse: `Contato: ${formData.interest || "Não especificado"}`,
          cf_mensagem: formData.message,
          tags: ["contato", "site", formData.interest.toLowerCase().replace(/\s+/g, '-')],
          traffic_source: window.location.href
        },
        "formulario-contato-site"
      )

      // Enviar evento para o Google Tag Manager
      pushEvent('conversion', {
        formName: 'contato-site',
        formTitle: 'Formulário de Contato',
        empreendimento: formData.interest,
        leadEmail: formData.email,
        leadPhone: formData.phone,
        rdStationStatus: result.success ? 'success' : 'error'
      })
      
      console.log("Resultado RD Station:", result)
      
      // Mostrar modal de sucesso mesmo se houver erro no RD Station
      setShowSuccessModal(true)
      
      // Limpa o formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      // Enviar evento de erro para o GTM
      pushEvent('conversion_error', {
        formName: 'contato-site',
        errorDetail: String(error)
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-24">
        <Image
          src="/images/fs contato.png"
          alt="Contato Fernanda"
          fill
          className="object-cover object-[15%_0%]"
          priority
          quality={100}
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
                    <p className="text-dimas-black/60">+55 48 9210-2930</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-fernanda-gold/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-fernanda-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-dimas-black mb-1">E-mail</h3>
                    <p className="text-dimas-black/60">martinssoaresfernanda@gmail.com</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-light text-dimas-black mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/fernandasoares.imoveis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-fernanda-gold/10 flex items-center justify-center text-fernanda-gold hover:bg-fernanda-gold hover:text-white transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fernanda-soares-a133a120/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-fernanda-gold/10 flex items-center justify-center text-fernanda-gold hover:bg-fernanda-gold hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-dimas-black/80 mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                        value={formData.name}
                        onChange={handleChange}
                        required
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
                        value={formData.phone}
                        onChange={handleChange}
                        required
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-light text-dimas-black/80 mb-1">
                      Interesse
                    </label>
                    <select
                      id="interest"
                      className="w-full px-4 py-3 border border-dimas-beige focus:border-fernanda-gold focus:ring-0 outline-none"
                      value={formData.interest}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider py-6 transition-colors duration-300 group"
                      disabled={isSubmitting}
                    >
                      <span>{isSubmitting ? "Enviando..." : "Enviar mensagem"}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light text-dimas-black">Mensagem enviada com sucesso!</DialogTitle>
            <DialogDescription className="text-dimas-black/70 pt-2">
              Obrigada pelo seu contato. A Fernanda entrará em contato com você em breve para agendar sua consulta personalizada.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Jeito Dimas Section */}
      <JeitoDimas />
    </div>
  )
}

