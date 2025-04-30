# Configuração DNS para Domínios Personalizados

Este documento descreve a configuração DNS necessária para apontar os domínios personalizados de cada empreendimento para o servidor principal da aplicação.

## Domínios e Configurações

| Empreendimento | Domínio | Tipo de Registro | Hostname | Valor | TTL |
|----------------|---------|------------------|----------|-------|-----|
| D'VERSE Beach Concept | dimaspraivabrava.com.br | CNAME/A | @ | [IP_DO_SERVIDOR ou domínio principal] | 3600 |
| D'SEASON Residence Club | dimasjoaopaulo.com.br | CNAME/A | @ | [IP_DO_SERVIDOR ou domínio principal] | 3600 |
| D'SENSE Home Design | dimasbeiramar.com.br | CNAME/A | @ | [IP_DO_SERVIDOR ou domínio principal] | 3600 |
| D'NEX Smart Living | dimasestreito.com.br | CNAME/A | @ | [IP_DO_SERVIDOR ou domínio principal] | 3600 |
| D'VERT Residence Club | dimassaojose.com.br | CNAME/A | @ | [IP_DO_SERVIDOR ou domínio principal] | 3600 |

> Nota: Substituir `[IP_DO_SERVIDOR ou domínio principal]` pelo endereço IP real do servidor ou pelo domínio principal (fernandasoaresimoveis.com.br) dependendo da configuração escolhida.

## Configurações Adicionais

Cada domínio também deve ter as seguintes configurações adicionais:

### Registros www

| Empreendimento | Domínio | Tipo de Registro | Hostname | Valor | TTL |
|----------------|---------|------------------|----------|-------|-----|
| D'VERSE Beach Concept | dimaspraivabrava.com.br | CNAME | www | @ | 3600 |
| D'SEASON Residence Club | dimasjoaopaulo.com.br | CNAME | www | @ | 3600 |
| D'SENSE Home Design | dimasbeiramar.com.br | CNAME | www | @ | 3600 |
| D'NEX Smart Living | dimasestreito.com.br | CNAME | www | @ | 3600 |
| D'VERT Residence Club | dimassaojose.com.br | CNAME | www | @ | 3600 |

### Registros MX (se necessário para email)

Adicionar registros MX apropriados se os domínios também forem utilizados para email.

## Verificação de Propagação

Após a configuração, a propagação DNS pode levar até 48 horas, mas normalmente é concluída em algumas horas. Use as seguintes ferramentas para verificar a propagação:

- [DNSChecker](https://dnschecker.org/)
- [What's My DNS](https://whatsmydns.net/)
- [MXToolbox](https://mxtoolbox.com/SuperTool.aspx)

## Instruções para Registro

1. Acesse o painel de controle do registrador de domínio (Registro.br, GoDaddy, etc.)
2. Navegue até a seção de gerenciamento de DNS
3. Adicione os registros conforme especificado nas tabelas acima
4. Salve as alterações e aguarde a propagação

## Próximas Etapas

Após a configuração DNS, será necessário:

1. Configurar o servidor web (Nginx/Apache) para responder a esses domínios
2. Implementar certificados SSL para cada domínio
3. Configurar regras de rewrite para mascaramento de URL 