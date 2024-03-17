import React, { useState } from 'react'
import "./HomeRightBar.css"
import Navbar from '../Navbar/Navbar'
import {StateGenderData} from '../../Data/StateGenderData'
import {DisabilityGenderData} from '../../Data/DisabilityGenderData'
import {StateDisabilityData} from '../../Data/StateDisabilityData'

import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart'
import { Bar, Pie } from 'react-chartjs-2'

export default function HomeRightBar() {


  // console.log(StateGenderData.map((data) => data.male_count))

  const [stateGenderData, setStateGenderData] = useState({
    labels: StateGenderData.map((data) => data.name),
    datasets: [
      {
        label: "Male Count",
        data: StateGenderData.map((data) => data.male_count),
        backgroundColor: "blue",
      },
      {
        label: "Female Count",
        data: StateGenderData.map((data) => data.female_count),
        backgroundColor: "pink",
      }
    ]
  })

  const [disabilityGenderData, setdisabilityGenderData] = useState({
    labels: DisabilityGenderData.map((data) => data.name),
    datasets: [
      {
        label: "Male Count",
        data: DisabilityGenderData.map((data) => data.male_count),
        backgroundColor: "blue",
      },
      {
        label: "Female Count",
        data: DisabilityGenderData.map((data) => data.female_count),
        backgroundColor: "pink",
      }
    ]
  })

  const [stateMaleData, setstateMaleData] = useState({
    labels: StateGenderData.map((data) => data.name),
    datasets: [{
      label: 'State Male',
      data: StateGenderData.map((data) => data.male_count),
      hoverOffset: 2
    }]
  })

  const [stateDisabilityData, setstateDisabilityData] = useState({
    labels: StateDisabilityData['Andaman And Nicobar Islands'].map((data) => data.name),
    datasets: [{
      label: "Male Count",
      data: StateDisabilityData['Andaman And Nicobar Islands'].map((data) => data.male_count),
      backgroundColor: "blue",
    },
    {
      label: "Female Count",
      data: StateDisabilityData['Andaman And Nicobar Islands'].map((data) => data.female_count),
      backgroundColor: "pink",
    }]
  })


  

  return (
    <div className='mainHomeRightBarContainer'>
      
        <div className="bar-chart">
          {/* <BarChart chartData={userData}/> */}
          <h2>State - Gender - Distribution</h2>
          <BarChart chartData={stateGenderData} />
        </div>
        <div className='bar-chart'>
          <h2>Disability - Gender - Distribution</h2>
          <BarChart chartData={disabilityGenderData} />
        </div>
        {/* <div className='pie-chart'>
          <h2>State - Male - Distribution</h2>
          <PieChart chartData={stateMaleData} />
        </div> */}
      </div>
  )
}
