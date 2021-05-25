import { useState, useEffect } from 'react'

export default function Icon({
  size = 'medium',
  style = 'outline',
  type,
  ...props
}) {
  const [path, setPath] = useState(null)
  const [viewBox, setViewBox] = useState(null)

  useEffect(async () => {
    const result = await fetch(`/api/icons?name=${type}&size=${size}&style=${style}`)

    if (result.ok) {
      const json = await result.json()

      setPath(json.path)
      setViewBox(json.viewBox)
    }
  }, [])

  return (
    <svg
      height="100%"
      version="1.1"
      viewBox={viewBox}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        d={path}
        fill="currentColor"
      />
    </svg>
  )
}
