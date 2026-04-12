import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbaar = () => {
  return (
    <nav className='bg-violet-400 flex justify-between px-8 py-4'>
        <h1 className='text-white'>MY QUIZ APP</h1>

        <NavLink to={'/'}
        className='text-white'
        >
        Home</NavLink>
    </nav>
  )
}

export default Navbaar