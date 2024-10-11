import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "brokenlimbs",
    age: 20
  }
  let newArr = [2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username='brokenLimbs' btnText='End_passed_as_a_props' someObj={myObj} someArr={newArr}/>
      <Card username='drabkidnapper' btnText='' someObj={myObj} someArr={newArr}/>
    </>
  )
}

export default App
