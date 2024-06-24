import React from 'react'
import { useState } from "react"
import ElementoLista from './ElementoLista';
export default function Ejercicio3() {
  const [materias,setMaterias]=useState(["Informatica Aplicada II","Programacion II","Robotica","Matemática","Física"])
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
   
      <ul>
      {materias.map((materia)=><ElementoLista materia={materia}></ElementoLista>)}
      </ul>
    </div>
  )
}
