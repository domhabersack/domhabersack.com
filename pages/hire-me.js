import Link from 'next/link'

import H1 from '@/components/h1'
import Icon from '@/components/icon'
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
          Over the last 12+ years, I have worked with over a dozen mid-sized to large companies in many positions and with a variety of responsibilities. If <Link href="/services"><a>my services</a></Link> match what you’re looking for, send a message describing your project to <a href="mailto:dom@domhabersack.com">dom@domhabersack.com</a>.
        </p>

        <p>
          I mostly do short-term contracts, with the option of doing ongoing maintenance afterwards.
        </p>

        <p>
          Want to create something together? <a href="mailto:dom@domhabersack.com">Send me a message now</a> to start the conversation!
        </p>

        <h2>
          How we make this happen
        </h2>

        <p>
          This is the condensed view of how we’ll go from idea to working together.
        </p>
      </div>

      <div className="max-w-prose mb-20 space-y-10">
        <div className="flex space-x-2">
          <div className="bg-green-100 flex items-center justify-center flex-shrink-0 h-8 rounded-full w-8">
            <Icon className="h-4 text-green-700 w-4" type="tick" size="small" />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-lg text-gray-900">
              Decide you want to work with me.
            </h3>

            <p className="text-base text-gray-500">
              Explore my <Link href="/projects"><a>projects</a></Link>, <Link href="/services"><a>services</a></Link>, and <Link href="/articles"><a>articles</a></Link> until you love my work and want me to build something for you.
            </p>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="bg-blue-500 flex items-center justify-center flex-shrink-0 h-8 rounded-full w-8">
            <Icon className="h-4 text-white w-4" type="arrow-right" size="small" />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium text-lg text-gray-900">
              Send me a request via email.
            </h3>

            <p className="text-base text-gray-500">
              Describe your project and what you need help with in an email to <a className="font-medium text-blue-600 underline" href="mailto:dom@domhabersack.com">dom@domhabersack.com</a>.
            </p>

            <a className="bg-blue-600 border border-transparent font-medium inline-block text-white px-3.5 py-2 rounded-md shadow-sm text-sm whitespace-nowrap disabled:bg-gray-300 disabled:shadow-none disabled:text-gray-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" href="mailto:dom@domhabersack.com">
              Send that email
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
