import ArticleTeasers from '@/components/article-teasers'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import { getAllNewsletters } from '@/lib/api/newsletters'

export default function Archive({
  newsletters,
}) {
  const breadcrumbs = [
    {
      label: 'Newsletter',
      url: '/newsletter'
    }, {
      label: 'Archive',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="Read some of my previous newsletters. Sign up to get them delivered to your inbox."
        permalink="/newsletter/archive"
        title="Newsletter archive"
      />

      <PageTitle>
        Newsletter archive
      </PageTitle>

      <p className="max-w-xl mb-8 text-gray-500 text-xl dark:text-gray-400">
        These are some of my previous newsletters. <a href="/newsletter">Sign up</a> if you want to get them delivered straight to your inbox.
      </p>

      <div className="max-w-md">
        <ArticleTeasers articles={newsletters} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const newsletters = await getAllNewsletters()

  return {
    props: {
      newsletters,
    },
  }
}
