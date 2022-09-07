import React from 'react'
import "./Videos.css"
import VideoCard from "./VideoCard.js"
function Videos() {
  return (
    <div className="videos">
      <div className='videoList'>
        <VideoCard src="https://youtu.be/uy_YfJwedVM" thumbnail="https://i.ytimg.com/vi/uy_YfJwedVM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDa-1hd0sZvXuki3ECHBQ24yLP-lA" videoTitle="Don't Buy Tempered Glass before Watching This ! *Big Comparison*" timeStamp="2 days ago" channelName="Tech Burner" views="2.3M views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu-Sn_MvkkHF0uNdbQzS2t-kI5BwBqSeCFJhkN2vnQ=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/lJ6n52Lsjfo" thumbnail="https://i.ytimg.com/vi/lJ6n52Lsjfo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAYXNydiDRnLGMnPwsHyhqfhbQnIw" videoTitle="How To Find Your Perfect Career - The 3 Key Factors" timeStamp="1 day ago" channelName="Ali Abdaal" views="70K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu8jMuRdEFMazCjhD3Ox-ItOtqT8vtoEkAbjuDis=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/LMwuFnmxcAI" thumbnail="https://i.ytimg.com/vi/LMwuFnmxcAI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQgAAp8RMsXzlSj3XmT6NQXJfslQ" videoTitle="10 Times Indian Celebrities Gave Brutally Honest Answers In LIVE TV Interviews" timeStamp="4 months ago" channelName="Tried&Refused Productions." views="1.1M views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu8WNOupy-L0-keJs9nlA5ieU_Sc6cpGrcKSt5G00Q=s68-c-k-c0x00ffffff-no-rj" />
        
        <VideoCard src="https://youtu.be/bgDwSuARZoA" thumbnail="https://i.ytimg.com/vi/bgDwSuARZoA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ7MQ2IiUSWSePgQVofIVSotE04w" videoTitle="Don't Buy Tempered Glass before Watching This ! *Big Comparison*" timeStamp="1 month ago" channelName="Saloni Srivastava" views="120K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu9Pa4bBVZaUitYDDoM9YpTZ3gheF8ae2wrHp8LyGQ=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/IZnjdqVE2Kw" thumbnail="https://i.ytimg.com/vi/IZnjdqVE2Kw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCkGj20I6qz2G36h6ppb_O4roxWgg" videoTitle="Learn From Girls ft. Aastha Shah - Ep. 2 | Ranveer Allahbadia " timeStamp="2 months ago" channelName="Ranveer Allahbadia" views="694K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu96SvbvYIYWv_KcGyuvoxUSoYRS_dttvtslZlem2g=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/ssqG9Pk1hPg" thumbnail="https://i.ytimg.com/vi/ssqG9Pk1hPg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN2Y698elAf7qUfjPYjWxTHptPxw" videoTitle="i quit social media for 30 days and i’m never going back" timeStamp="2 months ago" channelName="Meher Saini" views="171K views" channelImage="https://yt3.ggpht.com/LAINE5EGNpIQYtCgktuENN-ezC9_ehauE-WaZLBOXJHh7fgApioM9Kz8JZ1yLkBECUNWc2jb7aU=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/3_zoGgffxac" thumbnail="https://i.ytimg.com/vi/3_zoGgffxac/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_xlaFxQhMkCRBGV31BQApF7pnug" videoTitle="Build Solana Todo App with Next.js & Rust (Anchor)" timeStamp="2 hours ago" channelName="Clever Programmer" views="2K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu_GS4vuibuZjr4ZBgVr97RrriUQrrhqeyWQWqMYfQ=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/Do086yCgM78" thumbnail="https://i.ytimg.com/vi/Do086yCgM78/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-MmOXcAqwBFtf1PrC95H7aH7fmA" videoTitle="WHY KACHA BADAM BECAME CRINGE ?" timeStamp="7 months ago" channelName="Lakshay Chaudhary" views="1.7M views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu-NFMLq4ulXhtLWTzT_kOWo0XDbCZen5h1dOmGy6Q=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/HUXEqS6GqUU" thumbnail="https://i.ytimg.com/vi/HUXEqS6GqUU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqw6Gnv785s_yeYiaxIPH8ktCl4w" videoTitle="Miyamoto Musashi | A Life of Ultimate Focus" timeStamp="1 year ago" channelName="Einzelgänger" views="145K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu9ZZRWkIpRhCZEAFuMunSmr68Kxwma-PrLfOksccw=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/e9dZQelULDk" thumbnail="https://i.ytimg.com/vi/e9dZQelULDk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdSSXUQA7l2nv-rb26a7vios1Kkw" videoTitle="Happiness" timeStamp="4 years ago" channelName="Steve Cutts" views="34M views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu8tl7c5EGqaT--kAHBldlYlRLfXWR4fd8T3rl1cLQ=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/kSMxRMlTuNc" thumbnail="https://i.ytimg.com/vi/kSMxRMlTuNc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLzYi8BG7zwvtZAfwdVa04EyR03Q" videoTitle="Campus Interview I Mock Interview for Campus Placement I Arvind Singh Pemawat" timeStamp="1 month ago" channelName="Arvind Singh Pemawat" views="13K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu9el42IhLx_2rr_y04XbILkoVWG30w-jMjaQWISkA=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/he6xyl_MHXY" thumbnail="https://i.ytimg.com/vi/he6xyl_MHXY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsoDd3vyfvyMOADB_2eejBLy5LeA" videoTitle="Building the WORLDS FIRST PlayStation 5 slim" timeStamp="2 months ago" channelName="DIY Perks" views="10M views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu_yO9FB9fmJe30OTUgf4FsGajSWHk1rqtCJX-8EYg=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/maCVf_t3M2A" thumbnail="https://i.ytimg.com/vi/maCVf_t3M2A/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD5Gyp_mznhU_8LLsY1xf2L-lq6Cw" videoTitle="Machine Learning use cases you probably don't know about" timeStamp="9 days ago" channelName="CodeWithHarry" views="61K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu8dZQJYCt6Ffcd-pl113huuo_HJ3PpvgkyFk5FkrQ=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/Zo-6_qx8uxg" thumbnail="https://i.ytimg.com/vi/Zo-6_qx8uxg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCsbFKhqTWvnTjGLlK-_LmEs_7wgw" videoTitle="Debouncing in Javascript | Flipkart UI Interview Question" timeStamp="3 months ago" channelName="Akshay Saini" views="135K views" channelImage="https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/ICMfseFhE-E" thumbnail="https://i.ytimg.com/vi/ICMfseFhE-E/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCSiFItCH5GIeA9UNNu_Jw74TNjRg" videoTitle="The UnXplained: The Mystic Powers of Meditation (Season 3)" timeStamp="8 months ago" channelName="History" views="1.1M views" channelImage="https://yt3.ggpht.com/IVVrue_WHD9lK-12DvplMxKoxOYOS2kjYl1tbhC_fONBK06E-YfdEdtScQNwWQUbxrHfwnxBgw=s68-c-k-c0x00ffffff-no-rj" />

        <VideoCard src="https://youtu.be/QYssYC8dSXA" thumbnail="https://i.ytimg.com/vi/QYssYC8dSXA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBk81V1IYCMLimBoWJ_fszKWDkWJQ" videoTitle="5 Signs That You Are Srikant Tiwari In Real Life | The Family Man | Manoj Bajpayee" timeStamp="2 days ago" channelName="Prime Video India" views="268K views" channelImage="https://yt3.ggpht.com/Vvo-OMj7hW3JnPzGEBko98-60kAtL9NmEgOetc2PhgEPKF5H-bHBa8cwsQ1UXaG3jffG97bLuw=s68-c-k-c0x00ffffff-no-rj" />
        

      </div>
    </div>
  )
}

export default Videos