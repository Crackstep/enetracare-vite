import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TeamCard from './TeamCard';
import Milestones from './Milestones';
import AbhayPic from './images/AbhayPic.jpg';
import SwatiPic from './images/swati-pic.jpeg';
import './AboutCustomCSS.css';
import IMAGES from './images';
import Sec2Card from './Sec2Card';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AboutUs = () => {
  const controls = useAnimation();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [controls]);

  return (
    <div className="scroll-smooth">
      {/* sec-1 starts */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="flex flex-col md:flex-row justify-center gap-4 items-center pt-32 pb-40 px-4 md:px-8 bg-gray-100"
        id='abt-sec-1'
      >
        <motion.div
          variants={cardVariants}
          className="p-6 flex justify-center"
        >
          <img 
            src={IMAGES.Img2} 
            alt="About Us" 
            className='rounded-full shadow-lg w-96 object-cover' 
          />
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="w-full md:w-1/2 p-6"
        >
          <div className="text-center md:text-left">
            <span className="text-gray-800 border-b-4 border-[#017F84] uppercase tracking-wider">About Us</span>
            <h2 className="my-4 text-3xl md:text-4xl font-bold">
              About <span className="text-[#017F84]">eNetraCare</span>
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              eNetraCare offers an affordable, portable eye care solution to patients' doorsteps. Using a mobile app integrated with AI-based software, we address challenges like transportation, healthcare worker availability, and data precision, focusing on underserved rural and slum areas in India.
            </p>
          </div>
        </motion.div>
      </motion.section>
      {/* sec-1 ends */}

      <hr className='bg-[#017f84] h-[2px]' />

      {/* sec-2 starts */}
      <motion.section
        ref={(el) => sectionRefs.current[0] = el}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className='my-16 p-8 bg-white rounded-lg'
        id='abt-sec-2'
      >
        <div className='text-center mb-12'>
          <h2 className='text-4xl pb-4 text-[#017f84] font-semibold'>"Vision for All: Empowering Sight, Enabling Futures."</h2>
          <h4 className='text-2xl text-[#878b8b] font-medium'>What We Offer</h4>
        </div>

        <div className='flex justify-center w-full items-center'>
          <div className='flex justify-center ' id='sec-2-card-container'>
            <div className='flex sec-2-card-containers'>
              <Sec2Card img={IMAGES.Img3} text='AI Cataract Detection' isBorderAllowed={true} />
              <div className='w-full h-[1.6px] bg-[#017F84] hidden' id='horizontal-line'></div>
              <Sec2Card img={IMAGES.Img4} text='Cataract Surgery' isBorderAllowed={true} />
            </div>

            <div className='w-[1.6px] h-auto bg-[#017F84] hidden' id='verticle-line'></div>
            <div className='flex sec-2-card-containers'>
              <Sec2Card img={IMAGES.Img5} text='Comprehensive Eye Exams' isBorderAllowed={true} />
              <div className='w-full h-[1.6px] bg-[#017F84] hidden' id='horizontal-line'></div>
              <Sec2Card img={IMAGES.Img6} text='Post-Surgery Care' isBorderAllowed={false} />
            </div>
          </div>
        </div>
      </motion.section>
      {/* sec-2 ends */}

      <motion.section
        ref={(el) => sectionRefs.current[1] = el}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className='py-16 px-4'
        id="milestones"
      >
        <Milestones />
      </motion.section>

      <motion.section
        ref={(el) => sectionRefs.current[2] = el}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        className='flex flex-col items-center justify-center p-8'
      >
        <h1 className='text-5xl text-[#017F98] py-4 font-bold' id='team-title'>Meet Our Team</h1>
        <div id="team" className='flex flex-col md:flex-row justify-center items-center gap-12 w-full'>
          <TeamCard
            img={AbhayPic}
            name='Abhay Bhamaikar'
            qualification='B.E (Computer Engineering) & M.E (Information Technology)'
            currentStatus='Proprietor of 2 Business Entities'
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
      </motion.section>
    </div>
  );
}

export default AboutUs;
