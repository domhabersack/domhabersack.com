import React from 'react'

import PostMeta from './post-meta'
import Tag from './tag'

export default ({ post }) => (
  <article className="background-color-white border-radius-xs box-shadow-s flex flex-column height-full overflow-hidden">
    <a href={post.fields.permalink}>
      <img alt={post.frontmatter.heroAlt} className="width-full" src={`/assets/heroes/${post.fields.slug}--teaser.jpg`} />
    </a>

    <div className="flex flex-column height-full padding-horizontal-s padding-vertical-m">
      <h2 className="font-size-16-short font-weight-700 margin-0 margin-bottom-s">
        <a href={post.fields.permalink}>
          {post.frontmatter.title}
        </a>
      </h2>

      <p className="color-gray-700 flex-grow font-size-14-medium margin-0 margin-bottom-l">
        {post.frontmatter.excerpt}
      </p>

      <div className="flex flex-wrap margin-bottom-xs">
        {post.frontmatter.categories.map(category => (
          <div className="margin-right-xxs margin-bottom-xs" key={category}>
            <Tag tag={category} />
          </div>
        ))}
      </div>

      <PostMeta date={post.fields.date} />
    </div>
  </article>
)
