import React from 'react'

export default ({ children, type }) => {
  const backgroundColor = ({
    'error': 'red-100',
    'info': 'blue-100',
    'success': 'green-100'
  }[type] || 'gray-100');

  const borderColor = ({
    'error': 'red-300',
    'info': 'blue-300',
    'success': 'green-300'
  }[type] || 'gray-400');

  return (
    <p className={`background-color-${backgroundColor} border-color-${borderColor} border-radius-xs border-style-solid border-width-s font-size-14-medium padding-horizontal-s padding-vertical-s m:font-size-16-medium`} dangerouslySetInnerHTML={{ __html: children }} />
  )
}
