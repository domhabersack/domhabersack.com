import React from 'react'

export default function Tag({
  children,
  href,
}) {
  const HtmlTag = href != null ? 'a' : 'span'

  return (
    <HtmlTag
      className="bg-gray-200 inline-block px-2 py-1.5 rounded text-gray-600 text-xs whitespace-nowrap visited:text-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:visited:text-gray-300"
      href={href}
    >
      {children}
    </HtmlTag>
  )
}
