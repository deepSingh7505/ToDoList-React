import React from 'react'

const Navbar = () => {
  return (
   <div className="flex justify-between bg-slate-400 py-2">
    <div><span className='font-bold text-xl mx-8'>Itask</span></div>
    <ul className='flex gap-5 mx-8'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Profile</li>
    </ul>
   </div>
  )
}

export default Navbar
 