import React from 'react'

import Breakout from '@/components/breakout'
import Container from '@/components/container'
import LogosearchLogo from '@/icons/logosearch-logo'

export default function Banner() {
  return (
    <div className="bg-green-700 py-3">
      <Container>
        <Breakout>
          <div className="flex flex-wrap font-medium items-center justify-center space-x-2.5 text-gray-50">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-6 mr-1 text-green-50 w-6">
                <LogosearchLogo />
              </div>

              <p className="m-0 text-sm">
                A directory of brand guidelines: <a className="text-white underline visited:text-white" href="https://logosearch.link">logosearch.link</a>
              </p>
            </div>
          </div>
        </Breakout>
      </Container>
    </div>
  )
}
