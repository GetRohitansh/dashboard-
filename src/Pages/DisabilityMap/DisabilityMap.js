import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./DisabilityMap.css"
import TeamMember from '../../Components/TeamMember/TeamMember'
import DisabilityTeamMember from '../../Components/DisabilityTeamMember/DisabilityTeamMember'

export default function DisabilityMap() {
  return (
    
    <div className='mainHomeContainer'>

      <div className='sidebar'>
          <Sidebar />
      </div>

      <div className='content-container'>
        <DisabilityTeamMember />
      </div>
  </div>

  )
}
