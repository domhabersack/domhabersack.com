import Link from 'next/link'

import Availability from '@/components/availability'
import SiteLogo from '@/components/site-logo'
import Navigation from '@/components/navigation'

export default function Header() {
  return (
    <header className="flex flex-col items-end py-6 space-y-1.5">
      <div className="flex flex-wrap items-center justify-between relative w-full z-10">
        <Link href="/">
          <a
            className="font-semibold text-base text-gray-800 visited:text-gray-800 dark:text-gray-100 dark:visited:text-gray-100"
            title="Dom Habersack"
          >
            Dom Habersack
          </a>
        </Link>

        <Navigation />
      </div>

      <Availability />
    </header>
  )
}
