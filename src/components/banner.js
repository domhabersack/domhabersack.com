import React from 'react'

import Breakout from '@/components/breakout'
import Container from '@/components/container'
import Sparkles from '@/icons/sparkles'

export default function Banner() {
  return (
    <div className="bg-yellow-300 py-3">
      <Container>
        <Breakout>
          <div className="flex flex-wrap font-medium items-center justify-center space-x-2.5 text-gray-900">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-6 mr-1 text-gray-800 w-6">
                <Sparkles />
              </div>

              <p className="m-0 text-sm">
                Get 200+ icons, free for personal use: <a href="https://lovelicons.com">lovelicons.com</a>
              </p>
            </div>
          </div>
        </Breakout>
      </Container>
    </div>
  )
}
