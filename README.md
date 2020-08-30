# eslint-plugin-nwronski

This repo contains the linting rules for my projects that use ESLint with TypeScript.

## Installation

Install ESLint and TSLint (for now) for your project.

```shell
yarn add --dev eslint tslint
```

### Default (TypeScript/Node)

Install the `eslint-plugin-nwronski` module and dependencies

```shell
yarn add --dev eslint-plugin-nwronski
```

Create a `.eslintrc.json` file in the root folder of your project and add the following:

`.eslintrc.json`

```json
{
  "extends": "plugin:nwronski/base",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Add `lint` script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix \"./src/**/*.ts\""
  }
}
```

### Angular (TypeScript/Jasmine/Protractor)

Install the `eslint-plugin-nwronski` module and dependencies

```shell
yarn add --dev @angular-eslint/eslint-plugin @angular-eslint/template-parser @angular-eslint/eslint-plugin-template @angular-eslint/builder eslint-plugin-nwronski
```

Create a `.eslintrc.json` file in the root folder of your project and add the following:

`.eslintrc.json`

```json
{
  "extends": "plugin:nwronski/angular",
  "parserOptions": {
    "project": "./tsconfig.eslint.json"
  },
  "rules": {
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": "nw",
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "nw",
        "style": "camelCase"
      }
    ]
  }
}
```

Create a `tsconfig.eslint.json` file in the root folder of your project and add the following:

`tsconfig.eslint.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": [
    "src",
    "e2e"
  ]
}
```

Add `lint` script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "ng lint --fix",
  }
}
```

Add ESLint configuration for Angular CLI to your `angular.json`:

`angular.json`

```json
{
  "projects": {
    "my-fancy-project": {
      "prefix": "nw",
      "architect": {
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "eslintConfig": ".eslintrc.json",
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.component.html"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  }
}
```

### React (TypeScript/Jest)

Install the `eslint-plugin-nwronski` module and dependencies

```shell
yarn add --dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-jest eslint-plugin-nwronski
```

Create a `.eslintrc.json` file in the root folder of your project and add the following:

`.eslintrc.json`

```json
{
  "extends": "plugin:nwronski/react",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Add `lint` script to your `package.json`:

`package.json`

```json
{
  "scripts": {
    "lint": "eslint --fix \"./src/**/*.{ts,tsx}\""
  }
}
```

## Usage

### CLI

```shell
yarn run lint
```

### lint-staged

```shell
yarn add --dev lint-staged
```

`.lintstagedrc.json`

```json
{
  "*.{ts,tsx}": [
    "eslint --fix"
  ]
}
```

### vscode

`.vscode/settings.json`

```json
{

  "eslint.options": {
    "extensions": [
      ".ts",
      ".html",
      ".tsx"
    ]
  }
}
```
