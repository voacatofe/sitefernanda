# Geração de Landing Pages Estáticas

Este documento explica como gerar versões estáticas separadas para cada landing page dos empreendimentos, para hospedagem em domínios diferentes na Hostinger.

## Visão Geral

O processo utiliza o Next.js para gerar versões estáticas (HTML, CSS e JavaScript) de cada landing page, que podem ser hospedadas em domínios separados sem necessidade de um servidor Node.js.

Cada domínio terá sua própria landing page específica:
- dimaspraivabrava.com.br → D'VERSE (Praia Brava)
- dimasjoaopaulo.com.br → D'SEASON (João Paulo)
- dimasbeiramar.com.br → D'SENSE (Beira Mar)
- dimasestreito.com.br → D'NEX (Estreito)
- dimassaojose.com.br → D'VERT (São José)

## Pré-requisitos

- Node.js 16 ou superior
- Acesso ao painel de controle da Hostinger para todos os domínios
- Permissão para fazer upload e extrair arquivos na pasta public_html de cada domínio

## Gerando os Builds

Para gerar versões estáticas de todas as landing pages:

1. Certifique-se de que o código está atualizado e funcional
2. Execute o script de build:

```bash
npm run build:lps
```

O script:
- Gera builds estáticos para cada landing page
- Compacta cada build em um arquivo ZIP separado
- Salva os arquivos ZIP na pasta `builds/` do projeto

Os arquivos de saída serão:
- `builds/dimaspraivabrava.com.br.zip` → Landing page D'VERSE
- `builds/dimasjoaopaulo.com.br.zip` → Landing page D'SEASON
- `builds/dimasbeiramar.com.br.zip` → Landing page D'SENSE
- `builds/dimasestreito.com.br.zip` → Landing page D'NEX
- `builds/dimassaojose.com.br.zip` → Landing page D'VERT

## Publicando no Hostinger

Para cada domínio (repita o processo para cada um):

1. Acesse o painel da Hostinger
2. Vá para Hospedagem → Selecione o domínio → Gerenciador de Arquivos
3. Navegue até a pasta raiz (public_html)
4. Faça o upload do arquivo ZIP correspondente:
   - Para dimaspraivabrava.com.br, use `dimaspraivabrava.com.br.zip`
   - E assim por diante para os demais domínios
5. Extraia o arquivo ZIP na pasta public_html
   - Selecione a opção para substituir arquivos existentes
   - Isso substituirá todos os arquivos no domínio pela landing page específica

## Verificando a Instalação

Após a implantação, verifique se cada site está funcionando corretamente:

1. Acesse o domínio no navegador (ex: https://dimaspraivabrava.com.br)
2. Verifique se a landing page do empreendimento correto é exibida
3. Teste a responsividade e todas as funcionalidades
4. Certifique-se de que os formulários de contato estão funcionando

## Solução de Problemas

Se encontrar problemas:

- **Problema de exibição**: Verifique se a extração do ZIP foi realizada corretamente e se todos os arquivos foram substituídos
- **Problema com imagens**: Confirme se o diretório de imagens foi transferido corretamente
- **Problema nos formulários**: Verifique se as configurações de e-mail do domínio estão corretas na Hostinger

## Atualizações Futuras

Para atualizar uma landing page específica:

1. Faça as alterações no código-fonte
2. Execute o script build:lps novamente
3. Faça upload e extraia apenas o arquivo ZIP do domínio específico que precisa ser atualizado

## Observações Importantes

- Este método mantém a URL original na barra de endereços do navegador
- Cada domínio hospeda apenas sua landing page específica
- Essa abordagem dispensa configurações avançadas de servidor ou middleware 