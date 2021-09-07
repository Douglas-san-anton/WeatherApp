import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import About from '../About/About'
import './Nav.css';

export default function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <a className='navbar-brand' href='/'> Weather App 🌤 </a>
      <SearchBar onSearch={onSearch}/>
      <About/>
    </nav>
  );
};
