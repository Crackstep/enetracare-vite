import React from 'react'
import Img1 from './images/service-img1.jpeg'
import Vid1 from './images/Device-vid.mp4'
import './ServicesCustomCSS.css'
import Vid2 from './images/tutorial-vid.mp4'
import AppCard from './AppCard'
import APPIMAGES from '.'
import Doc from './images/Doc1.pdf'

function Services() {
  return (
    <div >
      <h2 className='text-[3.5rem] mt-[3vw] mb-4 text-[#017F84] text-center' id='page-title'>Our Services</h2>


      {/* section 1 starts */}
      <div className='flex px-6 pb-20 pt-12 items-center justify-around gap-8' id='sec-1'>
        <div id='sec-1-text-container' className='w-3/6 flex justify-center flex-col text-[#017F84]'>
          <h2 className='text-[2.5vw] mb-1' id='sec-1-title' >Rural Eye Health Screening</h2>
          <p className='text-[1.3vw]' id='sec-1-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo corporis odit temporibus! Cum, placeat! Odit, sapiente blanditiis saepe aut aperiam reprehenderit ipsum architecto deserunt minus hic obcaecati porro dolore earum fuga placeat consectetur, reiciendis debitis incidunt facere iste assumenda voluptas provident totam. Possimus ad cum numquam ratione quaerat, harum sit temporibus eum itaque amet, ut maiores rerum, quidem perspiciatis.</p>
        </div>

        <div id='sec-1-img-container'>
          <img src={Img1}  className='rounded-lg shadow-lg' />
        </div>
      </div>
      {/* section 1 ends */}


      {/* section 2 starts */}
      <div className='relative bg-white'>
        <div className='flex items-center justify-center my-20 relative' id='sec-2-video-container'>
          <h4 className='absolute m-auto text-[4vw] text-white z-20 w-3/5 text-left' id='sec-2-title'>Quick Guide: Capturing an Eye Image</h4>
          <video className="max-h-[100vh] h-full w-full relative max-w-[100vw] z-[1] opacity-20 object-fill" controls autoPlay loop id='sec-2-video'>
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
      <div className='px-10 mb-20'>
        <div id="sec-3" className='flex items-center justify-around gap-8 my-2' >
          <div id="device-guide-text" className='flex gap-4'>
            <div id="sec-3-text-container">
              <h2 className='text-[2.5vw] text-[#017F84]' id='sec-3-title'>Step title</h2>
              <p className='text-[1.3vw] text-[#017F84] w-[90%]' id='sec-3-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore quisquam commodi est. Fugit, voluptatibus ab laudantium repudiandae eum culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda quaerat enim autem sit pariatur accusantium eveniet tempore a adipisci.</p>
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
      <div className='pb-20 bg-[#e1f9ff] px-10 pt-10'>
        <h2 className='text-center text-[2.5vw] text-[#0e8ed2]' id='sec-4-title'>About eNetraCare App</h2>
        <p className='text-[1.3vw] text-[#0E93D2] px-20 text-center mt-1 mb-10 object-fill' id='sec-4-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis harum consequuntur corporis obcaecati odio accusamus accusantium. Magnam expedita sint, sunt consequuntur, aliquid, ratione quae quod quo ad suscipit architecto eos tempora nemo. Amet esse, rem placeat laborum sapiente quia voluptatem! Here is a quick tutorial to eNetraCare App</p>
        <div className='flex justify-center gap-8 my-4'>
          <AppCard
            img={APPIMAGES.app1}
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio sed! Eveniet dolorum suscipit tempore corrupti. Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!'
            stepNum='1'
          />
          <AppCard
            img={APPIMAGES.app2}
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio sed! Eveniet dolorum suscipit tempore corrupti. Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!'
            stepNum='2'
          />
          <AppCard
            img={APPIMAGES.app3}
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio sed! Eveniet dolorum suscipit tempore corrupti. Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!'
            stepNum='3'
          />
          <AppCard
            img={APPIMAGES.app4}
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio sed! Eveniet dolorum suscipit tempore corrupti. Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!'
            stepNum='4'
          />
          <AppCard
            img={APPIMAGES.app5}
            text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, odio sed! Eveniet dolorum suscipit tempore corrupti. Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!Possimus hic eaque est in explicabo amet eius quidem enim beatae ea? Vitae, dolores!'
            stepNum='5'
          />
        </div>

        <a href={Doc} download className='text-lg text-[#0E93D2] py-20 hover:underline'>
          Download an example report here <i class="fa-solid fa-download"></i>
        </a>
      </div>
      {/* section 4 ends */}
    </div>
  )
}

export default Services
