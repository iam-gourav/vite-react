import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
 

  return (
    <>
    <div className='flex  flex-col items-center bg-gray-800 h-[100vh] w-full'>

     
      <h1 className='text-white'>learn redux</h1>
      <AddTodo/>
      <Todos/>
    </div>
       
    </>
  )
}

export default App
