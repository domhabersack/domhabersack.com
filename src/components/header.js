import React from 'react'

import Navigation from './navigation'

export default () => (
  <header className="align-items-center flex flex-wrap justify-between padding-vertical-s">
    <a className="flex-no-shrink margin-right-m padding-vertical-xs" href="/">
      <img src="/assets/logo.svg" alt="islovely" />
    </a>

    <Navigation />
  </header>
)
