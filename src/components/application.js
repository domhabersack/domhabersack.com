import React from 'react'
import { StaticKitProvider } from '@statickit/react'

export default ({ children }) => (
  <StaticKitProvider site="fa0afc13c26b">
    {children}
  </StaticKitProvider>
)
