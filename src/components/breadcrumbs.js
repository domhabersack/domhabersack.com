import React from 'react'

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
        <React.Fragment key={`breadcrumb-${label}`}>
          <a
            className="inline-block"
            href={url}
          >
            {label}
          </a>

          <span className="mx-1 text-gray-500 dark:text-gray-400">
            &raquo;
          </span>
        </React.Fragment>
      ) : (
        <React.Fragment key={`breadcrumb-${label}`}>
          <span className="text-gray-400 dark:text-gray-300">
            {label}
          </span>
        </React.Fragment>
      ))}
    </nav>
  )
}
