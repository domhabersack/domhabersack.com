import Breakout from '@/components/breakout'
import Icon from '@/components/icon'
import Figure from '@/components/figure'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import Stack from '@/components/stack'
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/api/projects'
import getMDXSource from '@/lib/get-mdx-source'
import hydrateMDXSource from '@/lib/hydrate-mdx-source'

export default function Project({
  excerpt,
  hero,
  heroAlt,
  heroCaption,
  mdxSource,
  ogImage,
  permalink,
  revenue,
  stack,
  title,
  url,
}) {
  const body = hydrateMDXSource(mdxSource)

  const breadcrumbs = [
    {
      label: 'Projects',
      url: '/projects'
    }, {
      label: title
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        ogImage={ogImage}
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      <aside className="bg-gray-100 flex flex-wrap justify-between mb-6 px-4 py-3 rounded-lg shadow-sm text-gray-600 text-xs dark:bg-black dark:text-gray-300">
        <div className="flex items-center space-x-1">
          <Icon className="h-6 w-6 dark:text-gray-400" type="coins" />

          <span>
            Revenue: <strong>${revenue}</strong>/month
          </span>
        </div>

        <a
          className="flex items-center"
          href={url}
        >
          <Icon className="h-6 w-6" type="link" />

          <span>
            Website
          </span>
        </a>
      </aside>

      <Breakout>
        <Figure
          alt={heroAlt}
          caption={heroCaption}
          className="m-0 mb-6"
          src={hero}
        />
      </Breakout>

      {body}

      <div className="mt-8">
        <Stack stack={stack} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug)

  const mdxSource = await getMDXSource(project.content, {
    attachments: project.attachments,
    figures: project.figures,
  })

  return {
    props: {
      ...project,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allProjectSlugs = getAllProjectSlugs()

  return {
    fallback: false,
    paths: allProjectSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
