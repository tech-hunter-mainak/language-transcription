import React from 'react'
import "../css/NavBar.css"
import { useNavigate } from 'react-router-dom'


function NavBar() {
  const navigate = useNavigate();
  const homeNavigate = () => {
      navigate("/")
  }
  const dashboardNavigate = () => {
      navigate("/dashboard")
  }
  return (
      <div>
          <div id="dashboard-navbar">
              <div id="logo-section">
                  <div id="logo" onClick={homeNavigate}></div>
                  <div id="site-name" onClick={homeNavigate}>Site Name</div>
                  <div id="site-name" onClick={dashboardNavigate}>Dashboard</div>
              </div>
              <div id="mode-change"></div>
          </div>
      </div>
  )
}

export default NavBar