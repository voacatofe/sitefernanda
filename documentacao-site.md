# Documentação do Site Fernanda - Consultora Imobiliária Dimas Construções

## 1. Visão Geral do Projeto

O site da Fernanda é uma plataforma digital sofisticada desenvolvida para a consultora imobiliária Fernanda, especializada em empreendimentos de alto padrão da Dimas Construções. Este site foi projetado como uma solução estática para funcionar em hospedagem compartilhada na Hostinger, atendendo às necessidades específicas do negócio imobiliário de alto padrão.

O site apresenta os empreendimentos da Dimas Construções de forma elegante e detalhada, destacando a experiência e expertise de Fernanda como consultora, e oferecendo funcionalidades para geração de leads através de formulários de contato e download de materiais.

## 2. Tecnologias Utilizadas

### 2.1 Framework e Linguagem
- **Next.js 15.2.4**: Framework React moderno com suporte a exportação estática
- **TypeScript**: Superset tipado de JavaScript para maior segurança e manutenibilidade do código
- **React 18.2.0**: Biblioteca para construção de interfaces

### 2.2 Estilização
- **Tailwind CSS 3.4.1**: Framework CSS utilitário para design rápido e consistente
- **Paleta de cores personalizada**: Inclui cores específicas como "fernanda-gold" e "dimas-black"
- **Tailwind Merge**: Utilitário para combinação de classes Tailwind sem conflitos
- **Tailwind Animate**: Plugin para animações CSS simplificadas

### 2.3 UI Components
- **Radix UI**: Conjunto de componentes acessíveis e sem estilo que formam a base da interface
- **Class Variance Authority**: Biblioteca para criar variantes de componentes
- **CLSX**: Utilitário para construção condicional de nomes de classes
- **Lucide React**: Ícones modernos e consistentes
- **Framer Motion**: Biblioteca para animações avançadas e interativas

### 2.4 Banco de Dados e ORM
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional
- **Prisma 5.9.1**: ORM para interação simplificada com o banco de dados
- **@prisma/client**: Cliente gerado pelo Prisma para interação com o banco

### 2.5 Autenticação
- **NextAuth 5.0.0-beta.11**: Sistema de autenticação para Next.js
- **@auth/prisma-adapter**: Adapter para integração entre NextAuth e Prisma
- **Bcryptjs**: Biblioteca para hashing seguro de senhas

### 2.6 Formulários e Validação
- **React Hook Form**: Biblioteca para gerenciamento de formulários
- **Zod**: Biblioteca de validação de esquema TypeScript-first
- **@hookform/resolvers**: Integradores para sistemas de validação com React Hook Form

## 3. Estrutura do Projeto

### 3.1 Organização de Diretórios
```
sitefernanda/
├── .github/            # Configurações e workflows do GitHub
├── .next/              # Output do build do Next.js (gerado)
├── docs/               # Documentação adicional do projeto
├── fernanda-api/       # Código relacionado a API (se houver)
├── hooks/              # Hooks personalizados React
├── node_modules/       # Dependências (gerado)
├── out/                # Output da exportação estática (gerado)
├── prisma/             # Configurações e migrações do Prisma
│   ├── migrations/     # Migrações do banco de dados
│   ├── schema.prisma   # Definição do esquema do banco de dados
│   └── seed.js         # Script para semear o banco com dados iniciais
├── public/             # Arquivos estáticos servidos diretamente
├── scripts/            # Scripts utilitários para build e deploy
├── src/                # Código fonte principal
│   ├── app/            # Estrutura do App Router do Next.js
│   │   ├── (site)/     # Rotas públicas do site
│   │   ├── admin/      # Rotas do painel administrativo
│   │   ├── api/        # Endpoints de API
│   │   ├── data/       # Dados estáticos
│   │   └── components/ # Componentes específicos da aplicação
│   ├── components/     # Componentes reutilizáveis
│   │   └── ui/         # Componentes básicos de UI
│   ├── hooks/          # Hooks personalizados
│   └── lib/            # Utilitários e funções auxiliares
├── styles/             # Estilos globais e configurações CSS
└── types/              # Definições de tipos TypeScript globais
```

