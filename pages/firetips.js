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
        description="Snack-sized snippets that help you write better HTML, CSS, and JavaScript."
        ogImage="/og-image/firetips.png"
        permalink="/firetips"
        title="Fire tips"
      />

      <H1>
        Fire tips
      </H1>

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
