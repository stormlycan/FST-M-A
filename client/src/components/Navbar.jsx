import React from 'react'
import { NavLink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center text-xl max-w-7xl mx-auto p-4'>
        <NavLink to="/"><h1 className='font-bold'>Auth App</h1></NavLink>
        <ul className='flex gap-4'>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/sign-in"><li>Sign In</li></NavLink>
        </ul>
      </div>
    </div>
  )
}
