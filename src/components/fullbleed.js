import React from 'react'

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
        className={`absolute bottom-0 top-0 w-screen z-0 ${className ?? ''}`}
        style={{
          left: '50%',
          marginLeft: '-50vw',
        }}
      />
    </div>
  )
}
