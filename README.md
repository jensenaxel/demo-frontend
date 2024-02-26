# Demo Frontend

## parenthesis checker

```
node parenthesis.js
```

@see below to run the project locally

This project is deployed using AWS Amplify to my personal
console. [AWS Amplify Deployed](https://main.d1zu60gaf1jr0y.amplifyapp.com/)

@see *src/components/registration*

### Things to look at:

- *src/ui* custom ui components that wraps mantine's text input, and offers restrictions, and customization.
- PhoneNumberInput reuses TextInput
- *src/utils* has some formatters and helpers I've built in them.

No State management libraries or Api's are used or wired up

Coding exercise from a frontend perspective: Healthcare providers request to be part of the Availity system. Using
React framework, create a registration user interface so healthcare providers can electronically join Availity. The
following data points should be collected:

- First and Last Name
- NPI number
- Business Address
- Telephone Number
- Email address

---

# Built with Mantine Vite template

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup
  with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
