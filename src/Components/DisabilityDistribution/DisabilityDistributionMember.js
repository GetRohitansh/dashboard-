import "./DisabilityDistributionMember.css"
import { StateDisabilityData } from "../../Data/StateDisabilityData"
import React, { useState } from 'react'
import BarChart from "../Charts/BarChart";
import "./DisabilityDistributionMember.css"


export default function DisabilityDistributionMember() {
    const [selectedState, setSelectedState] = useState('Andaman And Nicobar Islands');

    const handleChange = (e) => {
        setSelectedState(e.target.value);
    };

    const stateDisabilityData = {
        labels: StateDisabilityData[selectedState].map((data) => data.name),
        datasets: [{
            label: "Male Count",
            data: StateDisabilityData[selectedState].map((data) => data.male_count),
            backgroundColor: "blue",
        },
        {
            label: "Female Count",
            data: StateDisabilityData[selectedState].map((data) => data.female_count),
            backgroundColor: "pink",
        }]
    };

    return (
        <div className='mainHomeRightBarContainer'>
            <div className='bar-chart'>
                <h2>Disability - Gender - Statewise - Distribution</h2>
                <select value={selectedState} onChange={handleChange} className="select-state">
                    {Object.keys(StateDisabilityData).map((stateName) => (
                        <option key={stateName} value={stateName}>{stateName}</option>
                    ))}
                </select>
                <BarChart chartData={stateDisabilityData} />
            </div>
        </div>
    );
}
