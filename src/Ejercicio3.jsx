import React from 'react'
import { useState } from "react"
import ElementoLista from './ElementoLista';
export default function Ejercicio3() {

  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
   
      <ul>
   
      <ElementoLista materia={"Informatica Aplicada II"}></ElementoLista>
      <ElementoLista materia={"Programacion II"}></ElementoLista>
      <ElementoLista materia={"Robotica"}></ElementoLista>
      <ElementoLista materia={"Matemática"}></ElementoLista>
      <ElementoLista materia={"Física"}></ElementoLista>
      </ul>
    </div>
  )
}
{materias.map((materia)=><ElementoLista materia={materia}></ElementoLista>)}