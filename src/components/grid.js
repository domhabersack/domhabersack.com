export default function Grid({
  children,
}) {
  return (
    <div className="grid gap-x-10 gap-y-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}
