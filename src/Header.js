import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import Avatar from '@mui/material/Avatar';
import {  Link
} from "react-router-dom";

function Header() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="Header">
      <div classanme="leftHeader">
        <MenuIcon/>
        <Link to="/"><img className='youtubeImg' src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="YouTube" border="0"></img></Link>
        
      </div>
      <div className="centerHeader">
        <input onChange={e=>setInputText(e.target.value)} value={inputText} type="text" placeholder='Search'/>
        <Link to={`/search/${inputText}`}>
        <SearchIcon className="searchButton"/>
        </Link>
      </div>

      <div className="rightHeader">
        <VideoCallIcon className='headerIcons'/>
        <NotificationsNoneSharpIcon className='headerIcons'/>
        <Avatar src="https://yt3.ggpht.com/yti/AJo0G0ly3BuTGgW7IMhSGq8uACuahcycNgfjvICCnzEdMw=s88-c-k-c0x00ffffff-no-rj-mo"className='headerIcons'/>
      </div>
    </div>
  )
}

export default Header