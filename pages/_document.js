import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import attachStyle from '../lib/attachStyle';

export default class MyDocument extends Document {
  static async getInitialProps({ pathname, renderPage }) {
    const page = renderPage();
    const css = attachStyle(pathname);

    const styles = (
      <style dangerouslySetInnerHTML={{ __html: css }} />
    )

    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <title>SSR React-ToolBox</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
