# simple-calculator

---

### Project documentation

1. Task: [simple-calculator](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)
2. How to run the app:
* Go to `https://github.com/Anatoli-Paliukhovich/simple-calculator/pull/1`
* Clone the repo locally `git@github.com:Anatoli-Paliukhovich/simple-calculator.git`:
```bash
$ git clone git@github.com:Anatoli-Paliukhovich/simple-calculator.git
```
* Go to folder `simple-calculator`:
```bash
$ cd simple-calculator
```
- Switch the branches:
```bash
$ git checkout simple-calculator-dev
```
- Install all dependencies:
```bash
$ npm install
```
- Run the app:
```bash
$ npm run serve
```

---

### Build scripts

```bash
# build in development mode
$ npm run build:dev

# build in production mode
$ npm run build:prod

# run the app on localhost:3000
$ npm run serve

# deploy the app
$ npm run deploy
```

---

### The structure of folders
* .husky: pre-commit hook
* build: bundle of the project with two files index.html and main.js
* node_modules: dependencies
* src:
  - css: style.css
  - utilsJs:
    + converters.js (contains functions that convert the input)
    + handlers.js (contains function for math operations and handlers for buttons)
    + operators.js (contains operators)
    + theme.js (contains logic for changing themes)
  - index.js (the main js file)

© [Anatoli Paliukhovich](https://github.com/Anatoli-Paliukhovich)
