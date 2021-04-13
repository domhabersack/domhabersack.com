export default function Input({
  ...props
}) {
  return (
    <input className="bg-white border-gray-300 px-2.5 py-2 rounded-md shadow-sm text-sm w-full dark:bg-black dark:border-gray-700" {...props} />
  )
}

// className="focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:focus:border-blue-600 dark:focus:ring-blue-500"
