import React, { useState } from 'react'

import CookieConsent from '@/components/cookie-consent'
import CookieConsentContext from '@/contexts/cookie-consent'

export default function Application({
  children,
}) {
  const [isCookieConsentGiven, setIsCookieConsentGiven] = useState(false)

  return (
    <CookieConsentContext.Provider
      value={{
        isCookieConsentGiven,
        setIsCookieConsentGiven
      }}
    >
      {children}

      <CookieConsent />
    </CookieConsentContext.Provider>
  )
}
