import Grid from '@/components/grid'
import ProjectTeaser from '@/components/project-teaser'

export default function ProjectTeasers({
  projects,
}) {
  return (
    <Grid>
      {projects.map(project => (
        <ProjectTeaser key={`project-teaser-${project.slug}`} project={project} />
      ))}
    </Grid>
  )
}
