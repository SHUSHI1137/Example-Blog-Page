# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Hands-on Exercise #8
React

# Background
React is a JavaScript library for building user interfaces. In the session, you have learned the basics of React focusing on JSX, Component, Props, and Styling. Moreover, you know how you can import and export JavaScript components through ESModule. In this hands-on exercise, you will create a static web page following the model to get more familiar with how React works. 

# Tasks
- Initialize a new React project using Vite and npm
- Install the dependencies and start the development server to preview your React application
- Create different components and style them similarly to the model below

Ref: https://cleverse.com/

## Resources
- Lecture Slides
- React Docs : https://beta.reactjs.org/learn
- Importing and Exporting Components : https://beta.reactjs.org/learn/importing-and-exporting-components

## Additional Resources
- The following resources are optional. They are here if you want to explore more about the topic.
- Get started with Tailwind CSS : https://tailwindcss.com/docs/installation
- Emotion Introduction : https://emotion.sh/docs/introduction
- Next.js : https://nextjs.org/
- Remix : https://remix.run/
