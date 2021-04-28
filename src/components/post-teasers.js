import Grid from '@/components/grid'
import PostTeaser from '@/components/post-teaser'

export default function PostTeasers({
  posts,
}) {
  return (
    <Grid>
      {posts.map(post => (
        <PostTeaser key={`post-teaser-${post.slug}`} post={post} />
      ))}
    </Grid>
  )
}
