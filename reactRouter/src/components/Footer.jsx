import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-green-700 h-60 flex flex-col items-center justify-around' >
        <div className='flex gap-8 text-4xl'>
            <FaTwitter/>
            <RiInstagramFill/>
            <FaFacebook/>
        </div>
        <h1 className='font-bold text-3xl'>Contact Me</h1>
        <h2 className='text-xl'>info@email.com</h2>
        <p>Copyright ©2024 All rights reserved | This template is made with  by Gourav</p>

    </div>
  )
}

export default Footer