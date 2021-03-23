import React, { useState } from 'react'
import { FormspreeProvider } from '@formspree/react'

import CookieConsent from '@/components/cookie-consent'
import CookieConsentContext from '@/contexts/cookie-consent'

export default function Application({
  children,
}) {
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(false)

  return (
    <FormspreeProvider project="1574261538980626222">
      <CookieConsentContext.Provider
        value={{
          isCookieConsentGiven,
          setIsCookieConsentGiven
        }}
      >
        {children}

        <CookieConsent />
      </CookieConsentContext.Provider>
    </FormspreeProvider>
  )
}
