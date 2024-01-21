import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('black')
 
function bgchange(){

}
  return (
    <>
     <div style={{backgroundColor:color , width:'100%' , height:'100vh'}} >
      <div>
        {/* <button id='red' onClick={()=>{bgchange}} >RED</button> */}
        {/* we can pass refrence of function in onClick   */}
        {/* <button id='red' onClick={(e)=> bgchange('red')} >RED</button>  */}
        {/* we can't pass function with parameter due to syntex problem like onClick(bgchange('red'))  */}

        {/* <button id='red' onClick={()=>{setColor('red')}} >RED</button> */}
        {/* onClick want to take a function on click event so we have to pass a callback function  */}
        
        {/* <button id='red' onClick={(e)=> setColor(e.target.id)} >RED</button> */}
        {/* this also work  */}
        
        <button id='red' onClick={(e)=> bgchange('red')} >RED</button>
        <button onClick={()=>{setColor('blue')}}>BLUE</button>
        <button onClick={()=>{setColor('yellow')}}>YELLOW</button>
        <button onClick={()=>{setColor('green')}}>GREEN</button>
      </div>
     </div>
    </>
  )
}

export default App
