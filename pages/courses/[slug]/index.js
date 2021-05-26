import { MDXRemote } from 'next-mdx-remote'

import Icon from '@/components/icon'
import Layout from '@/components/layout'
import Lessons from '@/components/lessons'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import { getAllCourseSlugs, getCourseBySlug } from '@/lib/api/courses'
import getMDXSource from '@/lib/get-mdx-source'

export default function Course({
  createdAt,
  excerpt,
  lessons,
  mdxSource,
  ogImage,
  permalink,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Courses',
      url: '/courses',
    }, {
      label: title,
    },
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        ogImage={ogImage}
        permalink={permalink}
        publishedAt={createdAt}
        title={title}
      />

      <div className="mb-12">
        <h1>
          {title}
        </h1>

        <aside className="bg-gray-100 flex flex-wrap mb-6 px-4 py-3 space-x-5 rounded-lg shadow-sm text-gray-600 text-xs dark:bg-black dark:text-gray-300">
          <div className="flex items-center space-x-1">
            <Icon className="h-6 w-6 dark:text-gray-400" type="book" />

            <span>
              <strong>{lessons.length}</strong> lessons
            </span>
          </div>
        </aside>

        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      {lessons && (
        <Lessons lessons={lessons} />
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const course = await getCourseBySlug(params.slug)

  const mdxSource = await getMDXSource(course.content, {
    attachments: course.attachments,
    figures: course.figures,
  })

  return {
    props: {
      ...course,
      mdxSource,
    }
  }
}

export function getStaticPaths() {
  const allCourseSlugs = getAllCourseSlugs()

  return {
    fallback: false,
    paths: allCourseSlugs.map(slug => ({
      params: {
        slug,
      },
    })),
  }
}
