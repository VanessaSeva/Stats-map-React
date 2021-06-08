import React from 'react'
import './../Map/Map.css'
import L, { map } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Stats from './../Stats/Stats'


export default function MapLeaflet({countryInfo, countries}) {

    const position = [46.232192999999995, 2.209666999999996]

    return(
        <MapContainer center={position} zoom={5}>
        <TileLayer
        noWrap={true}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        
        />
        <Marker position={[48.866667, 2.333333]}>
        <Popup>
       
        </Popup>

        </Marker>
      
        <Stats />
        </MapContainer>
    )
}

