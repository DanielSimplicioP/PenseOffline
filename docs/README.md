# PENSEOFFLINE – All-in-one

Este pacote entrega layout (Liquid/BS5), páginas, site settings Web API, CSVs das tabelas e webfiles para o widget do Dashboard.

## Passos
1) Portal Management → Web Templates: criar `_layout-main` e `_react-host` (copiar /templates)
2) Content Snippets: `header`, `footer`, `styles`, `scripts` (copiar /snippets)
3) Site Settings: criar as chaves de /site-settings/site-settings.json (Active)
4) Páginas: criar no Design Studio e colar /pages/*.liquid
5) Dataverse: criar tabelas (Data workspace) com base nos CSVs em /dataverse
6) Lists/Form: adicionar a /desafios e /progresso
7) Web Files: criar `dashboard.css` e `dashboard.js` com conteúdo de /webfiles
8) Teste /dashboard (mock → dados reais quando `po_desafio` existir e permissões estiverem OK)

## Dica
troque no `_react-host` para apontar para `/build/assets/index-XXXX.css/js` do seu bundle.
