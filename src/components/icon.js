import React from 'react'

export default ({ icon }) => (
  <div class="icon">
    <svg class="icon__svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="{icon.name}" fill-rule="evenodd">
        <path d="{icon}" />
      </g>
    </svg>

    <p class="icon__label">
      {icon.name}
    </p>
  </div>
)
