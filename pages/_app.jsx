import React from 'react'
import Head from 'next/head'

import '@/styles/global.css'

export default function App({
  Component,
  pageProps,
}) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script async defer data-domain="domhabersack.com" src="https://stats.domhabersack.com/js/index.js"></script>
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
}
