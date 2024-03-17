import React from 'react'
import HomeRightBar from '../../Components/HomeRightBar/HomeRightBar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "../../Components/HomeRightBar/HomeRightBar"
import DisabilityDistributionMember from '../../Components/DisabilityDistribution/DisabilityDistributionMember'

export default function Home() {
  return (
    <div className='mainHomeContainer'>
        <Sidebar />
        <DisabilityDistributionMember />
    </div>
  )
}
