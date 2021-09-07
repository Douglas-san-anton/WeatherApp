import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav/Nav.jsx';
import Cards from '../components/Cards/Cards';
import '../components/About/About.css'
import Ciudad from '../components/Ciudad/Ciudad.jsx';
import { BASE_URL, BASE_NEXT, API_KEY } from '../Constants';

export default function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`${BASE_URL}${BASE_NEXT}${ciudad}&appid=${API_KEY}&units=metric`)
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
          if(cities.filter (c => c.id === recurso.id).length > 0) {
            return alert ('Ciudad ya agregada');
          }
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
     <Route
      path='/'
      render={() => <Nav onSearch={onSearch} />}
    />
    <Route
      exact path='/'
      render={()=> <Cards cities={cities}
      onClose={onClose}/>}
    />
    <Route
      exact
      path='/ciudad/:ciudadId'
      render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}
    />
    </div>
  );
}