'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

// Contexto de autenticação
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar sessão atual do usuário
    const getSession = async () => {
      // Verificar se o supabase está disponível (client-side)
      if (!supabase) {
        setLoading(false)
        return
      }
      
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user || null)
      } catch (error) {
        console.error('Erro ao obter sessão:', error)
      } finally {
        setLoading(false)
      }
    }

    getSession()

    // Configurar listener para mudanças de autenticação
    let subscription
    if (supabase) {
      const { data } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          setUser(session?.user || null)
        }
      )
      subscription = data.subscription
    }

    return () => {
      if (subscription?.unsubscribe) {
        subscription.unsubscribe()
      }
    }
  }, [])

  // Funções de autenticação
  const signIn = async (email, password) => {
    if (!supabase) {
      return { error: { message: 'Cliente Supabase não disponível' } }
    }
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      return { data, error }
    } catch (error) {
      return { error: { message: 'Erro ao tentar login: ' + error.message } }
    }
  }

  const signOut = async () => {
    if (supabase) {
      await supabase.auth.signOut()
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook para usar a autenticação em componentes
export function useAuth() {
  return useContext(AuthContext)
} 