import Link from 'next/link'

import { Tag } from '@yieldui/react'

export default function FiretipTeaser({
  firetip,
}) {
  const {
    permalink,
    tags,
    title
  } = firetip

  const hasTags = tags != null

  return (
    <article className="space-y-2">
      <h2 className="font-medium text-gray-900 text-lg dark:text-gray-50">
        <Link href={permalink}>
          <a>
            {title}
          </a>
        </Link>
      </h2>

      {hasTags && (
        <div className="flex flex-wrap space-x-1.5">
          {tags.map(tag => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      )}

      <Link href={permalink}>
        <a className="inline-block font-medium text-blue-600 dark:text-blue-500">
          Read fire tip
        </a>
      </Link>
    </article>
  )
}
