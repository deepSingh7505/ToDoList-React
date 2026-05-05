import React from 'react'
import logo from './logo/logo.svg';


const Navbar = () => {
  return (
   <div className="flex justify-between bg-slate-400 py-2">
    <div><img className='h-10 mx-10' src={logo} alt="iTask"  /></div>
    <ul className='flex gap-5 mx-8'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Profile</li>
    </ul>
   </div>
  )
}

export default Navbar
 