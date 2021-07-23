import { Fragment } from 'react'

import config from '@/config'
import LinkedData from '@/components/linked-data'

export default function Breadcrumbs({
  breadcrumbs,
}) {
  return (
    <Fragment>
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
        }, index) => index < breadcrumbs.length ? (
          <Fragment key={label}>
            <a
              className="inline-block text-gray-800 dark:text-gray-100"
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

      <LinkedData
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': `${config.siteUrl}${item.url}`,
              name: item.label,
            }
          }))
        }}
      />
    </Fragment>
  )
}
