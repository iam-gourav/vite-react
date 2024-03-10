import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './component/Profile'
import Login from './component/Login'

const App = () => {
  return (
    <UserContextProvider>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App