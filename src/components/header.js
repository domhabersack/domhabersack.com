import React from 'react'

import Navigation from './navigation'

export default () => (
  <header className="align-items-center flex flex-wrap padding-vertical-l justify-between">
    <a className="flex-no-shrink margin-right-m" href="/">
      <img src="/assets/logo.svg" alt="islovely" />
    </a>

    <Navigation />
  </header>
)
