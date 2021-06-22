import formatDate from '@/lib/format-date'

export default function NewsletterTeaser({
  newsletter,
}) {
  const {
    createdAt,
    excerpt,
    permalink,
    title,
  } = newsletter

  return (
    <div className="space-y-2">
      <footer className="text-gray-500 text-sm dark:text-gray-400">
        {formatDate(createdAt)}
      </footer>

      <h3 className="font-medium m-0 text-lg">
        <a className="text-gray-900 visited:text-gray-900" href={permalink}>
          {title}
        </a>
      </h3>

      <p className="m-0 text-base text-gray-500">
        {excerpt}
      </p>

      <a className="inline-block font-medium text-blue-600 visited:text-blue-600" href={permalink}>
        Read full article
      </a>
    </div>
  )
}
