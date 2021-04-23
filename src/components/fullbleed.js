export default function Fullbleed({
  className,
  children,
}) {
  return (
    <div className="relative">
      <div className="relative z-10">
        {children}
      </div>

      <div
        className={`absolute bottom-0 left-1/2 top-0 w-screen z-0 ${className ?? ''}`}
        style={{ marginLeft: '-50vw' }}
      />
    </div>
  )
}
