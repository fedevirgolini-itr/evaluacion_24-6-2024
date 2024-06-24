import { useState } from "react"

export default function Ejercicio1() {
  const [fruta,setFruta]=useState("Manzana")
  const handleFruta=(event)=>{
  setFruta(event.target.value)
}
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select onChange={handleFruta}>
        <option value={"Manzana"}>Manzana</option>
        <option value={"Pera"}>Pera</option>
        <option value={"Naranja"}>Naranja</option>
        <option value={"Mandarina"}>Mandarina</option>
      </select>
    <h1>{fruta}</h1>
    </div>
  )
}
