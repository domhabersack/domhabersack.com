import React from 'react'

import slugify from '../utils/slugify'

export default ({ tag }) => (
  <a
    className="background-color-gray-200 border-radius-xxs color-gray-700 font-size-12-medium inline-block nowrap padding-xs visited:color-gray-700"
    href={`/categories/${slugify(tag)}`}
  >
    {tag}
  </a>
)
