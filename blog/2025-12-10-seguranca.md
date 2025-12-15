---
slug: seguranca-passwords-hash
title: 🔐 Segurança: Fazemos Hash de Passwords, não de Batatas
authors: [andre]
tags: [backend, segurança, criptografia, nodejs]
date: 2025-12-06
---

Na Nutri App, levamos a segurança tão a sério como a contagem de macronutrientes.
Quando te registas na nossa aplicação, prometemos uma coisa: **nunca guardamos a tua password em texto simples.**

Hoje explicamos como cozinhamos (ou melhor, encriptamos) os teus dados.

### O Perigo do Texto Simples ⚠️

Guardar passwords como `123456` na base de dados é como deixar a porta do frigorífico aberta: vai estragar tudo. Se houver uma fuga de dados, os hackers teriam acesso imediato a todas as contas.
Cumprimos com todas as normas do RGPD.

:::danger Nunca faças isto! ❌
Exemplo de como **NÃO** se deve guardar um utilizador:

```javascript
const user = { username: 'andre', password: 'minhapasswordsecreta' };
// Se alguém ler a base de dados, lê a password imediatamente.
db.save(user);
```
:::

### A Solução: Salting & Hashing 🧂

Em vez de guardar o texto original, utilizamos um algoritmo de encriptação robusto chamado **Bcrypt**.

Este processo realiza o **Hashing** da password: transforma a tua senha numa sequência complexa de caracteres (o tal "puré") que é matematicamente impossível de reverter para a palavra original. Além disso, adicionamos um "Salt" (sal digital aleatório) para garantir que cada registo é único e indecifrável.

### 🔮 Próximos Passos
A segurança nunca dorme. No futuro, planeamos implementar:
1.  Autenticação de Dois Fatores (2FA).
2.  Validação de complexidade de passwords (mínimo 8 caracteres).

Na Nutri App, a *privacidade vem sempre primeiro.* 🛡️