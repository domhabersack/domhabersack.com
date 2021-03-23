import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'

import CookieConsentContext from '@/contexts/cookie-consent'

export default function CookieConsent() {
  const { setIsCookieConsentGiven } = useContext(CookieConsentContext)

  const [isCookieSolutionConfigured, setIsCookieSolutionConfigured] = useState(false)

  useEffect(() => {
    window._iub = window._iub || []

    window._iub.csConfiguration = {
      askConsentAtCookiePolicyUpdate: true,
      consentOnContinuedBrowsing: false,
      cookiePolicyId: 31487586,
      floatingPreferencesButtonDisplay: false,
      lang: 'en',
      siteId: 2017725,
      banner: {
        acceptButtonCaption: 'Allow all cookies',
        acceptButtonCaptionColor: '#fefefe',
        acceptButtonColor: '#398fdd',
        acceptButtonDisplay: true,
        backgroundColor: '#191d27',
        backgroundOverlay: true,
        content: `
          <div id="iubenda-cs-title">
            Cookie notice
          </div>

          <div id="iubenda-cs-paragraph">
            We and selected partners use cookies or similar technologies as specified in the <a href="/privacy-policy/31487586/cookie-policy?an=no&s_ck=false&newmarkup=yes" class="iubenda-cs-cookie-policy-lnk">cookie policy</a>.
          </div>
        `,
        customizeButtonCaption: 'Learn more',
        customizeButtonCaptionColor: '#414b5d',
        customizeButtonColor: '#c4cfdc',
        customizeButtonDisplay: true,
        position: 'bottom',
        rejectButtonCaption: 'Allow essential cookies',
        rejectButtonCaptionColor: '#fefefe',
        rejectButtonColor: '#398fdd',
        rejectButtonDisplay: true,
        slideDown: false,
        textColor: '#fefefe',
      },
      callback: {
        onReady: consentGiven => {
          setIsCookieConsentGiven(Boolean(consentGiven))
        },
        onConsentGiven: () => {
          setIsCookieConsentGiven(true)
        },
        onConsentRejected: () => {
          setIsCookieConsentGiven(false)
        },
      },
    }

    setIsCookieSolutionConfigured(true)
  }, [setIsCookieConsentGiven])

  return isCookieSolutionConfigured ? (
    <Head>
      <script
        async
        charSet="UTF-8"
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
      />
    </Head>
  ) : null
}
