import React from 'react'

export default ({ breadcrumbs }) => breadcrumbs ? (
  <nav className="font-size-14-medium font-weight-500 margin-bottom-xl">
    {[{ label: 'Home', url: '/'}, ...breadcrumbs].map(({ label, url }) => url ? (
      <React.Fragment key={`breadcrumb-${label}`}>
        <a className="inline-block" href={url}>
          {label}
        </a>

        <span className="color-gray-600 margin-horizontal-xxs">
          &raquo;
        </span>
      </React.Fragment>
    ) : (
      <span className="color-gray-500" key={`breadcrumb-${label}`}>
        {label}
      </span>
    ))}
  </nav>
) : null
