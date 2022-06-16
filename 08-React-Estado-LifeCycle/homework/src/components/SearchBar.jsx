import React, { useState } from "react";


export default function SearchBar({onSearch}) {
  const [input ,setInput] = useState("")
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);  
      setInput("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit"> Agregar</button>
    </form>
  );
}
