import React from 'react'
import "../css/TopNavbar.css"
import { useNavigate } from 'react-router-dom'

function TopNavbar() {
    const navigate = useNavigate();
    const homeNavigate = (x) => {
        navigate("/")
    }
    return (
        <div>
            <div id="dashboard-navbar">
                <div id="logo-section" onClick={homeNavigate}>
                    <div id="logo"></div>
                    <div id="site-name">Site Name</div>
                </div>
                <div id="search-bar">
                    <input type="search" name="videosearch" id="video-search" placeholder='Search Uploaded Video' autoFocus />
                </div>
                <div id="mode-change"></div>
            </div>
        </div>
    )
}

export default TopNavbar