import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import { IoMdLogIn } from "react-icons/io";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch'; /* Importando botãozinho */


export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
                   
      <Link href={"/"} className='flex gap-1 items-center'>
        <span className='text-2xl text-amber-200 font-bold bg-fuchsia-700 py-1 px-1 rounded-lg'>Claraflix</span>
      </Link>   
            
      <div className='flex items-center gap-4'> 
        <MenuItem title="home" address="/" Icon={AiFillHome} />         
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
        <MenuItem title="login" address="/login" Icon={IoMdLogIn} />
        <DarkModeSwitch />  
      </div>    

    </div>
  )
}
