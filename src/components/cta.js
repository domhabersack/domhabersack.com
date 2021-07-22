import Link from 'next/link'

export default function CTA({
  children,
}) {
  return (
    <Link href="/hire-me">
      <a
        className="bg-gradient-to-r from-red-400 to-red-500 font-medium text-white px-3.5 py-2 rounded-md shadow-sm text-sm whitespace-nowrap disabled:bg-gray-300 disabled:shadow-none disabled:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {children}
      </a>
    </Link>
  )
}
