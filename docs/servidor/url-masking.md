# Mascaramento de URL para Múltiplos Domínios

Este documento descreve a implementação de mascaramento de URL para que os domínios personalizados exibam o conteúdo das rotas específicas sem redirecionamento visível ao usuário.

## Estratégia de Mascaramento

O mascaramento de URL será implementado em duas camadas:

1. **Camada de Servidor (Nginx)**: Configuração do proxy reverso para direcionar as requisições para as rotas corretas
2. **Camada de Aplicação (Next.js)**: Middleware para detectar o domínio de origem e adaptar os links e recursos

## Implementação no Next.js

### 1. Criação do Middleware

Crie um arquivo `middleware.ts` na raiz do projeto:

```typescript
import { NextResponse, NextRequest } from 'next/server';

// Mapeamento de domínios para rotas de landing pages
const DOMAIN_MAPPING = {
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

export function middleware(request: NextRequest) {
  const { pathname, search, hash } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  
  // Verifica se o hostname atual está no mapeamento de domínios
  const targetPath = DOMAIN_MAPPING[hostname];
  
  // Se for um domínio específico de empreendimento
  if (targetPath) {
    // Para a raiz do domínio, redireciona para a landing page específica
    if (pathname === '/') {
      const url = new URL(targetPath, request.url);
      url.search = search;
      url.hash = hash;
      return NextResponse.rewrite(url);
    }
    
    // Para outros caminhos, verifica se já está acessando a LP correta
    if (!pathname.startsWith(targetPath)) {
      // Se estiver tentando acessar qualquer outra rota, redireciona para a LP deste domínio
      const url = new URL(targetPath, request.url);
      url.search = search;
      url.hash = hash;
      return NextResponse.rewrite(url);
    }
  }
  
  // Se não for um domínio específico ou já estiver na rota correta, continua normalmente
  return NextResponse.next();
}

// Configura o middleware para executar em todos os caminhos
export const config = {
  matcher: [
    /*
     * Corresponde a todas as requisições exceto:
     * 1. Requisições para arquivos estáticos (imagens, fontes, etc.)
     * 2. Requisições para API routes (/api/*)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|fonts).*)',
  ],
};
```

### 2. Adaptação dos Links Internos

Para garantir que todos os links internos mantenham o mascaramento de URL, crie um utilitário:

```typescript
// src/utils/url-utils.ts

interface DomainMapping {
  [key: string]: string;
}

// Mapeamento reverso de rotas para domínios
const ROUTE_TO_DOMAIN: DomainMapping = {
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
```

### 3. Componente Link Personalizado

Crie um componente `Link` personalizado que utiliza a função `adaptUrl`:

```typescript
// src/components/common/Link.tsx
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode, forwardRef } from 'react';
import { adaptUrl, useCurrentDomain } from '@/utils/url-utils';

interface LinkProps extends NextLinkProps {
  children?: ReactNode;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, children, ...props }, ref) => {
    const currentDomain = useCurrentDomain();
    const adaptedHref = typeof href === 'string' 
      ? adaptUrl(href, currentDomain) 
      : href;
    
    return (
      <NextLink href={adaptedHref} {...props} ref={ref}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
```

### 4. Utilização do Link Personalizado

Substitua todas as importações de `next/link` pelo componente personalizado:

```typescript
// Antes
import Link from 'next/link';

// Depois
import Link from '@/components/common/Link';
```

### 5. Adaptação para Imagens e Outros Recursos

Para imagens e outros recursos, adicione uma função de utilidade:

```typescript
// src/utils/asset-utils.ts
import { adaptUrl, useCurrentDomain } from './url-utils';

/**
 * Função para adaptar caminhos de imagens e outros assets
 */
export function getAssetPath(path: string): string {
  const currentDomain = useCurrentDomain();
  
  // Se o caminho já for uma URL absoluta, retorna sem modificar
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // Para caminhos relativos em /public, não precisa adaptar
  if (path.startsWith('/')) {
    return path;
  }
  
  // Para outros caminhos, utiliza a mesma lógica de adaptação de URLs
  return adaptUrl(path, currentDomain);
}

/**
 * Hook para obter o caminho de asset adaptado
 */
export function useAssetPath(path: string): string {
  const currentDomain = useCurrentDomain();
  return adaptUrl(path, currentDomain);
}
```

## Testando o Mascaramento de URL

Para testar localmente, você pode:

1. Modificar o arquivo hosts (`/etc/hosts` no Linux/Mac ou `C:\Windows\System32\drivers\etc\hosts` no Windows):

```
127.0.0.1    dimaspraivabrava.com.br
127.0.0.1    dimasjoaopaulo.com.br
127.0.0.1    dimasbeiramar.com.br
127.0.0.1    dimasestreito.com.br
127.0.0.1    dimassaojose.com.br
```

2. Iniciar o servidor Next.js e acessar os domínios no navegador.

3. Verificar se:
   - A landing page correta é exibida para cada domínio
   - As URLs não mostram o prefixo `/lp/nome-do-empreendimento`
   - Os links internos mantêm o domínio correto
   - As imagens e outros recursos carregam corretamente

## Considerações para Produção

1. Em produção, utilize variáveis de ambiente para configurar os mapeamentos de domínios.

2. Implemente monitoramento para verificar se o mascaramento está funcionando corretamente.

3. Configure headers HTTP adicionais para SEO, segurança e cache conforme necessário.

4. Verifique regularmente se todos os links internos estão sendo tratados corretamente pelo middleware.

5. Considere a implementação de uma estratégia de fallback caso o middleware falhe. 