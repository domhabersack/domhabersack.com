export default function Grid({
  children,
}) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  )
}
