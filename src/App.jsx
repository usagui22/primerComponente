import './App.css'
import { Aceptar, Cerrar } from './components/Button'
import Description from './components/Descripton'
import Experience from './components/Experience'
import Pastime from './components/Pastime'


function App() {  

  return (
    <>                
      <Description/>
      <br/>
      <Pastime/>
      <br/>
      <Experience/>       
      <br/>
      <div className="botones">
        <Aceptar/>
        <Cerrar/>
      </div>           
    </>
  )
}

export default App
