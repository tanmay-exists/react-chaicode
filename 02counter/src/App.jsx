import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // counter++
    setCounter(counter === 20 ? counter : ++counter)
  }
  const subtractValue = () => {
    setCounter(counter === 0 ? counter : --counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button><br />
      <button onClick={subtractValue}>Subtract value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
