<div align="center">
  <img src="logo.png" width="400px">
  <br/><br/>
  <p> An example that shows how to integrate React-Toolbox in a Next.js App</p>
</div>

## Contents

[![Greenkeeper badge](https://badges.greenkeeper.io/ooade/next-react-toolbox.svg)](https://greenkeeper.io/)
- [Getting Started / Installation](#getting-started--installation)
- [Usage](#usage)
  - [How it works](#how-it-works)
  - [Run it](#run-it)
  - [Usage in a non-nextjs App](#usage-in-a-non-nextjs-app)
- [Deployment](#deployment)
- [Tips](#tips)

### Getting Started / Installation
_Clone this repo_
```
git clone https://github.com/ooade/next-react-toolbox.git

cd next-react-toolbox
```

_Install Dependencies_
```
yarn
```
or
```
npm install
```

### Usage
#### How it works
Webpack handles the loading of css and styles to the page. With ExtractTextPlugin, we were able to place each css file in the designated directory (css); In development, we place just a file (style.css) unminified while in production, we split them up by page name (for each page, a css file is generated at build time).

We use webpack-assets-manifest plugin to keep track of only our css files thereby creating a css-manifest.json file.

Thanks to the power of css-modules-require-hook, we were able to make our css files recognizable by our server with a matching `localIdentName` as used in our css-loader.

Our CSS files are injected to the page by the library we created `lib/StyleSheet` which takes a `pathname`.

#### Run it
It's simple.
```
yarn run dev
```
or
```
npm run dev
```
P.S: You can change/add to React-ToolBox variables in the postcss.config.js file, even after running the app, it works! :smile:

#### Usage in a non-nextjs App
> How to follow this repo pattern in a non-nextjs environment.
It's easy, just make sure you have this on your server:
```js
const cssModulesHook = require('css-modules-require-hook');

cssModulesHook({
  generateScopedName: '[local]__[hash:base64:3]'
});
```
And wherever you have the SSR logic, include the `StyleSheet` library. <br/>
P.S: You will have to strip off the ".next" paths and also replace `bundles/pages${path}.js.css` to wherever the stylesheet(s) are being generated to.

### Deployment
```
now
```
or follow [this guide](https://github.com/mars/heroku-nextjs) to deploy to heroku

### Tips
Contribute some ;)

---

You can reach out to me on [Twitter](https://twitter.com/_ooade), and don't forget to star this project. Thanks!

---

### License
MIT
