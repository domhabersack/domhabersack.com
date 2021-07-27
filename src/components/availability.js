import config from '@/config'

export default function Availability() {
  return (
    <span className="bg-green-100 rounded-full font-medium px-2.5 py-0.5 text-green-700 text-xs dark:bg-green-600 dark:text-green-50">
      {config.availability}
    </span>
  )
}
