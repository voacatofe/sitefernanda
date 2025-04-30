# Procedimentos de Teste para Estrutura de Rotas e Domínios

Este documento descreve os procedimentos de teste para validar a implementação da estrutura de rotas e domínios para as landing pages.

## Configuração de Ambiente de Teste

### 1. Configuração Local

Para testar a estrutura em ambiente local:

1. Configure o arquivo hosts para mapear domínios localmente:
   
   No Windows: edite `C:\Windows\System32\drivers\etc\hosts`  
   No Linux/Mac: edite `/etc/hosts`

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
   ```

2. Configure o Nginx local para redirecionar os domínios às portas corretas:

   ```nginx
   server {
       listen 80;
       server_name dimaspraivabrava.com.br www.dimaspraivabrava.com.br;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   
   # Repetir configuração para os outros domínios
   ```

3. Inicie o servidor Next.js na porta 3000:
   ```bash
   npm run dev
   ```

### 2. Configuração em Ambiente de Staging

Para testes em ambiente de staging:

1. Configure subdomínios temporários em um domínio de teste:
   ```
   dverse.staging.example.com
   dseason.staging.example.com
   dsense.staging.example.com
   dnex.staging.example.com
   dvert.staging.example.com
   ```

2. Configure as variáveis de ambiente para usar esses domínios de staging.

## Casos de Teste

### 1. Navegação Direta por Domínio

| ID | Descrição | Passos | Resultado Esperado |
|----|-----------|--------|-------------------|
| 1.1 | Acesso direto à raiz do domínio D'VERSE | 1. Acessar dimaspraivabrava.com.br | A landing page do D'VERSE é exibida com URL dimaspraivabrava.com.br (sem mostrar /lp/dverse) |
| 1.2 | Acesso direto à raiz do domínio D'SEASON | 1. Acessar dimasjoaopaulo.com.br | A landing page do D'SEASON é exibida com URL dimasjoaopaulo.com.br (sem mostrar /lp/dseason) |
| 1.3 | Acesso direto à raiz do domínio D'SENSE | 1. Acessar dimasbeiramar.com.br | A landing page do D'SENSE é exibida com URL dimasbeiramar.com.br (sem mostrar /lp/dsense) |
| 1.4 | Acesso direto à raiz do domínio D'NEX | 1. Acessar dimasestreito.com.br | A landing page do D'NEX é exibida com URL dimasestreito.com.br (sem mostrar /lp/dnex) |
| 1.5 | Acesso direto à raiz do domínio D'VERT | 1. Acessar dimassaojose.com.br | A landing page do D'VERT é exibida com URL dimassaojose.com.br (sem mostrar /lp/dvert) |

### 2. Navegação por Subpáginas

| ID | Descrição | Passos | Resultado Esperado |
|----|-----------|--------|-------------------|
| 2.1 | Acesso a subpágina de galeria no D'VERSE | 1. Acessar dimaspraivabrava.com.br/galeria | A página de galeria do D'VERSE é exibida corretamente (sem mostrar /lp/dverse) |
| 2.2 | Acesso a subpágina de contato no D'SEASON | 1. Acessar dimasjoaopaulo.com.br/contato | A página de contato do D'SEASON é exibida corretamente (sem mostrar /lp/dseason) |
| 2.3 | Acesso a subpágina inexistente | 1. Acessar dimasbeiramar.com.br/pagina-inexistente | Uma página 404 personalizada é exibida, mantendo o domínio atual |

### 3. Navegação por Links Internos

| ID | Descrição | Passos | Resultado Esperado |
|----|-----------|--------|-------------------|
| 3.1 | Navegação por link interno na mesma LP | 1. Acessar dimaspraivabrava.com.br<br>2. Clicar em link para "Galeria" | Navega para dimaspraivabrava.com.br/galeria mantendo o mesmo domínio |
| 3.2 | Tentativa de navegação para outra LP | 1. Acessar dimaspraivabrava.com.br<br>2. Tentar acessar uma URL de outra LP | Redireciona para a LP do domínio atual ou apresenta página 404 |
| 3.3 | Navegação por link que aponta para outra LP | 1. Acessar dimaspraivabrava.com.br<br>2. Clicar em link que aponta para outra LP | Redireciona para o domínio correto da outra LP |

### 4. Carregamento de Recursos

| ID | Descrição | Passos | Resultado Esperado |
|----|-----------|--------|-------------------|
| 4.1 | Carregamento de imagens | 1. Acessar cada domínio<br>2. Verificar o carregamento de imagens | Todas as imagens carregam corretamente |
| 4.2 | Carregamento de CSS e JS | 1. Inspecionar o código-fonte de cada LP<br>2. Verificar os caminhos dos recursos | Todos os recursos carregam corretamente, sem erros no console |
| 4.3 | Carregamento de recursos compartilhados | 1. Verificar recursos utilizados por múltiplas LPs | Recursos compartilhados carregam corretamente em todas as LPs |

### 5. Redirecionamentos e SSL

| ID | Descrição | Passos | Resultado Esperado |
|----|-----------|--------|-------------------|
| 5.1 | Redirecionamento HTTP para HTTPS | 1. Acessar http://dimaspraivabrava.com.br | Redireciona para https://dimaspraivabrava.com.br |
| 5.2 | Redirecionamento WWW para não-WWW (ou vice-versa) | 1. Acessar www.dimaspraivabrava.com.br | Comportamento consistente: redireciona ou mantém conforme configurado |
| 5.3 | Certificado SSL | 1. Acessar cada domínio via HTTPS<br>2. Verificar certificado SSL | Cada domínio apresenta certificado SSL válido e sem erros |

### 6. SEO e Responsividade

| ID | Descrição | Passos | Resultado Esperado |
|----|-----------|--------|-------------------|
| 6.1 | Meta tags específicas | 1. Inspecionar código-fonte de cada LP<br>2. Verificar meta tags | Cada LP tem meta tags específicas (title, description, etc.) |
| 6.2 | Tags canônicas | 1. Inspecionar código-fonte de cada LP<br>2. Verificar tag canonical | Tag canonical aponta para o domínio atual |
| 6.3 | Responsividade | 1. Acessar cada domínio em dispositivos diferentes<br>2. Redimensionar janela do navegador | Layout se adapta corretamente em todas as resoluções |

## Matriz de Cobertura

Esta matriz demonstra a cobertura dos casos de teste em relação às funcionalidades:

| Funcionalidade | Casos de Teste |
|----------------|---------------|
| Rotas específicas | 1.1, 1.2, 1.3, 1.4, 1.5 |
| Configuração DNS | 5.1, 5.2, 5.3 |
| Mascaramento de URL | 2.1, 2.2, 3.1, 3.2, 3.3 |
| Configuração servidor web | 4.1, 4.2, 4.3, 5.1, 5.3 |
| SEO e otimizações | 6.1, 6.2, 6.3 |

## Relatório de Teste

Use a seguinte estrutura para documentar os resultados dos testes:

```markdown
# Relatório de Testes - Estrutura de Rotas e Domínios

Data: [DATA]
Ambiente: [Local/Staging/Produção]
Versão: [VERSÃO]

## Sumário

- Total de testes: XX
- Testes bem-sucedidos: XX
- Testes com falha: XX
- Taxa de sucesso: XX%

## Detalhes

| ID | Status | Observações |
|----|--------|------------|
| 1.1 | ✅/❌ | [Observações] |
| ... | ... | ... |

## Problemas Identificados

1. [Descrição do problema 1]
   - Severidade: [Alta/Média/Baixa]
   - Caso de teste relacionado: [ID]
   - Solução proposta: [Descrição]

## Próximas Etapas

1. [Ação 1]
2. [Ação 2]
```

## Automatização de Testes

Para automatizar alguns destes testes, considere implementar:

1. Testes de integração usando Cypress ou Playwright que:
   - Acessem cada domínio
   - Verifiquem conteúdo específico de cada LP
   - Testem navegação por links internos
   - Verifiquem redirecionamentos

2. Testes de unidade para o middleware e funções de adaptação de URL.

3. Testes de carga para verificar o desempenho sob tráfego elevado.

## Monitoramento Contínuo

Após a implementação em produção, configure monitoramento para:

1. Uptime de cada domínio
2. Tempo de resposta
3. Erros de certificado SSL
4. Redirecionamentos incorretos
5. Erros 404 ou 500 