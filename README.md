# GesDec 
GesDec is an app which detects the sign gestures. The app is deployed in herokuapp https://gesdec.herokuapp.com/
API Repo: https://github.com/NabinKawan/GesDec-api 

## Features:
* Detect sign gestures
* Send feedback
* Download the model
* View model summary,confusion matrix, loss graph

## Run project
``` 
* git clone https://github.com/NibanK/GesDec-web.git
* npm install 
* npm run dev
```

## Eslint and prettier setup
## What it does ?
#### Eslint
* Improves quality of the code by improving readability, removing errors before execution

#### Prettier
* Formats your code

## Installing
1.  ``` npm install --save-dev @babel/eslint-parser eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-import  ```
    
    Here we added eslint for code-quality rules and we will follow the Airbnb js/react standard for that.
    Also, we added prettier which will format your code to follow a specific set of formatting rules. Eslint-plugin-prettier helps to use prettier as a plugin for eslint.
    And the job of eslint-config-prettier is to turn off all ESLint rules that are unnecessary anymore or might conflict with Prettier rules.

2. Add .prettierrc.json file:
    ```
    {
        "printWidth": 100,
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "all"
    }
    ```
    The formating rules will be taken from this file. You can also change some default rules as your requirement.

3. Add .prettierignore file to ignore formating for the specific files:
    ```
    node_modules
    build
    .gitlab-ci.yml
    .github
    README.md
    ```
3. For eslint add .eslintrc
    ```
    {
        "parser": "@babel/eslint-parser",
        "parserOptions": {
            "sourceType": "module",
            "requireConfigFile": false,
            "allowImportExportEverywhere": false,
            "codeFrame": false
        },
        "extends": ["airbnb"],
        "env": {
            "browser": true,
            "jest": true
        },
        "rules": {
            "max-len": ["error", { "code": 100 }],
            "prefer-promise-reject-errors": ["off"],
            "react/jsx-filename-extension": ["off"],
            "react/prop-types": ["warn"],
            "no-return-assign": ["off"],
            "no-unused-vars":"warn"
        },
        "plugins": ["prettier"]
    }
    ``` 
    You can also ignore linting for specific files by adding .eslintignore

4. In package.json add below portion in scripts section
    ```
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    },
   ```
    Then you can lint and fix whole code using this by npm run lint or npm run lint:fix

5. Now choose default formatter as eslint 

## Typescript setup
## Installation
``` npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest ```
Rename atleast one the file to .tsx/ts so that after starting server it will generate tsconfig.json file automatically.

