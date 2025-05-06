"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useGTM } from "@/hooks/use-gtm"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Inicializa o rastreamento GTM
  useGTM();
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
} 