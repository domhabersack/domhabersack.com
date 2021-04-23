export default function Container({
  children,
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 xs:px-10 sm:px-32 md:px-48 lg:px-56">
      {children}
    </div>
  )
}
