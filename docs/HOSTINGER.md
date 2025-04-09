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