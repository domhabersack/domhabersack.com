import CourseTeasers from '@/components/course-teasers'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import { getAllCourses } from '@/lib/api/courses'

export default function Courses({
  courses,
}) {
  const breadcrumbs = [
    {
      label: 'Courses'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        permalink="/courses"
        title="Courses"
      />

      <PageTitle>
        Courses
      </PageTitle>

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
