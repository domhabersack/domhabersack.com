import React from 'react'

import formatDate from '../utils/format-date'

export default ({ date }) => (
  <div className="align-items-center flex">
    <img
      alt="Dom Habersack"
      className="border-radius-round margin-right-xs"
      height="42"
      width="42"
      src="/assets/dom.jpg"
    />

    <div className="flex flex-column font-size-12-short">
      <span className="color-gray-700 font-weight-700 margin-bottom-xxs">
        Dom Habersack
      </span>

      <span className="color-gray-500 font-weight-400">
        {formatDate(date, "%B %-d, %Y")}
      </span>
    </div>
  </div>
)