### 3.2 Estrutura do App Router
O projeto usa a estrutura moderna do Next.js App Router:

- **src/app/(site)/**:
  - `page.tsx`: Página inicial
  - `empreendimentos/`: Páginas de listagem e detalhes de empreendimentos
  - `sobre/`: Página sobre a consultora
  - `contato/`: Página de contato

- **src/app/admin/**:
  - `login/`: Página de autenticação para o painel
  - `empreendimentos/`: Gerenciamento de empreendimentos
  - `page.tsx`: Dashboard administrativo

### 3.3 Componentes Principais
Os componentes principais que formam o site incluem:

- `header.tsx`: Navegação principal do site
- `footer.tsx`: Rodapé com informações de contato e links importantes
- `ScheduleVisitForm.tsx`: Formulário para agendamento de visitas
- `DownloadMaterialForm.tsx`: Formulário para download de materiais de vendas
- `WhatsAppButton.tsx`: Botão flutuante para contato via WhatsApp
- `ImageGallery.tsx`: Galeria de imagens para visualização de empreendimentos
- `JeitoDimas.tsx`: Componente que destaca o diferencial da Dimas Construções
- `auth-provider.jsx`: Provedor de contexto para autenticação
- `auth-guard.jsx`: Proteção de rotas administrativas

## 4. Gerenciamento de Dados

### 4.1 Modelo de Dados
O esquema Prisma define a estrutura principal do banco de dados:

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  password      String
  role          String    @default("user")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@map("users")
}
```

### 4.2 Dados Estáticos
Os dados dos empreendimentos são mantidos estaticamente em arquivos TypeScript:

- `src/app/data/empreendimentos/projects.ts`: Contém todos os detalhes dos empreendimentos
- `src/app/data/empreendimentos/types.ts`: Define as interfaces TypeScript para esses dados

A estrutura de dados para empreendimentos inclui:

```typescript
export interface Project {
  title: string
  tagline: string
  description: string
  longDescription?: string
  features: Feature[]
  gallery?: string[]
  heroImage: string
  mainImage?: string
  additionalImages?: string[]
  floorplans?: Floorplan[]
  location?: Location
  differentials?: Differential[]
  fernandasNotes?: string
  status: ProjectStatus
  type: ProjectType
  address: Address
  salesMaterial?: {
    title: string
    description: string
    fileUrl: string
  }
}
```

## 5. Configuração para Hospedagem Estática

### 5.1 Next.js Config
O arquivo `next.config.js` contém configurações específicas para exportação estática:

```javascript
const nextConfig = {
  // Configurar output apenas para produção
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: process.env.NODE_ENV === 'production', // Otimiza em dev, não em prod
  },
  // Configurações para exportação estática apenas em produção
  trailingSlash: process.env.NODE_ENV === 'production',
  // Configuração para ignorar build errors em produção
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // Configurações experimentais
  experimental: {
    appDocumentPreloading: false,
  },
}
```

### 5.2 Configuração Apache (.htaccess)
O arquivo `.htaccess` na raiz do projeto configura o servidor Apache para funcionar corretamente com a aplicação estática:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Permitir acesso a arquivos e diretórios reais
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  # Redirecionar para HTML se existir
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ $1.html [L]
  
  # Redirecionar para index.html em cada pasta
  RewriteCond %{REQUEST_FILENAME}/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]
  
  # Se nada der certo, carrega a página 404
  ErrorDocument 404 /404.html
</IfModule>

# Configurações de cache e compressão
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
</IfModule>
```

### 5.3 Scripts de Build Customizados
O projeto utiliza scripts personalizados para preparar a build para deploy:

- `scripts/prepare-hostinger.js`: Prepara os arquivos para hospedagem na Hostinger
- `scripts/fix-nextauth.js`: Ajusta configurações do NextAuth para funcionar em ambiente estático

## 6. Processo de Deploy

O fluxo de deploy segue uma abordagem estruturada, utilizando GitHub Actions para automatização:

### 6.1 Branches
- **dev**: Ambiente de desenvolvimento
- **main**: Ambiente de produção

### 6.2 Fluxo de FTP
1. Os arquivos do site são compilados usando Next.js
2. Uma pasta temporária `.deploy` é criada contendo:
   - Pasta `.next` (código compilado do Next.js)
   - Pasta `public` (arquivos estáticos)
3. Esta pasta é enviada via FTP para o servidor:
   - Branch **dev** → pasta `/dev/` no servidor
   - Branch **main** → pasta raiz `/` no servidor

### 6.3 Estrutura no Servidor FTP
```
/ (raiz)
├── Arquivos do site de produção (branch main)
└── /dev/
    └── Arquivos do site de desenvolvimento (branch dev)
```

## 7. Autenticação e Segurança

### 7.1 Sistema de Autenticação
O site utiliza NextAuth para autenticação, configurado para trabalhar com o Prisma:

- `auth.ts`: Configura o NextAuth com provedores e callbacks
- `src/components/auth-provider.jsx`: Provê o contexto de autenticação para a aplicação
- `src/components/auth-guard.jsx`: Protege rotas administrativas

### 7.2 Middleware
O arquivo `middleware.ts` gerencia o acesso a rotas protegidas, redirecionando usuários não autenticados para a página de login.

## 8. Funcionalidades Principais

### 8.1 Apresentação de Empreendimentos
- Listagem de empreendimentos com filtros
- Páginas detalhadas para cada empreendimento com:
  - Galeria de imagens
  - Plantas baixas
  - Localização com mapa
  - Diferenciais
  - Informações técnicas

### 8.2 Geração de Leads
- Formulário de agendamento de visitas
- Formulário para download de material de vendas
- Integração direta com WhatsApp

### 8.3 Área Administrativa
- Dashboard com visão geral
- Gerenciamento de empreendimentos
- Autenticação segura

### 8.4 Integração de Analytics
O site utiliza Google Tag Manager para rastreamento de interações:

```javascript
<Script id="google-tag-manager" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M9DWRX7N');
  `}
</Script>
```

## 9. Otimizações e Performance

### 9.1 Configurações de Cache
O arquivo `.htaccess` configura regras de cache para diferentes tipos de recursos:
- Imagens: cache por 1 ano
- CSS e JavaScript: cache por 1 mês

### 9.2 Otimização de Imagens
Imagens são servidas em formato WebP quando possível e em tamanhos otimizados para diferentes dispositivos.

### 9.3 Carregamento Progressivo
Uso de estratégias como:
- `<Image priority>` para imagens acima da dobra
- Animações progressivas com Framer Motion
- Lazy loading para recursos secundários

## 10. Metadados e SEO

### 10.1 Configuração de Metadados
O arquivo `layout.tsx` define os metadados principais para SEO:

```javascript
export const metadata: Metadata = {
  title: "Fernanda | Consultora Imobiliária Dimas Construções",
  description:
    "Consultora imobiliária de elite com mais de 18 anos de experiência e R$50 milhões em vendas nos últimos 24 meses.",
  generator: 'v0.dev'
}
```

### 10.2 Estrutura Semântica
O site utiliza marcação HTML semântica para melhorar a acessibilidade e o SEO, incluindo:
- Elementos `<section>` para diferentes partes do conteúdo
- Hierarquia de títulos adequada
- Texto alternativo para imagens

---

Esta documentação fornece uma visão detalhada do site da Fernanda, abrangendo sua estrutura, tecnologias, configurações e funcionalidades principais. O site é desenvolvido como uma solução estática otimizada para hospedagem compartilhada na Hostinger, atendendo às necessidades específicas do negócio imobiliário de alto padrão. 