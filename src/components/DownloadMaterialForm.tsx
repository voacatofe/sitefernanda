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
import { ArrowDown, FileText } from "lucide-react"
import { sendRDStationConversion } from "@/services/rdstation"
import { useGTM } from "@/hooks/use-gtm"

interface DownloadMaterialFormProps {
  title: string
  description: string
  fileUrl: string
  triggerButton?: React.ReactNode
  centered?: boolean
}

export function DownloadMaterialForm({
  title,
  description,
  fileUrl,
  triggerButton,
  centered = false,
}: DownloadMaterialFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const { pushEvent } = useGTM()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          cf_interesse: `Material: ${title}`,
          tags: ["download", "material", title.toLowerCase().replace(/\s+/g, '-')],
          traffic_source: window.location.href
        }, 
        "formulario-download-material"
      )

      // Enviar evento para o Google Tag Manager
      pushEvent('conversion', {
        formName: 'download-material',
        formTitle: title,
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
        formName: 'download-material',
        errorDetail: String(error)
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "" })
    setFormSubmitted(false)
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={centered ? "flex justify-center" : ""}>
          {triggerButton || (
            <button className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90 px-8 py-3 flex items-center font-medium uppercase text-sm tracking-wide">
              <FileText className="h-5 w-5 mr-3" />
              <span>Baixar Material</span>
            </button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
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
            </div>
            <DialogFooter>
              <Button 
                type="submit" 
                className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quero receber o material"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center gap-4">
            <p className="text-center">
              Obrigado por seu interesse! Clique no botão abaixo para baixar o material completo.
            </p>
            <a
              href={fileUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
              onClick={() => {
                pushEvent('material_download', {
                  materialTitle: title,
                  materialUrl: fileUrl
                })
              }}
            >
              <Button 
                className="bg-fernanda-gold text-dimas-black hover:bg-fernanda-gold/90"
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Baixar material
              </Button>
            </a>
            <Button
              variant="outline"
              onClick={resetForm}
              className="mt-2"
            >
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
} 