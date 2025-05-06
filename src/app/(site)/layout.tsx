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
  
  useEffect(() => {
    if (!initialized.current) {
      const { pushEvent } = useGTM();
      initialized.current = true;
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