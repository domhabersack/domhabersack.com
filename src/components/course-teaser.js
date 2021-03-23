import React from 'react'

import Card from '@/components/card'
import CalendarIcon from '@/icons/calendar'
import ClockIcon from '@/icons/clock'
import EmailWithLetterIcon from '@/icons/email-with-letter'
import VideoIcon from '@/icons/video'

export default function CourseTeaser({
  course,
}) {
  const {
    emails,
    excerpt,
    highlightColor,
    hours,
    permalink,
    title,
    videos,
    weeks,
  } = course

  const meta = {
    emails: {
      value: emails,
      Icon: EmailWithLetterIcon,
    },
    videos: {
      value: videos,
      Icon: VideoIcon,
    },
    hours: {
      value: hours,
      Icon: ClockIcon,
    },
    weeks: {
      value: weeks,
      Icon: CalendarIcon,
    },
  }

  return (
    <Card>
      <article
        className={`
          ${highlightColor}
          border-0
          border-t-8
          flex
          flex-col
          h-full
        `}
      >
        <div className="flex-grow pb-3 pt-2 px-4">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="m-0 text-sm">
            {excerpt}
          </p>
        </div>

        <footer className="bg-gray-100 flex flex-wrap px-4 py-3 space-x-5 text-gray-600 text-xs dark:bg-black dark:text-gray-300">
          {Object.entries(meta).map(([type, {
            Icon,
            value,
          }]) => value && (
            <React.Fragment key={`meta-${type}`}>
              <div className="flex items-center space-x-1">
                <div className="h-6 w-6 dark:text-gray-400">
                  <Icon />
                </div>

                <span>
                  <strong>{value}</strong> {type}
                </span>
              </div>
            </React.Fragment>
          ))}
        </footer>
      </article>
    </Card>
  )
}
