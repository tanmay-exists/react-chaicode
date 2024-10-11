import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) string += "0123456789"
    if(charAllowed) string += "!@#$%^&*_-+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  // useCallBack is used to run the function only when the entities in [] are updated

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()   // "?" is used to avoid error due to null or undefined values before "?"
    // passwordRef.current?.setSelectionRange(0,3)    // this is used to highlight first three characters of password
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  // useEffect is used so that password gets generated whenever the above entities in [] gets changed


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
                 value = {password}
                 className = 'outline-none w-full py-1 px-3'
                 placeholder='password'
                 readOnly
                 ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={16} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {setNumberAllowed((prev) => !prev)}} />
            <label>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
