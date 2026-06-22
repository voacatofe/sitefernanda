# Relatório de Auditoria e Histórico de Desenvolvimento (GitHub)

Este documento apresenta o histórico administrativo, cronológico e técnico da construção, evolução e entrega do portal imobiliário da Fernanda, mapeando as fases de desenvolvimento desde a sua criação em abril de 2025 até o primeiro marco de finalização e entrega em maio de 2025.

---

## Nota de Disponibilidade e Prova de Entrega (2026)

A versão finalizada da aplicação, correspondendo exatamente às entregas da primeira fase descritas neste documento, está disponibilizada publicamente para auditoria e verificação de funcionamento. 

Abaixo estão os links diretos para o portal e para cada uma das landing pages (produtos imobiliários) que foram desenvolvidas e configuradas por meio do sistema de redirecionamento de domínios:

* 🏠 **Portal Principal / Home:** [https://n8n-fernanda.hvlihi.easypanel.host/](https://n8n-fernanda.hvlihi.easypanel.host/)
  *Apresentação geral da consultora, portfólio completo de empreendimentos e canais de contato.*

* 🏢 **Landing Page - D/VERSE (Praia Brava):** [https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dverse/](https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dverse/)
  *Página de vendas dedicada ao empreendimento residencial de alto padrão D/VERSE.*

* 🏢 **Landing Page - D/SEASON (João Paulo):** [https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dseason/](https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dseason/)
  *Página de vendas focada no empreendimento D/SEASON.*

* 🏢 **Landing Page - D/SENSE (Beira Mar):** [https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dsense/](https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dsense/)
  *Página de vendas focada no empreendimento D/SENSE.*

* 🏢 **Landing Page - D/NEX (Estreito):** [https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dnex/](https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dnex/)
  *Página de vendas focada no empreendimento D/NEX.*

* 🏢 **Landing Page - D/VERT (São José):** [https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dvert/](https://n8n-fernanda.hvlihi.easypanel.host/empreendimentos/dvert/)
  *Página de vendas focada no empreendimento D/VERT.*

* ⚙️ **Painel Administrativo de Empreendimentos:** [https://n8n-fernanda.hvlihi.easypanel.host/admin/empreendimentos](https://n8n-fernanda.hvlihi.easypanel.host/admin/empreendimentos)
  *Painel de controle para edição e gerenciamento dos empreendimentos.*

> [!IMPORTANT]
> **Integridade e Rastreabilidade do Histórico (Finalidade de Prova):**
> As informações contidas neste relatório são extraídas diretamente do histórico de controle de versão Git do projeto. No sistema Git:
> 1. **Imutabilidade:** Cada atualização (deploy) possui um identificador único de hash criptográfico (ex: `ff4cdb1`). Modificações, autoria ou datas não podem ser alteradas retroativamente no histórico de forma invisível.
> 2. **Fato Físico Temporal:** Os carimbos de data registram de forma exata e em sequência quando cada página, formulário e integração de marketing foi efetivamente desenvolvida, alterada e concluída.
>
> Este relatório atua como evidência documental técnica, comprovando a efetiva construção, refinamento e entrega sequencial de todas as funcionalidades e landing pages contratadas no período de **03 de abril de 2025** a **12 de maio de 2025**.

---

## 1. Início do Projeto (Abril de 2025)

O repositório foi iniciado oficialmente em **03 de abril de 2025**. 

A primeira versão consistiu na configuração estrutural básica e na criação de workflows automatizados para deploys em ambientes de desenvolvimento e produção por meio de servidores FTP (Hostinger).

---

## 2. Linha do Tempo de Alterações (Fases de Desenvolvimento)

### Fase 1: Ajustes de Design e Estruturação (04 a 07 de Abril de 2025)
* **Design Visual:** Integração da identidade visual com a inclusão de fontes personalizadas (Galano Grotesque) e otimização das fotos da corretora e dos empreendimentos.
* **Componentes de Mídia:** Adicionado um módulo de upload e gerenciamento de imagens para facilitar a substituição de mídias no portal.

### Fase 2: Autenticação e Primeiras Landing Pages (08 a 14 de Abril de 2025)
* **Área Administrativa:** Implementação das primeiras soluções de login e proteção para a área de admin.
* **Foco em Conversão (Leads):**
  - Inclusão do botão flutuante de WhatsApp na página principal para atendimento direto.
  - Otimizações na página de contato e adição de janelas de confirmação de sucesso ao enviar formulários.
  - Substituição da seção de depoimentos pela seção "Jeito Dimas", focada nos diferenciais da construtora.
* **Integração com Ferramentas de Marketing:** Inclusão e configuração do código do Google Tag Manager (GTM) para rastreamento de visitas.

### Fase 3: Multi-Domínios e Lançamentos Específicos (29 de Abril a 02 de Maio de 2025)
* **Mapeamento de Domínios:** Criação de um sistema inteligente para que diferentes domínios mostrassem as páginas específicas. Por exemplo, acessar `dimaspraivabrava.com.br` renderiza diretamente a Landing Page do empreendimento D/VERSE.
* **Lançamento das Landing Pages:** Implementação e deploy de páginas de vendas focadas para cada um dos seguintes empreendimentos:
  - **D/VERSE** (Praia Brava)
  - **D/SEASON** (João Paulo)
  - **D/SENSE** (Beira Mar)
  - **D/NEX** (Estreito)
  - **D/VERT** (São José)
* **Automação de Exportação:** Criação de scripts automatizados para gerar os arquivos estáticos de cada um dos domínios separadamente, facilitando a hospedagem na Hostinger.

### Fase 4: Integração de Marketing Direto (06 a 08 de Maio de 2025)
* **RD Station:** Integração direta de todos os formulários do site com o RD Station Marketing para recebimento instantâneo de leads.
* **Rastreabilidade Fina:** Melhorias no Google Tag Manager para rastrear a navegação e evitar contagens duplicadas de acessos.
* **Ajustes de Copywriting e Estrutura:**
  - Remoção de campos de e-mail desnecessários dos formulários para aumentar as taxas de conversão no WhatsApp.
  - Atualização dos diferenciais dos empreendimentos com textos mais persuasivos e inclusão de datas corretas de entrega.

---

## 3. Primeiro Marco de Conclusão ("Pronto" - Maio de 2025)

O projeto foi dado como **Pronto pela primeira vez** em **12 de maio de 2025**. 

O último marco dessa fase inicial de entregas foi a geração automática de sitemap.xml para SEO, que completou os requisitos essenciais de indexação nos buscadores e SEO. A partir dessa data, o site rodou de forma estável e os acessos e redirecionamentos foram consolidados.

---

## 4. Fonte Histórica: Registro Completo de Deploys e Entregas (2025)

Abaixo está o registro cronológico completo de todos os deploys e atualizações enviados ao repositório do projeto desde o primeiro dia até o marco final de entrega:

| Identificador | Data | Autor | Alteração Realizada |
| :--- | :--- | :--- | :--- |
| **0f1cc45** | 2025-04-03 | Seu Nome | Configuração inicial com workflows para dev e prod |
| **e1d9a39** | 2025-04-03 | Seu Nome | Descrição da alteração inicial de arquivos |
| **cb44e4d** | 2025-04-03 | Seu Nome | Ajustes na estrutura de diretórios |
| **5ea73c4** | 2025-04-03 | Seu Nome | Corrigido: Alterado npm para pnpm nos workflows |
| **2aa474a** | 2025-04-03 | Seu Nome | Corrigido: Removido `--frozen-lockfile` das etapas de instalação |
| **7ce2816** | 2025-04-03 | Seu Nome | Corrigido: Atualizados dados do FTP e configuração do pnpm |
| **8fa8867** | 2025-04-03 | Seu Nome | Sincronização e correção de build do deploy |
| **0e23697** | 2025-04-03 | Seu Nome | Merge da branch 'dev' para 'main' |
| **5687a5c** | 2025-04-03 | Seu Nome | Corrigir erro de FTP no workflow adicionando `dangerous-clean-slate: false` |
| **3428e24** | 2025-04-03 | Seu Nome | Atualizar configuração de FTP para excluir diretórios `.next/static` do processo de sync |
| **7ba0f9c** | 2025-04-03 | Seu Nome | Ajuste fino no workflow |
| **7ba3c99** | 2025-04-03 | Seu Nome | Ajuste workflow para deploy na raiz do servidor |
| **223da17** | 2025-04-03 | Seu Nome | Adiciona instruções de deploy FTP |
| **dc05116** | 2025-04-03 | Seu Nome | Detalhamento das instruções de deploy FTP |
| **2f06d2c** | 2025-04-03 | Seu Nome | Configura Next.js para exportação estática e deploy FTP |
| **2ce3909** | 2025-04-03 | Seu Nome | Correção de exportação estática e deploy FTP |
| **9fc9768** | 2025-04-03 | Seu Nome | Remove arquivo `wp-sites.json` residual do WordPress |
| **a0cc245** | 2025-04-03 | Seu Nome | Limpeza de arquivos residuais adicionais |
| **dfc2662** | 2025-04-03 | Seu Nome | Adiciona `generateStaticParams` para exportação estática |
| **874491f** | 2025-04-03 | Seu Nome | Ajuste de parâmetros estáticos das rotas |
| **d93ac78** | 2025-04-03 | Seu Nome | Adiciona comentários e força trigger do workflow |
| **06380ec** | 2025-04-03 | Seu Nome | Teste e trigger do deploy automatizado |
| **009074d** | 2025-04-03 | Seu Nome | Build e ajustes finais da primeira versão |
| **e29e807** | 2025-04-03 | Seu Nome | Resolve conflitos de merge de branch |
| **539046e** | 2025-04-03 | Developer | feat: adiciona fonte Galano Grotesque e ajusta imagem da Fernanda |
| **f4ecc19** | 2025-04-04 | Darlan Benites | Merge pull request #3 de voacatofe/main |
| **4c0d15a** | 2025-04-07 | Developer | feat: atualiza imagens dos empreendimentos para usar a mesma foto do hero em todas as miniaturas |
| **2a948b6** | 2025-04-07 | Developer | Ajuste de imagens nos empreendimentos secundários |
| **562bcb0** | 2025-04-07 | Developer | feat: atualiza imagens otimizadas dos empreendimentos |
| **0992454** | 2025-04-07 | Developer | refactor: reorganiza estrutura de pastas do projeto |
| **40a91a9** | 2025-04-07 | Developer | fix: corrige importação do componente ImageUploader e atualiza caminhos |
| **5749e5e** | 2025-04-07 | Developer | feat: adiciona componente ImageUploader e utilitários |
| **bc53b0e** | 2025-04-07 | Seu Nome | Alterações gerais no layout do projeto |
| **a6da06e** | 2025-04-07 | Seu Nome | Corrigir caminhos de importação no layout.tsx |
| **6e61f24** | 2025-04-07 | Seu Nome | Atualizações no layout e adição de novo arquivo estático |
| **f55c6c0** | 2025-04-08 | Developer | fix: corrige autenticação e adiciona scripts de debug |
| **14ee9b1** | 2025-04-08 | Developer | feat: adiciona re-export do hook `useToast` no diretório hooks |
| **bc64035** | 2025-04-08 | Developer | refactor: reorganizando hooks e atualizando dependências |
| **87116e7** | 2025-04-08 | Developer | fix: adicionar parâmetro `salt` na função `getToken` do middleware |
| **1c30895** | 2025-04-08 | Developer | fix: corrigir caminho de deploy FTP para usar diretório `.deploy` |
| **4c3886e** | 2025-04-08 | Darlan Benites | Merge pull request #4 de voacatofe/dev |
| **4eaf5ee** | 2025-04-08 | Developer | fix: corrigir estrutura de arquivos para deploy no modo standalone |
| **53bdc14** | 2025-04-08 | Developer | fix: alterar para modo export estático e adicionar configuração `.htaccess` |
| **8021326** | 2025-04-08 | Developer | fix: voltar para o modo standalone e adicionar configurações de servidor |
| **31ac506** | 2025-04-08 | Developer | fix: adicionar página temporária de manutenção |
| **99c56d7** | 2025-04-08 | Developer | feat: implementar autenticação com Supabase para site estático |
| **2fec7f7** | 2025-04-08 | Developer | feat: implementar autenticação simples com localStorage |
| **ac233f4** | 2025-04-08 | Developer | fix: remover arquivos do NextAuth para compatibilidade com exportação estática |
| **1dab278** | 2025-04-11 | Seu Nome | feat: adicionar configuração para versão V1 (apenas frontend estático) |
| **7f9227e** | 2025-04-11 | Seu Nome | Configuração para exportação estática e correção de problemas no build da versão V1 |
| **2cfe628** | 2025-04-11 | Seu Nome | Adiciona botão flutuante de WhatsApp na página principal |
| **105f172** | 2025-04-12 | Developer | feat: adiciona melhorias na página de contato e rolagem suave (remove endereço/horário, atualiza redes sociais, adiciona modal de sucesso e JeitoDimas) |
| **69ab8a1** | 2025-04-12 | Developer | feat: adiciona novas imagens à galeria do D'Season |
| **65ac23c** | 2025-04-13 | Developer | feat: atualiza informações dos empreendimentos conforme documento e adiciona novas imagens |
| **6108f1b** | 2025-04-13 | Developer | chore: remove arquivos desnecessários e ajusta estilos/contato |
| **21be002** | 2025-04-14 | Developer | feat: atualiza galeria do D'NEX com novas imagens |
| **196fdef** | 2025-04-14 | Developer | fix: atualiza link de download do material do D'SEASON |
| **2e908a4** | 2025-04-14 | Developer | feat: adiciona scripts Google Tag Manager e RD Station |
| **4057247** | 2025-04-14 | Developer | refactor: remove script RD Station para usar apenas Google Tag Manager |
| **ed24292** | 2025-04-14 | Developer | chore: adiciona novas imagens para o empreendimento D'NEX |
| **1d8e60d** | 2025-04-29 | Developer | fix: ajuste na seção de localização para tornar dinâmica e corrigir aspecto da imagem para 16:9 |
| **6750448** | 2025-04-30 | Developer | fix: atualização dos dados dos empreendimentos e inclusão de imagem de localização do D'SEASON |
| **0dba598** | 2025-04-30 | Seu Nome | Comenta bloco de floorplans do D'YARD em `projects.ts` |
| **6ebb0e9** | 2025-04-30 | Seu Nome | Adiciona estrutura inicial para landing pages e componentes compartilhados |
| **21aee15** | 2025-04-30 | Seu Nome | Adiciona componentes compartilhados e implementa landing page do D/VERSE |
| **78cf0fd** | 2025-04-30 | Seu Nome | Implementa mascaramento de URL e configurações de domínios múltiplos |
| **74cff20** | 2025-04-30 | Seu Nome | Implementa componentes base reutilizáveis (Header, Footer, WhatsApp e estilos) |
| **8eba301** | 2025-05-02 | Seu Nome | Implementação das landing pages para os empreendimentos: D/NEX, D/SEASON, D/SENSE e D/VERT. Configuração de middleware para mapeamento de domínios específicos para cada LP. |
| **3832dae** | 2025-05-02 | Seu Nome | fix: corrigido nome do arquivo de imagem no DSeasonLanding |
| **44a4927** | 2025-05-02 | Seu Nome | feat: ajusta middleware para trabalhar com redirecionamentos para o domínio principal |
| **9f70379** | 2025-05-02 | Seu Nome | feat: adiciona script para criar builds estáticos para cada domínio |
| **12c57bb** | 2025-05-02 | Seu Nome | feat: adiciona script simplificado de exportação de landing pages para redirecionamento |
| **603b4d6** | 2025-05-02 | Seu Nome | feat: atualiza configurações para exportação de landing pages estáticas |
| **7dab0b8** | 2025-05-02 | Seu Nome | fix: adiciona layout responsivo para dispositivos móveis no componente `AboutFernanda` |
| **dc7c7b4** | 2025-05-06 | Developer | Implementação do `DataLayer.push` para rastreamento de navegação no GTM |
| **172d7cf** | 2025-05-06 | Developer | Correção para evitar duplicação de eventos `virtualPageview` |
| **18f212d** | 2025-05-06 - | Developer | Correção do erro React #321: Otimização do GTM para evitar duplicação de eventos e problemas com Context |
| **b78e2fe** | 2025-05-07 | Developer | feat: alterações e polimentos recentes no projeto |
| **6cfcc5e** | 2025-05-07 | Developer | fix: adiciona evento pageview tradicional junto com `virtualPageview` para rastreio correto do GTM |
| **a805398** | 2025-05-07 | Seu Nome | fix: remove evento pageview duplicado no GTM |
| **616a3d6** | 2025-05-07 | Seu Nome | ci: desativar workflow 'Deploy to Production' e manter apenas 'Deploy V1 to Production' |
| **c7136f0** | 2025-05-07 | Seu Nome | ci: ajuste e duplicação do trigger do workflow de deploy da V1 |
| **d7048a7** | 2025-05-07 | Seu Nome | ci: remover completamente workflow de deploy para desenvolvimento |
| **a28504a** | 2025-05-07 | Seu Nome | ci: limpeza final de deploys redundantes do workflow de produção |
| **b8a621a** | 2025-05-07 | Seu Nome | ci: forçar atualização dos workflows no GitHub Actions |
| **71a028e** | 2025-05-07 | Seu Nome | refactor: remover evento `virtualPageview` já que o GTM utiliza history change nativo |
| **a34ea77** | 2025-05-07 | Seu Nome | refactor: remover hook `useGTMPageview` pois o GTM detecta automaticamente mudanças de URL |
| **125257d** | 2025-05-07 | Seu Nome | feat: adicionar evento GTM personalizado para mudança de abas nos empreendimentos |
| **d73032d** | 2025-05-07 | Seu Nome | fix: implementar debounce nos eventos GTM para evitar duplicação de page_view |
| **41f3680** | 2025-05-07 | Seu Nome | feat: integrar formulários diretamente com RD Station Marketing via API Key |
| **f957153** | 2025-05-07 | Seu Nome | ci: adicionar variável de ambiente do RD Station nos workflows de deploy |
| **8f090ed** | 2025-05-07 | Seu Nome | fix: corrigir formato do payload de dados para API do RD Station |
| **83ed1f5** | 2025-05-07 | Seu Nome | fix: corrigir campos personalizados para RD Station, especialmente a mensagem |
| **3d1017d** | 2025-05-07 | Seu Nome | refactor: simplificar envio para RD Station usando o campo personalizado `cf_mensagem` |
| **76fdbc3** | 2025-05-07 | Seu Nome | Atualização dos nomes dos empreendimentos: substituição do apóstrofo (') por barra (/) em todos os textos e arquivos |
| **a96e4b0** | 2025-05-07 | Seu Nome | Adiciona data de entrega SET 2027 na página do D/VERSE |
| **2a600e0** | 2025-05-07 | Seu Nome | Remove seção de PLANTAS e adiciona seção 'Fale agora no WhatsApp' na landing page do D/VERSE |
| **f5a1fd3** | 2025-05-07 | Seu Nome | Atualiza informações dos diferenciais do D/VERSE com dados corretos |
| **c642b8d** | 2025-05-07 | Seu Nome | Remove campos de email de todos os formulários e seções de contato |
| **ff0a111** | 2025-05-07 | Seu Nome | Remove seção de PLANTAS e adiciona seção 'Fale agora no WhatsApp' na landing page do D/VERT |
| **ff0a111** | 2025-05-07 | Seu Nome | Remove seção de PLANTAS e adiciona seção 'Fale agora no WhatsApp' na landing page do D/VERT |
| **3ebfb97** | 2025-05-07 | Seu Nome | Atualiza textos e estrutura dos diferenciais do D/VERT com novas descrições |
| **19b1257** | 2025-05-07 | Seu Nome | Atualiza texto do D/VERT: tagline e descrição da corretora |
| **8f417ff** | 2025-05-08 | Seu Nome | fix: limitar galeria a 6 imagens e ajustes de redirecionamento de domínios para LPs. Remoção de diferenciais do DNex e melhorias gerais nas landings. |
| **ff4cdb1** | 2025-05-12 | Developer | feat: Adiciona geração automática de `sitemap.xml` para SEO |
