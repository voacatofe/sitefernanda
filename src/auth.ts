import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "./lib/prisma"
import { compare } from "bcryptjs"
import { NextAuthConfig } from "next-auth"

export const runtime = "nodejs"

const config: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        console.log('Tentativa de login:', { email: credentials?.email })

        if (!credentials?.email || !credentials?.password) {
          console.log('Credenciais faltando')
          throw new Error("Email e senha são obrigatórios")
        }

        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email)
          }
        })

        console.log('Usuário encontrado:', { id: user?.id, email: user?.email })

        if (!user) {
          console.log('Usuário não encontrado')
          throw new Error("Usuário não encontrado")
        }

        const isPasswordValid = await compare(
          String(credentials.password),
          user.password
        )

        console.log('Validação de senha:', { isPasswordValid })

        if (!isPasswordValid) {
          console.log('Senha incorreta')
          throw new Error("Senha incorreta")
        }

        console.log('Login bem-sucedido')

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login"
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60 // 30 dias
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  debug: true
}

export const { auth, handlers, signIn, signOut } = NextAuth(config) 