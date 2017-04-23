function attachStyle(path) {
  if (path === '/') { path = '/index' };

  if (process.env.NODE_ENV !== 'production') {
    try {
      return fs.readFileSync('.next/css/style.css');
    } catch(e) { /* No file */ }
  } else {
    const jsonfile = JSON.parse(fs.readFileSync('.next/css-manifest.json'));

    try {
      return fs.readFileSync(jsonfile[`bundles/pages${path}.js.css`]);
    } catch(e) { /* No file */ }
  }
}

export default attachStyle;
