import React from 'react';
import { Link } from 'react-router-dom';
import EyeImage from './images/mask-1.svg';  // Replace with the path to your eye image
import DoctorImage from './images/mask-3.svg';  // Replace with the path to your doctor image
import BeforeAfterImage from './images/mask-2.svg';  // Replace with the path to your before-after image

function AboutUs() {
  return (
    <div className="bg-white py-12 relative overflow-hidden h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center">
            <img src={EyeImage} alt="Eye" className="w-80 lg:w-[30rem] absolute top-10 left-0 object-cover" />
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
            <img src={DoctorImage} alt="Doctor" className="w-80 lg:w-[30rem] absolute object-cover right-0 mb-4 lg:mb-0" />
            <img src={BeforeAfterImage} alt="Before and After" className="w-80 lg:w-[30rem] absolute bottom-0 object-cover" />
        </div>
    </div>
  );
}

export default AboutUs;
