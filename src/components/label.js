import React from 'react'

export default ({
  children,
  ...attrs
}) => (
  <label className="block font-size-16-medium font-weight-500 margin-bottom-xxs" {...attrs}>
    {children}
  </label>
)
