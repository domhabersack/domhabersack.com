import { Fragment } from 'react'

export default function Breadcrumbs({
  breadcrumbs,
}) {
  return (
    <nav className="font-medium text-sm">
      {[
        {
          label: 'Home',
          url: '/'
        },
        ...breadcrumbs
      ].map(({
        label,
        url
      }) => url ? (
        <Fragment key={label}>
          <a
            className="inline-block"
            href={url}
          >
            {label}
          </a>

          <span className="mx-1 text-gray-500 dark:text-gray-400">
            &raquo;
          </span>
        </Fragment>
      ) : (
        <span className="text-gray-500 dark:text-gray-400" key={label}>
          {label}
        </span>
      ))}
    </nav>
  )
}
