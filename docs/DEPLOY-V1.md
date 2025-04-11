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

## Evolução Futura

Após a V1 estar estável e online, o desenvolvimento continuará com:

1. Implementação da API em um serviço separado (Vercel/Railway)
2. Integração do painel administrativo
3. Adição de recursos dinâmicos

## Arquivos e Configurações da V1

Os seguintes arquivos são usados no processo de deployment da V1:

1. **scripts/prepare-v1.js** - Script que prepara os arquivos para a versão V1
2. **package.json** - Contém o script `build:v1`
3. **.github/workflows/deploy-main.yml** - Workflow de automação do GitHub Actions

Para modificar o comportamento do build da V1, edite o arquivo `scripts/prepare-v1.js`. 