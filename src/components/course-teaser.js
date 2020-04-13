import React from 'react'

export default ({ course }) => {
  const {
    fields,
    frontmatter
  } = course

  const {
    permalink,
    slug
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
      <a className="background-color-gray-100 block intrinsic-ratio-16-by-9" href={permalink}>
        <div className="align-items-center flex justify-center">
          <img alt={title} className="height-full" src={`/assets/courses/${slug}.png`} />
        </div>
      </a>

      <div className="flex-grow padding-horizontal-s padding-vertical-s">
        <h2 className="font-size-16-short margin-0 margin-bottom-xs">
          <a href={permalink}>
            {title}
          </a>
        </h2>

        <p className="font-size-16-medium margin-0">
          {excerpt}
        </p>
      </div>

      <footer className="background-color-gray-100 border-bottom-radius-xs color-gray-600 flex flex-wrap font-size-12-medium padding-horizontal-s padding-vertical-s">
        {emails && (
          <div className="align-items-center inline-flex margin-right-s">
            <img alt="" className="margin-right-xxs" src="/assets/icons/email-with-letter.svg" />

            <span>
              <strong>{emails}</strong>
              {' '}
              emails
            </span>
          </div>
        )}

        {videos && (
          <div className="align-items-center inline-flex margin-right-s">
            <img alt="" className="margin-right-xxs" src="/assets/icons/video.svg" />

            <span>
              <strong>{videos}</strong>
              {' '}
              videos
            </span>
          </div>
        )}

        {hours && (
          <div className="align-items-center inline-flex margin-right-s">
            <img alt="" className="margin-right-xxs" src="/assets/icons/clock.svg" />

            <span>
              <strong>{hours}</strong>
              {' '}
              hours
            </span>
          </div>
        )}

        {weeks && (
          <div className="align-items-center inline-flex margin-right-s">
            <img alt="" className="margin-right-xxs" src="/assets/icons/calendar.svg" />

            <span>
              <strong>{weeks}</strong>
              {' '}
              weeks
            </span>
          </div>
        )}
      </footer>
    </article>
  )
}
