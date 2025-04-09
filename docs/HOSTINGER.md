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

## 2. Fazer upload para a Hostinger

1. Acesse o Painel de Controle da Hostinger
2. Vá para o Gerenciador de Arquivos
3. Navegue até a pasta pública do seu domínio (geralmente `public_html/`)
4. Faça upload de todos os arquivos da pasta `out/`

## 3. Solução de API separada (próxima etapa)

Para a parte de autenticação e APIs dinâmicas, você pode:

1. **Usar um serviço gratuito para a API**:
   - [Vercel](https://vercel.com) (plano gratuito)
   - [Netlify](https://netlify.com) (funções)
   - [Railway](https://railway.app) (período gratuito inicial)
   - [Render](https://render.com) (plano gratuito)

2. **Configurar um repositório separado** apenas para a parte de API/backend
   
3. **Modificar o frontend** para apontar para a API externa:
   ```js
   // Exemplo:
   const API_URL = "https://sua-api-externa.vercel.app/api";
   ```

## 4. Configuração do repositório da API no GitHub

### 4.1. Criar o repositório para a API

1. Acesse [GitHub](https://github.com/) e faça login na sua conta
2. Clique no botão "New" (Novo) para criar um repositório 
3. Nomeie o repositório (ex: `fernanda-api` ou `sitefernanda-api`)
4. Escolha a visibilidade (privado ou público)
5. Ignore as opções para adicionar README, .gitignore, etc. (vamos inicializar manualmente)
6. Clique em "Create repository" (Criar repositório)

### 4.2. Preparar os arquivos da API

1. Crie uma nova pasta local para o projeto da API:
   ```bash
   mkdir fernanda-api
   cd fernanda-api
   ```

2. Inicialize um projeto Next.js básico:
   ```bash
   npx create-next-app@latest . --typescript --eslint --tailwind=false --src-dir --app --import-alias="@/*"
   ```

3. Instale as dependências necessárias:
   ```bash
   npm install @prisma/client bcryptjs next-auth
   npm install prisma --save-dev
   ```

4. Copie os arquivos-chave do projeto original:
   - Copie o arquivo `prisma/schema.prisma` para a nova pasta `prisma/`
   - Adapte os arquivos de autenticação (remova componentes desnecessários)

5. Crie um arquivo `.env` básico:
   ```
   DATABASE_URL="postgresql://postgres:191f8ab64007e81cc28f@147.93.15.121:5435/fernanda_db?sslmode=disable"
   NEXTAUTH_URL="https://sua-api-externa.vercel.app"
   NEXTAUTH_SECRET="ZmVybmFuZGFfYWRtaW5fc2VjcmV0X2tleV8yMDI0"
   ```

### 4.3. Implementar apenas rotas de API necessárias

1. Crie uma estrutura básica focada em APIs:
   ```
   src/
   ├── app/
   │   └── api/
   │       ├── auth/
   │       │   └── [...nextauth]/
   │       │       └── route.ts
   │       └── user/
   │           └── route.ts
   ├── lib/
   │   └── prisma.ts
   └── auth.ts
   ```

2. Configure o servidor para permitir solicitações do seu site na Hostinger:
   ```typescript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/api/:path*',
           headers: [
             { key: 'Access-Control-Allow-Credentials', value: 'true' },
             { key: 'Access-Control-Allow-Origin', value: 'https://seudominio.com.br' },
             { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
             { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Content-Type' },
           ],
         },
       ]
     },
   }
   ```

### 4.4. Inicializar e enviar para o GitHub

1. Inicialize o repositório Git:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão da API"
   ```

2. Conecte ao repositório remoto:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/fernanda-api.git
   git push -u origin main
   ```

### 4.5. Deployar a API

1. Acesse [Vercel](https://vercel.com/) e faça login com a conta do GitHub
2. Importe o repositório `fernanda-api`
3. Configure as variáveis de ambiente:
   - DATABASE_URL
   - NEXTAUTH_URL (a URL da sua Vercel)
   - NEXTAUTH_SECRET

4. Clique em "Deploy" e aguarde a conclusão

### 4.6. Integrar o site estático com a API

1. No site estático hospedado na Hostinger, você precisará atualizar as referências para apontar para sua API externa:

   ```javascript
   // Arquivo de configuração da API (a ser criado)
   // public_html/config.js
   
   window.API_CONFIG = {
     BASE_URL: "https://fernanda-api.vercel.app",
     AUTH_URL: "https://fernanda-api.vercel.app/api/auth"
   };
   ```

2. Inclua esse arquivo no seu HTML principal e use-o em qualquer script que precise acessar a API.

## Limitações atuais da versão estática

Na versão estática atual:

1. **Autenticação**: Não funcionará sem uma API externa
2. **Painel Admin**: Não terá funcionalidade completa
3. **Formulários dinâmicos**: Não funcionarão sem um backend

## Próximos passos

1. Hospedar a versão estática na Hostinger
2. Configurar um repositório separado apenas para a API
3. Configurar integração entre o site estático e a API externa 