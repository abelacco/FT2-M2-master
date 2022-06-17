import React from "react";
// import { useParams } from "react-router-dom";

export default function Ciudad({city}) {
    // let {id} = useParams();
    
    if(!city) return <h3>Ciudad no existe</h3>
    function celcius () {
        let celcius = Math.round(city.temp - 273.15)
        return celcius
    }
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {celcius()} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
            Prueba
        </div>
    )
}