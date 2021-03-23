import React from 'react'

import getLogoForName from '@/lib/get-logo-for-name'

export default function Logo({
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
          title={name}
        />
      )}

      {Light && (
        <Light
          alt={name}
          className="hidden dark:block"
          title={name}
        />
      )}

      {Dark && (
        <Dark
          alt={name}
          className="block dark:hidden"
          title={name}
        />
      )}
    </React.Fragment>
  )
}
