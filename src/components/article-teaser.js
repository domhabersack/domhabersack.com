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

      <h3 className="font-medium text-lg">
        <a className="text-gray-900 visited:text-gray-900" href={permalink}>
          {title}
        </a>
      </h3>

      <p className="text-base text-gray-500">
        {excerpt}
      </p>

      {tags && (
        <div className="flex flex-wrap space-x-1.5">
          {tags.map(tag => (
            <Tag href={tag.permalink} key={tag.slug}>
              {tag.title}
            </Tag>
          ))}
        </div>
      )}

      <a className="inline-block font-medium text-blue-600 visited:text-blue-600" href={permalink}>
        Read full article
      </a>
    </article>
  )
}
