export default function UppercaseHeading ({
  children,
}) {
  return (
    <h2 className="font-bold m-0 mb-2 text-sm uppercase">
      {children}
    </h2>
  )
}
