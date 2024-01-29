import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <div className='w-full h-[100vh] bg-black text-white flex justify-center flex-col items-center gap-10'>
              <h1 className='text-white text-4xl'>Password-Genrator</h1>
        <div >


        <input type="text" className='w-[250px]'  />
        <button className='bg-blue-500 border-2 border-white mx-4 w-20'>copy</button>
        </div>
        <div className='flex justify-center  items-center gap-4'>
          <span>5</span>
          <input type="range" minLength={5} maxLength={100} />
          <span>100</span>
          <input type="checkbox" name="" id="" />
          <label htmlFor="Number">Number</label>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Symbol</label>
        </div>
      </div>
    </>
  )
}

export default App
