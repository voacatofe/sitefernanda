import React from 'react';
import Link from 'next/link';

export type ContactButtonType = 'whatsapp' | 'phone' | 'email';
export type ContactButtonVariant = 'button' | 'icon' | 'floating';
export type ContactButtonSize = 'sm' | 'md' | 'lg';

interface ContactButtonProps {
  type: ContactButtonType;
  value: string;
  text?: string;
  variant?: ContactButtonVariant;
  size?: ContactButtonSize;
  className?: string;
  fixed?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

/**
 * ContactButton - Componente para botões de contato (WhatsApp, telefone, email)
 * 
 * @param type Tipo de contato (whatsapp, phone, email)
 * @param value Número de telefone ou email
 * @param text Texto a ser exibido
 * @param variant Variante de estilo (button, icon, floating)
 * @param size Tamanho do botão (sm, md, lg)
 * @param className Classes CSS adicionais
 * @param fixed Se o botão deve ficar fixo na tela
 * @param position Posição do botão fixo
 */
const ContactButton: React.FC<ContactButtonProps> = ({
  type,
  value,
  text,
  variant = 'button',
  size = 'md',
  className = '',
  fixed = false,
  position = 'bottom-right'
}) => {
  // Formatar valor para uso em links
  const formattedValue = formatValue(type, value);
  
  // Determinar o texto a ser exibido
  const displayText = text || getDefaultText(type);
  
  // Configurar URL baseado no tipo de contato
  const href = getContactUrl(type, formattedValue);
  
  // Determinar ícone baseado no tipo
  const icon = getIcon(type);
  
  // Determinar classes com base nas props
  const buttonClasses = getButtonClasses(variant, size, type, fixed, position, className);
  
  return (
    <Link href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
      <span className="icon mr-2">{icon}</span>
      {(variant !== 'icon') && <span>{displayText}</span>}
    </Link>
  );
};

// Função para formatar o valor (número de telefone, email)
function formatValue(type: ContactButtonType, value: string): string {
  if (type === 'whatsapp' || type === 'phone') {
    // Remove caracteres não numéricos do telefone
    return value.replace(/\D/g, '');
  }
  return value;
}

// Função para obter texto padrão baseado no tipo
function getDefaultText(type: ContactButtonType): string {
  switch (type) {
    case 'whatsapp':
      return 'Fale pelo WhatsApp';
    case 'phone':
      return 'Ligue agora';
    case 'email':
      return 'Envie um email';
    default:
      return 'Entre em contato';
  }
}

// Função para obter URL baseado no tipo
function getContactUrl(type: ContactButtonType, value: string): string {
  switch (type) {
    case 'whatsapp':
      return `https://wa.me/55${value}`;
    case 'phone':
      return `tel:+55${value}`;
    case 'email':
      return `mailto:${value}`;
    default:
      return '#';
  }
}

// Função para obter ícone baseado no tipo
function getIcon(type: ContactButtonType): React.ReactNode {
  switch (type) {
    case 'whatsapp':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.964 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.571-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
        </svg>
      );
    case 'phone':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M16.39 22A15.53 15.53 0 0 1 1 6.61c0-.91.25-1.76.75-2.54a5 5 0 0 1 2-1.85 4.65 4.65 0 0 1 1.34-.45 3 3 0 0 1 .54-.05 1 1 0 0 1 1 .87l1.41 6.5a1 1 0 0 1-.57 1.1L5 11.25a12.9 12.9 0 0 0 7.72 7.72l1.06-2.43a1 1 0 0 1 1.11-.57l6.5 1.41a1 1 0 0 1 .82 1c0 .15 0 .3-.05.55a4.65 4.65 0 0 1-.45 1.33 5.08 5.08 0 0 1-1.85 2c-.78.5-1.63.75-2.54.75zM4.33 4.32c-.3.1-.6.24-.89.4a3 3 0 0 0-1.18 1.13 2.32 2.32 0 0 0-.41 1.4 13.69 13.69 0 0 0 13.6 13.6 2.32 2.32 0 0 0 1.4-.41 3.08 3.08 0 0 0 1.13-1.18c.16-.29.3-.58.4-.89l-5.11-1.1-1.11 2.53a1 1 0 0 1-.89.54 15.2 15.2 0 0 1-10.26-10.26 1 1 0 0 1 .53-.9l2.53-1.1z"/>
        </svg>
      );
    case 'email':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      );
    default:
      return null;
  }
}

// Função para construir classes CSS
function getButtonClasses(
  variant: ContactButtonVariant,
  size: ContactButtonSize,
  type: ContactButtonType,
  fixed: boolean,
  position: string,
  className: string
): string {
  let classes = 'flex items-center justify-center rounded-md transition-all duration-300 ';
  
  // Variantes
  switch (variant) {
    case 'icon':
      classes += 'p-2 ';
      break;
    case 'floating':
      classes += 'rounded-full shadow-lg p-4 ';
      break;
    default:
      classes += 'px-4 py-2 ';
  }
  
  // Tamanhos
  switch (size) {
    case 'sm':
      classes += variant === 'icon' ? 'text-sm ' : 'text-sm px-3 py-1 ';
      break;
    case 'lg':
      classes += variant === 'icon' ? 'text-xl ' : 'text-lg px-6 py-3 ';
      break;
    default:
      classes += variant === 'icon' ? 'text-base ' : 'text-base ';
  }
  
  // Cores por tipo
  switch (type) {
    case 'whatsapp':
      classes += 'bg-[#25D366] text-white hover:bg-[#128C7E] ';
      break;
    case 'phone':
      classes += 'bg-[#0F4C81] text-white hover:bg-[#0D3B69] ';
      break;
    case 'email':
      classes += 'bg-[#DB4437] text-white hover:bg-[#B93221] ';
      break;
  }
  
  // Posição fixa
  if (fixed) {
    classes += 'fixed z-50 ';
    switch (position) {
      case 'bottom-right':
        classes += 'bottom-4 right-4 ';
        break;
      case 'bottom-left':
        classes += 'bottom-4 left-4 ';
        break;
      case 'top-right':
        classes += 'top-4 right-4 ';
        break;
      case 'top-left':
        classes += 'top-4 left-4 ';
        break;
    }
  }
  
  // Adicionar classes personalizadas
  classes += className;
  
  return classes;
}

export default ContactButton; 