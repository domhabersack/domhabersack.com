import ArticleTeasers from '@/components/article-teasers'
import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import { getAllArticles } from '@/lib/api/articles'

export default function Posts({
  articles,
}) {
  const breadcrumbs = [
    {
      label: 'Writing',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="I write about all things tech and business. My articles cover design, development, productivity, and more."
        ogImage="/og-image/writing.png"
        permalink="/writing"
        title="Writing"
      />

      <H1>
        Writing
      </H1>

      <p className="max-w-xl mb-8 text-gray-500 text-xl dark:text-gray-400">
        I write about all things tech and business. My articles cover design, development, productivity, and more.
      </p>

      <div className="max-w-md">
        <ArticleTeasers articles={articles} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()

  return {
    props: {
      articles,
    },
  }
}
