import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import { IoMdLogIn } from "react-icons/io";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
    
    <Link href={"/"} className='flex gap-1 items-center'>
      <span className='text-2xl font-bold bg-fuchsia-400 py-1 px-1 rounded-lg'>ClaraFlix</span>
      <span className='text-xl hidden sm:inline'>Clone</span>
    </Link>
    
    <div className='flex gap-4'> 
      <MenuItem title="home" address="/" Icon={AiFillHome} />         
      <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      <MenuItem title="login" address="/login" Icon={IoMdLogIn} />  
    </div>    

    </div>
  )
}
