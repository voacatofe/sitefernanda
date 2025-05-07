"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { sendRDStationConversion } from "@/services/rdstation"
import { useGTM } from "@/hooks/use-gtm"

interface ScheduleVisitFormProps {
  projectTitle?: string
  triggerButton?: React.ReactNode
  centered?: boolean
}

export function ScheduleVisitForm({
  projectTitle,
  triggerButton,
  centered = false,
}: ScheduleVisitFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: projectTitle || "Não especificado"
  })
  const { pushEvent } = useGTM()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Enviar dados para o RD Station
      const result = await sendRDStationConversion(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          cf_interesse: `Agendamento: ${formData.interest}`,
          cf_mensagem: formData.message,
          tags: ["agendamento", "visita", formData.interest.toLowerCase().replace(/\s+/g, '-')],
          traffic_source: window.location.href
        },
        "formulario-agendamento-visita"
      )

      // Enviar evento para o Google Tag Manager
      pushEvent('conversion', {
        formName: 'agendamento-visita',
        empreendimento: formData.interest,
        leadEmail: formData.email,
        leadPhone: formData.phone,
        rdStationStatus: result.success ? 'success' : 'error'
      })
      
      console.log("Resultado RD Station:", result)
      
      // Mostrar formulário de sucesso mesmo se houver erro no RD Station
      setFormSubmitted(true)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      // Enviar evento de erro para o GTM
      pushEvent('conversion_error', {
        formName: 'agendamento-visita',
        errorDetail: String(error)
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      message: "",
      interest: projectTitle || "Não especificado"
    })
    setFormSubmitted(false)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={centered ? "flex justify-center" : ""}>
          {triggerButton || (
            <Button className="bg-dimas-black text-white hover:bg-fernanda-gold hover:text-dimas-black rounded-none uppercase text-xs tracking-wider px-8 py-6 group">
              <span>Agende uma visita</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Solicite informações{projectTitle ? ` sobre o ${projectTitle}` : ""}</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para entrar em contato com a consultora Fernanda e saber mais sobre{projectTitle ? ` o ${projectTitle}` : " nossos empreendimentos"}.
          </DialogDescription>
        </DialogHeader>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="col-span-3"
                  required
                />
              </div>
              
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="message" className="text-right">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="col-span-3"
                  rows={3}
                  placeholder="Conte-nos o que você está procurando, dias e horários de preferência para contato ou qualquer outra informação relevante..."
                />
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="submit" 
                className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitação"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center gap-4">
            <p className="text-center">
              Obrigado por seu interesse! Recebemos sua solicitação 
              {projectTitle ? ` para o ${projectTitle}` : ""}.
            </p>
            <p className="text-center text-sm text-muted-foreground">
              Nossa consultora Fernanda entrará em contato em breve.
            </p>
            <Button
              onClick={resetForm}
              className="mt-4 bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90"
            >
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 