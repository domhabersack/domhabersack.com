import React from 'react'

import Grid from '@/components/grid'
import PostTeaser from '@/components/post-teaser'

export default function PostTeasers({
  posts,
}) {
  return (
    <Grid>
      {posts.map(post => (
        <React.Fragment key={`post-teaser-${post.slug}`}>
          <PostTeaser post={post} />
        </React.Fragment>
      ))}
    </Grid>
  )
}
