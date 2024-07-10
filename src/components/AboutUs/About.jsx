import React from 'react';
import { Link } from 'react-router-dom';
import EyeImage from './images/mask-1.svg';  // Replace with the path to your eye image
import DoctorImage from './images/mask-3.svg';  // Replace with the path to your doctor image
import BeforeAfterImage from './images/mask-2.svg';  // Replace with the path to your before-after image
import TeamCard from './TeamCard';
import Milestones from './Milestones';
import AbhayPic from './images/AbhayPic.jpg'
import SwatiPic from './images/swati-pic.jpeg'
import './AboutCustomCSS.css'
<<<<<<< HEAD
import './media.css';

=======
import IMAGES from './images';
import Sec2Card from './Sec2Card';
>>>>>>> 0d7961591cdd16890ae05fbeed9771cba859a918

function AboutUs() {
  return (
    <div>

      {/* sec-1 starts  */}
      <div class="flex justify-center gap-4 items-center py-20">
        <div class=" p-10">
          <div class="image object-center text-center">
            <img src={IMAGES.Img2} className='rounded-full my-10 max-h-[50vh]' />
          </div>
        </div>
        <div class="w-1/2 p-5">
          <div class="text">
            <span class="text-gray-800 border-b-2 border-[#017F84] uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-[#017F84]">eNetraCare</span>
            </h2>
            <p class="text-gray-800">
              eNetraCare offers an affordable, portable eye care solution to patients' doorsteps. Using a mobile app integrated with an AI-based Software, we address challenges like transportation, healthcare worker availability and data precision, focusing on underserved rural and slum areas in India.
            </p>
          </div>
        </div>
      </div>
      {/* sec-1 ends */}

      {/* <div className="bg-white py-12 relative overflow-hidden min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center">
            <img src={EyeImage} alt="Eye" className="max-w-80 w-auto absolute top-10 left-0 object-cover" />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-[#0E9298] mb-4">ABOUT US</h2>
            <blockquote className="text-xl italic mb-4">
              "Vision for All: Empowering Sight, Enabling Futures."
            </blockquote>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Our Services</h3>
              <ul className="list-disc list-inside">
                <li>AI Cataract Detection</li>
                <li>Cataract Surgery</li>
                <li>Comprehensive Eye Exams</li>
                <li>Post-Surgery Care</li>
              </ul>
            </div>
            <p className="mb-4">
              eNetraCare offers an affordable, portable eye care solution to patients' doorsteps. Using a mobile app integrated with an AI-based Software, we address challenges like transportation, healthcare worker availability and data precision, focusing on underserved rural and slum areas in India.
            </p>
            <Link to="/about" className="bg-[#0E9298] text-white py-2 px-4 rounded-md inline-flex items-center self-center md:self-start">
              Know more <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <img src={DoctorImage} alt="Doctor" className="max-w-80 w-auto absolute object-cover right-0 mb-4 lg:mb-0" />
          <img src={BeforeAfterImage} alt="Before and After" className="max-w-80 w-auto absolute bottom-0 object-cover" />
        </div>
      </div> */}

      <hr className='bg-[#017f84] h-[2px]' />
      {/* sec-2 starts */}
      <div className='my-10 p-10'>
        <div className='flex items-center flex-col mb-12'>
          <h2 className='text-4xl pb-4 text-[#017f84]'> "Vision for All: Empowering Sight, Enabling Futures."</h2>
          <h4 className='text-2xl text-[#878b8b]'>WHAT WE OFFER</h4>
        </div>

        <div>
          <div className='flex justify-center gap-4'>
            <Sec2Card img={IMAGES.Img3}
              text='AI Cataract Detection'
              isBorderAllowed={true} />
            <Sec2Card img={IMAGES.Img4}
              text='Cataract Surgery'
              isBorderAllowed={true} />
            <Sec2Card img={IMAGES.Img5}
              text='Comprehensive Eye Exams'
              isBorderAllowed={true} />
            <Sec2Card img={IMAGES.Img6}
              text='Post-Surgery Care'
              isBorderAllowed={false} />
          </div>
        </div>
      </div>

      {/* sec-2 ends */}

      <div id="milestones">
        <Milestones />
      </div>

      {/* <div className="divider divider-success h-0 m-0 px-40 p-0"></div> */}

      <div className='flex flex-col items-center justify-center p-10'>
        <h1 className='text-5xl text-[#017F98] py-2 ' id='team-title'>MEET OUR TEAM</h1>
        <div id="team" className='flex justify-center items-center gap-12 my-4 w-full'>
          <TeamCard
            img={AbhayPic}
            name='Abhay Bhamaikar'
            qualification='B.E (Computer Engineering)  &  M.E (Information Technology)'
            currentStatus='Proprietor of 2 Business Entities.'
            experience='Teaching Experience of 7 Years in Engineering College'
            research='Publications in 4 International Journals'
          />
          <TeamCard
            img={SwatiPic}
            name='Dr. Swati Tomar'
            qualification='M.B.B.S, MS (Ophthalmology) & Former Fellow and Adjunct Faculty LVPEI'
            currentStatus='Consultant and Proprietor of Eye Hospital'
            experience='Teaching Experience of 20 Years in Medical College'
            research='Publications in 13 International Journals'
          />
        </div>
      </div>
    </div>

  );
}

export default AboutUs;
