import React from 'react'
import Image from 'next/image'

import Card from '@/components/card'
import BookIcon from '@/icons/book'

export default function CourseTeaser({
  course,
}) {
  const {
    emails,
    excerpt,
    hero,
    highlightColor,
    hours,
    lessons,
    permalink,
    title,
    videos,
    weeks,
  } = course

  return (
    <Card>
      <article className="flex flex-col h-full">
        <a href={permalink}>
          <Image
            alt={title}
            height="360"
            layout="responsive"
            src={hero}
            width="640"
          />
        </a>

        <div className="flex-grow px-4 py-3">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="m-0 text-sm">
            {excerpt}
          </p>
        </div>

        <footer className="bg-gray-100 flex items-center px-4 py-3 space-x-1 text-gray-600 text-xs dark:bg-black dark:text-gray-300">
          <BookIcon className="h-6 w-6 dark:text-gray-400" />

          <span>
            <strong>{lessons.length}</strong> lessons
          </span>
        </footer>
      </article>
    </Card>
  )
}
