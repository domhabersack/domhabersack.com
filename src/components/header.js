import Link from 'next/link'

import SiteLogo from '@/components/site-logo'
import Navigation from '@/components/navigation'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between py-3 relative z-10">
      <Link href="/">
        <a
          className="flex-shrink-0 h-6 text-gray-700 w-20 visited:text-gray-700 dark:text-gray-200 dark:visited:text-gray-200"
          title="Dom Habersack"
        >
          <SiteLogo />
        </a>
      </Link>

      <Navigation />
    </header>
  )
}
