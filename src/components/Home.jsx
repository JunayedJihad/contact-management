import React from 'react'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='flex gap-4 flex-col justify-center items-center'>
      <h2 className=' text-3xl font-bold'>Welcome to ContactX</h2>
      <NavLink className='italic underline text-blue-500' to='/login'>Login to Continue</NavLink>
    </div>
  )
}

export default Home