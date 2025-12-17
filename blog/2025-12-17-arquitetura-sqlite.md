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

### 👤 Tabela: Users
Guarda os dados de login e as métricas corporais do utilizador.

| Coluna | Tipo | Notas |
| :--- | :--- | :--- |
| `user_id` | INTEGER | Primary Key (Auto) |
| `username` | TEXT | Único |
| `password_hash` | TEXT | Encriptado |
| `role` | TEXT | Default: 'user' |


| `peso_kg` | REAL | Peso atual |
| `altura_cm` | INTEGER | Altura em cm |
| `objetivo_calorias` | INTEGER | Meta diária |