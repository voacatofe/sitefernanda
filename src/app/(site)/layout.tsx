"use client"

import { useState, useEffect, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useGTM } from "@/hooks/use-gtm"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Inicializa o rastreamento GTM apenas uma vez usando um ref
  const initialized = useRef(false);
  const gtmHook = useGTM(); // Chamar o hook diretamente, mesmo sem usar o valor de retorno
  
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // O rastreamento de página já ocorre automaticamente dentro do hook useGTM
    }
  }, []);
  
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
} 