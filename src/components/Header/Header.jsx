import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NavbarLogo from './images/navbar-logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsSubmenuOpen((false));
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
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

  const getNavLinkClass = (path1,path2,path3) => {
    return location.pathname === path1 ||location.pathname === path2 ||location.pathname === path3
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
          <div className='relative'>
            <button
              className={`px-3 ${getNavLinkClass('/patient-resources/tips','/patient-resources/news','/patient-resources/disorder')}`}
              onClick={toggleSubmenu}
            >
              Patient Resources
            </button>
            {isSubmenuOpen && (
              <div className='absolute left-0 mt-2 z-20 w-48 bg-white rounded-md shadow-lg border border-[#0E9298]'>
                <Link className={`block px-4 py-2 ${location.pathname==="/patient-resources/disorder"?"font-semibold":"font-medium"} text-[#0E9298] hover:bg-[#DFF7F9] hover:text-[#0E9298] transition-all duration-300`} to='/patient-resources/disorder' onClick={closeMenu}>Disorder</Link>
                <hr />
                <Link className={`block px-4 py-2 ${location.pathname==="/patient-resources/tips"?"font-semibold":"font-medium"} text-[#0E9298] hover:bg-[#DFF7F9] hover:text-[#0E9298] transition-all duration-300`} to='/patient-resources/tips' onClick={closeMenu}>Tips</Link>
                <hr />
                
                <Link className={`block px-4 py-2 ${location.pathname==="/patient-resources/news"?"font-semibold":"font-medium"} text-[#0E9298] hover:bg-[#DFF7F9] hover:text-[#0E9298] transition-all duration-300`} to='/patient-resources/news' onClick={closeMenu}>News</Link>
              </div>
            )}
          </div>
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
            
            <motion.div variants={linkVariants} className={`w-10/12 text-center ${location.pathname==="/patient-resources/news"||location.pathname==="/patient-resources/tips"||location.pathname==="/patient-resources/disorder"?"bg-white text-[#0E9298] font-semibold ":""} bg-white rounded-3xl m-1 py-2`} onClick={toggleSubmenu}>
              <div>Patient Resources</div>
                {isSubmenuOpen && (
              // <AnimatePresence>
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={variants}
                    className='w-full flex flex-col z-10 items-center'
                  >
                    <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/patient-resources/disorder"?"font-semibold":"font-medium"} text-center bg-white rounded-3xl m-1 py-2`}>
                      <Link to='/patient-resources/disorder' onClick={closeMenu}>Disorder</Link>
                    </motion.div>
                    <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/patient-resources/tips"?"font-semibold":"font-medium"} text-center bg-white rounded-3xl m-1 py-2`}>
                      <Link to='/patient-resources/tips' onClick={closeMenu}>Tips</Link>
                    </motion.div>
                    <motion.div variants={linkVariants} className={`w-10/12 ${location.pathname==="/patient-resources/news"?"font-semibold":"font-medium"} text-center bg-white rounded-3xl m-1 py-2`}>
                      <Link to='/patient-resources/news' onClick={closeMenu}>News</Link>
                    </motion.div>
                  </motion.div>
              // </AnimatePresence>
                )} 
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
