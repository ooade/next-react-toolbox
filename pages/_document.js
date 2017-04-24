import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet, { globalStyleSheet } from '../lib/StyleSheet';

export default class MyDocument extends Document {
  static async getInitialProps({ pathname, renderPage }) {
    const page = renderPage();

    const styles = [
      <style dangerouslySetInnerHTML={{ __html: globalStyleSheet() }} />,
      <style dangerouslySetInnerHTML={{ __html: styleSheet(pathname) }} />
    ];

    return { ...page, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
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
