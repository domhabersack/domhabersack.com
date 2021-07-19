import Link from 'next/link'

import Icon from '@/components/icon'
import NewsletterSignup from '@/components/newsletter-signup'
import UppercaseHeading from '@/components/uppercase-heading'

const SOCIAL_PROFILES = {
  '@domhabersack on Twitter': {
    href: 'https://twitter.com/domhabersack',
    icon: 'twitter-logo',
  },
  'Dom Habersack on YouTube': {
    href: 'https://youtube.com/channel/UCaAuE1af4GpzXcQ1Fx-diMQ',
    icon: 'youtube-logo',
  },
  'domhabersack on Twitch': {
    href: 'https://twitch.tv/domhabersack',
    icon: 'twitch-logo',
  },
  'domhabersack on GitHub': {
    href: 'https://github.com/domhabersack',
    icon: 'github-logo',
  },
  'domhabersack on CodePen': {
    href: 'https://codepen.io/domhabersack',
    icon: 'codepen-logo',
  },
  'Dom Habersack on LinkedIn': {
    href: 'https://linkedin.com/in/domhabersack',
    icon: 'linkedin-logo',
  },
  'domhabersack on dribbble': {
    href: 'https://dribbble.com/domhabersack',
    icon: 'dribbble-logo',
  },
  '@domhabersack on mastodon.social': {
    href: 'https://mastodon.social/@domhabersack',
    icon: 'mastodon-logo',
  },
  'dom@domhabersack.com': {
    href: 'mailto:dom@domhabersack.com',
    icon: 'email',
    iconStyle: 'solid',
  }
}

export default function Footer() {
  return (
    <footer className="divide-y text-gray-600 dark:divide-gray-700 dark:text-gray-300">
      <div className="py-8 space-y-10 sm:flex sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex sm:space-x-5 md:space-x-8 lg:space-x-16">
          <div className="w-1/2 sm:w-auto">
            <UppercaseHeading>
              Company
            </UppercaseHeading>

            <div className="flex flex-col items-start mb-2 space-y-1.5 text-sm">
              <Link href="/about">
                <a className="block py-1">
                  About
                </a>
              </Link>

              <Link href="/writing">
                <a className="block py-1">
                  Blog
                </a>
              </Link>

              <Link href="/firetips">
                <a className="block py-1">
                  Fire tips
                </a>
              </Link>

              <Link href="/projects">
                <a className="block py-1">
                  Projects
                </a>
              </Link>

              <Link href="/contact">
                <a className="block py-1">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          <div className="w-1/2 sm:w-auto">
            <UppercaseHeading>
              Legal
            </UppercaseHeading>

            <div className="flex flex-col items-start mb-3 space-y-1.5 text-sm">
              <Link href="/legal-notice">
                <a className="block py-1">
                  Legal Notice
                </a>
              </Link>

              <a className="block py-1 iubenda-embed iubenda-nostyle no-brand" href="https://www.iubenda.com/privacy-policy/31487586">
                Privacy Policy
              </a>

              <a className="block py-1 iubenda-embed iubenda-nostyle no-brand" href="https://www.iubenda.com/privacy-policy/31487586/cookie-policy">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="sm:w-72 md:w-80">
          <NewsletterSignup />
        </div>
      </div>

      <div className="py-8 sm:flex sm:items-center sm:justify-between">
        <p className="m-0 mb-3 text-xs sm:mb-0">
          &copy; 2021 Dominik Habersack. All rights reserved.
        </p>

        <div className="flex space-x-2.5">
          {Object.entries(SOCIAL_PROFILES).map(([title, {
            href,
            icon,
            iconStyle,
          }]) => (
            <a
              className="block text-gray-600 dark:text-gray-300"
              href={href}
              key={title}
              title={title}
            >
              <Icon className="h-6 w-6" type={icon} style={iconStyle} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
