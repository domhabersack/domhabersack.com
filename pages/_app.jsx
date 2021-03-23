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
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
}
