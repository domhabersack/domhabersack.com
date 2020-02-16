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
      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="http://github.com/{{ site.profiles.github }}">
        <img className="margin-right-xxs" src="/icons/github.svg" alt="{{ site.profiles.github }} on GitHub" />

        <span>
          GitHub
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="http://twitter.com/{{ site.profiles.twitter }}">
        <img className="margin-right-xxs" src="/icons/twitter.svg" alt="{{ site.profiles.twitter }} on Twitter" />

        <span>
          Twitter
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="http://dribbble.com/{{ site.profiles.dribbble }}">
        <img className="margin-right-xxs" src="/icons/dribbble.svg" alt="{{ site.profiles.dribbble }} on dribbble" />

        <span>
          Dribbble
        </span>
      </a>

      <a className="flex font-size-16 margin-horizontal-xs padding-vertical-xs" href="http://mastodon.social/{{ site.profiles.mastodonsocial }}">
        <img className="margin-right-xxs" src="/icons/mastodon.svg" alt="{{ site.profiles.mastodonsocial }} on Mastodon" />

        <span>
          Mastodon
        </span>
      </a>
    </div>
  </footer>
)
