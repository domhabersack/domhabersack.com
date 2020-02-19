import React from 'react'

import Footer from './footer'
import Header from './header'

export default ({ children }) => (
  <div className="flex flex-column height-full">
    <div className="flex-noshrink margin-horizontal-m">
      <Header />
    </div>

    <main className="l-default__main">
      <div className="l-default__content">
        <p>
          include breadcrumbs.html
        </p>

        {children}
      </div>
    </main>

    <div className="l-default__footer">
      <div className="l-default__content">
        <Footer />
      </div>
    </div>
  </div>
)
