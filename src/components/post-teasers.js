import React from 'react'

import PostTeaser from './post-teaser'

export default ({ posts }) => (
  <div className="grid grid-columns-1 grid-column-gap-m grid-row-gap-l s:grid-columns-2 s:grid-column-gap-m s:grid-row-gap-s m:grid-columns-3 m:grid-row-gap-m l:grid-columns-4 l:grid-column-gap-m">
    {posts.map(post => (
      <PostTeaser post={post} />
    ))}
  </div>
)
