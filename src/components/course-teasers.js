import React from 'react'

import CourseTeaser from '@/components/course-teaser'
import Grid from '@/components/grid'

export default function CourseTeasers({
  courses,
}) {
  return (
    <Grid>
      {courses.map(course => (
        <React.Fragment key={`course-teaser-${course.slug}`}>
          <CourseTeaser course={course} />
        </React.Fragment>
      ))}
    </Grid>
  )
}
