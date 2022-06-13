import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
    <input type="text" placeholder='Ciudad...'/>
    <button onClick={() => props.onSearch("Buscando ciudad...")}>Agregar</button>
  </div>
)};