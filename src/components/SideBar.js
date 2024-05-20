import React from 'react'
import "../css/SideBar.css"
import { useState } from 'react'
import ErrorPage from '../pages/ErrorPage'
import TranslateScetion from './TranslateScetion'
import Videos from './Videos'

function SideBar() {
    const [section, setSection] = useState(<TranslateScetion/>)
    const [path, setPath] = useState("/")
    const [csselem, setCsselem] = useState("/")
    function cssReset() {
        document.getElementById("option-dashboard").style.backgroundColor = "#7000ff"
        document.getElementById("option-dashboard").style.color = "white"
        document.getElementById("option-uploads").style.backgroundColor = "#7000ff"
        document.getElementById("option-uploads").style.color = "white"
        document.getElementById("option-translate").style.backgroundColor = "#7000ff"
        document.getElementById("option-translate").style.color = "white"
        document.getElementById("option-gopro").style.backgroundColor = "#7000ff"
        document.getElementById("option-gopro").style.color = "white"
    }
    const changeStateDashboard = () => {
        cssReset();
        document.getElementById("option-dashboard").style.backgroundColor = "#ebe3f5"
        document.getElementById("option-dashboard").style.color = "#290557"
        setSection("Dashboard")
    }
    const changeStateUploads = () => {
        cssReset();
        document.getElementById("option-uploads").style.backgroundColor = "#ebe3f5"
        document.getElementById("option-uploads").style.color = "#290557"
        setSection(<Videos/>)
    }
    const changeStateTranslate = () => {
        cssReset();
        document.getElementById("option-translate").style.backgroundColor = "#ebe3f5"
        document.getElementById("option-translate").style.color = "#290557"
        setSection(<TranslateScetion/>)
    }
    const changeStateGopro = () => {
        cssReset();
        document.getElementById("option-gopro").style.backgroundColor = "#ebe3f5"
        document.getElementById("option-gopro").style.color = "#290557"
        setSection("Go Pro")
    }
    return (
        <div id='main-body'>
            <div className="sidebar">
                <img className="userIcon" src="3a31154fdc40bd17bfa9e4e86bfbad5b.jpg" alt="#" />
                <div className="userName">USER</div>
                <div className="userOptions">
                    <div id="option-dashboard" onClick={changeStateDashboard}>Dashboard</div>
                    <div id="option-uploads" onClick={changeStateUploads}>Uploads</div>
                    <div id="option-translate" onClick={changeStateTranslate}>Translate</div>
                    <div id="option-gopro" onClick={changeStateGopro}>Go Pro</div>
                </div>
            </div>
            
            <div id="action-section">
                {section}
            </div> 
        </div>
    )
}

export default SideBar