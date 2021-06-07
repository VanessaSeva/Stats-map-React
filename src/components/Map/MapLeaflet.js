import React from 'react'
import './../Map/Map.css'
import L, { map } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Stats from './../Stats/Stats'


export default function MapLeaflet() {

    return(
        <MapContainer center={[45.421532, -75.697189]} zoom={12}>
    <TileLayer
        noWrap={true}
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Stats />
        </MapContainer>
    )
}

