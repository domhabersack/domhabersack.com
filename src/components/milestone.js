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
    <div className="flex items-start space-x-2.5">
      <div className="bg-yellow-300 p-2 rounded-full dark:bg-yellow-400">
        <Icon className="h-6 text-gray-700 w-6" type={icon} />
      </div>

      <div className="flex-1">
        <header className="flex flex-col-reverse flex-1 justify-between mb-1 lg:flex-row lg:items-center lg:space-x-2.5">
          <h3 className="leading-snug m-0 text-base">
            {title}
          </h3>

          <span className="text-gray-500 text-xs dark:text-gray-400">
            {formatDate(createdAt)}
          </span>
        </header>

        <p className="m-0 text-sm">
          {excerpt}
        </p>

        {newsletter && (
          <div className="mt-3">
            <Card>
              <div className="px-4 py-3">
                <h4 className="font-bold mb-0.5 text-sm">
                  <a href={newsletter.permalink}>
                    {newsletter.title}
                  </a>
                </h4>

                <p className="m-0 text-sm">
                  {newsletter.excerpt}
                </p>
              </div>
            </Card>
          </div>
        )}

        {project && (
          <div className="mt-3">
            <Card>
              <div className="px-4 py-3">
                <h4 className="font-bold mb-0.5 text-sm">
                  <a href={project.permalink}>
                    {project.title}
                  </a>
                </h4>

                <p className="m-0 text-sm">
                  {project.excerpt}
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
