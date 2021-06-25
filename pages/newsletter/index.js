import ArticleTeasers from '@/components/article-teasers'
import Icon from '@/components/icon'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import NewsletterSignupForm from '@/components/newsletter-signup-form'
import PageTitle from '@/components/page-title'
import { getLatestNewsletters } from '@/lib/api/newsletters'

const BENEFITS = [
  'progress updates as I build my company in public',
  'tips on design and development you can use immediately',
  'previews of my upcoming course materials',
  'discount codes for my courses and products',
]

export default function Newsletter({
  latestNewsletters,
}) {
  const breadcrumbs = [
    {
      label: 'Newsletter',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="I share progress updates on my journey and tips on design, development, and working smarter."
        imageSubpath="pages/newsletter"
        permalink="/newsletter"
        title="Newsletter"
      />

      <PageTitle>
        Updates and tips, straight to your inbox
      </PageTitle>

      <p>
        In addition to what I share on this site, I occasionally send out updates and tips that help you work smarter. By signing up, you get access to:
      </p>

      <ul className="list-none my-6 p-0 space-y-3">
        {BENEFITS.map(listItem => (
          <li className="flex m-0 space-x-1.5 text-base" key={`newsletter-benefit-${listItem}`}>
            <div className="bg-green-300 flex flex-shrink-0 h-6 items-center justify-center rounded-full w-6 dark:bg-green-400">
              <Icon className="h-4 text-green-800 w-4 dark:text-green-900" type="tick" size="small" />
            </div>

            <span>
              {listItem}
            </span>
          </li>
        ))}
      </ul>

      <p className="mb-6">
        You can find <a href="/newsletter/archive">all previous newsletters</a> in the archive. Get this bonus content before everybody else!
      </p>

      <div className="mb-12">
        <NewsletterSignupForm />
      </div>

      <h2>
        Latest issues
      </h2>

      <div className="max-w-md">
        <ArticleTeasers articles={latestNewsletters} />
      </div>

      <a href="/newsletter/archive">
        Read all issues &rarr;
      </a>
    </Layout>
  )
}

export async function getStaticProps() {
  const latestNewsletters = await getLatestNewsletters({ limit: 6 })

  return {
    props: {
      latestNewsletters,
    },
  }
}
