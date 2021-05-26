import Image from 'next/image'

import Icon from '@/components/icon'

export default function VimeoVideo({
  id,
  thumbnail,
  title,
}) {
  return (
    <a className="aspect-ratio-16/9 block relative" href={`https://vimeo.com/video/${id}`} title={`”${title}” on Vimeo`}>
      <Image className="filter blur-sm" layout="fill" src={thumbnail} />

      <div className="flex items-center justify-center">
        <div className="bg-white flex font-medium items-center px-3.5 py-2 rounded-md shadow-sm space-x-1.5 text-sm text-blue-600">
          <span>
            Watch on Vimeo
          </span>

          <Icon className="h-4 w-4" type="external-link" size="small" />
        </div>
      </div>
    </a>
  )
}
