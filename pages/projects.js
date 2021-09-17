import H1 from '@/components/h1'
import Layout from '@/components/layout'
import MetaTags from '@/components/meta-tags'
import ProjectTeasers from '@/components/project-teasers'
import { getAllProjects } from '@/lib/api/projects'

export default function Projects({
  projects,
}) {
  const breadcrumbs = [
    {
      label: 'Projects',
      url: '/projects',
    }
  ]

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <MetaTags
        description="I am working on a few free and paid products, trying to earn an income with them over time. Read their case studies."
        ogImage="/og-image/projects.png"
        permalink="/projects"
        title="Projects"
      />

      <H1>
        Projects
      </H1>

      <p className="max-w-xl mb-12 text-gray-500 text-xl">
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
