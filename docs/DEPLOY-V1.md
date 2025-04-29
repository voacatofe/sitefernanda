# Instruções para Deploy da Versão V1

Este documento descreve o processo de deploy da Versão 1 (V1) do site, que contém apenas o frontend estático sem painel administrativo.

## Visão Geral

A Versão 1 (V1) foca apenas no frontend estático do site, sem depender de:
- APIs de backend
- Autenticação
- Painel administrativo

Esta abordagem permite colocar o site no ar rapidamente, enquanto os recursos avançados são desenvolvidos em paralelo.

## Processo de Deploy

### Deploy Automatizado (GitHub Actions)

O deploy é gerenciado automaticamente pelo GitHub Actions:

1. Qualquer push para a branch `main` aciona o workflow `.github/workflows/deploy-main.yml`
2. O workflow:
   - Instala as dependências do projeto
   - Executa o comando `pnpm build:v1` para gerar os arquivos estáticos
   - Faz upload dos arquivos para a raiz do site via FTP

Você não precisa fazer nada além de enviar as alterações para a branch `main`:

```bash
git checkout main
git add .
git commit -m "Atualizações para a V1"
git push origin main
```

### Deploy Manual (se necessário)

Se precisar fazer um deploy manual:

1. Gere os arquivos estáticos da V1:
   ```bash
   npm run build:v1
   ```

2. Os arquivos estáticos serão gerados na pasta `out/`

3. Faça upload manual desses arquivos para a raiz do site usando um cliente FTP (ex: FileZilla)

## Limitações da V1

Esta versão tem algumas limitações:

1. **Sem painel administrativo** - Conteúdo estático apenas
2. **Sem autenticação** - Área administrativa não disponível
3. **Sem formulários dinâmicos** - Não é possível submeter dados

## Evolução para V2: Implementação do Painel Administrativo

### 1. Visão Geral da V2

A V2 do site incluirá um painel administrativo completo desenvolvido em PHP para compatibilidade com a hospedagem compartilhada. Principais características:

1. **Autenticação Segura**
   - Sistema de login com PHP Sessions
   - Proteção contra ataques comuns (SQL Injection, XSS)
   - Recuperação de senha
   - Logs de acesso

2. **Gerenciamento de Conteúdo**
   - CRUD completo para empreendimentos
   - Upload e otimização de imagens
   - Editor de texto rico
   - Versionamento de conteúdo

3. **Integração com Site Estático**
   - Geração automática de arquivos JSON
   - Build automático do site após alterações
   - Cache inteligente

### 2. Nova Estrutura de Arquivos

```
/public_html
    /index.html              # Site principal estático
    /assets                 # Arquivos estáticos do site
    /admin                 # Painel administrativo PHP
        /index.php        # Dashboard
        /login.php       # Página de login
        /includes/      # Arquivos compartilhados
            /config.php
            /auth.php
            /database.php
            /functions.php
            /security.php
        /empreendimentos/
            /index.php    # Lista
            /criar.php    # Criar novo
            /editar.php   # Editar existente
            /excluir.php  # Excluir
            /api/        # Endpoints para ações AJAX
        /usuarios/       # Gestão de usuários admin
        /logs/          # Registro de atividades
        /uploads/       # Arquivos enviados
            /.htaccess  # Proteção especial
        /assets/        # Assets do admin
            /css/
            /js/
            /vendors/
        /.htaccess     # Segurança do admin
    /data             # Dados JSON para o site
    /cache           # Cache de arquivos
    /.htaccess      # Configurações gerais
```

### 3. Banco de Dados

