import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactButton from './ContactButton';

interface HeaderProps {
  logoUrl: string;
  logoAlt?: string;
  whatsappNumber: string;
  phoneNumber?: string;
  showNav?: boolean;
  transparentOnTop?: boolean;
  brand?: string;
}

/**
 * Header - Componente de cabeçalho para landing pages
 * 
 * @param logoUrl URL da logo
 * @param logoAlt Texto alternativo para a logo
 * @param whatsappNumber Número do WhatsApp
 * @param phoneNumber Número de telefone para contato
 * @param showNav Exibir menu de navegação
 * @param transparentOnTop Header transparente quando estiver no topo da página
 * @param brand Nome específico do empreendimento para personalização
 */
const Header: React.FC<HeaderProps> = ({
  logoUrl,
  logoAlt = 'Fernanda Soares Imóveis',
  whatsappNumber,
  phoneNumber,
  showNav = false,
  transparentOnTop = false,
  brand
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para alterar aparência do header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Verificar scroll inicial
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Determinar classes com base no estado
  const headerClasses = `
    fixed top-0 left-0 right-0 z-40 transition-all duration-300
    ${transparentOnTop && !scrolled 
      ? 'bg-transparent text-white' 
      : 'bg-white text-gray-900 shadow-md'}
    ${scrolled ? 'py-2' : 'py-4'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative h-12 w-48">
          <Link href="/">
            <Image 
              src={logoUrl} 
              alt={logoAlt} 
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Menu de navegação em desktop */}
        {showNav && (
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="#sobre" className="hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="#diferenciais" className="hover:text-blue-600 transition-colors">
              Diferenciais
            </Link>
            <Link href="#galeria" className="hover:text-blue-600 transition-colors">
              Galeria
            </Link>
            <Link href="#localizacao" className="hover:text-blue-600 transition-colors">
              Localização
            </Link>
            <Link href="#contato" className="hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </nav>
        )}

        {/* Botões de contato */}
        <div className="hidden md:flex items-center space-x-3">
          {phoneNumber && (
            <ContactButton 
              type="phone" 
              value={phoneNumber} 
              variant="button" 
              size="md"
            />
          )}
          <ContactButton 
            type="whatsapp" 
            value={whatsappNumber} 
            variant="button" 
            size="md" 
            text={brand ? `Falar sobre ${brand}` : undefined} 
          />
        </div>

        {/* Botão do menu mobile */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu de navegação"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute top-full left-0 right-0 border-t border-gray-200">
          {showNav && (
            <nav className="flex flex-col space-y-4 mb-4">
              <Link href="#sobre" className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100">
                Sobre
              </Link>
              <Link href="#diferenciais" className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100">
                Diferenciais
              </Link>
              <Link href="#galeria" className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100">
                Galeria
              </Link>
              <Link href="#localizacao" className="hover:text-blue-600 transition-colors py-2 border-b border-gray-100">
                Localização
              </Link>
              <Link href="#contato" className="hover:text-blue-600 transition-colors py-2">
                Contato
              </Link>
            </nav>
          )}
          
          <div className="flex flex-col space-y-3">
            {phoneNumber && (
              <ContactButton 
                type="phone" 
                value={phoneNumber} 
                variant="button" 
                size="md" 
                className="w-full"
              />
            )}
            <ContactButton 
              type="whatsapp" 
              value={whatsappNumber} 
              variant="button" 
              size="md" 
              text={brand ? `Falar sobre ${brand}` : undefined} 
              className="w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 