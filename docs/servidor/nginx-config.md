# Configuração do Servidor Nginx para Múltiplos Domínios

Este documento descreve a configuração necessária no servidor Nginx para processar requisições de múltiplos domínios e direcioná-las para as rotas específicas da aplicação.

## Estrutura dos Arquivos de Configuração

Para cada domínio personalizado, será criado um arquivo de configuração separado na pasta `/etc/nginx/sites-available/` do servidor:

```
/etc/nginx/sites-available/
├── dimaspraivabrava.com.br
├── dimasjoaopaulo.com.br
├── dimasbeiramar.com.br
├── dimasestreito.com.br
└── dimassaojose.com.br
```

Após a criação dos arquivos, eles devem ser habilitados criando links simbólicos na pasta `/etc/nginx/sites-enabled/`.

## Modelo de Configuração

Abaixo está um modelo de configuração para cada domínio. Este exemplo é para o domínio `dimaspraivabrava.com.br`:

```nginx
server {
    listen 80;
    server_name dimaspraivabrava.com.br www.dimaspraivabrava.com.br;
    
    # Redirecionamento para HTTPS
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name dimaspraivabrava.com.br www.dimaspraivabrava.com.br;
    
    # Configuração SSL
    ssl_certificate /etc/letsencrypt/live/dimaspraivabrava.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dimaspraivabrava.com.br/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Configuração HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Configuração de cache para arquivos estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        root /caminho/para/app/public;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
    
    # Configuração para a aplicação Next.js
    location / {
        proxy_pass http://localhost:3000/lp/dverse;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        
        # Configurações adicionais para otimização
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
    }
    
    # Configuração para sitemap.xml e robots.txt
    location = /sitemap.xml {
        proxy_pass http://localhost:3000/lp/dverse/sitemap.xml;
        proxy_set_header Host $host;
    }
    
    location = /robots.txt {
        proxy_pass http://localhost:3000/lp/dverse/robots.txt;
        proxy_set_header Host $host;
    }
}
```

## Configurações para Outros Domínios

Para os demais domínios, utilize o mesmo modelo, alterando:

1. `server_name` para o domínio específico
2. Caminhos dos certificados SSL
3. O caminho na diretiva `proxy_pass` para apontar para a landing page correspondente:
   - dimasjoaopaulo.com.br -> `/lp/dseason`
   - dimasbeiramar.com.br -> `/lp/dsense`
   - dimasestreito.com.br -> `/lp/dnex`
   - dimassaojose.com.br -> `/lp/dvert`

## Configuração de Certificados SSL

Para cada domínio, é necessário obter certificados SSL usando o Let's Encrypt. Execute os seguintes comandos para cada domínio:

```bash
sudo certbot --nginx -d dimaspraivabrava.com.br -d www.dimaspraivabrava.com.br
```

Repita o comando para cada um dos outros domínios.

## Compressão GZIP

Adicione as seguintes configurações ao arquivo `/etc/nginx/nginx.conf` na seção `http`:

```nginx
# Configuração GZIP
gzip on;
gzip_comp_level 5;
gzip_min_length 256;
gzip_proxied any;
gzip_vary on;
gzip_types
  application/atom+xml
  application/javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rss+xml
  application/vnd.geo+json
  application/vnd.ms-fontobject
  application/x-font-ttf
  application/x-web-app-manifest+json
  application/xhtml+xml
  application/xml
  font/opentype
  image/bmp
  image/svg+xml
  image/x-icon
  text/cache-manifest
  text/css
  text/plain
  text/vcard
  text/vnd.rim.location.xloc
  text/vtt
  text/x-component
  text/x-cross-domain-policy;
```

## Aplicando as Configurações

Após criar todos os arquivos de configuração, siga estes passos:

1. Crie os links simbólicos:
   ```bash
   for domain in dimaspraivabrava.com.br dimasjoaopaulo.com.br dimasbeiramar.com.br dimasestreito.com.br dimassaojose.com.br; do
       sudo ln -s /etc/nginx/sites-available/$domain /etc/nginx/sites-enabled/
   done
   ```

2. Teste a configuração do Nginx:
   ```bash
   sudo nginx -t
   ```

3. Se o teste for bem-sucedido, reinicie o Nginx:
   ```bash
   sudo systemctl restart nginx
   ```

## Próximas Etapas

Após a configuração do servidor Nginx, o próximo passo será implementar o mascaramento de URL no nível da aplicação. Isso garantirá que internamente, todos os links permaneçam consistentes com o domínio usado para acessar o site. 