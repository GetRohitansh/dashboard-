import React from 'react'
import HomeRightBar from '../../Components/HomeRightBar/HomeRightBar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Home.css"
import "../../Components/HomeRightBar/HomeRightBar"

export default function Home() {
  return (
    <div className='mainHomeContainer'>
        <Sidebar />
        <HomeRightBar />
    </div>
  )
}
