import React from 'react';
//import UserContext
import { UserContext } from '../../context/UserContext';
// import {JobContext} from "../../App/JobContext"



const ChildS = () => {
  return (
    <UserContext.Consumer>
        {userId=>(
        // <JobContext.Consumer>
            
        
                    <div className='w-60 h-20 bg-gray-800'>
                <h1>ChildS</h1>
                <p className='text-sm'>{userId}</p>
                {/* <p>{job}</p> */}
            </div>
        )
            }
        {/* </JobContext.Consumer> */}
      
    
    </UserContext.Consumer>
  )
}

export default ChildS