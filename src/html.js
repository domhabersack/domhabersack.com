import React from 'react'

export default ({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents
}) => {
  return (
    <html {...htmlAttributes} className="debug">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>

      <body {...bodyAttributes}>
        {preBodyComponents}

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        {postBodyComponents}
      </body>
    </html>
  )
}
