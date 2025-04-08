'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '@/lib/auth'

// Contexto de autenticação
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Carregar usuário do localStorage ao inicializar
  useEffect(() => {
    const checkAuth = () => {
      if (auth.isAuthenticated()) {
        setUser(auth.getUser())
      } else {
        setUser(null)
      }
      setLoading(false)
    }

    checkAuth()
    
    // Adicionar listener para evento de storage para sincronizar entre abas
    const handleStorageChange = () => {
      checkAuth()
    }
    
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Funções de autenticação
  const signIn = async (email, password) => {
    try {
      const result = auth.login(email, password)
      
      if (result.success) {
        setUser(result.user)
        return { data: result.user, error: null }
      } else {
        return { data: null, error: { message: result.message } }
      }
    } catch (error) {
      return { error: { message: 'Erro ao tentar login: ' + error.message } }
    }
  }

  const signOut = async () => {
    auth.logout()
    setUser(null)
    // Disparar evento de storage para sincronizar outras abas
    window.localStorage.setItem('auth_logout', Date.now().toString())
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