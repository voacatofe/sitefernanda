"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const isLoginPage = pathname === "/admin/login"
  const isLoading = status === "loading"

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg">Carregando...</p>
      </div>
    )
  }

  if (!session && !isLoginPage) {
    return <main>{children}</main>
  }

  if (isLoginPage) {
    return <main>{children}</main>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light">Painel Administrativo</h1>
            <nav className="space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/admin/empreendimentos">Empreendimentos</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/">Voltar ao Site</Link>
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
              >
                Sair
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
} 