import React from 'react'
export default function Ejercicio1() {

  const handlechange = (event) => {
      setfrutaseleccionada(event.target.value);
    };


  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      {
        <select value={frutaseleccionada} onChange={handlechange}>
        <option value="manzana">Manzana</option>
        <option value="pera">Pera</option>
        <option value="naranja">Naranja</option>
        <option value="mandarina">Mandarina</option>
        <p>Seleccion: {frutaseleccionada}</p>
        </select>
      }
    </div>
  );
}
