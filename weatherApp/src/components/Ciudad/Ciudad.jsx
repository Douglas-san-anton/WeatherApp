import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
    return (
        <div className='container'>
        <div className="city">
            <div>
                <h2>{city.name}</h2>
                <div className="info">
                    <p>Temperatura: {city.temp} ºC</p>
                    <p>Clima: {city.weather}</p>
                    <p>Viento: {city.wind} km/h</p>
                    <p>Cantidad de nubes: {city.clouds}</p>
                    <p>Latitud: {city.latitud}º</p>
                    <p>Longitud: {city.longitud}º</p>
                </div>
            </div>
        </div>

        </div>
    )
}