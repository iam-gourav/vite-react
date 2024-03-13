import { useEffect, useInsertionEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import Themebtn from './component/Themebtn'
import Card from './component/Card'


function App() {
  const [themeMode , setThemeMode] = useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
      document.querySelector("html").classList.remove("light" , "dark")
      document.querySelector("html").classList.add(themeMode)
  },[themeMode])
  

  return (
    <ThemeProvider value={{themeMode , darkTheme , lightTheme}}>

   <div className='p-4 bg-pink-600'>app</div>
   <Themebtn/>
   <Card/>
    </ThemeProvider>
  )
}

export default App
