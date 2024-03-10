import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className='flex justify-around items-center h-20 bg-slate-100 font-sans font-medium'>
        <h2 className='font-bold text-xl'>logo</h2>
        <div className='flex gap-16'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="user">user</NavLink>
            <NavLink to="github">github</NavLink>
            
        </div>
        <button className='w-28 h-12 bg-zinc-700 text-white rounded-md'>Get In Touch</button>
    </div>
  )
}

export default Header