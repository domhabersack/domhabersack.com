import React from 'react'
import { Helmet } from 'react-helmet'

import Application from './application'
import Breadcrumbs from './breadcrumbs'
import Footer from './footer'
import Header from './header'
import Taper from './taper'

const IS_IN_DEBUG_MODE = false

export default ({
  breadcrumbs,
  children
}) => (
  <Application>
    <Helmet htmlAttributes={IS_IN_DEBUG_MODE ? { 'class': 'debug' } : {}}>
      <link rel="stylesheet" href="https://use.typekit.net/gbp8hqr.css" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>

    <div className="flex flex-column height-full">
      <div className="flex-noshrink margin-horizontal-m">
        <Header />
      </div>

      <main className="l-default__main flex-grow flex-no-shrink padding-bottom-xl padding-horizontal-span padding-top-l">
        <Taper>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Taper>

        {children}
      </main>

      <div className="background-color-gray-100 flex-none padding-horizontal-span">
        <Footer />
      </div>
    </div>
  </Application>
)
