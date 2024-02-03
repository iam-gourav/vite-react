import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()'
    // console.log(str);

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
      setPassword(pass)

    }
   

  }, [length, numberAllowed, charAllowed, setPassword])
  const copyPassword = useCallback(() => {
   
    window.navigator.clipboard.writeText(password)
    console.log(passwordRef.current.value);
    passwordRef.current?.select()
   
  }, [password])
  useEffect(() => {

    passwordGenrator()
  }, [length, numberAllowed, charAllowed, setPassword])


  function handleRange(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setLength(e.target.value)
  }

  return (
    <>
      <div className='w-full h-[100vh] bg-black text-white flex justify-center flex-col items-center gap-10'>
        <h1 className='text-white text-4xl'>Password-Genrator</h1>
        <div >


          <input
            type="text"
            className='w-[250px]
         text-black'
            value={password}
            ref={passwordRef}
             />
          <button onClick={copyPassword} className='bg-blue-500 border-2 border-white mx-4 w-20'>copy</button>
        </div>
        <div className='flex justify-center  items-center gap-4'>

          <input className='cursor-pointer' type="range" min={8} max={25} onChange={handleRange} />
          <span>Length({length})</span>
          <input
            type="checkbox"
            name="number"
            id="number"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} />
          <label htmlFor="Number">Number</label>
          <input
            type="checkbox"
            name="symbol"
            id="symbol"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="">Symbol</label>
        </div>
      </div>
    </>
  )
}

export default App
