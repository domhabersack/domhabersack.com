import FiretipTeaser from '@/components/firetip-teaser'
import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import { getAllFiretips } from '@/lib/api/firetips'

export default function Firetips({
  firetips,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
      url: '/firetips'
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="A collection of tips and tricks you can use to improve the performance and readability of your code."
        ogImage="/og-image/firetips.png"
        permalink="/firetips"
        title="Fire tips"
      />

      <H1>
        Fire tips
      </H1>

      <p className="max-w-xl mb-12 text-gray-500 text-xl dark:text-gray-400">
        These are a collection of tips and tricks you can use to improve the performance and readability of your code.
      </p>

      <div className="grid gap-10">
        {firetips.map(firetip => (
          <FiretipTeaser firetip={firetip} key={firetip.slug} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const firetips = await getAllFiretips()

  return {
    props: {
      firetips,
    },
  }
}
