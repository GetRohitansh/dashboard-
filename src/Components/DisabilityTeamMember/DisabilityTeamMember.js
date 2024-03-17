import React, { useState } from 'react'
import "./DisabilityTeamMember.css"
import { MapContainer, TileLayer, Polygon } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { statesData } from "../../Data/India_State"
// import { StateGenderData } from '../../Data/StateGenderData'
import { DisabilityMapData } from '../../Data/DisabilityMapData'

const center = [23.9907814292661, 78.75350599159277]

export default function DisabilityTeamMember() {

    const [selectedDisability, setSelectedDisability] = useState('Acid Attack Victim');

    const handleChange = (e) => {
        setSelectedDisability(e.target.value);
    };

    // total disabled population for india
    let total_disable_population = 0;
    DisabilityMapData[selectedDisability].forEach(state => {
        total_disable_population += state.male_count + state.female_count;
    });

    // // Calculate total disabled population for each state
    const statePopulations = {};
    DisabilityMapData[selectedDisability].forEach(state => {
        statePopulations[state.name] = state.male_count + state.female_count;
    });
    // console.log(statePopulations)

    // Define color scale
    const getColor = (population) => {
        return population > 50 ? '#800026' :
            population > 25 ? '#BD0026' :
                population > 12.5 ? '#E31A1C' :
                    population > 6.25 ? '#FC4E2A' :
                        population > 3.125 ? '#FD8D3C' :
                            population > 1.675 ? '#FEB24C' :
                                population > 0.5 ? '#FED976' :
                                    '#FFEDA0';
    }
  

    return (
        <div className='disability-team-members'>

            <div className='team-member'>


                <MapContainer center={center} zoom={6.3} style={{ width: "", height: "100vh" }}>
                    <TileLayer
                        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cgmF8GihJ5tlxllryEHw"
                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    />
                    {statesData.features.map((state) => {
                        const coordinates = state.geometry.coordinates[0][0][0].map((item) => [item[1], item[0]])
                        const name = state.properties.name
                        
                        

                        let stateData = DisabilityMapData[selectedDisability].find(state => state.name === name);
                        const population = statePopulations[name];

                        if(stateData == null){
                            stateData = {}
                            stateData["name"] = name
                            stateData["male_count"] = 0
                            stateData["female_count"] = 0
                        }

                        console.log(name + " " + stateData)
                        console.log(stateData)

                        const malePercentage = (stateData.male_count + stateData.female_count) !== 0
                                                ? Math.round(stateData.male_count / (stateData.male_count + stateData.female_count) * 100)
                                                : 0;

                        const femalePercentage = (stateData.male_count + stateData.female_count) !== 0
                        ? Math.round(stateData.female_count / (stateData.male_count + stateData.female_count) * 100)
                        : 0;

                        let popup = `
                    <b>
                    <div style="font-size:16px; padding-bottom: 4px;">${stateData.name} (${Math.round(((stateData.male_count + stateData.female_count) / total_disable_population) * 100 * 100) / 100
                }%)</div>
                    <div >
                        <div style="color:purple;">${selectedDisability} Victims: ${stateData.male_count + stateData.female_count}</div>
                        <div style="color:blue;">Male: ${malePercentage}%</div>
                        <div style="color:red;">Female: ${femalePercentage}%</div>
                    </div>
                    </b>
                `
                        

                        return (
                            <Polygon
                                key={name}
                                pathOptions={{
                                    fillColor: getColor(Math.round(((stateData.male_count + stateData.female_count) / total_disable_population) * 100 * 100) / 100),
                                    fillOpacity: 0.7,
                                    weight: 2,
                                    opacity: 1,
                                    dashArray: 3,
                                    color: 'white'
                                }}

                                positions={coordinates}
                                eventHandlers={{
                                    mouseover: (e) => {
                                        const layer = e.target;
                                        layer.setStyle({
                                            fillOpacity: 0.7,
                                            weight: 2,
                                            dashArray: "3",
                                            color: "white",
                                            fillColor: "#58F0DC"
                                        })
                                        layer.bindPopup(popup).openPopup();
                                    },
                                    mouseout: (e) => {
                                        const layer = e.target;
                                        layer.setStyle({
                                            fillOpacity: 0.7,
                                            weight: 2,
                                            dashArray: "3",
                                            color: "white",
                                            fillColor: getColor(Math.round(((stateData.male_count + stateData.female_count) / total_disable_population) * 100 * 100) / 100)
                                        })
                                        layer.closePopup()
                                    }
                                }}
                            />
                        )
                    })}
                </MapContainer>
            </div>
            <div className='selector-space'>
                <select value={selectedDisability} onChange={handleChange} className="select-state">
                    {Object.keys(DisabilityMapData).map((stateName) => (
                        <option key={stateName} value={stateName}>{stateName}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
