import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className='button_container' onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
      <input
        className='search'
        type="text"
        placeholder="Busca una ciudad.."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
        <input className='button' type="submit" value="Agregar" />
    </form>
  );
}
