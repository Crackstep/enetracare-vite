import React from 'react';
// import Carousel from './Carousel';
import eyeMask from './images/eye-mask.svg';
import { CarouselDefault } from './CarouselDefault';

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
        <div className="h-2/5 flex justify-center items-center">
          <CarouselDefault />
        </div>
    </div>
  );
}

export default Home;
