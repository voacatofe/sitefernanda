import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

// Só aplicar o middleware em ambiente de desenvolvimento ou produção com backend
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

export const config = {
  matcher: ["/admin/:path*"]
}

export async function middleware(request: NextRequest) {
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