import Image from 'next/image'

import ExternalLinkIcon from '@/icons-mini/external-link'

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

          <div className="h-4 w-4">
            <ExternalLinkIcon />
          </div>
        </div>
      </div>
    </a>
  )
}
