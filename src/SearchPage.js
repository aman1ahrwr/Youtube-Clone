import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow.js"
import VideoRow from "./VideoRow.js"
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchFilter">
                <TuneIcon />
                <h2>FILTERS</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AMLnZu-Sn_MvkkHF0uNdbQzS2t-kI5BwBqSeCFJhkN2vnQ=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Tech Burner"
                subscriptions="2M"
                noVideos={456}
                desc="Tech Videos that count!
Join Us :)
Brands and Business : business@techburner.in

This Channel is owned by Burner Media owned by Shlok Srivastava."
            />
            <hr />

            <VideoRow img="https://i.ytimg.com/vi/uy_YfJwedVM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDa-1hd0sZvXuki3ECHBQ24yLP-lA" channel="Tech Burner" views="1.1M" timeStamp="1 day ago" desc="POCO ka naya phone aa gaya hai !
" title="POCO M5 Unboxing and Quick Look ! *Premium Looks*" />

            <VideoRow img="https://i.ytimg.com/vi/rjaEojuiNvw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAttwG2Kra-7UxoR1QBcIh2u_uMMw" channel="Tech Burner" views="2.3M" timeStamp="2 days ago" desc="Tempered Glass ki testing kar li jaye !
" title="How To Find Your Perfect Career - The 3 Key Factors" />

            <VideoRow img="https://i.ytimg.com/vi/dgtiTyxFgoA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdby7zMsT4wODDvrYolcl2ic2UqA" channel="Tech Burner" views="90K" timeStamp="1 hour ago" desc="Bhaviysa paas aa raha hai!" title="Don't Buy Tempered Glass before Watching This ! *Big Comparison*" />
            <VideoRow img="https://i.ytimg.com/vi/7AGYDM0Ueq0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8WVrtIP_TPM2b0_TY3UlmzW5wfw" channel="Tech Burner" views="2.5M" timeStamp="2 months ago" desc="Becoz Mujeek is Love!" title="Don't Buy Tempered Glass before Watching This ! *Big Comparison*" />
        </div>
    )
}

export default SearchPage