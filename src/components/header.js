import React from 'react'

import IslovelyLogo from '@/components/islovely-logo'
import Navigation from '@/components/navigation'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between py-3 relative z-10">
      <a
        className="flex-shrink-0 h-6 text-black w-14 visited:text-black dark:text-white dark:visited:text-white"
        href="/"
        title="islovely"
      >
        <IslovelyLogo />
      </a>

      <Navigation />
    </header>
  )
}
