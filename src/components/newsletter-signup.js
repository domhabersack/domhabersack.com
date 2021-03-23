import React from 'react'

import ConvertkitForm from '@/components/convertkit-form'
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

      <ConvertkitForm
        cta="Subscribe"
        svForm="1018607"
        uid="f55882552b"
      />
    </React.Fragment>
  )
}
