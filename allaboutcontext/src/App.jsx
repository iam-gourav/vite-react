import React, { createContext, useState } from 'react'
import Parent from './components/Parent'
import { UserContext } from './context/UserContext'

const App = () => {
  // App parent have userId which have to send grand grand childP
  // we have to send this first direct child parent as a props
  const [userId, setUserId] = useState("dev123")
  const job = "React developer"
  // function changeUserId(){
  //   setUserId("dev987")
  // }

  // we can also create context here but it's good to make the context file seperate
  // const JobContext = createContext()

  return (
    //Wrap your components into a context provider to specify the value of this context for all components inside:
    // now we want grand children <Childs> use the userId
    <UserContext.Provider value={userId}>
      {/* <JobContext.Provider value={job}> */}

        <div className='bg-gray-700 h-[100vh] text-2xl text-center text-white'>
          App Parent Context Api
          {/* <button onClick={changeUserId}>changeuser</button> */}
          <Parent userId={userId} />

        </div>
      {/* </JobContext.Provider> */}
    </UserContext.Provider>
  )
}

export default App
// export {JobContext} ;
