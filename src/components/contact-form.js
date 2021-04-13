import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

import Button from '@/components/button'
import Flash from '@/components/flash'
import Input from '@/components/input'
import RequiresCookieConsent from '@/components/requires-cookie-consent'
import Textarea from '@/components/textarea'

export default function ContactForm() {
  const [{
    errors,
    submitting,
    succeeded,
  }, handleSubmit] = useForm('contact')

  const [isDataProcessingConsentGiven, setIsDataProcessingConsentGiven] = useState(false)

  const toggleIsDataProcessingConsentGiven = () => {
    setIsDataProcessingConsentGiven(!isDataProcessingConsentGiven)
  }

  const hasErrors = errors.length > 0

  const canSubmit = isDataProcessingConsentGiven && !submitting

  return (
    <RequiresCookieConsent target="contact form">
      {hasErrors && !submitting && (
        <Flash type="error">
          Sorry, your message could not be sent. Try again after addressing the errors below.
        </Flash>
      )}

      {succeeded && (
        <Flash type="success">
          Thank you for your message. I will get back to you soon.
        </Flash>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">
            Email address
          </label>

          <div className="sm:w-8/12 md:w-3/5 xl:w-6/12">
            <Input
              id="email"
              name="email"
              placeholder="your.best@email.com"
              type="email"
            />
          </div>

          <ValidationError
            className="block font-medium italic my-1.5 text-red-500 text-sm"
            errors={errors}
            field="email"
            prefix="Email address"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message">
            Message
          </label>

          <Textarea
            id="message"
            name="message"
            placeholder="What do you want to say?"
            rows={6}
          />

          <ValidationError
            className="block font-medium italic my-1.5 text-red-500 text-sm"
            errors={errors}
            field="message"
            prefix="Message"
          />
        </div>

        <div className="mb-3 flex">
          <div className="mr-2.5">
            <input
              className="border-gray-300 cursor-pointer block h-6 m-0 rounded text-indigo-500 w-6 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-offset-transparent focus:ring-opacity-50 dark:bg-black dark:border-gray-700 dark:focus:border-blue-600 dark:focus:ring-blue-500"
              id="data-processing-consent"
              name="data-processing-consent"
              onChange={toggleIsDataProcessingConsentGiven}
              type="checkbox"
              value={isDataProcessingConsentGiven}
            />
          </div>

          <label
            className="cursor-pointer flex-shrink"
            htmlFor="data-processing-consent"
          >
            I understand that the information provided by me is subject to the <a href="https://www.iubenda.com/privacy-policy/31487586" className="iubenda-nostyle no-brand iubenda-embed">Privacy Policy</a>.
          </label>
        </div>

        <Button
          disabled={!canSubmit}
          type="submit"
        >
          Send your message
        </Button>
      </form>
    </RequiresCookieConsent>
  )
}
