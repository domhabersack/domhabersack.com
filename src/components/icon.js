import getIconPath from '@/lib/get-icon-path'

export default function Icon({
  small = false,
  solid = false,
  type,
  ...props
}) {
  const size = small ? 16 : 24

  let identifier = type
  if (solid) identifier += '--solid'
  if (small) identifier += '--small'

  const path = getIconPath(identifier)

  return (
    <svg
      height="100%"
      version="1.1"
      viewBox={`0 0 ${size} ${size}`}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        d={path}
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
