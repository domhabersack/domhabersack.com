import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'

import Banner from '@/components/banner'
import Breadcrumbs from '@/components/breadcrumbs'
import BreakpointDebug from '@/components/breakpoint-debug'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'

const IS_IN_DEBUG_MODE = true

export default function Layout ({
  breadcrumbs,
  children,
}) {
  return (
    <MDXProvider>
      <Head />

      <Banner />

      <div className="flex flex-col min-h-screen">
        <div className="mb-6">
          <Container>
            <Header />
          </Container>
        </div>

        <main className="flex-grow mb-24">
          <Container>
            {breadcrumbs && (
              <div className="mb-4">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
              </div>
            )}

            {children}
          </Container>
        </main>

        <div className="bg-gray-100 dark:bg-gray-800">
          <Container>
            <Footer />
          </Container>
        </div>
      </div>

      {IS_IN_DEBUG_MODE && (
        <BreakpointDebug />
      )}
    </MDXProvider>
  )
}
