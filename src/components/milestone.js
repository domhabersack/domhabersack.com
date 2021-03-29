import formatDate from '@/lib/format-date'
import Calendar from '@/icons/calendar'
import Email from '@/icons/email'
import Coins from '@/icons/coins'
import Smartphone from '@/icons/smartphone'
import Sparkles from '@/icons/sparkles'
import Stack from '@/icons/stack'

const ICONS = {
  'calendar': <Calendar />,
  'coins': <Coins />,
  'email': <Email />,
  'sparkles': <Sparkles />,
  'smartphone': <Smartphone />,
  'stack': <Stack />,
}

export default function Milestone({
  milestone,
}) {
  const {
    date,
    excerpt,
    icon,
    title,
  } = milestone

  const Icon = ICONS[icon]

  return (
    <div className="flex items-start space-x-2.5">
      <div className="bg-yellow-300 p-2 rounded-full dark:bg-yellow-400">
        <div className="h-6 text-gray-700 w-6">
          {Icon}
        </div>
      </div>

      <div className="flex-1">
        <header className="flex flex-col-reverse flex-1 justify-between mb-1 lg:flex-row lg:items-center lg:space-x-2.5">
          <h3 className="leading-snug m-0 text-base">
            {title}
          </h3>

          <span className="text-gray-500 text-xs dark:text-gray-400">
            {formatDate(date)}
          </span>
        </header>

        <p className="text-sm">
          {excerpt}
        </p>
      </div>
    </div>
  )
}
