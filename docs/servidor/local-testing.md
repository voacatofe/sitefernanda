# Teste Local de Múltiplos Domínios

Este documento descreve como configurar e testar o mascaramento de URL com múltiplos domínios em ambiente local.

## Configuração do Arquivo Hosts

Para testar os múltiplos domínios localmente, é necessário configurar o arquivo hosts do sistema operacional para mapear os domínios para o endereço IP local (127.0.0.1).

### No Windows

1. Abra o Bloco de Notas como administrador.
2. Abra o arquivo `C:\Windows\System32\drivers\etc\hosts`.
3. Adicione as seguintes linhas ao final do arquivo:

```
127.0.0.1    dimaspraivabrava.com.br
127.0.0.1    www.dimaspraivabrava.com.br
127.0.0.1    dimasjoaopaulo.com.br
127.0.0.1    www.dimasjoaopaulo.com.br
127.0.0.1    dimasbeiramar.com.br
127.0.0.1    www.dimasbeiramar.com.br
127.0.0.1    dimasestreito.com.br
127.0.0.1    www.dimasestreito.com.br
127.0.0.1    dimassaojose.com.br
127.0.0.1    www.dimassaojose.com.br
127.0.0.1    fernandasoaresimoveis.com.br
127.0.0.1    www.fernandasoaresimoveis.com.br
```

4. Salve o arquivo.

### No Linux/Mac

1. Abra um terminal.
2. Execute o comando `sudo nano /etc/hosts`.
3. Adicione as mesmas linhas listadas acima.
4. Salve o arquivo (Ctrl+O, Enter, Ctrl+X).

## Configuração do Servidor Local

### Opção 1: Utilizando o Next.js em Modo de Desenvolvimento

1. Inicie o servidor Next.js:
   ```bash
   npm run dev
   ```

2. Acesse os domínios no navegador:
   ```
   http://dimaspraivabrava.com.br:3000
   http://dimasjoaopaulo.com.br:3000
   http://dimasbeiramar.com.br:3000
   http://dimasestreito.com.br:3000
   http://dimassaojose.com.br:3000
   ```

O middleware do Next.js irá detectar o domínio e redirecionar para a landing page apropriada.

### Opção 2: Utilizando Servidor Local Nginx

Para uma experiência mais próxima do ambiente de produção, você pode configurar o Nginx localmente:

1. Instale o Nginx:
   - Windows: Use o [Nginx para Windows](https://nginx.org/en/docs/windows.html)
   - Linux: `sudo apt-get install nginx`
   - Mac: `brew install nginx`

2. Configure os virtual hosts no Nginx:
   - Windows: Edite `C:\nginx\conf\nginx.conf`
   - Linux/Mac: Crie arquivos em `/etc/nginx/sites-available/` e links simbólicos em `/etc/nginx/sites-enabled/`

   Exemplo de configuração:

   ```nginx
   server {
       listen 80;
       server_name dimaspraivabrava.com.br www.dimaspraivabrava.com.br;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   
   # Repetir para os outros domínios
   ```

3. Inicie/reinicie o Nginx:
   - Windows: `C:\nginx\nginx.exe -s reload`
   - Linux/Mac: `sudo systemctl restart nginx`

4. Inicie o servidor Next.js:
   ```bash
   npm run dev
   ```

5. Acesse os domínios no navegador sem a porta:
   ```
   http://dimaspraivabrava.com.br
   http://dimasjoaopaulo.com.br
   http://dimasbeiramar.com.br
   http://dimasestreito.com.br
   http://dimassaojose.com.br
   ```

## Testes a Realizar

1. **Navegação por Domínio**:
   - Acesse cada domínio e verifique se a landing page correta é exibida.
   - Verifique se a URL no navegador não mostra o prefixo `/lp/nome-do-empreendimento`.

2. **Navegação por Links**:
   - Clique em links internos e verifique se a navegação mantém o domínio correto.
   - Tente acessar landing pages de outros empreendimentos a partir de um domínio e verifique o comportamento.

3. **Carregamento de Recursos**:
   - Verifique se imagens, CSS e JavaScript carregam corretamente.
   - Inspecione o console do navegador para verificar erros de carregamento.

4. **Links para Outros Domínios**:
   - Teste links que deveriam apontar para outros domínios e verifique se o redirecionamento ocorre corretamente.

## Resolução de Problemas

### Problema: O domínio não está resolvendo para 127.0.0.1

1. Verifique se o arquivo hosts foi editado corretamente.
2. Em alguns sistemas, pode ser necessário limpar o cache DNS:
   - Windows: Execute `ipconfig /flushdns` no prompt de comando como administrador.
   - Mac: Execute `sudo killall -HUP mDNSResponder` no terminal.
   - Linux: Varia conforme a distribuição, mas geralmente `sudo systemctl restart nscd`.

### Problema: O Nginx não está redirecionando corretamente

1. Verifique os logs de erro do Nginx:
   - Windows: `C:\nginx\logs\error.log`
   - Linux/Mac: `/var/log/nginx/error.log`
2. Verifique se o servidor Next.js está em execução.
3. Verifique se as configurações de proxy estão corretas.

### Problema: O middleware não está funcionando

1. Verifique se o arquivo `middleware.ts` está na raiz do projeto.
2. Verifique se o mapeamento de domínios inclui o domínio que você está tentando acessar.
3. Adicione logs temporários no middleware para depuração.
4. Verifique se a configuração `matcher` do middleware está correta. 