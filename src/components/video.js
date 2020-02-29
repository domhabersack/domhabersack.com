import React from 'react'

export default ({ title, vimeoId, youtubeId }) => (
  <div className="intrinsic-ratio-16-by-10">
    {vimeoId && (
      <iframe
        allow="autoplay; fullscreen"
        allowFullScreen
        frameBorder="0"
        src={`https://player.vimeo.com/video/${vimeoId}?byline=false&title=false`}
        title={title}
      />
    )}

    {youtubeId && (
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
      />
    )}
  </div>
)
