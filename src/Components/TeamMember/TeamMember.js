import React from 'react'
import "./TeamMember.css"
import { MapContainer, TileLayer, Polygon } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { statesData } from "../../Data/India_State"
import { StateGenderData } from '../../Data/StateGenderData'

const center = [23.9907814292661, 78.75350599159277]

export default function TeamMember() {

  // total disabled population for india
  let total_disable_population = 0;
  StateGenderData.forEach(state => {
    total_disable_population += state.male_count + state.female_count;
  });

  // Calculate total disabled population for each state
  const statePopulations = {};
  StateGenderData.forEach(state => {
    statePopulations[state.name] = state.male_count + state.female_count;
  });

  // Define color scale
  const getColor = (population) => {
    return population > 10000000 ? '#800026' :
           population > 5000000  ? '#BD0026' :
           population > 2000000  ? '#E31A1C' :
           population > 1000000  ? '#FC4E2A' :
           population > 500000   ? '#FD8D3C' :
           population > 200000   ? '#FEB24C' :
           population > 100000   ? '#FED976' :
                                   '#FFEDA0';
  }

  return (
    <div className='team-members'>
      <MapContainer center={center} zoom={6.3} style={{ width: "", height: "100vh" }}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cgmF8GihJ5tlxllryEHw"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0][0][0].map((item) => [item[1], item[0]])
          const name = state.properties.name

          const stateData = StateGenderData.find(state => state.name === name);
          const population = statePopulations[name];

          let popup = `
            <b>
              <div style="font-size:16px; padding-bottom: 4px;">${stateData.name} (${Math.round((stateData.male_count + stateData.female_count)/total_disable_population *100)}%)</div>
              <div >
                <div style="color:purple;">Disabled Population: ${population}</div>
                <div style="color:blue;">Male: ${Math.round(stateData.male_count / (stateData.male_count + stateData.female_count) * 100)}%</div>
                <div style="color:red;">Female: ${Math.round(stateData.female_count / (stateData.male_count + stateData.female_count) * 100)}%</div>
              </div>
            </b>
          `

          return (
            <Polygon
              key={name}
              pathOptions={{
                  fillColor: getColor(population),
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
                    fillColor: "#d44333"
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
                    fillColor: getColor(population)
                  })
                  layer.closePopup()
                }
              }}
            />
            )
        })}
      </MapContainer>
    </div>
  )
}
