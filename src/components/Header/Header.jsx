import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
        <Link to='/' >eNetraCare</Link>
        <p className="tagline">A visionary initiative by Innovease India Pvt. Ltd. </p>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/patient-resources'>Patient</Link>
        <Link to='/testimonials'>Testimonials</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Header
