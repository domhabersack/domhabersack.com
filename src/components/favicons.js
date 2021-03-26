import React from 'react'

export default function Favicons() {
  return (
    <React.Fragment>
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
      />

      <link
        color="#3B82F6"
        href="/mask-icon.svg"
        rel="mask-icon"
      />

      <link
        href="/favicon.ico"
        rel="shortcut icon"
      />
    </React.Fragment>
  )
}
