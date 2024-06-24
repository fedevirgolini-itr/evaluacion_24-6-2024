import React from 'react'
import elementolista from './elementolista';

export default function Ejercicio3() {
  return (
    <div>
      <h2>Ejercicio 3: Modularización</h2>
      <p>Algunas materias de quinto año:</p>
        { 
        <ul>
        <elementoLista mensaje="Informática Aplicada II" />
        <elementoLista mensaje="Programación II" />
        <elementoLista mensaje="Robótica" />
        <elementoLista mensaje="Matemática" />
        <elementoLista mensaje="Física" />
      </ul>
      }
    </div>
  )
}
