import Image from 'next/image'
import Link from 'next/link'

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
      <Link href={permalink}>
        <a>
          <Image
            alt={heroAlt}
            height="360"
            layout="responsive"
            src={hero}
            width="640"
          />
        </a>
      </Link>

      <h3 className="font-medium text-gray-900 text-lg dark:text-gray-50">
        <Link href={permalink}>
          <a>
            {title}
          </a>
        </Link>
      </h3>

      <p className="text-base text-gray-500 dark:text-gray-400">
        {excerpt}
      </p>

      <Link href={permalink}>
        <a className="inline-block font-medium text-blue-600 dark:text-blue-500">
          Read case study
        </a>
      </Link>
    </article>
  )
}
