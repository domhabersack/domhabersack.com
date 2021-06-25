import { MDXRemote } from 'next-mdx-remote'

import Icon from '@/components/icon'
import Layout from '@/components/layout'
import Lessons from '@/components/lessons'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
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

      <PageTitle>
        {title}
      </PageTitle>

      <div className="break-words mb-8 prose prose-blue dark:prose-dark">
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
