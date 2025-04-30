interface DomainMapping {
  [key: string]: string;
}

// Mapeamento de domínios para rotas de landing pages
export const DOMAIN_MAPPING: DomainMapping = {
  'dimaspraivabrava.com.br': '/lp/dverse',
  'www.dimaspraivabrava.com.br': '/lp/dverse',
  'dimasjoaopaulo.com.br': '/lp/dseason',
  'www.dimasjoaopaulo.com.br': '/lp/dseason',
  'dimasbeiramar.com.br': '/lp/dsense',
  'www.dimasbeiramar.com.br': '/lp/dsense',
  'dimasestreito.com.br': '/lp/dnex',
  'www.dimasestreito.com.br': '/lp/dnex',
  'dimassaojose.com.br': '/lp/dvert',
  'www.dimassaojose.com.br': '/lp/dvert',
};

// Mapeamento reverso de rotas para domínios
export const ROUTE_TO_DOMAIN: DomainMapping = {
  '/lp/dverse': 'dimaspraivabrava.com.br',
  '/lp/dseason': 'dimasjoaopaulo.com.br',
  '/lp/dsense': 'dimasbeiramar.com.br',
  '/lp/dnex': 'dimasestreito.com.br',
  '/lp/dvert': 'dimassaojose.com.br',
};

/**
 * Função que adapta URLs internos para preservar o mascaramento de URL
 * @param url URL interna ou rota a ser adaptada
 * @param currentDomain Domínio atual que está sendo acessado
 */
export function adaptUrl(url: string, currentDomain: string): string {
  // Se for uma URL absoluta ou externa, retorna sem modificar
  if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#')) {
    return url;
  }
  
  // Verifica se a URL começa com alguma das rotas mapeadas
  for (const route in ROUTE_TO_DOMAIN) {
    if (url.startsWith(route)) {
      // Se o domínio atual corresponde à rota, remove o prefixo da rota
      if (currentDomain === ROUTE_TO_DOMAIN[route] || 
          currentDomain === `www.${ROUTE_TO_DOMAIN[route]}`) {
        return url.replace(route, '');
      }
      
      // Se for uma rota diferente da atual, converte para URL absoluta
      // para direcionar para o domínio correto
      return `https://${ROUTE_TO_DOMAIN[route]}${url.replace(route, '')}`;
    }
  }
  
  // Para URLs que não correspondem a nenhuma rota específica, retorna sem modificar
  return url;
}

/**
 * Hook para obter o domínio atual
 */
export function useCurrentDomain(): string {
  if (typeof window === 'undefined') {
    return '';
  }
  
  return window.location.hostname;
}

/**
 * Função para determinar qual LP está sendo acessada com base no domínio
 * @param hostname Nome do host atual
 */
export function getLandingPageFromDomain(hostname: string): string | null {
  return DOMAIN_MAPPING[hostname] || null;
}

/**
 * Função para obter o domínio correto de uma LP
 * @param lpPath Caminho da landing page (/lp/dverse, etc.)
 */
export function getDomainFromLandingPage(lpPath: string): string | null {
  return ROUTE_TO_DOMAIN[lpPath] || null;
} 