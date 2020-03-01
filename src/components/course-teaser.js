import React from 'react'

export default ({ course }) => {
  const {
    fields,
    frontmatter
  } = course

  const {
    permalink
  } = fields

  const {
    emails,
    excerpt,
    hours,
    title,
    videos,
    weeks
  } = frontmatter

  return (
    <article className="background-color-white border-radius-xs box-shadow-s flex flex-column height-full">
      <div className="flex-grow padding-horizontal-s padding-vertical-m">
        <h2 className="font-size-16-short margin-0 margin-bottom-xs">
          <a href={permalink}>
            {title}
          </a>
        </h2>

        <p className="font-size-16-medium margin-0">
          {excerpt}
        </p>
      </div>

      <footer className="course-teaser__footer background-color-gray-100 border-bottom-radius-xs color-gray-600 flex flex-wrap font-weight-400 padding-horizontal-s padding-vertical-m">
        {emails && (
          <span className="course-teaser__meta course-teaser__meta--emails">
            <strong>{emails}</strong> emails
          </span>
        )}

        {videos && (
          <span className="course-teaser__meta course-teaser__meta--videos">
            <strong>{videos}</strong> videos
          </span>
        )}

        {hours && (
          <span className="course-teaser__meta course-teaser__meta--hours">
            <strong>{hours}</strong> hours
          </span>
        )}

        {weeks && (
          <span className="course-teaser__meta course-teaser__meta--weeks">
            <strong>{weeks}</strong> weeks
          </span>
        )}
      </footer>
    </article>
  )
}
