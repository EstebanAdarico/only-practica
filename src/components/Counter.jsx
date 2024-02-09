import { useState } from "react"

export const Counter = () => {

   const [aumentar, setAumentar] = useState(0)
   const [mostrar, setMostrar] = useState(true)

   const aumentando = () =>{
      setAumentar(aumentar + 1)
   }
   //el boton mostrando cambia el estado de mostrar
   const mostrando = ()=>{
      setMostrar(!mostrar)
   }

   return (
      <>
      
      <h1>{aumentar}</h1>
      <button onClick={aumentando}>Aumentar</button>
      <h1>.------------------------------------------------------------------</h1>
      {/* este es para el boton  */}
      <button onClick = {mostrando}>{mostrar == true ? "mostrando":"ocullto"}</button>
      {/* esto es para lo que va a mostrar la accion de darle click al boton  */}
      {/* recuerda el short-circuit evaluation o cortocircuito que que la primera exprecion debe de ser verdadera para que se cumpla la sentencia  */}
      {/* {mostrar ? <h1>que me tocas las pelotas</h1>: null} */}
      {mostrar && <h1>que me tocas las pelotas</h1>}
      </>
   )
}