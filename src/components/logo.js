import React from 'react'

import getLogoForName from '@/lib/get-logo-for-name'

export default function Logo({
  className,
  name,
}) {
  const {
    Dark,
    Light,
    Regular,
  } = getLogoForName(name)

  return (
    <React.Fragment>
      {Regular && (
        <Regular
          alt={name}
          className={className}
          title={name}
        />
      )}

      {Light && (
        <Light
          alt={name}
          className={`${className ?? ''} hidden dark:block`}
          title={name}
        />
      )}

      {Dark && (
        <Dark
          alt={name}
          className={`${className ?? ''} block dark:hidden`}
          title={name}
        />
      )}
    </React.Fragment>
  )
}
