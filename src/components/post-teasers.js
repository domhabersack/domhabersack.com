import React from 'react'

import PostTeaser from './post-teaser'

export default ({ posts }) => (
  <div className="teasers">
    {posts.map(post) => (
      <div className="teasers__teaser">
        <PostTeaser post={post} />
      </div>
    )}
  </div>
)
