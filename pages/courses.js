import CourseTeasers from '@/components/course-teasers'
import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import { getAllCourses } from '@/lib/api/courses'

export default function Courses({
  courses,
}) {
  const breadcrumbs = [
    {
      label: 'Courses',
      url: '/courses',
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        ogImage="/og-image/courses.png"
        permalink="/courses"
        title="Courses"
      />

      <H1>
        Courses
      </H1>

      <p className="max-w-xl mb-8 text-gray-500 text-xl dark:text-gray-400">
        I offer email- and video-courses for designers and developers of any skill level. They are all completely free.
      </p>

      <CourseTeasers courses={courses} />
    </Layout>
  )
}

export async function getStaticProps() {
  const courses = await getAllCourses()

  return {
    props: {
      courses,
    },
  }
}
