"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useGTM } from "@/hooks/use-gtm"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pushEvent } = useGTM()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para rastrear cliques em links de navegação
  const handleNavClick = (linkName: string) => {
    try {
      pushEvent('navigationClick', { 
        linkName: linkName,
        linkCategory: 'mainNavigation'
      })
    } catch (error) {
      console.error("Erro ao registrar evento de navegação:", error)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-dimas-black py-4" : "bg-dimas-black/80 py-6"}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link 
          href="/" 
          className="relative z-10 flex items-center"
          onClick={() => handleNavClick('Home-Logo')}
        >
          <div className="relative h-12 w-12 mr-3">
            <Image
              src="/images/Logo SF.png"
              alt="SF Logo"
              fill
              className="object-contain brightness-0 invert"
              priority
            />
          </div>
          <div className="h-8 w-px bg-fernanda-gold/30 mx-3 hidden md:block"></div>
          <div className="hidden md:block">
            <p className="text-white text-xs uppercase tracking-wider">Consultora</p>
            <p className="text-fernanda-gold font-medium">Fernanda</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "Sobre", href: "/sobre" },
            { name: "Empreendimentos", href: "/empreendimentos" },
            { name: "Contato", href: "/contato" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-sm uppercase tracking-wider hover:text-fernanda-gold transition-colors"
              onClick={() => handleNavClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-dimas-black z-50 flex flex-col">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link 
              href="/" 
              className="relative z-10 flex items-center"
              onClick={() => {
                handleNavClick('Home-Logo-Mobile')
                setMenuOpen(false)
              }}
            >
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="/images/Logo SF.png"
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
            </Link>

            <button className="text-white" onClick={() => setMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {[
              { name: "Home", href: "/" },
              { name: "Sobre", href: "/sobre" },
              { name: "Empreendimentos", href: "/empreendimentos" },
              { name: "Contato", href: "/contato" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-2xl uppercase tracking-wider"
                onClick={() => {
                  handleNavClick(`${item.name}-Mobile`)
                  setMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

