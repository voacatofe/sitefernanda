import type React from "react"
import type { Metadata } from "next"
import { galano } from "./fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Fernanda | Consultora Imobiliária Dimas Construções",
  description:
    "Consultora imobiliária de elite com mais de 18 anos de experiência e R$50 milhões em vendas nos últimos 24 meses.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${galano.variable} font-galano antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}