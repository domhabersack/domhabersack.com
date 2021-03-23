import prism from 'remark-prism'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@/components/mdx-components'

export default async function getMDXSource(content, scope) {
  return await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [prism],
    },
    scope,
  })
}