```sql
-- Estrutura do Banco de Dados

-- Usuários Administrativos
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    reset_token VARCHAR(64),
    reset_expira DATETIME,
    ultimo_acesso DATETIME,
    status ENUM('ativo', 'inativo') DEFAULT 'ativo',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Empreendimentos
CREATE TABLE empreendimentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    descricao TEXT,
    caracteristicas TEXT,
    status ENUM('rascunho', 'publicado', 'arquivado') DEFAULT 'rascunho',
    destaque BOOLEAN DEFAULT FALSE,
    meta_description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Imagens dos Empreendimentos
CREATE TABLE empreendimento_imagens (
    id INT PRIMARY KEY AUTO_INCREMENT,
    empreendimento_id INT,
    arquivo VARCHAR(255) NOT NULL,
    legenda VARCHAR(255),
    ordem INT DEFAULT 0,
    tipo ENUM('principal', 'galeria') DEFAULT 'galeria',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (empreendimento_id) REFERENCES empreendimentos(id) ON DELETE CASCADE
);

-- Logs de Atividades
CREATE TABLE admin_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    acao VARCHAR(50) NOT NULL,
    descricao TEXT,
    ip VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES admin_users(id)
);
```

### 4. Segurança

1. **Proteção do Diretório Admin**
```apache
# /admin/.htaccess
Options -Indexes
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>

<FilesMatch "^(config\.php|.*\.log)">
    Order allow,deny
    Deny from all
</FilesMatch>

# Força HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

2. **Configuração PHP Segura**
```php
// admin/includes/security.php
<?php
// Configurações de segurança
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_secure', 1);

// Função para sanitização
function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Proteção CSRF
function generate_csrf_token() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}
```

### 5. Processo de Build e Deploy

1. **Preparação dos Arquivos**
```bash
# Gerar site estático
npm run build:v2

# Preparar arquivos admin
mkdir -p dist/admin
cp -r admin/* dist/admin/

# Otimizar assets
npx gulp optimize-images
npx gulp minify-css
npx gulp minify-js
```

2. **GitHub Actions Workflow**
```yaml
name: Build and Deploy V2
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      # Build site estático
      - name: Build Static Site
        run: |
          npm install
          npm run build:v2
          
      # Otimizar assets
      - name: Optimize Assets
        run: |
          npm run optimize-assets
          
      # Preparar arquivos admin
      - name: Prepare Admin Files
        run: |
          mkdir -p dist/admin
          cp -r admin/* dist/admin/
          
      # Deploy via FTP
      - name: Deploy
        uses: SamKirkland/FTP-Deploy-Action@4.0.0
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
```

### 6. Considerações Adicionais

1. **Performance**
   - Implementar cache de consultas
   - Otimizar imagens no upload
   - Minificar assets
   - Usar CDN para arquivos grandes

2. **Backup**
   - Backup diário do banco de dados
   - Backup semanal dos arquivos
   - Rotação de backups (manter últimos 30 dias)

3. **Monitoramento**
   - Log de erros PHP
   - Log de acessos admin
   - Alertas de segurança
   - Monitoramento de performance

4. **SEO**
   - Gerar sitemap.xml
   - Otimizar meta tags
   - Implementar URLs amigáveis
   - Gerar robots.txt

### 7. Manutenção

1. **Atualizações Regulares**
   - Verificar atualizações PHP
   - Atualizar bibliotecas
   - Testar compatibilidade

2. **Segurança**
   - Scan regular de vulnerabilidades
   - Atualizar certificados SSL
   - Revisar logs de acesso
   - Testar backup/restore

### 8. Documentação

1. **Para Desenvolvedores**
   - Estrutura do código
   - Padrões de desenvolvimento
   - Processo de deploy
   - Troubleshooting

2. **Para Usuários**
   - Manual do painel admin
   - FAQ
   - Contato suporte
   - Boas práticas

### 9. Checklist de Deploy V2

- [ ] Backup completo da V1
- [ ] Criar banco de dados
- [ ] Importar estrutura SQL
- [ ] Configurar variáveis de ambiente
- [ ] Testar autenticação
- [ ] Verificar uploads
- [ ] Testar build automático
- [ ] Verificar logs
- [ ] Testar backup/restore
- [ ] Validar SEO
- [ ] Verificar SSL
- [ ] Testar performance
- [ ] Revisar segurança
- [ ] Documentar alterações 