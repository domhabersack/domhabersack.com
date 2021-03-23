import Document, { Html, Head, Main, NextScript } from 'next/document'

import Favicons from '@/components/favicons'

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        className="antialiased font-sans inter-font-features kerning-auto"
        lang="en-US"
        prefix="og: http://ogp.me/ns#"
      >
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          <Favicons />
        </Head>

        <body className="bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          <Main />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function (w, d) {
                  var loader = function () {
                    var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                    s.src = "https://cdn.iubenda.com/iubenda.js";
                    tag.parentNode.insertBefore(s, tag);
                  };

                  if (w.addEventListener) {
                    w.addEventListener("load", loader, false);
                  } else if (w.attachEvent) {
                    w.attachEvent("onload", loader);
                  } else {
                    w.onload = loader;
                  }
                })(window, document);
              `
            }}
          />

          <NextScript />
        </body>
      </Html>
    )
  }
}
