import React from 'react'

import Favicons from './components/favicons'

export default ({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents
}) => (
  <html lang="en-US" prefix="og: http://ogp.me/ns#" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Favicons />

      {headComponents}
    </head>

    <body {...bodyAttributes}>
      {preBodyComponents}

      <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />

      {postBodyComponents}
    </body>
  </html>
)
