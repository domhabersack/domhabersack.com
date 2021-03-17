import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'

export default function Custom404() {
  return (
    <Layout>
      <MetaTags
        description="Something went wrong."
        title="404"
      />

      <h1>
        404 Page not found
      </h1>

      <p>
        Oops, something went wrong here!
      </p>

      <p>
        This page might have disappeared. If you’re missing something that used to be here, <a href="/contact">shoot me an email</a> or get in touch <a href="https://twitter.com/domhabersack">via Twitter</a> and I’ll see where it ended up.
      </p>
    </Layout>
  )
}
