---
slug: arquitetura-sqlite
title: 🗄️ Ingredientes e Tabelas: A BD da Nutri App
authors: [andre]
tags: [backend, sqlite, python]
date: 2025-12-17
---
A Nutri App utiliza o motor **SQLite** para uma gestão de dados leve e eficiente.

### Porquê SQLite?
Como a nossa aplicação é focada na simplicidade, usamos o `sqlite3` nativo do Python. O ficheiro da base de dados vive em `data/nutricao.db`.