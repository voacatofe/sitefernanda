'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthGuard } from '@/components/auth-guard'
import { useAuth } from '@/components/auth-provider'

export default function AdminPage() {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    await signOut()
    setLoading(false)
    router.push('/admin/login')
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Painel Administrativo</h1>
            <button 
              onClick={handleSignOut}
              disabled={loading}
              className={`px-4 py-2 text-white rounded ${
                loading ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {loading ? 'Saindo...' : 'Sair'}
            </button>
          </div>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Bem-vindo(a)!</h2>
            <p>Logado como: <span className="font-semibold">{user?.email}</span></p>
          </div>
          
          {/* Área de gerenciamento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-3">Gerenciar Imóveis</h3>
              <p className="text-gray-600 mb-4">Adicionar, editar e remover imóveis do catálogo.</p>
              <button 
                onClick={() => router.push('/admin/imoveis')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Acessar
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-3">Mensagens</h3>
              <p className="text-gray-600 mb-4">Visualizar e responder mensagens de contato.</p>
              <button 
                onClick={() => router.push('/admin/mensagens')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Acessar
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium mb-3">Configurações</h3>
              <p className="text-gray-600 mb-4">Ajustar configurações do site e da conta.</p>
              <button 
                onClick={() => router.push('/admin/configuracoes')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Acessar
              </button>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  )
} 