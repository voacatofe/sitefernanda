import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hash } from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { name, email, password, role } = await request.json()
    
    // Verificar se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })
    
    if (existingUser) {
      return NextResponse.json(
        { error: "O email já está em uso" },
        { status: 400 }
      )
    }
    
    // Hash da senha
    const hashedPassword = await hash(password, 10)
    
    // Criar novo usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "user"
      }
    })
    
    // Retornar usuário sem a senha
    const { password: _, ...userWithoutPassword } = user
    return NextResponse.json(userWithoutPassword)
  } catch (error) {
    console.error("Erro ao criar usuário:", error)
    return NextResponse.json(
      { error: "Falha ao criar usuário" },
      { status: 500 }
    )
  }
}

// Pegar todos os usuários (apenas para admin)
export async function GET(request: Request) {
  try {
    // Aqui você poderia adicionar verificação de autenticação
    // usando headers ou cookies
    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        // Não incluir a senha
      }
    })
    
    return NextResponse.json(users)
  } catch (error) {
    console.error("Erro ao buscar usuários:", error)
    return NextResponse.json(
      { error: "Falha ao buscar usuários" },
      { status: 500 }
    )
  }
} 