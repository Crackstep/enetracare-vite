import React from 'react';
// import Carousel from './Carousel';
import eyeMask from './images/eye-mask.svg';
import { CarouselDefault } from './CarouselDefault';
import ServiceCard from './ServiceCard';
import IMAGES from './images';
import './HomeCustomCSS.css'
import { Link } from 'react-router-dom';
import AboutImg from './images/about-img.jpeg'

function Home() {
  return (
    <div className=''>
      <div className='h-screen -mt-20 bg-[#DFF7F9] flex flex-col-reverse px-[5%] lg:flex-row justify-center items-center'>
        {/* <Carousel /> */}
        <div className='text-center lg:text-left'>
          <p className='text-[#017F84] text-4xl lg:text-7xl font-semibold mb-4 lg:mb-10'>Welcome to eNetraCare</p>
          <p className='text-[#017F84] text-3xl lg:text-6xl font-medium mb-1'>Your trusted</p>
          <p className='text-[#017F84] text-3xl lg:text-6xl font-medium mb-4'>Eye Care Center</p>
          <button className='bg-[#017F84] mt-6 lg:mt-14 text-white py-2 px-4 text-base lg:text-xl font-light rounded-full'>Get in touch →</button>
        </div>
        <div className=''>
          <img src={eyeMask} alt="eye-mask" className='w-auto' />
        </div>
      </div>
      <div className="divider px-8 bg-[#FFF] h-0 m-0 p-0 divider-success"></div>

      <div className='h-[200px] flex items-center justify-center bg-[#FFFFFF]'>
        <h1 className='text-6xl text-center py-4 text-green-900'> Vision for All</h1>
      </div>
      <div className="h-2/5 flex justify-center items-center">
        <CarouselDefault />
      </div>

      <div className='flex items-center justify-center bg-white px-24 py-32 gap-16'>
        <div className='w-3/5'>
          {/* textcontainer */}
          <h1 className='text-5xl text-green-800 py-2'>About eNetraCare</h1>
          <p className='text-xl text-gray-700'>eNetraCare by <Link to='/contact-us' style={{ color: 'green' }}> Innovease India Private Limited</Link>  offers an affordable, portable eye care solution that brings vision testing and cataract screening to patients' doorsteps. Using a mobile app integrated with an AI-based Software, We address challenges like transportation, healthcare worker availability and data precision, focusing on underserved rural and slum areas in India.
          </p>
        </div>

        <div className=''>
          {/* imgcontainer */}
          <img src={AboutImg} className='max-h-[48vh] rounded-md hover:scale-110 hover:duration-300 shadow-xl'  id='intro-img' alt="about-img.jpg" />
        </div>
      </div>


      <div className='h-[800px] bg-green-50 flex flex-col items-center p-20'>
        <h1 className='text-5xl text-gray-800'>Our Services</h1>
        <div className="divider px-20 divider-success"></div>
      </div>
    </div>
  );
}

export default Home;
