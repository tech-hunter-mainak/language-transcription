import React from 'react'
import TopNavbar from '../components/TopNavbar'
import SideBar from '../components/SideBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function Dashboard() {
    const [state, setState] = useState("main")
    return (
        <div>
            <TopNavbar />
            <SideBar />
            
        </div>
    )
}

export default Dashboard