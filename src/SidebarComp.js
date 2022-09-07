import React from 'react'
import "./SidebarComp.css"

function SidebarComp({Icon, title}) {
    return (
        <div className="SidebarComp">
            <Icon className="sidebarIcon"/>
            <h4 className="sidebarTitle">{title}</h4>
        </div>
    );
}

export default SidebarComp