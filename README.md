# @babel/plugin-syntax-let-decorators

> Allow parsing of decorators attach on let.

## Installation

```sh
npm install --save-dev github:ukari/babel-plugin-syntax-let-decorators
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["@babel/plugin-syntax-let-decorators"]
}
```

### Via CLI

```sh
babel --plugins @babel/plugin-syntax-let-decorators script.js
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-syntax-let-decorators"]
});
```
