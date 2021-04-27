import CodePen from '@/icons/codepen-logo'
import Dribbble from '@/icons/dribbble-logo'
import Email from '@/icons-fill/email'
import GitHub from '@/icons/github-logo'
import LinkedIn from '@/icons/linkedin-logo'
import Mastodon from '@/icons/mastodon-logo'
import NewsletterSignup from '@/components/newsletter-signup'
import Twitch from '@/icons/twitch-logo'
import Twitter from '@/icons/twitter-logo'
import UppercaseHeading from '@/components/uppercase-heading'
import YouTube from '@/icons/youtube-logo'

const SOCIAL_PROFILES = {
  '@domhabersack on Twitter': {
    href: 'https://twitter.com/domhabersack',
    Logo: Twitter,
  },
  'Dom Habersack on YouTube': {
    href: 'https://youtube.com/channel/UCi_V66TGKpeSHV_4DYCFbjw',
    Logo: YouTube,
  },
  'domhabersack on Twitch': {
    href: 'https://twitch.tv/domhabersack',
    Logo: Twitch,
  },
  'domhabersack on GitHub': {
    href: 'https://github.com/domhabersack',
    Logo: GitHub,
  },
  'domhabersack on CodePen': {
    href: 'https://codepen.io/domhabersack',
    Logo: CodePen,
  },
  'Dom Habersack on LinkedIn': {
    href: 'https://linkedin.com/in/domhabersack',
    Logo: LinkedIn,
  },
  'domhabersack on dribbble': {
    href: 'https://dribbble.com/domhabersack',
    Logo: Dribbble,
  },
  '@domhabersack on mastodon.social': {
    href: 'https://mastodon.social/@domhabersack',
    Logo: Mastodon,
  },
  'dom@domhabersack.com': {
    href: 'mailto:dom@domhabersack.com',
    Logo: Email,
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
              <a className="block py-1" href="/about">
                About
              </a>

              <a className="block py-1" href="/posts">
                Blog
              </a>

              <a className="block py-1" href="/firetips">
                Fire tips
              </a>

              <a className="block py-1" href="/projects">
                Projects
              </a>

              <a className="block py-1" href="/contact">
                Contact
              </a>
            </div>
          </div>

          <div className="w-1/2 sm:w-auto">
            <UppercaseHeading>
              Legal
            </UppercaseHeading>

            <div className="flex flex-col items-start mb-3 space-y-1.5 text-sm">
              <a className="block py-1" href="/legal-notice">
                Legal Notice
              </a>

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
            Logo
          }]) => (
            <a
              className="block h-6 w-6 text-gray-600 dark:text-gray-300"
              href={href}
              key={title}
              title={title}
            >
              <Logo />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
