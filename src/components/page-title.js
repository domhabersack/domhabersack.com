export default function PageTitle({
  children,
}) {
  return (
    <h1 className="font-bold mb-4 text-gray-700 text-3xl dark:text-gray-200">
      {children}
    </h1>
  )
}
