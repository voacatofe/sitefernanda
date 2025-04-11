# Hospedagem na Hostinger

Este documento descreve como hospedar o site estático na Hostinger enquanto se prepara para uma solução de API separada.

## 1. Gerar arquivos estáticos

```bash
# Gerar a versão estática para a Hostinger
npm run build:static
```

Este comando irá:
1. Gerar os arquivos estáticos na pasta `out/`
2. Criar um arquivo `.htaccess` com configurações para SPA
3. Criar simulações vazias das APIs de autenticação

> **Nota de atualização (Abril 2024):** O processo de deploy está automatizado com GitHub Actions. Os arquivos gerados pelo comando `build:static` já estão configurados para funcionar na Hostinger.

## 1.2. Deploy automatizado com GitHub Actions

Esse projeto utiliza GitHub Actions para automatizar o processo de deploy para a Hostinger, com o seguinte fluxo:

- **Branch `dev`**: Deploy automático para o subdiretório `/dev` na Hostinger
- **Branch `main`**: Deploy automático para a raiz do site (`public_html/`) na Hostinger

### 1.2.1. Configuração do GitHub Actions

1. Certifique-se de que o arquivo `.github/workflows/deploy.yml` esteja configurado:

```yaml
name: Deploy to Hostinger

on:
  push:
    branches:
      - main
      - dev

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Generate static files
        run: npm run build:static
        
      - name: Deploy to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/
          server-dir: ${{ github.ref == 'refs/heads/main' ? '/' : '/dev/' }}
          dangerous-clean-slate: true
```

### 1.2.2. Segredos do GitHub

Certifique-se de configurar os seguintes segredos no seu repositório GitHub em Settings > Secrets > Actions:

- `FTP_SERVER`: O endereço FTP da Hostinger (ex: `ftp.seudominio.com.br`)
- `FTP_USERNAME`: Seu nome de usuário FTP da Hostinger
- `FTP_PASSWORD`: Sua senha FTP da Hostinger

### 1.2.3. Processo de Deploy

1. Para fazer deploy no ambiente de desenvolvimento (`/dev`):
   ```bash
   git checkout dev
   git add .
   git commit -m "Suas alterações"
   git push origin dev
   ```
   
   Este push para a branch `dev` acionará automaticamente o GitHub Actions que fará:
   - Checkout do código
   - Instalação das dependências
   - Geração dos arquivos estáticos
   - Upload via FTP para o diretório `/dev` na Hostinger

2. Para fazer deploy em produção (raiz do site):
   ```bash
   git checkout main
   git merge dev  # Após testar e confirmar no ambiente de desenvolvimento
   git push origin main
   ```
   
   Este push para a branch `main` acionará o GitHub Actions que fará o mesmo processo, mas com upload para a raiz do site.

3. Monitoramento dos deploys:
   - Você pode acompanhar o status de cada deploy na aba "Actions" do seu repositório GitHub
   - Em caso de falha, verifique os logs para identificar e corrigir o problema

### 1.2.4. Deploy manual (se necessário)

Caso precise fazer um deploy manual:

1. Gere os arquivos estáticos localmente:
   ```bash
   npm run build:static
   ```

2. Utilize um cliente FTP (como FileZilla) para fazer upload:
   - Servidor: seu servidor FTP da Hostinger
   - Nome de usuário: seu nome de usuário FTP
   - Senha: sua senha FTP
   - Porta: 21 (padrão)
   
3. Navegue até o diretório correto na Hostinger:
   - Para ambiente de desenvolvimento: `/dev`
   - Para produção: raiz (`/`)
   
4. Faça upload de todos os arquivos da pasta `out/` para o diretório correspondente

## 3. Solução de API separada com Vercel

Para a parte de autenticação e APIs dinâmicas, vamos usar a Vercel para hospedar nossa API, pois ela oferece:
- Um plano gratuito generoso
- Integração nativa com Next.js
- Deploy automático a partir do GitHub
- Excelente performance global

### 3.1. Criando o projeto da API no GitHub

