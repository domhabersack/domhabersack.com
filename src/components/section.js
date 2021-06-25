export default function Section({
  children,
  description,
  label,
  title,
}) {
  return (
    <div className="flex flex-col items-center py-24">
      <header className="max-w-xl mb-10 text-center">
        <h2 className="block font-semibold mb-2 text-base text-blue-600 uppercase">
          {label}
        </h2>

        <h3 className="font-bold mb-4 text-2xl text-gray-700">
          {title}
        </h3>

        <p className="text-gray-500 text-xl">
          {description}
        </p>
      </header>

      <div>
        {children}
      </div>
    </div>
  )
}
