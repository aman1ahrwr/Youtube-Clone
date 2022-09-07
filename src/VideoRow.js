import React from 'react'
import "./VideoRow.css"


function VideoRow({ views, desc, timeStamp, channel, title, img }) {
    return (
        <div className='VideoRow'>
            <img src={img} alt={channel} />
            <div className='VideoInfo'>
                <h3>{title}</h3>
                <p className='info'>
                    {views} views • {timeStamp}
                </p>

                <div className='avatar'>
                    <img className="image" src="https://yt3.ggpht.com/ytc/AMLnZu-Sn_MvkkHF0uNdbQzS2t-kI5BwBqSeCFJhkN2vnQ=s68-c-k-c0x00ffffff-no-rj" alt={channel} />
                    <p>{channel}</p>
                </div>

                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}

export default VideoRow