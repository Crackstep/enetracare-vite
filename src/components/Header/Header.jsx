import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from './images/navbar-logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-[#DFF7F9] text-[#0E9298]'>
      <div className='flex items-center justify-between p-3'>
        <div className='flex items-center gap-2'>
          <div>
            <img src={NavbarLogo} alt="Logo" />
          </div>
          <div className='flex items-start flex-col'>
            <Link to='/' className='text-3xl font-bold'>eNetraCare</Link>
            <em className="tagline text-sm">A visionary initiative by Innovease India Pvt. Ltd. </em>
          </div>
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex text-md'>
          <Link className='px-3' to='/'>Home</Link>
          <Link className='px-3' to='/about'>About</Link>
          <Link className='px-3' to='/services'>Services</Link>
          <Link className='px-3' to='/testimonials'>Cataract</Link>
          <Link className='px-3' to='/testimonials'>Patient Resources</Link>
          <Link className='px-3' to='/testimonials'>Testimonials</Link>
          <Link className='px-3' to='/contact-us'>Contact Us</Link>
        </div>
      </div>
      <div className={`lg:hidden flex flex-col items-center transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
        <Link className='px-3 py-2' to='/' onClick={toggleMenu}>Home</Link>
        <Link className='px-3 py-2' to='/about' onClick={toggleMenu}>About</Link>
        <Link className='px-3 py-2' to='/services' onClick={toggleMenu}>Services</Link>
        <Link className='px-3 py-2' to='/testimonials' onClick={toggleMenu}>Cataract</Link>
        <Link className='px-3 py-2' to='/testimonials' onClick={toggleMenu}>Patient Resources</Link>
        <Link className='px-3 py-2' to='/testimonials' onClick={toggleMenu}>Testimonials</Link>
        <Link className='px-3 py-2' to='/contact-us' onClick={toggleMenu}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Header;
