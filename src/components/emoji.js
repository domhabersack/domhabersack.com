import React from 'react'

import emojis from '../emojis'

export default ({ name }) => {
  const [, emoji] = name.match(/:(.*?):/)

  return (
    <img alt="" className="emoji" src={emojis[emoji]} />
  )
}
