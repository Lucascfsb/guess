# Guess

Um jogo de adivinhação de palavras desenvolvido com React + TypeScript e Vite. O objetivo é descobrir a palavra secreta a partir de uma dica, informando letras até completar a solução antes de exceder o número máximo de tentativas.

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-6.0.2-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
</p>

<p align="center">
  <img width="604" height="923" alt="image" src="https://github.com/user-attachments/assets/72426996-4df5-42eb-8b03-3c864bc7919b" />
</p>

## 🧩 Sobre o projeto

O jogo seleciona uma palavra aleatória da lista de desafios, exibe uma dica e permite que o usuário insira uma letra por vez. A cada tentativa, o sistema:

- Valida se a letra já foi usada;
- Verifica se a letra existe na palavra;
- Atualiza a pontuação;
- Contabiliza o uso de letras no histórico;
- Encerra o jogo quando a palavra é concluída ou quando o limite for atingido.

A interface foi construída com componentes reutilizáveis e estilos modularizados em CSS Modules.

## 🎮 Como funciona

1. A aplicação escolhe uma palavra aleatória.
2. Uma dica descreve o tema ou conceito da palavra.
3. O jogador digita uma letra.
4. Se a letra estiver correta, ela é marcada como acerto.
5. Caso o jogador complete a palavra, o jogo informa a vitória.
6. Se ultrapassar o limite de tentativas, o jogo revela a palavra e reinicia.

## 🏗️ Stack utilizada

- **Frontend:** React, TypeScript, Vite
- **Estilização:** CSS Modules
- **Qualidade de Código:** ESLint

## 📁 Estrutura do projeto

```text
guess/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── restart.svg
│   │   └── tip.svg
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Input/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── Letter/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   ├── LettersUsed/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── Tip/
│   │       ├── index.tsx
│   │       └── styles.module.css
│   ├── utils/
│   │   └── words.ts
│   ├── app.module.css
│   ├── App.tsx
│   ├── global.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## ▶️ Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o projeto em modo de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível no navegador em uma URL local fornecida pelo Vite, normalmente:

```text
http://localhost:5173
```

### 3. Build de produção

```bash
npm run build
```

### 4. Preview da build

```bash
npm run preview
```

## 🧪 Scripts disponíveis

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 🚀 Possíveis melhorias

- adicionar dificuldade por nível;
- incluir mais palavras e categorias;
- implementar ranking de pontuação;
- criar modo multiplayer ou tempo por rodada;
- suportar palavras com acentos e caracteres especiais.

## 📌 Observações

O projeto está em um estágio de protótipo funcional e possui a lógica principal do jogo já implementada. A organização por componentes facilita futuras expansões e manutenção.

## Autor

Projeto desenvolvido em React + TypeScript como exercício de lógica e UI para jogos de palavras.
