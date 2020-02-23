import React from 'react'

import emojis from '../emojis'

export default input => {
  const [, emoji, text] = input.match(/^:(.*?): (.*)$/)

  return (
    <>
      <img alt="" className="emoji" src={emojis[emoji]} />
      {text}
    </>
  )
}
