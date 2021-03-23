import React, { useContext } from 'react'

import CookieConsentContext from '@/contexts/cookie-consent'
import UpdateCookieSettingsTrigger from '@/components/update-cookie-settings-trigger'

export default function RequiresCookieConsent({
  children,
  target,
}) {
  const { isCookieConsentGiven } = useContext(CookieConsentContext)

  return isCookieConsentGiven ? children : (
    <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg dark:bg-gray-800 dark:border-gray-500">
      <div className="flex flex-col h-full items-center justify-center px-4 py-3 text-center text-gray-500 dark:text-gray-400">
        <p className="italic m-0 mb-3 text-sm">
          Cannot show {target ?? 'content'} because cookie consent was not given.
        </p>

        <UpdateCookieSettingsTrigger />
      </div>
    </div>
  )
}
