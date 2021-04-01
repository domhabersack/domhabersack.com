import React from 'react'

import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import NewsletterTeaser from '@/components/newsletter-teaser'
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

      <h1>
        Newsletter archive
      </h1>

      <p className="mb-12">
        These are some of my previous newsletters. <a href="/newsletter">Sign up</a> if you want to get them delivered straight to your inbox.
      </p>

      <div className="grid gap-12 grid-cols-1">
        {newsletters.map(newsletter => (
          <React.Fragment key={`newsletter-${newsletter.slug}`}>
            <NewsletterTeaser newsletter={newsletter} />
          </React.Fragment>
        ))}
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
