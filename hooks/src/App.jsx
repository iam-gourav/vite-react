import { useState } from 'react';
import './App.css'

function App() {
  //you can't update ui/ux react decide which ui/ux part will update react takes all controll on ui/ux
  // react react on variable updation.
  // if we want change counter in multiple tags it will be lengthy in vanilla js
  // because we have to access all elements first than addEventListener
  // you can update variables and access data but when changes in ui/ux it controlled by react

  let [count , setCount]=useState(5)
 
  function addCount(){
    if(count<20){

      setCount(count+1)
    }

    
  }

    
    function subCount(){
    
        if(count>0)
        setCount(count-1)
      
    }
  

  return (
    <>
    <h1>Hooks in react</h1>
    <h2>counter value : {count}</h2>
    <button onClick={addCount}>Add Count {count}</button>
    <br />
    <button onClick={subCount}>Sub Count {count}</button>
    <p>{count}</p>
    </>
  )
}


export default App;
