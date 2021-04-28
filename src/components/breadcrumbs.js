import { Fragment } from 'react'

export default function Breadcrumbs({
  breadcrumbs,
}) {
  if (!breadcrumbs) {
    return null
  }

  return (
    <nav className="font-medium text-sm w-full">
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
        <Fragment key={`breadcrumb-${label}`}>
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
        <span className="text-gray-400 dark:text-gray-300" key={`breadcrumb-${label}`}>
          {label}
        </span>
      ))}
    </nav>
  )
}
