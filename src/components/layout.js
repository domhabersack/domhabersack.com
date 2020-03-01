import React from 'react'
import { Helmet } from 'react-helmet'

import Breadcrumbs from './breadcrumbs'
import Footer from './footer'
import Header from './header'
import Taper from './taper'

const IS_IN_DEBUG_MODE = false

export default ({ breadcrumbs, children }) => (
  <>
    <Helmet htmlAttributes={IS_IN_DEBUG_MODE ? { 'class': 'debug' } : {}}>
      <link rel="stylesheet" href="https://use.typekit.net/gbp8hqr.css" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>

    <div className="flex flex-column height-full">
      <div className="flex-noshrink margin-horizontal-m">
        <Header />
      </div>

      <main className="l-default__main">
        <div className="l-default__content">
          <Taper>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </Taper>

          {children}
        </div>
      </main>

      <div className="l-default__footer">
        <div className="l-default__content">
          <Footer />
        </div>
      </div>
    </div>
  </>
)
