import { MDXRemote } from 'next-mdx-remote'

import Layout from '@/components/layout'
import Lessons from '@/components/lessons'
import MDXComponents from '@/components/mdx-components'
import MetaTags from '@/components/meta-tags'
import { getAllCourseSlugs, getCourseBySlug } from '@/lib/api/courses'
import { getLessonBySlugs, getAllLessonSlugsByCourseSlug } from '@/lib/api/course-lessons'
import getMDXSource from '@/lib/get-mdx-source'

export default function CourseLesson({
  course,
  excerpt,
  id,
  mdxSource,
  permalink,
  title,
}) {
  const breadcrumbs = [
    {
      label: 'Courses',
      url: '/courses',
    }, {
      label: course.title,
      url: course.permalink,
    }, {
      label: title,
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description={excerpt}
        permalink={permalink}
        title={title}
      />

      <h1>
        {title}
      </h1>

      <div className="mb-16">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </div>

      {course.lessons && (
        <>
          <h2 className="text-xl">
            All lessons in this course
          </h2>

          <Lessons
            currentLessonId={id}
            lessons={course.lessons}
          />
        </>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const course = await getCourseBySlug(params.slug)
  const lesson = await getLessonBySlugs(params.slug, params.lessonSlug)

  const mdxSource = await getMDXSource(lesson.content, {
    attachments: lesson.attachments,
    figures: lesson.figures,
  })

  return {
    props: {
      ...lesson,
      course,
      mdxSource,
    }
  }
}

export async function getStaticPaths() {
  const allCourseSlugs = getAllCourseSlugs()

  return {
    fallback: false,
    paths: allCourseSlugs.map(slug => {
      const allLessonSlugs = getAllLessonSlugsByCourseSlug(slug)

      return allLessonSlugs.map(lessonSlug => ({
        params: {
          slug,
          lessonSlug,
        },
      }))
    }).flat(1),
  }
}
