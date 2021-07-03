import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import PageTitle from '@/components/page-title'
import ProjectTeasers from '@/components/project-teasers'
import { getAllProjects } from '@/lib/api/projects'

export default function Projects({
  projects,
}) {
  const breadcrumbs = [
    {
      label: 'Projects'
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="I am working on a few free and paid products, trying to earn an income with them over time."
        imageSubpath="pages/projects"
        permalink="/projects"
        title="Projects"
      />

      <PageTitle>
        Projects
      </PageTitle>

      <p className="max-w-xl mb-8 text-gray-500 text-xl">
        I am working on a few free and paid products, trying to earn an income with them over time. This catalog will expand as I add new experiments and try new venues.
      </p>

      <ProjectTeasers projects={projects} />
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()

  return {
    props: {
      projects,
    },
  }
}
