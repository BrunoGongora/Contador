import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  let aumentar = () => setCount(count + 1)
  let resetear = () => setCount(0)
  let disminuir = () => setCount(count - 1)


  return (
    <div className="App">
      <div className='caja'>
      <h1 className='contador'>Contador</h1>
        <div className="titulos">
          <h1>{count}</h1>
        </div>
        <div className='botones'>
          <button className='boton' onClick={aumentar}>Sumar +1</button>
          <button className='boton' onClick={resetear}>Resetear</button>
          <button className='boton' onClick={disminuir}>Restar -1</button>
        </div>

      </div>

    </div>
  )
}

export default App
