---
slug: seguranca-passwords-hash
title: 🔐 Segurança: Fazemos Hash de Passwords, não de Batatas
authors: [andre, firmino]
tags: [backend, segurança, criptografia]
date: 2025-12-06
---

Na Nutri App, levamos a segurança tão a sério como a contagem de macronutrientes.
Quando te registas na nossa aplicação, prometemos uma coisa: **nunca guardamos a tua password em texto simples.**

Hoje explicamos como cozinhamos (ou melhor, encriptamos) os teus dados.

### O Perigo do Texto Simples (Plain Text)

Guardar passwords como `123456` na base de dados é como deixar a porta do frigorífico aberta: vai estragar tudo. Se houver uma fuga de dados, os hackers teriam acesso imediato a todas as contas.

:::danger Nunca faças isto! ❌
Exemplo de como **NÃO** se deve guardar um utilizador:

```javascript
const user = { username: 'andre', password: 'minhapasswordsecreta' };
// Se alguém ler a base de dados, lê a password imediatamente.
db.save(user);