import React from 'react'

export default ({ course }) => (
  <article className="background-color-white border-radius-xs box-shadow-s flex flex-column height-full">
    <div className="flex-grow padding-horizontal-s padding-vertical-m">
      <h2 className="font-size-16-short margin-0 margin-bottom-xs">
        <a href={course.fields.permalink}>
          {course.frontmatter.title}
        </a>
      </h2>

      <p className="font-size-16-medium margin-0">
        {course.frontmatter.excerpt}
      </p>
    </div>

    <footer className="course-teaser__footer background-color-gray-100 color-gray-600 flex flex-wrap padding-horizontal-s padding-vertical-m">
      {course.frontmatter.emails && (
        <span className="course-teaser__meta course-teaser__meta--emails">
          <strong>{course.frontmatter.emails}</strong> emails
        </span>
      )}

      {course.frontmatter.videos && (
        <span className="course-teaser__meta course-teaser__meta--videos">
          <strong>{course.frontmatter.videos}</strong> videos
        </span>
      )}

      {course.frontmatter.hours && (
        <span className="course-teaser__meta course-teaser__meta--hours">
          <strong>{course.frontmatter.hours}</strong> hours
        </span>
      )}

      {course.frontmatter.weeks && (
        <span className="course-teaser__meta course-teaser__meta--weeks">
          <strong>{course.frontmatter.weeks}</strong> weeks
        </span>
      )}
    </footer>
  </article>
)
