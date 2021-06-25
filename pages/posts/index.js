import Breakout from '@/components/breakout'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import ArticleTeasers from '@/components/article-teasers'
import { getAllPosts } from '@/lib/api/posts'

export default function Posts({
  posts,
}) {
  const breadcrumbs = [
    {
      label: 'Blog'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="I write about design, development, and productivity. My weekly newsletter contains shorter pieces. Read all previous issues in the archive."
        imageSubpath="pages/posts"
        permalink="/posts"
        title="Blog"
      />

      <div className="mb-8">
        <h1>
          Blog
        </h1>

        <p>
          I write about design, development, and productivity. My <a href="/newsletter">weekly newsletter</a> contains many more and usually shorter pieces. Read all previous issues in the <a href="/newsletter/archive">archive</a>.
        </p>
      </div>

      <Breakout>
        <ArticleTeasers articles={posts} />
      </Breakout>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
