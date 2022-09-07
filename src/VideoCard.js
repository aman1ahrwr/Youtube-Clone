import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./VideoCard.css"

function VideoCard({ src, thumbnail, videoTitle, timeStamp, channelName, views, channelImage }) {
  return (
    <div className="videoCard">
      <a href={src} ><img className="thumbnailImage" src={thumbnail} alt=""></img></a>
      <div className="info">
        <Avatar className="videoAvatar" alt={channelName} src={channelImage} />
        <div className="videoText">
          <h4>{videoTitle}</h4>
          <p>{channelName}</p>
          <p>
            {views} • {timeStamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard