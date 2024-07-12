import React from 'react'

function TestimonialInputModal() {
  return (
    <div className='border shadow-lg rounded-lg w-2/6 absolute right-8 bottom-4'>
      <form action='' className='flex flex-col gap-2 rounded-lg bg-[#c9c9c94b] justify-center p-10 items-center relative'>
        <label htmlFor="" className='text-[#017f84]'>Name:</label>
        <input type="text" className='bg-white outline-none p-2 text-[#000000] rounded-lg shadow-md' />
        <label htmlFor="" className='text-[#017f84]'>Feedback:</label>
        <input type="text" className='bg-white text-[#000000] p-2 rounded-lg shadow-md' />
        <label htmlFor="" className='text-[#017f84]'>Image: </label>
        <input type="file" className='bg-white text-[#017f84] w-4/5 rounded-lg shadow-md' name="img-upload" id="" />
        <button className='bg-[#017f84] my-2 p-2 text-lg rounded-md text-white'>Submit</button>
      </form>
      <button 
      className='absolute top-0 right-0 text-[#017f83] px-2 py-1 text-2xl'
      onClick={()=>{
        document.getElementById('testi-modal').style.display = 'none'
      }}
      ><i class="fa-solid fa-xmark"></i></button>
    </div>
  )
}

export default TestimonialInputModal
