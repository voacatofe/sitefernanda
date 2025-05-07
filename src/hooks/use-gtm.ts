// Hook para enviar eventos personalizados para o Google Tag Manager (DataLayer)

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const useGTM = () => {
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