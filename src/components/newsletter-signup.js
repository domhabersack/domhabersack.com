import React from 'react'

import NewsletterSignupForm from '@/components/newsletter-signup-form'
import UppercaseHeading from '@/components/uppercase-heading'

export default function NewsletterSignup() {
  return (
    <React.Fragment>
      <UppercaseHeading>
        Subscribe to my newsletter
      </UppercaseHeading>

      <p className="mb-2.5 text-gray-600 text-sm dark:text-gray-300">
        Get weekly progress updates, tips, product previews, and more straight to your inbox. Read previous issues in the <a href="/newsletter/archive">archive</a>.
      </p>

      <NewsletterSignupForm />
    </React.Fragment>
  )
}
