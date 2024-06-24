import React from 'react';
import elementolista from './elementolista';

  const materias = [
    'Informática Aplicada II',
    'Programación II',
    'Robótica',
    'Matemática',
    'Física'
  ];

  return (
    <div>
      <h2>Ejercicio extra</h2>
      <p>Algunas materias de quinto año:</p>
      <ul>
        {materias.map((materia, index) => (
          <elementolista key={index} mensaje={materia} />
        ))}
      </ul>
    </div>
  );


export default Ejercicio3;
