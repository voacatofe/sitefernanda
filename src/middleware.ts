import { NextResponse, NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt"

// Só aplicar o middleware em ambiente de desenvolvimento ou produção com backend
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

// Mapeamento de domínios para landing pages
const domainMappings: Record<string, string> = {
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

// Mapeamento inverso para verificar se um caminho é uma LP específica
const pathToDomain: Record<string, string> = {
  '/lp/dverse': 'dimaspraivabrava.com.br',
  '/lp/dseason': 'dimasjoaopaulo.com.br',
  '/lp/dsense': 'dimasbeiramar.com.br',
  '/lp/dnex': 'dimasestreito.com.br',
  '/lp/dvert': 'dimassaojose.com.br',
};

export function middleware(request: NextRequest) {
  // Obter o hostname (domínio) da solicitação
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;
  
  // Verificar se o domínio está em nosso mapeamento
  const path = domainMappings[hostname];
  
  // Caso 1: Acessando diretamente um dos domínios mapeados (caso funcione sem redirecionamento)
  if (path) {
    // Criar uma nova URL para a landing page
    const url = new URL(path, request.url);
    
    // Se a URL já tiver um caminho adicional após o domínio, preservá-lo
    if (pathname && pathname !== '/') {
      url.pathname = `${path}${pathname}`;
    }
    
    // Manter parâmetros de consulta, se houver
    url.search = request.nextUrl.search;
    
    // Redirecionar para a landing page
    return NextResponse.rewrite(url);
  }
  
  // Caso 2: Estamos no domínio principal (fernandasoaresimoveis.com.br)
  // e queremos verificar se o caminho corresponde a alguma LP
  if (hostname.includes('fernandasoaresimoveis.com.br')) {
    // Verificar se o caminho atual já corresponde a alguma LP
    for (const [lpPath, _] of Object.entries(pathToDomain)) {
      if (pathname.startsWith(lpPath)) {
        // Já estamos na LP correta, não fazer nada
        return NextResponse.next();
      }
    }
    
    // Verificar se estamos tentando acessar uma LP diretamente
    // (por exemplo: fernandasoaresimoveis.com.br/lp/dverse)
    const lpMatches = pathname.match(/^\/lp\/([a-zA-Z0-9]+)/);
    if (lpMatches) {
      const lpName = lpMatches[1];
      // Verificar se essa LP existe
      const lpPath = `/lp/${lpName}`;
      if (Object.values(domainMappings).includes(lpPath)) {
        // Já estamos na LP correta, não fazer nada
        return NextResponse.next();
      }
    }
  }
  
  // Para outros domínios ou caminhos, continuar normalmente
  return NextResponse.next();
}

// Configuração para que o middleware seja executado em todas as rotas
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside public)
     * 4. /images (inside public)
     * 5. all root files inside public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|images|[\\w-]+\\.\\w+).*)',
  ],
};

export async function middlewareAdmin(request: NextRequest) {
  // Retornar imediatamente se estiver em ambiente de exportação estática
  if (isStaticExport) {
    return NextResponse.next();
  }

  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET ?? "",
    secureCookie: process.env.NODE_ENV === "production",
    salt: "authjs.session-token"
  })

  const isAdminPath = request.nextUrl.pathname.startsWith("/admin")
  const isLoginPath = request.nextUrl.pathname === "/admin/login"

  if (!token && isAdminPath && !isLoginPath) {
    const url = new URL("/admin/login", request.url)
    url.searchParams.set("callbackUrl", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  if (token && isLoginPath) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
} 