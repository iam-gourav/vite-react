import React from 'react'
import ChildX from '../childofC/ChildX'
import ChildY from '../childofC/ChildY'

const ChildC = () => {
  return (
    <div className='w-[400px] h-[300px] bg-pink-800 flex flex-col justify-around'>
        <h1>ChildC</h1>
        <p>child of C</p>
        <div className='flex justify-around'>
            <ChildX/>
            <ChildY/>
        </div>
    </div>
  )
}

export default ChildC