import React from 'react'

export default () => (
  <nav>
    <ul className="flex flex-wrap font-size-16-short font-weight-500 list-style-none margin-0 padding-0">
      <li className="margin-right-xs xs:margin-right-s">
        <a className="inline-block padding-vertical-xs" href="/courses">
          Courses
        </a>
      </li>

      <li className="margin-right-xs xs:margin-right-s">
        <a className="inline-block padding-vertical-xs" href="/posts">
          Blog
        </a>
      </li>

      <li className="margin-right-xs xs:margin-right-s">
        <a className="inline-block padding-vertical-xs" href="/newsletter">
          Newsletter
        </a>
      </li>

      <li>
        <a className="inline-block padding-vertical-xs" href="/about">
          About
        </a>
      </li>
    </ul>
  </nav>
)
