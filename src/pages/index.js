import React from 'react'
import map from '../images/map.jpg'
import './pages.css'

const Mapa = () => {
    return (
        <div style={{display: ' flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={map} alt="" id="map" />
        </div>
    )
}

export default Mapa
