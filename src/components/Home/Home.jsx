import React, { useRef } from 'react';
// import Carousel from './Carousel';
import eyeMask from './images/eye-mask.svg';
import { CarouselDefault } from './CarouselDefault';
import ServiceCard from './ServiceCard';
import IMAGES from './images/index';
import './HomeCustomCSS.css'
import { Link } from 'react-router-dom';
import AboutImg from './images/about-img.jpeg'
import FeedbackCard from './FeedbackCard';

function Home() {

  const scrollContainer = document.querySelector('.container')
  const containerRef = useRef()

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
      <div className="divider px-8 bg-[#FFF] h-0 m-0 p-0 text-[#017F84] divider-success"></div>

      <div className='h-[20vh]  flex items-center justify-center bg-[#FFFFFF]'>
        <h1 className='text-6xl text-center  text-[#017F84]' id='home-tagline'> Vision for All</h1>
      </div>

      {/* Carousel starts */}
      <div className="h-2/5 flex justify-center items-center">
        <CarouselDefault />
      </div>
      {/* Carousel ends */}

      {/* about eNetraCare starts */}
      <div className='flex items-center justify-center bg-white px-24 py-32 gap-16' id='about-enetracare'>
        <div className='w-3/5' id='abt-enetracare-container'>
          {/* textcontainer */}
          <h1 className='text-5xl text-[#017F84] py-2'>About eNetraCare</h1>
          <p className='text-xl text-black'>eNetraCare by <Link to='/contact-us' style={{ color: '#017F84' }}> Innovease India Private Limited</Link>  offers an affordable, portable eye care solution that brings vision testing and cataract screening to patients' doorsteps. Using a mobile app integrated with an AI-based Software, We address challenges like transportation, healthcare worker availability and data precision, focusing on underserved rural and slum areas in India.black
          </p>
        </div>

        <div className=''>
          {/* imgcontainer */}
          <img src={AboutImg} className='max-h-[48vh] rounded-md hover:scale-110 hover:duration-300 shadow-xl' id='intro-img' alt="about-img.jpg" />
        </div>
      </div>
      {/* about eNetraCare ends */}


      {/* our services starts */}
      <div className='h-[800px] bg-[#DFF7F9] flex flex-col items-center p-20'id='service-body' >
        <h1 className='text-5xl text-[#017F84] font-semibold'>Our Services</h1>
        <div className="divider px-20 divider-success"></div>
        <div id='service-home-box' className='container-wrap'>
          <div className="container grid grid-cols-3 gap-8" id='service-home-container' >

            <div className='service-card-box'>
              <ServiceCard img={IMAGES.serviceImg}
                text='Rural-to-Rural Cataract Screening' />
            </div>

            <div className='service-card-box'>
              <ServiceCard img={IMAGES.eyeImg}
                text='Immediate Cataract Health Status' />
            </div>
            <div className='service-card-box'>
              <ServiceCard img={IMAGES.prodImg}
                text='Quick, Sharp Eye Imaging for Cataracts' />
            </div>
          </div>
        </div>

      </div>
      {/* our services ends */}


      {/* founders message starts  */}
      <div className='flex items-center justify-around pb-40 pt-10 bg-white' id='founder-msg-container'>
        <div className="founder-left w-2/5 relative">
          <div id="founder-msg">
            <h1 className='text-5xl text-[#017F84] font-semibold founder-msg-title'><span className='text-8xl font-customFont inv-comma'>&#8220;</span> Founder's Message</h1>
            <p className='text-lg text-[#017F84] p-3 inline-block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, earum sed eveniet dolor laborum necessitatibus aliquam nulla culpa impedit consequatur vero blanditiis hic obcaecati minus in! Necessitatibus quos voluptas, ipsum ipsa velit culpa eveniet eum id alias doloribus recusandae quaerat ratione hic fugit soluta? Odio voluptatem praesentium id blanditiis eum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dicta et incidunt perspiciatis, architecto possimus dolores quae reiciendis magnam ab.<span className='text-2xl font-bold font-customFont rotate-180 '>&#8221;</span></p>
          </div>
          <div id="founder-name " className='text-end text-xl my-3'>
            <p>- Founder name </p>
            <p className='italic text-sm'>Co-founder, eNetraCare</p>
          </div>
        </div>
        <div className="founder-right">
          <img src={IMAGES.AbhayPic} className='max-h-[400px] h-auto' />
        </div>
      </div>
      {/* founders message ends */}


      {/* testimionials starts */}
      <div className='flex bg-[#DFF7F9] flex-col px-4 py-8 '>
        <h1 className='text-5xl text-[#017F84] py-6 text-center'>Patient feedback </h1>

        <Link to='/testimonials' className='text-lg text-end mr-24 text-[#017F84] hover:underline'>+ See more </Link>

        <div className="container-wrap">
          

          <div className="container"
            onWheel={(e) => {
              e.preventDefault()
              scrollContainer.scrollLeft += e.deltaY;
              scrollContainer.style.scrollBehavior = "smooth";
            }}
            ref={containerRef}>
            <div>
              <span><FeedbackCard
                feedBackText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia architecto, quae hic neque quos alias expedita qui porro tempora.'
                name='Name' /></span>
              <span><FeedbackCard
                feedBackText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia architecto, quae hic neque .'
                name='Name' /></span>
              <span><FeedbackCard
                feedBackText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia architecto, quae hic neque quos alias expedita qui porro tempora psum dolor sit amet consectetur adipisicing elit..'
                name='Name' /></span>
            </div>

            <div>
              <span><FeedbackCard
                feedBackText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia architecto, quae hic neque quos alias expedita qui porro tempora.'
                name='Name' /></span>
              <span><FeedbackCard
                feedBackText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia architecto, quae hic neque .'
                name='Name' /></span>
              <span><FeedbackCard
                feedBackText='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia architecto, quae hic neque quos alias expedita qui porro tempora psum dolor sit amet consectetur adipisicing elit..'
                name='Name' /></span>
            </div>
          </div>

          
        </div>
      </div>
      {/* testimionials ends */}

    </div>
  );
}

export default Home;
