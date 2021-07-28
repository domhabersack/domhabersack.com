import { useState } from 'react'
import Link from 'next/link'

import CTA from '@/components/cta'
import Icon from '@/components/icon'

const LINKS = {
  'Home': '/',
  'Projects': '/projects',
  'Services': '/services',
  'Writing': '/writing',
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav aria-label="Global">
        <div className="flex items-center space-x-2.5 sm:hidden">
          <CTA>
            Hire me
          </CTA>

          <button
            aria-haspopup="true"
            className="bg-white border-0 flex items-center justify-center p-1.5 rounded-lg shadow-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-black dark:hover:text-gray-200"
            onClick={openMenu}
            type="button"
          >
            <span className="sr-only">
              Open main menu
            </span>

            <Icon ariaHidden="true" className="h-6 w-6" type="hamburger" />
          </button>
        </div>

        <div className="hidden sm:block sm:space-x-4 sm:space-x-5">
          {Object.entries(LINKS).map(([name, href]) => (
            <Link
              href={href}
              key={href}
            >
              <a className="font-medium text-gray-700 hover:text-gray-900 hover:no-underline visited:text-gray-700 dark:text-gray-200 dark:hover:text-gray-50 dark:visited:text-gray-200">
                {name}
              </a>
            </Link>
          ))}

          <CTA>
            Hire me
          </CTA>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute p-2 -top-4 transform transition origin-top-right w-60 -right-4 sm:hidden">
          <div className="bg-white overflow-hidden rounded-lg shadow-md dark:bg-gray-900">
            <div className="flex items-center justify-end pt-2 px-2">
              <button
                className="bg-gray-100 inline-flex items-center justify-center p-1.5 rounded-lg text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-black dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                onClick={closeMenu}
                type="button"
              >
                <span className="sr-only">
                  Close main menu
                </span>

                <Icon ariaHidden="true" className="h-6 w-6" type="cross" />
              </button>
            </div>

            <div
              aria-labelledby="main-menu"
              aria-orientation="vertical"
              className="p-2 space-y-1"
              role="menu"
            >
              {Object.entries(LINKS).map(([name, href]) => (
                <Link
                  href={href}
                  key={href}
                >
                  <a
                    className="block font-medium px-2 py-2 rounded-md text-gray-700 focus:bg-gray-50 hover:text-gray-900 hover:bg-gray-50 hover:no-underline visited:text-gray-700 dark:text-gray-200 dark:focus:bg-gray-800 dark:hover:text-gray-50 dark:hover:bg-gray-800 dark:visited:text-gray-200"
                    role="menuitem"
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
