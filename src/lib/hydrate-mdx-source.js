import hydrate from 'next-mdx-remote/hydrate'

import MDXComponents from '@/components/mdx-components'

export default function hydrateMDXSource(content) {
  return hydrate(content, {
    components: MDXComponents,
  })
}
