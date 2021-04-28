import CourseTeaser from '@/components/course-teaser'
import Grid from '@/components/grid'

export default function CourseTeasers({
  courses,
}) {
  return (
    <Grid>
      {courses.map(course => (
        <CourseTeaser course={course} key={`course-teaser-${course.slug}`} />
      ))}
    </Grid>
  )
}
