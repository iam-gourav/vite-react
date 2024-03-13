import React from 'react'

const ChildP = ({userId}) => {

    // now childp can access userId
  return (
    <div className='w-60 h-20 bg-slate-900'>
        <h1>ChildP</h1>
        <p>{userId}</p>
    </div>
  )
}

export default ChildP