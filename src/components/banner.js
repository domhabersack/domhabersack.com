import React from 'react'

import Breakout from '@/components/breakout'
import Container from '@/components/container'
import YieldUILogo from '@/icons/yieldui-logo'

export default function Banner() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Container>
          <Breakout>
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-wrap font-medium items-center justify-center py-2.5 text-gray-50">
              <div className="flex items-center space-x-1.5">
                <div className="flex-shrink-0 h-6 w-6">
                  <YieldUILogo />
                </div>

                <p className="m-0 text-sm">
                  Free Tailwind CSS components: <a className="text-white underline visited:text-white" href="https://yieldui.com">yieldui.com</a>
                </p>
              </div>
            </div>
          </Breakout>
        </Container>
      </div>

      <div className="absolute bg-yellow-400 bottom-0 top-0 left-0 w-1/2 z-0" />
      <div className="absolute bg-pink-500 bottom-0 top-0 right-0 w-1/2 z-0" />
    </div>
  )
}
