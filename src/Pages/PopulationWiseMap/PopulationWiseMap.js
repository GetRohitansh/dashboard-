import React from 'react'
import "./PopulationWiseMap.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import TeamMember from '../../Components/TeamMember/TeamMember'

export default function PopulationWiseMap() {
  return (
    <div className='team-container'>
        <Sidebar />
        <TeamMember />
    </div>
  )
}