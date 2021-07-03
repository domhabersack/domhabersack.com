import Image from 'next/image'

export default function CourseTeaser({
  course,
}) {
  const {
    excerpt,
    permalink,
    title,
  } = course

  return (
    <article className="space-y-2">
      <h2 className="font-medium text-gray-900 text-lg dark:text-gray-50">
        <a href={permalink}>
          {title}
        </a>
      </h2>

      <p className="text-base text-gray-500 dark:text-gray-400">
        {excerpt}
      </p>

      <a className="inline-block font-medium text-blue-600 dark:text-blue-500" href={permalink}>
        Take the course
      </a>
    </article>
  )
}
