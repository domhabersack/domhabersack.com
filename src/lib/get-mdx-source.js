import prism from 'remark-prism'
import { serialize } from 'next-mdx-remote/serialize'

export default async function getMDXSource(content, scope) {
  return await serialize(content, {
    mdxOptions: {
      remarkPlugins: [prism],
    },
    scope,
  })
}
