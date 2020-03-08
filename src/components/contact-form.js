import React from 'react'
import { useForm, ValidationError } from '@statickit/react'

import Flash from './flash'
import Input from './input'
import Label from './label'
import Textarea from './textarea'

export default () => {
  const [{
    errors,
    submitting,
    succeeded
  }, handleSubmit] = useForm('contact')

  const hasErrors = errors.length > 0

  return (
    <>
      {hasErrors && !submitting && (
        <div className="margin-bottom-s">
          <Flash type="error">
            Sorry, your message could not be sent. Try again after addressing the errors below.
          </Flash>
        </div>
      )}

      {succeeded && (
        <div className="margin-bottom-s">
          <Flash type="success">
            Thank you for your message. I will get back to you soon.
          </Flash>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="margin-bottom-s">
          <Label htmlFor="email">
            Email address
          </Label>

          <div className="s:columns-8 m:columns-6-of-10 l:columns-5-of-8 xl:columns-4-of-8">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="your.best@email.com"
            />
          </div>

          <ValidationError
            className="block color-red-600 font-size-12-short font-weight-500 italic margin-vertical-xs"
            errors={errors}
            field="email"
            prefix="Email address"
          />
        </div>

        <div className="margin-bottom-s">
          <Label htmlFor="message">
            Message
          </Label>

          <Textarea
            id="message"
            name="message"
            placeholder="What do you want to say?"
            rows={6}
          />

          <ValidationError
            className="block color-red-600 font-size-12-short font-weight-500 italic margin-vertical-xs"
            errors={errors}
            field="message"
            prefix="Message"
          />
        </div>

        <button className="disabled:background-color-gray-300 disabled:color-gray-600" disabled={submitting} type="submit">
          Send your message
        </button>
      </form>
    </>
  )
}
