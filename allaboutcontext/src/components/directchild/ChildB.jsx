import React from 'react'
import ChildS from '../childofB/ChildS'
import ChildU from '../childofB/ChildU'

const ChildB = () => {
  return (
    <div className='w-[400px] h-[300px] bg-yellow-800 flex flex-col justify-around' >
        <h1>ChildB</h1>
        <p>child of B</p>
        <div className='flex justify-around'>
            <ChildS/>
            <ChildU/>
        </div>
    </div>
  )
}

export default ChildB