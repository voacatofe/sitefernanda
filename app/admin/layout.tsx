import type React from "react"
import { galano } from "../fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${galano.variable} font-galano antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
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
                  </nav>
                </div>
              </div>
            </header>

            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 