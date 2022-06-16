import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'

export default function App() {
  const [cities, setCities] =  useState([])

  const onSearch = (city)=>{
    // promesa 
    //   todo bien .then(  function de callback recibe el resulado "positivo" )
    //   todo mal  .catch( function de callback recibe el resulado "negativo" )
    // fetch("otra api")
    //   .then(res => res.json() )
    //   .then(obj => {

    //   })

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"4ae2636d8dfbdc3044bede63951a019b"}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
         const oldCity = cities.find( (city)=> city.id === ciudad.id )
         if(!oldCity){
           setCities(oldCities => [...oldCities, ciudad]);
         }else {
           alert("La ciudad ya fue proporcionada");
          
         }
        } else {
          alert("Ciudad no encontrada");
        }
      })
      .catch(error => console.log(error))
  }
  const onClose = (cityId)=>{
      setCities((oldCities)=>  {
        return oldCities.filter(city => city.id !== cityId)
      })
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards onClose={onClose} cities={cities}/>
    </div>
  );
}
