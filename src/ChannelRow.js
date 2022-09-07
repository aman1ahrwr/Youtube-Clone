import React from 'react'
import "./ChannelRow.css"
import Avatar from '@mui/material/Avatar';

function ChannelRow({ image, channel, subscriptions, noVideos, desc }) {
    return (
        <div className='ChannelRow'>
            <Avatar className="img" alt={channel} src={image} />
            <div className='channelInfo'>
                <h3>{channel}</h3>
                <p>{subscriptions} subscribers • {noVideos} videos</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default ChannelRow