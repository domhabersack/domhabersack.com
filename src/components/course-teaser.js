import React from 'react'

export default ({ course }) => (
  <article class="background-color-white border-radius-xs box-shadow-s flex flex-column height-full">
    <div class="flex-grow padding-horizontal-s padding-vertical-m">
      <h2 class="font-size-16-short margin-0 margin-bottom-xs">
        <a href="{course.url}">
          {course.title}
        </a>
      </h2>

      <p class="font-size-16-medium margin-0">
        course.excerpt | markdownify | remove:"<p>" | remove:"</p>"
      </p>
    </div>

    <footer class="course-teaser__footer background-color-gray-100 color-gray-600 flex flex-wrap padding-horizontal-s padding-vertical-m">
      {course.emails && (
        <span class="course-teaser__meta course-teaser__meta--emails">
          <strong>{course.emails}</strong> emails
        </span>
      )}

      {course.videos && (
        <span class="course-teaser__meta course-teaser__meta--videos">
          <strong>{course.videos}</strong> videos
        </span>
      )}

      {course.hours && (
        <span class="course-teaser__meta course-teaser__meta--hours">
          <strong>{course.hours}</strong> hours
        </span>
      )}

      {course.weeks && (
        <span class="course-teaser__meta course-teaser__meta--weeks">
          <strong>{course.weeks}</strong> weeks
        </span>
      )}
    </footer>
  </article>
)
