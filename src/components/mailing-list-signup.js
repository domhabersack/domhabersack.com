import React from 'react'

import ConvertkitForm from './convertkit-form'

export default () => (
  <div className="background-color-gray-200 border-radius-xs padding-horizontal-m padding-vertical-l">
    <h1 className="font-size-24-short margin-0 margin-bottom-xs">
      There is more to learn
    </h1>

    <p>
      Get free previews of my upcoming course materials and other bonus content to help you work smarter. I share tips straight to your inbox once a week. You can read previous mails in the <a href="/newsletter/archive">newsletter archive</a>.
    </p>

    <ConvertkitForm svForm="1018607" uid="f55882552b" />
  </div>
)
