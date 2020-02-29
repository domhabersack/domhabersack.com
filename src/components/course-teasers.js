import React from 'react'

import CourseTeaser from './course-teaser'

export default ({ courses }) => (
  <div className="grid grid-columns-1 grid-column-gap grid-row-gap-l s:grid-columns-2 s:grid-row-gap-s m:grid-columns-3 m:grid-row-gap-m l:grid-columns-4">
    {courses.map(course => (
      <CourseTeaser course={course} key={`course-teaser-${course.id}`} />
    ))}
  </div>
)
