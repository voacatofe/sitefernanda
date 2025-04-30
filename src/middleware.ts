import { NextResponse, NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt"

// Só aplicar o middleware em ambiente de desenvolvimento ou produção com backend
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

// Mapeamento de domínios para rotas de landing pages
const DOMAIN_MAPPING: Record<string, string> = {
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