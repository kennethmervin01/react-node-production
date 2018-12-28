## react-node-production

Boilerplate to serve "Production Build React Applications" in Node.js/Express Server

### Installation

Clone the repos

```bash
git clone https://github.com/kennethmervin01/react-node-production.git
```

Go to the root directory and install dependencies

```bash
yarn install
```

In the root directory, copy the production build of your react application inside the "react" folder.

### Usage

#### For Development

Application will run using nodemon (hot reload) and babel-node(transpile ES6 codes)

```bash
yarn start
```

#### For Production

Convert your ECMAScript 2015+ node scripts into a backward compatible version and put it in the build folder

```bash
yarn build
```

Run your application in build folder

```bash
yarn production
```
