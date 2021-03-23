import React from 'react'

import CookieIcon from '@/icons/cookie'

export default function UpdateCookieSettingsTrigger() {
  return (
    <button className="iubenda-cs-preferences-link font-regular px-2.5 py-1.5 text-xs">
      <div className="flex items-center">
        <div className="h-6 mr-1 w-6">
          <CookieIcon />
        </div>

        Cookie Settings
      </div>
    </button>
  )
}