1. **Acesse o GitHub e crie um novo repositório**:
   - Abra [GitHub](https://github.com/) e faça login
   - Clique no botão "+" no canto superior direito e selecione "Novo repositório"
   - Nomeie o repositório como `fernanda-api` (ou nome de sua preferência)
   - Escolha "Privado" para manter seu código seguro
   - Clique em "Criar repositório"

2. **Clone o repositório para sua máquina local**:
   ```bash
   # Abra o terminal e execute:
   git clone https://github.com/SEU-USUARIO/fernanda-api.git
   cd fernanda-api
   ```

### 3.2. Configurando o projeto Next.js para a API

1. **Crie um projeto Next.js básico**:
   ```bash
   # No diretório do seu repositório, execute:
   npx create-next-app@latest . --typescript --eslint --tailwind=false --src-dir --app --import-alias="@/*"
   ```
   
   Quando solicitado sobre as opções, responda da seguinte forma:
   - TypeScript? **Sim**
   - ESLint? **Sim**
   - Tailwind CSS? **Não** (não precisamos para uma API)
   - Diretório `src/`? **Sim**
   - App Router? **Sim**
   - Alias de importação? **@/*** (padrão)

2. **Instale as dependências necessárias**:
   ```bash
   # Instale os pacotes necessários para autenticação e banco de dados
   npm install @prisma/client bcryptjs next-auth@beta
   npm install prisma --save-dev
   ```

3. **Configure o Prisma**:
   ```bash
   # Inicialize o Prisma
   npx prisma init
   ```

4. **Copie o schema do Prisma do projeto principal**:
   - Se você já tem um arquivo `prisma/schema.prisma` no projeto principal, copie-o para o novo projeto
   - Caso contrário, crie um novo com a seguinte estrutura:

   ```prisma
   // prisma/schema.prisma
   generator client {
     provider = "prisma-client-js"
   }

   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   model User {
     id        String   @id @default(cuid())
     name      String?
     email     String   @unique
     password  String
     role      String   @default("user")
     createdAt DateTime @default(now())
     updatedAt DateTime @updatedAt
   }
   ```

5. **Crie um arquivo .env para as variáveis de ambiente**:
   ```
   # .env
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/fernanda_db?sslmode=disable"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="chave-secreta-aqui-recomendado-gerar-uma-aleatoria"
   ```

### 3.3. Criando as rotas da API

1. **Crie a estrutura básica de diretórios**:
   ```bash
   mkdir -p src/app/api/auth/[...nextauth]
   mkdir -p src/app/api/user
   mkdir -p src/lib
   ```

2. **Crie o arquivo de configuração do Prisma**:
   ```javascript
   // src/lib/prisma.ts
   import { PrismaClient } from '@prisma/client'

   const globalForPrisma = global as unknown as { prisma: PrismaClient }

   export const prisma = globalForPrisma.prisma || new PrismaClient()

   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

   export default prisma
   ```

3. **Configure a autenticação com NextAuth**:
   ```typescript
   // src/app/api/auth/[...nextauth]/route.ts
   import NextAuth from "next-auth"
   import CredentialsProvider from "next-auth/providers/credentials"
   import { compare } from "bcryptjs"
   import prisma from "@/lib/prisma"

   const handler = NextAuth({
     providers: [
       CredentialsProvider({
         name: "Credentials",
         credentials: {
           email: { label: "Email", type: "email" },
           password: { label: "Senha", type: "password" }
         },
         async authorize(credentials) {
           if (!credentials?.email || !credentials?.password) {
             return null
           }

           const user = await prisma.user.findUnique({
             where: {
               email: credentials.email
             }
           })

           if (!user) {
             return null
           }

           const isPasswordValid = await compare(credentials.password, user.password)

           if (!isPasswordValid) {
             return null
           }

           return {
             id: user.id,
             email: user.email,
             name: user.name,
             role: user.role
           }
         }
       })
     ],
     session: {
       strategy: "jwt",
     },
     callbacks: {
       async jwt({ token, user }) {
         if (user) {
           token.role = user.role;
           token.id = user.id;
         }
         return token;
       },
       async session({ session, token }) {
         if (session.user) {
           session.user.role = token.role as string;
           session.user.id = token.id as string;
         }
         return session;
       },
     },
     pages: {
       signIn: '/login',
     }
   })

   export { handler as GET, handler as POST }
   ```

4. **Crie uma rota para usuários (opcional)**:
   ```typescript
   // src/app/api/user/route.ts
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
   ```

5. **Configure o CORS para permitir acesso do seu site estático**:
   ```javascript
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     async headers() {
       return [
         {
           source: '/api/:path*',
           headers: [
             { key: 'Access-Control-Allow-Credentials', value: 'true' },
             { key: 'Access-Control-Allow-Origin', value: 'https://fernandasoaresimoveis.com.br' },
             { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
             { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Authorization, Content-Type' },
           ],
         },
       ]
     },
   }

   module.exports = nextConfig
   ```

### 3.4. Preparando o projeto para deploy na Vercel

1. **Commit e push das alterações**:
   ```bash
   git add .
   git commit -m "Configuração inicial da API"
   git push origin main
   ```

2. **Crie uma conta na Vercel**:
   - Acesse [Vercel](https://vercel.com/) e clique em "Sign Up"
   - Escolha "Continue with GitHub" para conectar sua conta GitHub

3. **Configure seu projeto na Vercel**:
   - Após o login, clique em "Add New..." > "Project"
   - Selecione o repositório `fernanda-api` que você acabou de criar
   - Na configuração do projeto:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: (deixe o padrão)
     - Output Directory: (deixe o padrão)

4. **Configure as variáveis de ambiente**:
   - Na tela de configuração do projeto (antes de finalizar o deploy), clique em "Environment Variables"
   - Adicione as seguintes variáveis:
     - `DATABASE_URL`: URL completa para seu banco de dados PostgreSQL
     - `NEXTAUTH_SECRET`: Uma string segura e aleatória (pode gerar usando `openssl rand -base64 32`)
     - `NEXTAUTH_URL`: Será preenchido automaticamente com a URL da Vercel após o deploy

5. **Finalize o deploy**:
   - Clique em "Deploy"
   - Aguarde a conclusão do processo de build e deploy

### 3.5. Configurando o banco de dados

1. **Opções de banco de dados**:
   - [Neon](https://neon.tech) (PostgreSQL com plano gratuito generoso)
   - [Supabase](https://supabase.com) (PostgreSQL com interface amigável)
   - [Railway](https://railway.app) (Múltiplos bancos com período trial)

2. **Configurando o banco de dados Neon** (opção recomendada):
   - Acesse [Neon](https://neon.tech) e crie uma conta
   - Crie um novo projeto (ex: "fernanda-api")
   - Ao criar o projeto, a conexão string será exibida. Copie-a
   - Volte para a Vercel, vá em Settings > Environment Variables
   - Atualize a variável `DATABASE_URL` com a string de conexão do Neon

3. **Aplique as migrações do Prisma**:
   ```bash
   # Localmente, crie a migração
   npx prisma migrate dev --name initial
   
   # Para aplicar no banco remoto
   npx prisma migrate deploy
   ```

### 3.6. Testando a API

1. **Teste local**:
   ```bash
   npm run dev
   ```
   - Acesse `http://localhost:3000/api/user` para verificar se a rota está funcionando

2. **Teste a versão deployada**:
   - Acesse `https://fernanda-api.vercel.app/api/user` (substituindo pelo seu domínio)

### 3.7. Integrando com o site estático

1. **Crie um arquivo de configuração para a API no site estático**:
   ```javascript
   // public/config.js
   window.API_CONFIG = {
     BASE_URL: "https://fernanda-api.vercel.app",
     AUTH_URL: "https://fernanda-api.vercel.app/api/auth"
   };
   ```

2. **Adicione este arquivo ao seu HTML base**:
   ```html
   <!-- Adicione isso em public/index.html ou no seu componente Layout */-->
   <script src="/config.js"></script>
   ```

3. **Modifique seus componentes para usar a API externa**:
   ```javascript
   // Exemplo de uso em um componente de login
   async function handleLogin(email, password) {
     try {
       const response = await fetch(`${window.API_CONFIG.AUTH_URL}/signin`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, password }),
       });
       
       if (!response.ok) {
         throw new Error('Falha na autenticação');
       }
       
       const data = await response.json();
       // Processar o login bem-sucedido
     } catch (error) {
       // Tratar erro
     }
   }
   ```

### 3.8. Mantendo a API atualizada

1. **Atualizações automáticas**:
   - A Vercel configura automaticamente o deploy contínuo
   - Cada push para a branch `main` acionará um novo deploy

2. **Monitoramento**:
   - Acesse o dashboard da Vercel para ver logs e métricas
   - Configure alertas para ser notificado em caso de falhas

## 4. Próximos passos

1. ✅ Hospedar a versão estática na Hostinger
2. ✅ Configurar um repositório separado para a API
3. ✅ Configurar a API na Vercel
4. ☐ Criar endpoints adicionais conforme necessário
5. ☐ Configurar autenticação e autorização completas
6. ☐ Integrar o frontend com a API externa 