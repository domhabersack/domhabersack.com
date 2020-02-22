import React from 'react'

import PostTeaser from './post-teaser'

export default ({ posts }) => (
  <div className="grid grid-columns-1 grid-column-gap grid-row-gap-l s:grid-columns-2 s:grid-row-gap-s m:grid-columns-3 m:grid-row-gap-m l:grid-columns-4">
    {posts.map(post => (
      <PostTeaser post={post} />
    ))}
  </div>
)
