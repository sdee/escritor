
import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video" align="center">
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="640" height="360" 
      />
    </div>
  )
  export default Video