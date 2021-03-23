import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

import Application from '@/components/application'
import Banner from '@/components/banner'
import Breadcrumbs from '@/components/breadcrumbs'
import Breakout from '@/components/breakout'
import BreakpointDebug from '@/components/breakpoint-debug'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'

const IS_IN_DEBUG_MODE = false

export default function Layout ({
  breadcrumbs,
  children,
}) {
  return (
    <MDXProvider>
      <Application>
        <Head />

        <Banner />

        <div className="flex flex-col min-h-screen">
          <div className="mb-6">
            <Container>
              <Breakout>
                <Header />
              </Breakout>
            </Container>
          </div>

          <main className="flex-grow mb-24">
            <Container>
              <Breadcrumbs breadcrumbs={breadcrumbs} />

              {children}
            </Container>
          </main>

          <div className="bg-gray-100 dark:bg-gray-900">
            <Container>
              <Breakout>
                <Footer />
              </Breakout>
            </Container>
          </div>
        </div>

        {IS_IN_DEBUG_MODE && (
          <BreakpointDebug />
        )}
      </Application>
    </MDXProvider>
  )
}
