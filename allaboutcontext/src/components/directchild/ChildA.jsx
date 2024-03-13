import React from 'react'
import ChildP from '../childofA/ChildP'
import ChildQ from '../childofA/ChildQ'

const ChildA = ({userId}) => {
    // now we pass props to childP
  return (
    <div className='w-[400px] h-[300px] bg-green-800 flex flex-col justify-around'>
        <div>
            <h1>ChildA</h1>
            <p>{userId}</p>
        </div>
        <p>children of A</p>
        <div className='flex justify-around'>
           <ChildP userId={userId}/> 
           <ChildQ/>
        </div>
    </div>
  )
}

export default ChildA