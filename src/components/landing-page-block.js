import React from 'react'

export default ({ children, heading, imageUrl }) => (
  <div className="align-items-center flex flex-column s:align-items-start s:flex-row s:justify-between">
    <div className="columns-8 margin-bottom-xs xs:columns-6 s:columns-3 l:columns-3">
      <img alt="" src={imageUrl} />
    </div>

    <div className="s:columns-9 l:columns-9">
      <h2 className="font-size-24-medium margin-0 margin-bottom-s">
        {heading}
      </h2>

      {children}
    </div>
  </div>
)
