import Link from 'next/link'

import H1 from '@/components/h1'
import Icon from '@/components/icon'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'

export default function HireMe() {
  const breadcrumbs = [
    {
      label: 'Work with me',
      url: '/hire-me',
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="I take on a small number of client projects each year. If you need help with an interesting problem, get in touch!"
        ogImage="/og-image/hire-me.png"
        permalink="/hire-me"
        title="Work with me"
      />

      <H1>
        Work with me
      </H1>

      <p className="max-w-xl mb-8 text-gray-500 text-xl dark:text-gray-400">
        I take on a small number client projects each year. If you need help with an interesting problem, get in touch!
      </p>

      <div className="prose prose-blue dark:prose-dark">
        <p>
          Over the last 12+ years, I have worked with over a dozen mid-sized to large companies in many positions and with a variety of responsibilities. If <Link href="/services"><a>my services</a></Link> match what you’re looking for, send a message describing your project to <a href="mailto:dom@domhabersack.com">dom@domhabersack.com</a>. I’ll get back to you within two working days.
        </p>

        <p>
          My services are priced to industry standards. I work on the basis of time and material, meaning you pay a daily rate for the days we work together. This approach keeps us more flexible than fixed price contracts, as we can easily adjust the duration of the project when requirements change.
        </p>

        <p>
          I mostly do short-term contracts, with the option of doing ongoing maintenance afterwards.
        </p>

        <p>
          Want to create something together? <a href="mailto:dom@domhabersack.com">Send me a message now</a> to start the conversation!
        </p>
      </div>
    </Layout>
  )
}
