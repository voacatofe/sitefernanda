import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hash } from "bcryptjs"

export const runtime = "nodejs"

export async function GET() {
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