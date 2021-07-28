import Link from 'next/link'

import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'

export default function HireMe() {
  const breadcrumbs = [
    {
      label: 'Hire me',
      url: '/hire-me',
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
        I take on a small number client projects each year. If you need help with an interesting problem, get in touch!
      </p>

      <div className="prose prose-blue dark:prose-dark">
        <p>
          If <Link href="/services"><a className="">my services</a></Link> match what you’re looking for, send a message describing your project to <a href="mailto:dom@domhabersack.com">dom@domhabersack.com</a>.
        </p>

        <p>
          If your exact situation isn’t covered by what I list in my services, let’s still talk! I’m always up for a new challenge. If I can’t take on your project, I might be able to refer you to someone in my network who can.
        </p>

        <p>
          We’ll schedule a first free discovery consultation within a few days.
        </p>
      </div>
    </Layout>
  )
}
