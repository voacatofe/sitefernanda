// Hook para gerenciar operações do Google Tag Manager (DataLayer)
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Tipagem para o DataLayer
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

// Verificação de ambiente do lado do cliente
const isClient = typeof window !== 'undefined';

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
    // Verifica se estamos executando no navegador e se o caminho mudou
    if (isClient && pathname && pathname !== lastPathRef.current) {
      lastPathRef.current = pathname;
      
      // Garante que o dataLayer esteja inicializado
      window.dataLayer = window.dataLayer || [];
      
      // Pequeno timeout para garantir que o título da página foi atualizado
      setTimeout(() => {
        window.dataLayer.push({
          'event': 'virtualPageview',
          'pagePath': pathname,
          'pageTitle': document.title
        });
      }, 0);
    }
  }, [pathname]);

  // Função para enviar eventos personalizados para o dataLayer
  const pushEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (isClient) {
      window.dataLayer = window.dataLayer || [];
      
      window.dataLayer.push({
        'event': eventName,
        ...(eventParams || {})
      });
    }
  };

  return { pushEvent };
}; 