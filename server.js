const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const cssModulesHook = require('css-modules-require-hook');

cssModulesHook({
  generateScopedName: '[local]__[hash:base64:3]'
});

app.prepare()
  .then(_ => {
    const server = express();

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw error;

      console.log('> App running on port 3000');
    });
  });
