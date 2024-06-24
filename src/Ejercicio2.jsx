import React from 'react'
export default function Ejercicio2() {

  const handlechange = (event) => {
    setdatospersona({
      ...datospersona,
      [event.target.name]: event.target.value
    });
  };

  const handlesubmit = (event) => {
    event.preventdefault();
    const { nombre, edad } = datospersona;
    const mensaje = `${nombre} tiene ${edad} años.`;
    alert(mensaje);
    if (parseint(edad) >= 18) {
      alert('La persona es mayor de edad.');
    } else {
      alert('La persona es menor de edad.');
    }
  
  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      {
      <form onSubmit={handlesubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={datospersona.nombre}
          onChange={handlechange}
        />
      </label>
      <br />
      <label>
        Edad:
        <input
          type="number"
          name="edad"
          value={datospersona.edad}
          onChange={handlechange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
      </form>
    }
    </div>
  )
}
}