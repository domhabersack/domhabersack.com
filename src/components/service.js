import Icon from '@/components/icon'

export default function Service({
  children,
  icon,
  title,
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-blue-500 p-3 rounded-md dark:bg-blue-600">
        <Icon className="h-6 text-white w-6" type={icon} />
      </div>

      <div className="flex-1 -mt-1">
        <div className="space-y-2">
          <h3 className="font-medium m-0 text-gray-900 text-lg dark:text-gray-50">
            {title}
          </h3>

          <div className="space-y-3 text-base text-gray-500 dark:text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
