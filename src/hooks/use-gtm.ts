// Hook para gerenciar operações do Google Tag Manager (DataLayer)
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Tipagem para o DataLayer
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

/**
 * Hook para gerenciar operações do GTM (Google Tag Manager)
 * 
 * Automaticamente rastreia mudanças de página
 * Disponibiliza funções para enviar eventos personalizados para o dataLayer
 */
export const useGTM = () => {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

  // Rastrear mudanças de página automaticamente
  useEffect(() => {
    if (pathname && pathname !== lastPathRef.current) {
      lastPathRef.current = pathname;
      
      window.dataLayer = window.dataLayer || [];
      
      // Enviar evento de visualização de página virtual
      window.dataLayer.push({
        'event': 'virtualPageview',
        'pagePath': pathname,
        'pageTitle': document.title
      });
    }
  }, [pathname]);

  // Função para enviar eventos personalizados para o dataLayer
  const pushEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      
      window.dataLayer.push({
        'event': eventName,
        ...(eventParams || {})
      });
    }
  };

  return { pushEvent };
}; 