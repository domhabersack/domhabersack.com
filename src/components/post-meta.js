import React from 'react'
import Image from 'next/image'

import formatDate from '@/lib/format-date'

export default function PostMeta({
  author,
  avatar,
  createdAt,
}) {
  return (
    <div className="flex items-center space-x-2.5">
      <Image
        alt={author}
        className="h-10 rounded-full w-10"
        height="40"
        src={avatar}
        width="40"
      />

      <div className="flex flex-col space-y-0.5 text-xs">
        <span className="font-bold text-gray-600 dark:text-gray-300">
          {author}
        </span>

        <span className="text-gray-500 dark:text-gray-400">
          {formatDate(createdAt)}
        </span>
      </div>
    </div>
  )
}
