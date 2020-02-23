import React from 'react'

import Navigation from './navigation'

export default () => (
  <header className="align-items-center flex flex-wrap justify-between padding-vertical-l">
    <a className="flex-no-shrink margin-right-m" href="/">
      <img src="/assets/logo.svg" alt="islovely" />
    </a>

    <Navigation />
  </header>
)
