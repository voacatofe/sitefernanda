export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">API do Site Fernanda Soares Imóveis</h1>
      <p className="mb-4">
        Esta é a API de backend para o site Fernanda Soares Imóveis. Esta API fornece:
      </p>
      <ul className="list-disc text-left max-w-md mx-auto mb-8">
        <li className="mb-2">Autenticação de usuários</li>
        <li className="mb-2">Gerenciamento de usuários</li>
        <li className="mb-2">Endpoints para o site estático</li>
      </ul>
      <p className="text-sm text-gray-500">
        Esta API não possui interface de usuário pública. Para acessar o site, visite{' '}
        <a 
          href="https://fernandasoaresimoveis.com.br" 
          className="text-blue-500 hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          fernandasoaresimoveis.com.br
        </a>
      </p>
    </main>
  )
} 