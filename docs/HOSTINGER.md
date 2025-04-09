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

## Limitações atuais da versão estática

Na versão estática atual:

1. **Autenticação**: Não funcionará sem uma API externa
2. **Painel Admin**: Não terá funcionalidade completa
3. **Formulários dinâmicos**: Não funcionarão sem um backend

## Próximos passos

1. Hospedar a versão estática na Hostinger
2. Configurar um repositório separado apenas para a API
3. Configurar integração entre o site estático e a API externa 