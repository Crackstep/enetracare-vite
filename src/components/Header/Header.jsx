import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarLogo from './images/navbar-logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
    },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'bg-white text-[#0E9298] font-semibold transition-all duration-300 ease-in-out transform px-4 py-2 rounded-lg shadow-md'
      : 'transition-all duration-600 ease-in-out transform px-4 py-2 rounded-lg';
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
          <Link className={`px-3 ${getNavLinkClass('/')}`} to='/'>Home</Link>
          <Link className={`px-3 ${getNavLinkClass('/about')}`} to='/about'>About</Link>
          <Link className={`px-3 ${getNavLinkClass('/services')}`} to='/services'>Services</Link>
          <Link className={`px-3 ${getNavLinkClass('/patient-resources')}`} to='/patient-resources'>Patient Resources</Link>
          <Link className={`px-3 ${getNavLinkClass('/testimonials')}`} to='/testimonials'>Testimonials</Link>
          <Link className={`px-3 ${getNavLinkClass('/contact-us')}`} to='/contact-us'>Contact Us</Link>
        </div>
      </div>
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            className='lg:hidden pb-5 flex flex-col items-center'
          >
            <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/"?"font-semibold":""} text-center bg-white rounded-3xl m-1 py-2`}>
              <Link to='/' onClick={closeMenu}>Home</Link>
            </motion.div>
            <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/about"?"font-semibold":""} text-center bg-white rounded-3xl m-1 py-2`}>
              <Link to='/about' onClick={closeMenu}>About</Link>
            </motion.div>
            <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/services"?"font-semibold":""} text-center bg-white rounded-3xl m-1 py-2`}>
              <Link to='/services' onClick={closeMenu}>Services</Link>
            </motion.div>
           
            <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/patient-resources"?"font-semibold":""} text-center bg-white rounded-3xl m-1 py-2`}>
              <Link to='/patient-resources' onClick={closeMenu}>Patient Resources</Link>
            </motion.div>
            <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/testimonials"?"font-semibold":""} text-center bg-white rounded-3xl m-1 py-2`}>
              <Link to='/testimonials' onClick={closeMenu}>Testimonials</Link>
            </motion.div>
            <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/contact-us"?"font-semibold":""} text-center bg-white rounded-3xl m-1 py-2`}>
              <Link to='/contact-us' onClick={closeMenu}>Contact Us</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
