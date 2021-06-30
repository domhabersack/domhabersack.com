import { Tag } from '@yieldui/react'

import formatDate from '@/lib/format-date'

export default function ArticleTeaser({
  article,
}) {
  const {
    createdAt,
    excerpt,
    permalink,
    tags,
    title,
  } = article

  return (
    <article className="space-y-2">
      <footer className="text-gray-500 text-sm dark:text-gray-400">
        {formatDate(createdAt)}
      </footer>

      <h3 className="font-medium text-gray-900 text-lg dark:text-gray-50">
        <a href={permalink}>
          {title}
        </a>
      </h3>

      <p className="text-base text-gray-500 dark:text-gray-400">
        {excerpt}
      </p>

      {tags && (
        <div className="flex flex-wrap space-x-1.5">
          {tags.map(tag => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      )}

      <a className="inline-block font-medium text-blue-600 dark:text-blue-500" href={permalink}>
        Read full article
      </a>
    </article>
  )
}
