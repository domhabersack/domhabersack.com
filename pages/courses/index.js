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

      <div className="mb-12">
        <PageTitle>
          Courses
        </PageTitle>

        <p>
          I offer <strong>email- and video-courses</strong> for designers and developers of any skill level. Email-courses land in your inbox over a few weeks, video-courses are binge-ready now. They are all <strong>completely free</strong>.
        </p>

        <p>
          I am always working on new content. Sign up to any course or <a href="/newsletter">join my newsletter</a> to catch announcements of upcoming material. If you want to learn about something in particular, tweet me at <a href="https://twitter.com/domhabersack">@domhabersack</a> and I’ll put it on my list!
        </p>
      </div>

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
