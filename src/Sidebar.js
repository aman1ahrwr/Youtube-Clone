import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import {  Link
} from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className='sidebarTop'>
                <Link to="/">
                <div className='SideComp'>
                    <HomeIcon className='CompIcon' />
                    <h5>Home</h5>
                </div>
                </Link>

                <a href="https://www.youtube.com/feed/explore">
                <div className='SideComp'>
                    <ExploreIcon className='CompIcon' />
                    <h5>Explore</h5>
                </div>
                </a>

                <a href="https://www.youtube.com/shorts/">
                <div className='SideComp'>
                    <FeaturedPlayListIcon className='CompIcon' />
                    <h5>Shorts</h5>
                </div>
                </a>

                <a href="https://www.youtube.com/feed/subscriptions">
                <div className='SideComp'>
                    <SubscriptionsIcon className='CompIcon' />
                    <h5>Subscriptions</h5>
                </div>
                </a>
                <hr />

                <a href='https://www.youtube.com/feed/library'>
                <div className='SideComp'>
                    <VideoLibraryIcon className='CompIcon' />
                    <h5>Library</h5>
                </div>
                </a>

                <a href="https://www.youtube.com/feed/history">
                <div className='SideComp'>
                    <HistoryIcon className='CompIcon' />
                    <h5>History</h5>
                </div>
                </a>

                <a href='https://www.youtube.com/playlist?list=WL'>
                <div className='SideComp'>
                    <SmartDisplayIcon className='CompIcon' />
                    <h5>Your Videos</h5>
                </div>
                </a>

                <a href='https://www.youtube.com/playlist?list=LL'>
                <div className='SideComp'>
                    <ThumbUpOffAltOutlinedIcon className='CompIcon' />
                    <h5>Liked Videos</h5>
                </div>
                </a>

                <div className='SideComp'>
                    <ExpandMoreOutlinedIcon className='CompIcon' />
                    <h5>Show more</h5>
                </div>
                <hr />

                <a href='https://www.youtube.com/account'>
                <div className='SideComp'>
                    <SettingsOutlinedIcon className='CompIcon' />
                    <h5>Settings</h5>
                </div>
                </a>

                <a href='https://www.youtube.com/reporthistory'>
                <div className='SideComp'>
                    <OutlinedFlagIcon className='CompIcon' />
                    <h5>Report</h5>
                </div>
                </a>

                
                <div className='SideComp'>
                    <HelpOutlineOutlinedIcon className='CompIcon' />
                    <h5>Help</h5>
                </div>
                <div className='SideComp'>
                    <FeedbackOutlinedIcon className='CompIcon' />
                    <h5>Send Feedback</h5>
                </div>
                <hr />
            </div>

            <div className='sidebarBottom'>
                <p className='copyright'>About Press Copyright Contact us Creator Advertise Developers</p>
                <br />
                <p className='copyright'>Terms Privacy Policy & Safety How YouTube works Test new features</p>
                <br />
                <p className="copyright">© 2022 Google LLC</p>
            </div>
        </div>
    )
}

export default Sidebar
