// ESTA ROTA É APENAS PARA DESENVOLVIMENTO
// Na versão de produção estática, esta rota será ignorada durante o build
import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hash } from "bcryptjs"

export const runtime = "nodejs"

// Função para gerar uma resposta estática para builds estáticos
function getStaticResponse() {
  return new Response(
    JSON.stringify({
      message: "Esta API só está disponível em ambiente de desenvolvimento",
      error: "API indisponível em build estático"
    }),
    {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

export async function GET() {
  // Verificar se está rodando em ambiente de exportação estática
  if (process.env.NEXT_RUNTIME === 'edge' || process.env.NODE_ENV === 'production') {
    return getStaticResponse();
  }

  try {
    const hashedPassword = await hash("senha123", 12)
    
    const user = await prisma.user.upsert({
      where: { email: "darlan@catofe.com.br" },
      update: {
        password: hashedPassword
      },
      create: {
        email: "darlan@catofe.com.br",
        name: "Darlan",
        password: hashedPassword,
        role: "ADMIN"
      }
    })

    return NextResponse.json({ 
      message: "Usuário administrador criado com sucesso",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    })
  } catch (error) {
    console.error("Erro ao criar usuário:", error)
    return NextResponse.json(
      { error: "Erro ao criar usuário administrador" },
      { status: 500 }
    )
  }
} 