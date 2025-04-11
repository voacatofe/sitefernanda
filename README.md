# API do Site Fernanda

Esta é a API para o site de Fernanda Soares Imóveis, desenvolvida com Next.js e hospedada na Vercel.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de APIs
- **NextAuth.js**: Autenticação e autorização
- **Prisma**: ORM para acesso ao banco de dados
- **PostgreSQL**: Banco de dados relacional
- **Vercel**: Plataforma de hospedagem

## Funcionalidades

- Autenticação de usuários (login/logout)
- Gerenciamento de usuários (CRUD)
- Endpoints para integração com o site estático

## Começando

### Pré-requisitos

- Node.js 18 ou superior
- PostgreSQL (local ou serviço como Neon, Supabase, etc.)

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/SEU-USUARIO/fernanda-api.git
   cd fernanda-api
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente
   ```bash
   # Copie o arquivo de exemplo e edite com suas configurações
   cp .env.example .env
   ```

4. Execute as migrações do banco de dados
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   ```

### Implantação na Vercel

Esta API está configurada para deploy automático na Vercel. Cada push para a branch `main` acionará um novo deploy.

## Documentação da API

### Endpoints

#### Autenticação

- `POST /api/auth/signin`: Login de usuário
- `GET /api/auth/signout`: Logout de usuário
- `GET /api/auth/session`: Obter sessão atual

#### Usuários

- `GET /api/user`: Listar todos os usuários
- `POST /api/user`: Criar novo usuário
- `GET /api/user/:id`: Obter usuário específico
- `PUT /api/user/:id`: Atualizar usuário
- `DELETE /api/user/:id`: Excluir usuário

## Licença

Este projeto é privado e não pode ser redistribuído sem autorização. 