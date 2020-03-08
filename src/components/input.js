import React from 'react'

export default ({ className, ...attrs }) => (
  <input
    className={`appearance-none background-color-white border-color-gray-300 border-radius-xs border-style-solid border-width-s color-gray-700 font-size-16-medium font-weight-400 margin-0 outline-none padding-horizontal-xs-minus-border padding-vertical-s-minus-border width-full focus:border-color-lue-400 ${className || ''}`}
    {...attrs}
  />
)
