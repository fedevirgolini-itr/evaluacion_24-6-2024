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
   
      <ElementoLista materia={materias[0]}></ElementoLista>
      <ElementoLista materia={materias[1]}></ElementoLista>
      <ElementoLista materia={materias[2]}></ElementoLista>
      <ElementoLista materia={materias[3]}></ElementoLista>
      <ElementoLista materia={materias[4]}></ElementoLista>
      </ul>
    </div>
  )
}
