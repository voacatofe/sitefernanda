# Instruções para o esquema de Deploy via FTP (DEV e PROD)

## Estrutura do Projeto

O projeto possui duas branches principais:
- **dev**: Ambiente de desenvolvimento
- **main**: Ambiente de produção

## Como Funciona o FTP

Nosso projeto utiliza o GitHub Actions para fazer deploy automático via FTP:

1. Os arquivos do site são compilados usando Next.js
2. Uma pasta temporária `.deploy` é criada contendo:
   - Pasta `.next` (código compilado do Next.js)
   - Pasta `public` (arquivos estáticos)
3. Esta pasta é enviada via FTP para o servidor:
   - Branch **dev** → pasta `/dev/` no servidor
   - Branch **main** → pasta raiz `/` no servidor

## Estrutura no Servidor FTP

```
/ (raiz)
├── Arquivos do site de produção (branch main)
└── /dev/
    └── Arquivos do site de desenvolvimento (branch dev)
```

## Como Fazer Commits e Deploys

### Para Desenvolvimento:

1. Crie ou trabalhe em uma branch de feature (opcional)
2. Desenvolva e teste localmente
3. Quando estiver pronto, faça o commit para a branch **dev**:
   ```
   git checkout dev
   git add .
   git commit -m "Descrição das alterações"
   git push origin dev
   ```
4. O GitHub Actions enviará automaticamente para `/dev/` no servidor

### Para Produção:

1. Teste completamente no ambiente de desenvolvimento
2. Quando aprovado, faça merge para a branch **main**:
   ```
   git checkout main
   git merge dev
   git push origin main
   ```
3. O GitHub Actions enviará automaticamente para a raiz `/` no servidor

## Observações Importantes

- **Nunca** faça upload manual de arquivos via FTP para evitar conflitos
- As pastas `/dev/` e raiz `/` são completamente independentes
- Sempre teste no ambiente de desenvolvimento antes de enviar para produção
- Qualquer alteração nos workflows (.github/workflows/) afeta como o deploy é realizado

Este fluxo garante que o site seja devidamente testado no ambiente de desenvolvimento antes de ir para produção. 