# Boilerplate for creating React apps with serverless support using vite

https://boilerplate-react-serverless-vite.vercel.app/

## Run on http://localhost:3000 (requires Vercel CLI)
````
git clone https://github.com/smohadjer/boilerplate-react-serverless.git
npm install
vercel dev
````

If you need database support you can create a `.env` file in root of the project with the following variable to access a remote MongoDB instance (replace username and password with yours):
````
DB_URI = "mongodb+srv://<username>:<password>@cluster0.3d1jx4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
````

## Deploy to live
````
vercel --prod
````


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
