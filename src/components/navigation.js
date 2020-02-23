import React from 'react'

export default () => (
  <nav>
    <ul className="flex flex-wrap font-size-16-short font-weight-500 list-style-none margin-0 padding-0">
      <li className="margin-right-s">
        <a className="inline-block" href="/about">
          About
        </a>
      </li>

      <li className="margin-right-s">
        <a className="inline-block" href="/posts">
          Blog
        </a>
      </li>

      <li className="margin-right-s">
        <a className="inline-block" href="/newsletter">
          Newsletter
        </a>
      </li>

      <li>
        <a className="inline-block" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
)
