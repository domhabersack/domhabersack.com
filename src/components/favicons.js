import React from 'react'

export default function Favicons() {
  return (
    <React.Fragment>
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
      />

      <link
        color="#f45a5a"
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
