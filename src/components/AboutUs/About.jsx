import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './TeamCard';
import Milestones from './Milestones';
import AbhayPic from './images/AbhayPic.jpg'
import SwatiPic from './images/swati-pic.jpeg'
import './AboutCustomCSS.css'
// import './media.css';

import IMAGES from './images';
import Sec2Card from './Sec2Card';

function AboutUs() {
  return (
    <div>

      {/* sec-1 starts  */}
      <div className="flex justify-center gap-4 items-center py-20" id='abt-sec-1'>

        <div className=" p-10" id='abt-sec-1-img'>
          <div className="object-center text-center">
            <img src={IMAGES.Img2} className='rounded-full my-10 max-h-[50vh]' />
          </div>
        </div>

        <div className="w-1/2 p-5" id='abt-sec-1-text'>
          <div>
            <span className="text-gray-800 border-b-2 border-[#017F84] uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-[#017F84]">eNetraCare</span>
            </h2>
            <p className="text-gray-800">
              eNetraCare offers an affordable, portable eye care solution to patients' doorsteps. Using a mobile app integrated with an AI-based Software, we address challenges like transportation, healthcare worker availability and data precision, focusing on underserved rural and slum areas in India.
            </p>
          </div>
        </div>
      </div>
      {/* sec-1 ends */}

    
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
