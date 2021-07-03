import FiretipTeaser from '@/components/firetip-teaser'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import { getAllFiretips } from '@/lib/api/firetips'

export default function Firetips({
  firetips,
}) {
  const breadcrumbs = [
    {
      label: 'Fire tips',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="Snack-sized snippets that help you write better HTML, CSS, and JavaScript."
        imageSubpath="pages/firetips"
        permalink="/firetips"
        title="Fire tips"
      />

      <PageTitle>
        Fire tips
      </PageTitle>

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
