import React from 'react'
import Img1 from './images/service-img1.jpeg'
import Vid1 from './images/Device-vid.mp4'
import './ServicesCustomCSS.css'

function Services() {
  return (
    <div >
      <h2 className='text-5xl mt-12 mb-4 text-[#017F84] text-center'>Our Services</h2>


      <div className='flex px-6 pb-20 pt-12 justify-around'>
        <div id='text-container' className='w-3/6 flex justify-center flex-col text-[#017F84]'>
          <h2 className='text-[2.5vw] mb-1'>Rural Eye Health Screening</h2>
          <p className='text-[1.2vw]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A illo corporis odit temporibus! Cum, placeat! Odit, sapiente blanditiis saepe aut aperiam reprehenderit ipsum architecto deserunt minus hic obcaecati porro dolore earum fuga placeat consectetur, reiciendis debitis incidunt facere iste assumenda voluptas provident totam. Possimus ad cum numquam ratione quaerat, harum sit temporibus eum itaque amet, ut maiores rerum, quidem perspiciatis.</p>
        </div>

        <div id='img-container'>
          <img src={Img1} alt="" className='max-h-[40vh] rounded-lg' />
        </div>
      </div>

      <div className='relative '>
        <div className='flex items-center justify-center my-20 relative' id='device-video'>
          <h4 className='absolute m-auto text-7xl text-white z-20 w-3/5 text-left' id='video-title'>Quick Guide: Capturing an Eye Image</h4>
          <video class="h-[100vh] relative w-[100vw] z-[1] opacity-20 object-fill" controls autoPlay loop  >
            <source
              src={Vid1}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className='px-10'>
        <div id="device-guide" className='flex items-center justify-around gap-8 my-2'>
          <div id="device-guide-text" className='flex gap-4'>
            <div id="dg-text-number" className='flex items-center h-[100px] w-[100px]  rounded-sm'><p className='text-4xl px-7 bg-[#017F84] py-4 rounded-full text-white'>1</p></div>
            <div id="dg-text">
              <h2 className='text-4xl text-[#017F84]'>Step title</h2>
              <p className='text-lg text-[#017F84]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore quisquam commodi est. Fugit, voluptatibus ab laudantium repudiandae eum culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda quaerat enim autem sit pariatur accusantium eveniet tempore a adipisci.</p>
            </div>
          </div>
          <div id="device-guide-img">
            <img src={Img1} alt="" className='max-w-[40vw] rounded-lg' />
          </div>
        </div>

        <div id="device-guide" className='flex items-center justify-around gap-8 my-2'>
          <div id="device-guide-img">
            <img src={Img1} alt="" className='max-w-[40vw] rounded-lg' />
          </div>

          <div id="device-guide-text" className='flex gap-4'>
            <div id="dg-text-number" className='flex items-center h-[100px] w-[100px]  rounded-sm'><p className='text-4xl px-7 bg-[#017F84] py-4 rounded-full text-white'>2</p>
            </div>
            <div id="dg-text">
              <h2 className='text-4xl text-[#017F84]'>Step title</h2>
              <p className='text-lg text-[#017F84]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore quisquam commodi est. Fugit, voluptatibus ab laudantium repudiandae eum culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda quaerat enim autem sit pariatur accusantium eveniet tempore a adipisci.</p>
            </div>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Services
