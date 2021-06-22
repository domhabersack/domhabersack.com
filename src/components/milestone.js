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
    newsletter,
    project,
  } = embedded

  return (
    <div className="flex items-start space-x-4">
      <div className="bg-yellow-300 p-3 rounded-md dark:bg-yellow-400">
        <Icon className="h-6 text-gray-700 w-6" type={icon} />
      </div>

      <div className="flex-1">
        <div className="space-y-2">
          <span className="text-gray-500 text-sm dark:text-gray-400">
            {formatDate(createdAt)}
          </span>

          <h3 className="font-medium m-0 text-lg">
            {title}
          </h3>

          <p className="m-0 text-base text-gray-500">
            {excerpt}
          </p>
        </div>

        {newsletter && (
          <div className="mt-4">
            <Card>
              <div className="px-4 py-3 space-y-2">
                <h4 className="font-medium text-base">
                  <a className="text-gray-900 visited:text-gray-900" href={newsletter.permalink}>
                    {newsletter.title}
                  </a>
                </h4>

                <p className="m-0 text-gray-500 text-sm">
                  {newsletter.excerpt}
                </p>

                <a className="font-medium inline-block text-blue-600 text-sm visited:text-blue-600" href={newsletter.permalink}>
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
                <h4 className="font-medium text-base">
                  <a className="text-gray-900 visited:text-gray-900" href={project.permalink}>
                    {project.title}
                  </a>
                </h4>

                <p className="m-0 text-gray-500 text-sm">
                  {project.excerpt}
                </p>

                <a className="font-medium inline-block text-blue-600 text-sm visited:text-blue-600" href={project.permalink}>
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
