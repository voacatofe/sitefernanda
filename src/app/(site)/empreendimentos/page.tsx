"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import { projectsData } from "@/app/data/empreendimentos/projects"
import { ScheduleVisitForm } from "@/components/ScheduleVisitForm"

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Converte os dados do projectsData para o formato da página
  const projects = Object.entries(projectsData).map(([id, project]) => ({
    id,
    title: project.title,
    description: project.tagline,
    image: project.heroImage,
    link: `/empreendimentos/${id}`,
    recommended: project.status === "lancamento" || project.status === "construcao"
  }))

  return (
    <main className="min-h-screen bg-white pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/ponte.png"
            alt="Empreendimentos Dimas"
            fill
            sizes="100vw"
            className="object-cover brightness-75 object-[75%_center] md:object-center"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1 bg-fernanda-gold/20 text-white text-sm uppercase tracking-wider border border-fernanda-gold/50">
                  Seleção Fernanda
                </span>
              </div>
              <h1 className="text-white text-3xl md:text-5xl font-light mb-6 tracking-wider">EMPREENDIMENTOS</h1>
              <div className="w-20 h-0.5 bg-fernanda-gold mb-8"></div>
              <p className="text-white/90 max-w-xl">
                Conheça os projetos exclusivos da Dimas Construções selecionados por Fernanda
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fernanda's Selection */}
      <section className="py-16 bg-dimas-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-light text-dimas-black mb-6">Recomendados por Fernanda</h2>
            <div className="w-20 h-0.5 bg-fernanda-gold mx-auto mb-8"></div>
            <p className="text-dimas-black/70">
              Empreendimentos selecionados especialmente por Fernanda com base em sua experiência e conhecimento do
              mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={project.link} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {project.recommended && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-3 py-1 bg-fernanda-gold text-dimas-black text-xs uppercase tracking-wider">
                          Recomendado
                        </div>
                      </div>
                    )}

                    <div className="project-title-overlay">
                      <h3 className="text-2xl font-light text-white">{project.title}</h3>
                    </div>

                    <div className="project-card-overlay">
                      <h3 className="text-2xl font-light text-white mb-4">{project.title}</h3>
                      <p className="text-white/80 font-light mb-6">{project.description}</p>
                      <span className="inline-flex items-center text-fernanda-gold">
                        <span className="text-sm uppercase tracking-wider mr-2">Saiba mais</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fernanda CTA */}
      <section className="py-16 bg-dimas-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto lg:mx-0">
                <Image src="/images/fs.jpg" alt="Fernanda" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 text-center lg:text-left">
              <h3 className="text-2xl font-light mb-2">Precisa de ajuda para escolher?</h3>
              <p className="text-white/70">
                Agende uma consulta personalizada com Fernanda e descubra qual empreendimento é ideal para você.
              </p>
            </div>
            <div className="lg:col-span-3 text-center lg:text-right">
              <ScheduleVisitForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

