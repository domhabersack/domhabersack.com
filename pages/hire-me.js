import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'

export default function HireMe() {
  const breadcrumbs = [
    {
      label: 'Hire me',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description=""
        ogImage="/og-image/hire-me.png"
        permalink="/hire-me"
        title="Hire me"
      />

      <H1>
        Hire me
      </H1>

      <p className="max-w-xl mb-12 text-gray-500 text-xl dark:text-gray-400">
        Pretty please.
      </p>
    </Layout>
  )
}
