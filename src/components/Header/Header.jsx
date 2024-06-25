import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarLogo from './images/navbar-logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        staggerChildren: 0.1,
      },
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
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
        {!isOpen && <div className='lg:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>}
        <div className='hidden lg:flex text-md'>
          <Link className='px-3' to='/'>Home</Link>
          <Link className='px-3' to='/about'>About</Link>
          <Link className='px-3' to='/services'>Services</Link>
          <Link className='px-3' to='/testimonials'>Cataract</Link>
          <Link className='px-3' to='/resources'>Patient Resources</Link>
          <Link className='px-3' to='/testimonials'>Testimonials</Link>
          <Link className='px-3' to='/contact-us'>Contact Us</Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className='lg:hidden fixed w-[80%] inset-0 bg-[#DFF7F9] flex flex-col items-center justify-center'
          >
            <button onClick={toggleMenu} className='absolute top-4 right-4 focus:outline-none'>
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/' onClick={toggleMenu}>Home</Link>
            </motion.div>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/about' onClick={toggleMenu}>About</Link>
            </motion.div>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/services' onClick={toggleMenu}>Services</Link>
            </motion.div>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/testimonials' onClick={toggleMenu}>Cataract</Link>
            </motion.div>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/resources' onClick={toggleMenu}>Patient Resources</Link>
            </motion.div>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/testimonials' onClick={toggleMenu}>Testimonials</Link>
            </motion.div>
            <motion.div variants={linkVariants} className='px-3 py-2'>
              <Link to='/contact-us' onClick={toggleMenu}>Contact Us</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
