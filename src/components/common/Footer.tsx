import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactButton from './ContactButton';

interface SocialLink {
  url: string;
  icon: React.ReactNode;
  label: string;
}

interface FooterProps {
  logoUrl: string;
  logoAlt?: string;
  endereco?: string;
  whatsappNumber: string;
  phoneNumber?: string;
  email?: string;
  copyright?: string;
  socialLinks?: SocialLink[];
  empreendimento?: string;
  developer?: string;
  developerLogo?: string;
  simpleLayout?: boolean;
}

/**
 * Footer - Componente de rodapé para landing pages
 * 
 * @param logoUrl URL da logo
 * @param logoAlt Texto alternativo para a logo
 * @param endereco Endereço da empresa
 * @param whatsappNumber Número do WhatsApp
 * @param phoneNumber Número de telefone para contato
 * @param email Email para contato
 * @param copyright Mensagem de copyright
 * @param socialLinks Links para redes sociais
 * @param empreendimento Nome do empreendimento
 * @param developer Nome da construtora
 * @param developerLogo Logo da construtora
 * @param simpleLayout Layout simplificado (para landing pages pequenas)
 */
const Footer: React.FC<FooterProps> = ({
  logoUrl,
  logoAlt = 'Fernanda Soares Imóveis',
  endereco,
  whatsappNumber,
  phoneNumber,
  email,
  copyright = `© ${new Date().getFullYear()} Fernanda Soares Imóveis. Todos os direitos reservados.`,
  socialLinks = [],
  empreendimento,
  developer,
  developerLogo,
  simpleLayout = false
}) => {
  const defaultSocialLinks: SocialLink[] = [
    {
      url: 'https://www.instagram.com/fernandasoaresimoveis',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      label: 'Instagram'
    },
    {
      url: 'https://www.facebook.com/fernandasoaresimoveis',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: 'Facebook'
    },
    {
      url: `https://wa.me/55${whatsappNumber}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.571-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
        </svg>
      ),
      label: 'WhatsApp'
    }
  ];

  // Mesclar links sociais padrão com os fornecidos
  const mergedSocialLinks = [...defaultSocialLinks, ...socialLinks];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      {simpleLayout ? (
        // Layout simplificado
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="relative h-16 w-48 mx-auto md:mx-0 mb-4">
                <Image 
                  src={logoUrl} 
                  alt={logoAlt} 
                  fill
                  className="object-contain" 
                />
              </div>
              {endereco && <p className="text-gray-400 text-sm mb-2">{endereco}</p>}
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-3">
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
                text={empreendimento ? `Falar sobre ${empreendimento}` : undefined} 
              />
            </div>
          </div>

          <hr className="border-gray-800 my-6" />

          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500">{copyright}</p>
            </div>

            <div className="flex space-x-4">
              {mergedSocialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="text-gray-400 hover:text-white transition-colors" 
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Layout completo
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coluna 1: Logo e informações da empresa */}
            <div>
              <div className="relative h-16 w-48 mb-4">
                <Image 
                  src={logoUrl} 
                  alt={logoAlt} 
                  fill
                  className="object-contain" 
                />
              </div>
              
              {endereco && <p className="text-gray-400 text-sm mb-4">{endereco}</p>}
              
              <div className="flex space-x-4 mb-4">
                {mergedSocialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors" 
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna 2: Links rápidos */}
            <div>
              <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="text-gray-400 hover:text-white transition-colors">
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-400 hover:text-white transition-colors">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#localizacao" className="text-gray-400 hover:text-white transition-colors">
                    Localização
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contato</h3>
              <ul className="space-y-3">
                {phoneNumber && (
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.98.98 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66a.98.98 0 0 0 .28-.9c-.15-.54-.54-2.09-.54-3.23 0-.54-.44-.98-.98-.98H4.18c-.54 0-1.17.44-1.17.98 0 9.98 8.14 17.94 18.15 17.94.54 0 1.15-.44 1.15-.98v-4.16c0-.53-.44-.97-.98-.97"/>
                    </svg>
                    <a href={`tel:+55${phoneNumber.replace(/\D/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                      {phoneNumber}
                    </a>
                  </li>
                )}
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.571-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                  </svg>
                  <a href={`https://wa.me/55${whatsappNumber.replace(/\D/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                {email && (
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors">
                      {email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Coluna 4: Empreendimento */}
            {empreendimento && (
              <div>
                <h3 className="text-lg font-bold mb-4">{empreendimento}</h3>
                {developer && (
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Desenvolvido por:</p>
                    {developerLogo ? (
                      <div className="relative h-12 w-32">
                        <Image 
                          src={developerLogo} 
                          alt={developer} 
                          fill
                          className="object-contain" 
                        />
                      </div>
                    ) : (
                      <p className="text-white">{developer}</p>
                    )}
                  </div>
                )}
                <div className="mt-4">
                  <ContactButton 
                    type="whatsapp" 
                    value={whatsappNumber} 
                    variant="button" 
                    size="md" 
                    text={`Falar sobre ${empreendimento}`} 
                  />
                </div>
              </div>
            )}
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="text-center text-sm text-gray-500">
            <p>{copyright}</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 