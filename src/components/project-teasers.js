import React from 'react'

import Grid from '@/components/grid'
import ProjectTeaser from '@/components/project-teaser'

export default function ProjectTeasers({
  projects,
}) {
  return (
    <Grid>
      {projects.map(project => (
        <React.Fragment key={`project-teaser-${project.slug}`}>
          <ProjectTeaser project={project} />
        </React.Fragment>
      ))}
    </Grid>
  )
}
