import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data , setData] = useState({})
    const data = useLoaderData()
    // useEffect(()=>{
    //         fetch("https://api.github.com/users/iam-gourav")
    //         .then((res)=>res.json())
    //         .then((data)=>{
    //             setData(data)
    //             console.log(data.id);
    //         })
    // },[])
  return (
    <div>Github id:{data.id}</div>
  )
}

export default Github;

export const gitApi = async()=>{
  const data =   await fetch("https://api.github.com/users/iam-gourav")
   return data.json()
  //  console.log(data);
}