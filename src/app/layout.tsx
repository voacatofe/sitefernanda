import type React from "react"
import type { Metadata } from "next"
import { galano } from "./fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

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
      {/* Inicializar dataLayer */}
      <Script id="init-datalayer" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
        `}
      </Script>
      {/* Google Tag Manager Script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M9DWRX7N');
        `}
      </Script>
      <body className={`${galano.variable} font-galano antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9DWRX7N"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />
        {/* End Google Tag Manager (noscript) */}
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}