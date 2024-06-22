import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

function Header() {
  const [display, setDisplay] = useState('flex')
  return (
    <div className='flex items-center justify-around py-3 bg-teal-700 text-white'>
      <div className='flex items-center gap-2'>
        <div>
          <h1 className='border-black border p-3'>Logo</h1>
        </div>
        <div className='flex items-start flex-col'>
          <Link to='/' className='text-3xl font-semibold'>eNetraCare</Link>
          <em className="tagline text-sm">A visionary initiative by Innovease India Pvt. Ltd. </em>
        </div>
      </div>


      <div className='text-md flex'>
        <Link className='px-3' to='/'>Home</Link>
        <Link className='px-3' to='/about'>About</Link>
        <Link className='px-3' to='/services'>Services</Link>
        {/* <Link className='px-2' to='/patient-resources'>Patients</Link> */}
        <Dropdown />
        <Link className='px-3' to='/testimonials'>Testimonials</Link>
        <Link className='px-3' to='/contact-us'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Header
