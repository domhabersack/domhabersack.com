export default function Button({
  children,
  ...props
}) {
  return (
    <button className="bg-blue-600 border border-transparent text-white px-3.5 py-2 rounded-md text-sm whitespace-nowrap hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700" {...props}>
      {children}
    </button>
  )
}
