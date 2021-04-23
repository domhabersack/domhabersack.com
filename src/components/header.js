import SiteLogo from '@/components/site-logo'
import Navigation from '@/components/navigation'

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between py-3 relative z-10">
      <a
        className="flex-shrink-0 h-6 text-gray-700 w-20 visited:text-gray-700 dark:text-gray-200 dark:visited:text-gray-200"
        href="/"
        title="Dom Habersack"
      >
        <SiteLogo />
      </a>

      <Navigation />
    </header>
  )
}
