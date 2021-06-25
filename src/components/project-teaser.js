import Image from 'next/image'

import Icon from '@/components/icon'
import Stack from '@/components/stack'

export default function ProjectTeaser({
  project,
}) {
  const {
    excerpt,
    hero,
    heroAlt,
    permalink,
    title,
  } = project

  return (
    <article className="space-y-2">
      <a href={permalink}>
        <img
          alt={heroAlt}
          height="360"
          layout="responsive"
          src={hero}
          width="640"
        />
      </a>

      <h3 className="font-medium text-lg">
        <a className="text-gray-900 visited:text-gray-900" href={permalink}>
          {title}
        </a>
      </h3>

      <p className="text-base text-gray-500">
        {excerpt}
      </p>

      <a className="inline-block font-medium text-blue-600 visited:text-blue-600" href={permalink}>
        Read case study
      </a>
    </article>
  )
}
