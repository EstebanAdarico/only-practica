import { Card } from "./components/card/Card.jsx"
import { Counter } from "./components/Counter.jsx"
import { Usuario } from "./components/usuario/Usuario.jsx"
import './components/usuario/usuario.css'

function App() {


  return (
    <>
    <Usuario nombre = "esteba" secondName = "puma" description = "un poco mas sibre mi me gusta codear" />
    <Card />
    <Counter/>
    </>
  )
}

export default App
