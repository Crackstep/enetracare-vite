import React from 'react'
import Img1 from './images/service-img1.jpeg'
import Vid1 from './images/Device-vid.mp4'
import Vid2 from './images/tutorial-vid.mp4'
import AppCard from './AppCard'
import APPIMAGES from '.'
import Doc from './images/Doc1.pdf'
import { motion } from 'framer-motion'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Services() {
  return (
    <div>
      <motion.h2
        className='text-[3.5rem] mt-[3vw] mb-4 text-[#017F84] text-center'
        id='page-title'
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        Our Services
      </motion.h2>

      {/* section 1 starts */}
      <motion.div 
        className='flex px-6 pb-20 pt-12 items-center justify-around gap-8' 
        id='sec-1'
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div id='sec-1-text-container' className='w-3/6 flex justify-center flex-col text-[#017F84]'>
          <h2 className='text-[2.5vw] mb-1' id='sec-1-title'>Rural Eye Health Screening</h2>
          <p className='text-[1.3vw]' id='sec-1-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo corporis odit temporibus! Cum, placeat! Odit, sapiente blanditiis saepe aut aperiam reprehenderit ipsum architecto deserunt minus hic obcaecati porro dolore earum fuga placeat consectetur, reiciendis debitis incidunt facere iste assumenda voluptas provident totam. Possimus ad cum numquam ratione quaerat, harum sit temporibus eum itaque amet, ut maiores rerum, quidem perspiciatis.
          </p>
        </div>
        <div id='sec-1-img-container'>
          <img src={Img1} className='rounded-lg shadow-lg' />
        </div>
      </motion.div>
      {/* section 1 ends */}

      {/* section 2 starts */}
      <div className='relative bg-white'>
        <div className='flex items-center justify-center my-20 relative' id='sec-2-video-container'>
          <h4 className='absolute m-auto text-[4vw] text-white z-20 w-3/5 text-left' id='sec-2-title'>Quick Guide: Capturing an Eye Image</h4>
          <video className="max-h-[110vh] h-full w-full relative max-w-[100vw] z-[1] opacity-20 object-fill" controls autoPlay loop id='sec-2-video'>
            <source
              src={Vid1}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* section 2 ends */}

      {/* section 3 starts */}
      <div className='px-10 mb-20' id='sec-3-container'>
        <div id="sec-3" className='flex items-center justify-around gap-8 my-2'>
          <div id="device-guide-text" className='flex gap-4'>
            <div id="sec-3-text-container">
              <h2 className='text-[2.5vw] text-[#017F84]' id='sec-3-title'>Setting up the device</h2>
              <p className='text-[1.3vw] text-[#017F84]' id='sec-3-text'>
                To set up the device, begin by switching it on. Position the device above the patient's eyes, ensuring both eyes are clearly visible through the lens. Adjust the mount to achieve a clear image of the eyes on the phone camera. Check for and eliminate any light reflections on the cornea to ensure clarity. Ensure the pupil is clearly visible. Finally, use the eNetraCare app installed on your phone to capture images of the patient's eyes. Here is a concise tutorial on setting up the eye screening device.
              </p>
            </div>
          </div>
          <div id="sec-3-video-container">
            <video className="max-w-[40vw] rounded-lg" controls>
              <source
                src={Vid2}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* section 3 ends */}

      {/* section 4 starts */}
      <div className='pb-20 bg-[#e1f9ff] px-10 pt-10' id='sec-4'>
        <h2 className='text-center text-[2.5vw] text-[#0e8ed2]' id='sec-4-title'>About eNetraCare App</h2>
        <p className='text-[1.3vw] text-[#0E93D2] px-20 text-center mt-1 mb-10 object-fill' id='sec-4-text'>
          Introducing our efficient app for managing eye patient records. It simplifies data entry and keeps patient information organized, making it ideal for healthcare professionals who need a reliable, easy-to-use solution for patient management. Streamline your workflow and ensure accurate record-keeping with ease. Enjoy seamless integration with existing systems and quick access to vital patient data.
        </p>
        
        <div id="app-container-wrap">
          <div id='app-container'>
            <div className='flex justify-center gap-8 my-4'>
              <AppCard
                img={APPIMAGES.app1}
                text='Upon opening the app, you select a category based on the number of entries you need: 50, 100, 500, or 1000 entries, equivalent to the number of patients examined.'
                stepNum='1'
              />
              <AppCard
                img={APPIMAGES.app2}
                text='After selecting a category, you will be prompted to enter the corresponding license number. Once the license number is entered, you can begin entering patient details.'
                stepNum='2'
              />
              <AppCard
                img={APPIMAGES.app3}
                text='Once the license number is entered, you will be directed to a form where you can fill in the detailed information of each patient. This form includes fields for the registration number, full name, age, gender, occupation, etc.'
                stepNum='3'
              />
              <AppCard
                img={APPIMAGES.app4}
                text='After filling in the basic patient information, you will proceed to enter eye images and the eye score of the patient, which is obtained from the Snellen chart test.'
                stepNum='4'
              />
              <AppCard
                img={APPIMAGES.app5}
                text="After completing each patient entry, you will be directed to a page with three options: download the generated PDF, print it, or make a new patient entry. Once the selected category's entry limit is reached, you must select a category again."
                stepNum='5'
              />
            </div>
          </div>
        </div>
        
        <a href={Doc} download className='text-lg text-[#0E93D2] hover:underline'>
          Download an example report here <i className="fa-solid fa-download"></i>
        </a>
      </div>
      {/* section 4 ends */}
    </div>
  )
}

export default Services
