import { useRouter } from 'next/router'

import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import { triggerEvent } from '@/lib/analytics'

export default function Custom404() {
  const router = useRouter()

  triggerEvent('404', {
    props: {
      path: router.asPath,
    }
  })

  return (
    <Layout>
      <MetaTags
        description="Something went wrong."
        title="404"
      />

      <H1>
        404 Page not found
      </H1>

      <p className="max-w-xl mb-8 text-gray-500 text-xl dark:text-gray-400">
        Oops, something went wrong here!
      </p>

      <p className="max-w-xl text-gray-500 text-xl dark:text-gray-400">
        This page might have disappeared. If you’re missing something that used to be here, <a href="/contact">shoot me an email</a> or get in touch <a href="https://twitter.com/domhabersack">via Twitter</a> and I’ll see where it ended up.
      </p>
    </Layout>
  )
}
