export default function Flash({
  children,
  type,
}) {
  const backgroundColor = ({
    'error': 'bg-red-50 dark:bg-red-900',
    'info': 'bg-blue-50 dark:bg-blue-900',
    'success': 'bg-green-50 dark:bg-green-900'
  }[type] || 'bg-gray-50 dark:bg-gray-900');

  const borderColor = ({
    'error': 'border-red-200 dark:border-red-800',
    'info': 'border-blue-200 dark:border-blue-800',
    'success': 'border-green-200 dark:border-green-800'
  }[type] || 'border-gray-300 dark:border-gray-800');

  return (
    <p className={`${backgroundColor} ${borderColor} border mb-6 px-4 py-3 rounded-lg text-sm`}>
      {children}
    </p>
  )
}
