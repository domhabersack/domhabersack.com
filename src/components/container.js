export default function Container({
  children,
}) {
  return (
    <div className="mx-auto max-w-5xl px-8 sm:px-9 lg:px-10">
      {children}
    </div>
  )
}
