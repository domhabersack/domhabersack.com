export default function Textarea({
  ...props
}) {
  return (
    <textarea className="bg-white border-gray-300 px-2.5 py-2 rounded-md shadow-sm text-sm w-full dark:bg-black dark:border-gray-700" {...props} />
  )
}
