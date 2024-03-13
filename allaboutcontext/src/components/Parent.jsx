import React from 'react'
import ChildA from './directchild/ChildA'
import ChildB from './directchild/ChildB'
import ChildC from './directchild/ChildC'

const Parent = ({ userId }) => {
    //now we have to pass to childA as a props
    return (
        <div className='w-full h-[80vh] bg-blue-700 flex flex-col items-center gap-8'>
            <div className='w-60 h-40 bg-orange-900 flex justify-center flex-col'>
                <h1>Child of App Parent</h1>
                <p>{userId}</p>
            </div>
            <div className='flex justify-center gap-10'>

                <ChildA userId={userId} />
                <ChildB />
                <ChildC />
            </div>
        </div>
    )
}

export default Parent