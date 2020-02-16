import React from 'react'

export default ({ video }) => (
  <div>
    <div class="intrinsic-ratio-16-by-10 margin-bottom-xxs">
      {video.vimeoId && (
        <iframe
          src={`https://player.vimeo.com/video/${video.vimeoId}?byline=false&title=false`}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      )}

      {video.youtubeId && (
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      )}
    </div>

    <h4 class="font-size-16 font-weight-400">
      <span class="color-gray-500">
        #{video.number}
      </span>

      {video.title}

      <span class="color-gray-500">
        ({video.duration})
      </span>
    </h4>
  </div>
)
