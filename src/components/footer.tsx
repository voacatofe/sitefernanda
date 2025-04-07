import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dimas-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/images/logo SF.png"
                  alt="SF Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
              <div className="h-8 w-px bg-fernanda-gold/30 mx-3"></div>
              <div>
                <p className="text-white text-xs uppercase tracking-wider">Consultora</p>
                <p className="text-fernanda-gold font-medium">Fernanda</p>
              </div>
            </div>
            <p className="text-dimas-gray mb-6 max-w-md text-sm">
              Consultora imobiliária de elite com mais de 18 anos de experiência e R$50 milhões em vendas nos últimos 24
              meses. Especializada em empreendimentos de alto padrão da Dimas Construções.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Empreendimentos</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/empreendimentos/dverse"
                  className="text-dimas-gray hover:text-fernanda-gold transition-colors"
                >
                  D'VERSE
                </Link>
              </li>
              <li>
                <Link
                  href="/empreendimentos/dseason"
                  className="text-dimas-gray hover:text-fernanda-gold transition-colors"
                >
                  D'SEASON
                </Link>
              </li>
              <li>
                <Link
                  href="/empreendimentos/dsense"
                  className="text-dimas-gray hover:text-fernanda-gold transition-colors"
                >
                  D'SENSE
                </Link>
              </li>
              <li>
                <Link
                  href="/empreendimentos/dvert"
                  className="text-dimas-gray hover:text-fernanda-gold transition-colors"
                >
                  D'VERT
                </Link>
              </li>
              <li>
                <Link
                  href="/empreendimentos/dyard"
                  className="text-dimas-gray hover:text-fernanda-gold transition-colors"
                >
                  D'YARD
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-fernanda-gold mr-3" />
                <span className="text-dimas-gray">+55 (XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-fernanda-gold mr-3" />
                <span className="text-dimas-gray">fernanda@dimasconstrucoes.com.br</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-fernanda-gold mr-3" />
                <span className="text-dimas-gray">Endereço da Dimas Construções</span>
              </li>
              <li className="flex items-center space-x-4 pt-4">
                <a href="#" className="text-dimas-gray hover:text-fernanda-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-dimas-gray hover:text-fernanda-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-dimas-gray hover:text-fernanda-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dimas-gray/20 mt-12 pt-8 text-center">
          <div className="relative mx-auto h-12 w-12 mb-6">
            <Image
              src="/images/logo SF.png"
              alt="SF Logo"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <p className="text-dimas-gray text-xs">
            © {new Date().getFullYear()} Dimas Construções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

