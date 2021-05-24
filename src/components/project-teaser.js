import Image from 'next/image'
import { Card } from '@yieldui/react'

import Icon from '@/components/icon'
import Stack from '@/components/stack'

export default function ProjectTeaser({
  project,
}) {
  const {
    excerpt,
    hero,
    heroAlt,
    permalink,
    revenue,
    stack,
    title,
    url,
  } = project

  return (
    <Card>
      <article className="flex flex-col h-full">
        <a href={permalink}>
          <Image
            alt={heroAlt}
            height="360"
            layout="responsive"
            src={hero}
            width="640"
          />
        </a>

        <div className="flex flex-col h-full px-4 py-3">
          <h2 className="leading-snug m-0 mb-1.5 text-base">
            <a href={permalink}>
              {title}
            </a>
          </h2>

          <p className="flex-grow mb-6 text-sm">
            {excerpt}
          </p>

          <Stack stack={stack} />
        </div>

        <footer className="bg-gray-100 flex flex-wrap justify-between px-4 py-3 text-gray-600 text-xs dark:bg-black dark:text-gray-300">
          <div className="flex items-center space-x-1">
            <Icon className="h-6 w-6 dark:text-gray-400" type="coins" />

            <span>
              Revenue: <strong>${revenue}</strong>/month
            </span>
          </div>

          <a
            className="flex items-center"
            href={url}
          >
            <Icon className="h-6 w-6" type="link" />

            <span>
              Website
            </span>
          </a>
        </footer>
      </article>
    </Card>
  )
}
