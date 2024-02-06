# React + TypeScript + Vite + Vitest + Testing Library + MSW

this is a template for a React project with TypeScript, Vite, Vitest, Testing Library and MSW.

## Features

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [MSW](https://mswjs.io/)


# Getting Started

## Prerequisites

[bun](https://bun.sh/docs/installation) is required to run the project.

```bash
npm install -g bun
```

## Boot and Test

```bash
bun install
bun run dev
bun rnu test
```


# Directory Structure

```
├── README.md
├── bun.lockb
├── index.html
├── package.json
├── public
├── setup.ts // vitest setup script
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── __tests__
│   │   ├── components
│   │   └── libs
│   ├── assets
│   ├── components
│   ├── index.css
│   ├── libs
│   ├── main.tsx
│   ├── mocks // msw mocks
│   │   ├── rest
│   │   │   └── handlers.ts
│   │   └── server.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts // vitest configuration
```

