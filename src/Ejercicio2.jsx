import { useState } from "react"
export default function Ejercicio2() {
  const [formData,setFormData]=useState({
    Nombre:" ",
    edad:" "
})
const[textoFinal,setTextoFinal]=useState(" ")
  const handleInput=(event)=>{
  const {name,value}=event.target
  setFormData({ ...formData,[name]:value}
 
 )
  }
const submit=(event)=>{
  if(formData["edad"]>=18){
   setTextoFinal(formData["Nombre"]+" es mayor de edad")
  }else{
    setTextoFinal(formData["Nombre"]+" No es mayor de edad")
  }
  event.preventDefault()
}
  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={submit}>
      <label>
<input type="text" name="Nombre" id="Nombre" onChange={handleInput}></input>
  </label>
  <label>
<input type="number" name="edad" id="edad" onChange={handleInput}></input>
  </label>
  <button type="submit">Enviar</button>
      </form>
      <h1>Nombre:{formData["Nombre"]}</h1>
      <h1>Edad:{formData["edad"]}</h1>
      <h2>{textoFinal}</h2>
    </div>
  )
}
