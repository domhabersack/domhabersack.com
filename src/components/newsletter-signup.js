import NewsletterSignupForm from '@/components/newsletter-signup-form'
import UppercaseHeading from '@/components/uppercase-heading'

export default function NewsletterSignup() {
  return (
    <>
      <UppercaseHeading>
        Subscribe to my newsletter
      </UppercaseHeading>

      <p className="mb-2.5 text-gray-600 text-sm dark:text-gray-300">
        Get progress updates, tips, product previews, and more straight to your inbox.
      </p>

      <NewsletterSignupForm />
    </>
  )
}
