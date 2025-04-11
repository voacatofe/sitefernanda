import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "API Fernanda Soares Imóveis",
  description: "API para o site Fernanda Soares Imóveis",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}