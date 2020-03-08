import React from 'react'

export default ({
  children,
  ...rest
}) => (
  <label className="block font-size-16-medium font-weight-600 margin-bottom-xxs" {...rest}>
    {children}
  </label>
)
