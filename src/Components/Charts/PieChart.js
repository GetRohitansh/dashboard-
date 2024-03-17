import React from 'react'
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js/auto"

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({chartData}) {
  return (
    <Pie data={chartData} /> //options={}
  )
}

export default PieChart
