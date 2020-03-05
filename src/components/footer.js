import React from 'react'

export default () => (
  <footer className="align-items-center color-gray-600 flex flex-column padding-vertical-xl">
    <p className="font-size-16-short margin-0 margin-bottom-l">
      &copy; Dom Habersack, 2020
    </p>

    <div className="flex flex-wrap justify-center list-style-none margin-0 margin-bottom-m padding-0">
      <a className="block font-size-16-medium" href="/legal-notice/">
        Legal notice
      </a>
    </div>

    <div className="flex flex-wrap justify-center list-style-none margin-0 padding-0">
      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="https://github.com/domhabersack">
        <img className="margin-right-xxs" src="/icons/github.svg" alt="domhabersack on GitHub" />

        <span>
          GitHub
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="https://twitter.com/domhabersack">
        <img className="margin-right-xxs" src="/icons/twitter.svg" alt="domhabersack on Twitter" />

        <span>
          Twitter
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="https://dribbble.com/domhabersack">
        <img className="margin-right-xxs" src="/icons/dribbble.svg" alt="domhabersack on dribbble" />

        <span>
          Dribbble
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="https://mastodon.social/@domhabersack">
        <img className="margin-right-xxs" src="/icons/mastodon.svg" alt="@domhabersack on Mastodon" />

        <span>
          Mastodon
        </span>
      </a>
    </div>
  </footer>
)
