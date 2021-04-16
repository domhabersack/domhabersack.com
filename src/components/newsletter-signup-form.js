import { useState } from 'react'

import Button from '@/components/button'
import Input from '@/components/input'
import LoadingIndicator from '@/icons-mini/loading-indicator'

export default function NewsletterSignupForm() {
  const [email, setEmail] = useState('')
  const [failure, setFailure] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChangeEmail = event => {
    setEmail(event.currentTarget.value)
    setSuccess(false)
  }

  const onSubmit = async event => {
    event.preventDefault()

    setFailure(false)
    setSuccess(false)
    setLoading(true)

    const response = await fetch('/api/newsletter/subscribe', {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    setLoading(false)

    if (response.ok) {
      setEmail('')
      setSuccess(true)
    } else {
      setFailure(true)
    }
  }

  return (
    <>
      <form className="mb-1.5" onSubmit={onSubmit}>
        <div className="flex items-start space-x-2.5">
          <div className="flex-grow">
            <Input
              name="email_address"
              onChange={onChangeEmail}
              placeholder="Enter your email"
              required
              type="email"
              value={email}
            />
          </div>

          <Button className="w-24" disabled={loading} type="submit">
            <div className="relative">
              {loading && (
                <div className="absolute flex inset-0 items-center justify-center text-gray-50">
                  <div className="animate-spin w-4 h-4">
                    <LoadingIndicator />
                  </div>
                </div>
              )}

              <span className={`${loading && 'invisible'}`}>
                Subscribe
              </span>
            </div>
          </Button>
        </div>

        {failure && (
          <p className="bg-red-100 m-0 mt-1.5 px-3 py-2.5 rounded text-red-700 text-sm">
            Something went wrong. Please try again later.
          </p>
        )}

        {success && (
          <p className="bg-green-100 m-0 mt-1.5 px-3 py-2.5 rounded text-green-700 text-sm">
            Thanks for signing up! Please <strong>confirm your subscription</strong> by clicking the link in the email you just received.
          </p>
        )}
      </form>

      <p className="italic m-0 text-gray-500 text-xs dark:text-gray-400">
        I respect your email privacy. Unsubscribe anytime.
      </p>
    </>
  )
}
