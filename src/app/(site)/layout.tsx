"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useGTMPageview } from "@/hooks/use-gtm-pageview"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Rastreia pageview apenas aqui
  useGTMPageview();
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
} 