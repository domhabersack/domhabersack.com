import React from 'react'

import Logo from '@/components/logo'

export default function Stack({
  stack,
}) {
  return (
    <div className="flex flex-wrap space-x-1.5">
      {stack.map(tool => (
        <React.Fragment key={`tool-${tool}`}>
          <div className="h-6 w-6">
            <Logo name={tool} />
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
