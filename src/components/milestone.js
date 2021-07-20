import { Card } from '@yieldui/react'

import Icon from '@/components/icon'
import formatDate from '@/lib/format-date'

export default function Milestone({
  milestone,
}) {
  const {
    createdAt,
    embedded,
    excerpt,
    icon,
    title,
  } = milestone

  const {
    article,
    project,
  } = embedded

  return (
    <div className="flex items-start space-x-4">
      <div className="bg-yellow-300 p-3 rounded-md dark:bg-yellow-400">
        <Icon className="h-6 text-gray-700 w-6" type={icon} />
      </div>

      <div className="flex-1 -mt-1.5">
        <div className="space-y-2">
          <span className="text-gray-500 text-sm dark:text-gray-400">
            {formatDate(createdAt)}
          </span>

          <h3 className="font-medium m-0 text-gray-900 text-lg dark:text-gray-50">
            {title}
          </h3>

          <p className="text-base text-gray-500 dark:text-gray-400">
            {excerpt}
          </p>
        </div>

        {article && (
          <div className="mt-4">
            <Card>
              <div className="px-4 py-3 space-y-2">
                <h4 className="font-medium text-base text-gray-900 dark:text-gray-50">
                  <a href={article.permalink}>
                    {article.title}
                  </a>
                </h4>

                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {article.excerpt}
                </p>

                <a className="font-medium inline-block text-blue-600 text-sm dark:text-blue-500" href={article.permalink}>
                  Read full article
                </a>
              </div>
            </Card>
          </div>
        )}

        {project && (
          <div className="mt-4">
            <Card>
              <div className="px-4 py-3 space-y-2">
                <h4 className="font-medium text-base text-gray-900 dark:text-gray-50">
                  <a href={project.permalink}>
                    {project.title}
                  </a>
                </h4>

                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {project.excerpt}
                </p>

                <a className="font-medium inline-block text-blue-600 text-sm dark:text-blue-500" href={project.permalink}>
                  Read case study
                </a>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
