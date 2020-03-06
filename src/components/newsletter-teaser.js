import React from 'react'

import Emoji from '../components/emoji'
import formatDate from '../utils/format-date'

export default ({ newsletter }) => {
  const {
    fields,
    frontmatter
  } = newsletter

  const {
    date,
    permalink
  } = fields

  const {
    emoji,
    title
  } = frontmatter

  return (
    <>
      <span className="color-gray-600 font-size-12-short">
        {formatDate(date)}
      </span>

      <h2 className="font-size-20-medium margin-0">
        <a href={permalink}>
          <Emoji name={emoji} />

          {title}
        </a>
      </h2>
    </>
  )
}
