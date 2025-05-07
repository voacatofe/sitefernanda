// Hook para enviar eventos personalizados para o Google Tag Manager (DataLayer)

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export interface GTMEvent {
  event: string
  [key: string]: any
}

// Função para debounce de eventos
let eventDebounceMap: Record<string, number> = {}

export const useGTM = () => {
  const pushEvent = (eventName: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined") {
      // Inicializa o dataLayer se não existir
      window.dataLayer = window.dataLayer || []
      
      // Cria uma string única baseada no nome do evento e parâmetros para debounce
      const eventKey = `${eventName}-${JSON.stringify(params)}`
      
      // Limpa qualquer debounce pendente para este mesmo evento
      if (eventDebounceMap[eventKey]) {
        clearTimeout(eventDebounceMap[eventKey])
      }
      
      // Configura um novo debounce para este evento
      eventDebounceMap[eventKey] = window.setTimeout(() => {
        // Envia o evento para o dataLayer
        window.dataLayer.push({
          event: eventName,
          ...params,
        })
        
        // Limpa a referência do debounce
        delete eventDebounceMap[eventKey]
      }, 100) // 100ms é um bom equilíbrio para evitar duplicação sem perder eventos
    }
  }

  return { pushEvent }
} 