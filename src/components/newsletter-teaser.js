import formatDate from '@/lib/format-date'

export default function NewsletterTeaser({
  newsletter,
}) {
  const {
    createdAt,
    excerpt,
    issue,
    permalink,
    title,
  } = newsletter

  return (
    <div>
      <footer className="mb-0.5 text-gray-500 text-xs dark:text-gray-400">
        <strong className="font-medium mr-1">
          #{issue}
        </strong>

        {formatDate(createdAt)}
      </footer>

      <h3 className="leading-snug m-0 mb-1 text-base">
        <a href={permalink}>
          {title}
        </a>
      </h3>

      <p className="m-0 text-sm">
        {excerpt}
      </p>
    </div>
  )
}
