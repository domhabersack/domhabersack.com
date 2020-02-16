import React from 'react'

import PostMeta from './post-meta'
import Tag from './tag'

export default ({ post }) => {
  console.log({ post })

  return (
    <article className="background-color-white border-radius-xs box-shadow-s flex flex-column height-full overflow-hidden">
      <a href={post.url}>
        <img alt={post.hero_alt} className="width-full" src={`/assets/heroes/${post.title}--teaser.jpg`} />
      </a>

      <div className="flex flex-column height-full padding-horizontal-s padding-vertical-m">
        <h2 className="font-size-16-short font-weight-700 margin-0 margin-bottom-s">
          <a href={post.url}>
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

        <p>
          <PostMeta date={post.date} />
        </p>
      </div>
    </article>
  )
}
