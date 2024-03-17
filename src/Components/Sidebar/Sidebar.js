import React from 'react'
import "./Sidebar.css"
import Home from "../Icons/home.png"
import DailyTask from "../Icons/DailyTask.png"
import MonthlyIncome from "../Icons/monthlyIncome.png"
import Salary from "../Icons/Salary.png"
import Settings from "../Icons/settings(1).png"
import message from "../Icons/message.png"
import Teammembers from "../Icons/Teammembers.png"
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className='mainSidebarContainer'>
        <div>
            <ul className='ulContainer'>
                <h4 className='menu'>Menu</h4>
                <Link to={"/"} style={{textDecoration:"none"}}>
                    <li className='liContainer'>
                        <img src={`${Home}`} alt="" className="sideBarIcons" />
                        <p className='itemName'>Home</p>
                    </li>
                </Link>
                <Link to={"/DisabilityDistribution"} style={{textDecoration:"none"}}>
                <li className='liContainer'>
                    <img src={`${DailyTask}`} alt="" className="sideBarIcons" />
                    <p className='itemName'>Disability Distribution</p>
                </li>
                </Link>
                <Link to={"/PopulationWiseMap"} style={{textDecoration:"none"}}>
                    <li className='liContainer'>
                        <img src={`${Teammembers}`} alt="" className="sideBarIcons" />
                        <p className='itemName'>Gender Distribution Map</p>
                    </li>
                </Link>
                <Link to={"/DisabilityMap"} style={{textDecoration:"none"}}>
                <li className='liContainer'>
                    <img src={`${MonthlyIncome}`} alt="" className="sideBarIcons" />
                    <p className='itemName'>Disability Map</p>
                </li>
                </Link>
                {/* <li className='liContainer'>
                    <img src={`${Salary}`} alt="" className="sideBarIcons" />
                    <p className='itemName'>Salaries</p>
                </li>
                <li className='liContainer'>
                    <img src={`${Settings}`} alt="" className="sideBarIcons" />
                    <p className='itemName'>Settings</p>
                </li>
                <li className='liContainer'>
                    <img src={`${message}`} alt="" className="sideBarIcons" />
                    <p className='itemName'>Message</p>
                </li> */}
            </ul>
        </div>
    </div>
  )
}
