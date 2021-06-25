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

      <h3 className="font-medium text-gray-900 text-lg dark:text-gray-50">
        <a href={permalink}>
          {title}
        </a>
      </h3>

      <p className="text-base text-gray-500 dark:text-gray-400">
        {excerpt}
      </p>

      <a className="inline-block font-medium text-blue-600 dark:text-blue-500" href={permalink}>
        Read case study
      </a>
    </article>
  )
}
