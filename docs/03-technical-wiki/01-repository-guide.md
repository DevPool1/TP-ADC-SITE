---
sidebar_position: 1
title: Guia do Repositório
slug: /technical-wiki/repository-guide
---

# 🛠️ Guia do Repositório e Workflow

Esta secção destina-se aos _developers_ do projeto. Aqui definimos as nossas regras de contribuição e estrutura.

## Estrutura de Pastas

A estrutura do projeto está organizada da seguinte forma:

```bash
TP-ADC-SITE/
├── docs/               # Documentação (Wiki e Manual)
├── src/                # Código fonte do site (React/Docusaurus)
│   ├── components/     # Componentes Reutilizáveis
│   ├── pages/          # Páginas estáticas (Home, About)
│   └── css/            # Estilos globais
├── static/             # Assets estáticos (imagens, arquivos)
├── docusaurus.config.js # Configuração principal
└── sidebars.js         # Configuração da barra lateral
```

## Git Workflow

Utilizamos um **Gitflow** simplificado para este projeto.

### Ramos Principais
*   `main`: Código em produção. Estável.
*   `develop`: Ramo de integração. Onde o desenvolvimento acontece.

### Ramos de Feature
Para cada nova funcionalidade ou correção, criamos um ramo a partir de `develop`:

`feature/<nome-descritivo>`

Exemplo: `feature/nova-pagina-docs`

### Regras estabelicidas de Commits
*   Mensagens claras e em inglês ou português consistente.
*   Exemplo: `feat: adiciona nova página de equipa` ou `fix: corrige link quebrado no footer`.

## Como Correr Localmente

1.  Clonar o repositório:
    ```bash
    git clone https://github.com/Grupo-ADC/TP-ADC-SITE.git
    ```
2.  Instalar dependências:
    ```bash
    npm install
    ```
3.  Arrancar o servidor de desenvolvimento:
    ```bash
    npm run start
    ```
