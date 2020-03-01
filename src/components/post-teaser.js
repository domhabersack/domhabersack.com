import React from 'react'

import PostMeta from './post-meta'
import Tag from './tag'

export default ({ post }) => {
  const {
    fields,
    frontmatter
  } = post

  const {
    date,
    permalink,
    slug
  } = fields

  const {
    categories,
    excerpt,
    heroAlt,
    title
  } = frontmatter

  return (
    <article className="background-color-white border-radius-xs box-shadow-s flex flex-column height-full overflow-hidden">
      <a href={permalink}>
        <img alt={heroAlt} className="width-full" src={`/assets/heroes/${slug}--teaser.jpg`} />
      </a>

      <div className="flex flex-column height-full padding-horizontal-s padding-vertical-m">
        <h2 className="font-size-16-short font-weight-700 margin-0 margin-bottom-s">
          <a href={permalink}>
            {title}
          </a>
        </h2>

        <p className="color-gray-700 flex-grow font-size-14-medium margin-0 margin-bottom-l">
          {excerpt}
        </p>

        <div className="flex flex-wrap margin-bottom-xs">
          {categories.map(category => (
            <div className="margin-bottom-xs margin-right-xxs" key={category}>
              <Tag tag={category} />
            </div>
          ))}
        </div>

        <PostMeta date={date} />
      </div>
    </article>
  )
}
