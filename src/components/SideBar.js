import React from 'react'
import "../css/SideBar.css"
import { useState } from 'react'
import ErrorPage from '../pages/ErrorPage'

function SideBar() {
    const [state, setState] = useState("main")
    const changeStateDashboard = () => {
        setState("Dashboard")
    }
    const changeStateUploads = () => {
        setState("Uploads")
    }
    const changeStateTranslate = () => {
        setState(<ErrorPage/>)
    }
    const changeStateGopro = () => {
        setState("Go Pro")
    }
    return (
        <div>
            <div class="sidebar">
                <img class="userIcon" src="3a31154fdc40bd17bfa9e4e86bfbad5b.jpg" alt="#" />
                <div class="userName">USER</div>
                <div class="userOptions">
                    <div id="option-dashboard" onClick={changeStateDashboard}>Dashboard</div>
                    <div id="option-uploads" onClick={changeStateUploads}>Uploads</div>
                    <div id="option-translate" onClick={changeStateTranslate}>Translate</div>
                    <div id="option-gopro" onClick={changeStateGopro}>Go Pro</div>
                </div>
            </div>
            
            <div id="translate-section">{state}
            {/* <div id="upload-video"></div>
                <div id="download-video"></div>*/}
            </div> 
        </div>
    )
}

export default SideBar