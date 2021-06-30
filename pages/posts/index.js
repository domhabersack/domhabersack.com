import ArticleTeasers from '@/components/article-teasers'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
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

      <PageTitle>
        Blog
      </PageTitle>

      <p className="max-w-xl mb-8 text-gray-500 text-xl dark:text-gray-400">
        I write about all things tech and business. My articles cover design, development, productivity, and more.
      </p>

      <div className="max-w-md">
        <ArticleTeasers articles={posts} />
      </div>
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
