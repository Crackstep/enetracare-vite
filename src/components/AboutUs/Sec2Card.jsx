import React from 'react'

function Sec2Card({
  img,
  text,
  isBorderAllowed
}) {
  if (isBorderAllowed) return (
    <div className='border-r-2 border-[#017F84] p-4 flex items-center justify-center sec-2-card '>
      <div className='flex flex-col gap-4 items-center hover:scale-[1.1] hover:duration-300'>
        <img src={img} alt="" className='h-[50px]' />
        <p className='text-[#017f84] text-lg'>{text}</p>
      </div>
    </div>
  )

  else return (
    <div className=' p-4 flex items-center justify-center sec-2-card'> 
      <div className='flex flex-col gap-4 items-center hover:scale-[1.1] hover:duration-300 '>
        <img src={img} alt="" className='h-[50px]' />
        <p className='text-[#017f84] text-lg'>{text}</p>
      </div>
    </div>
  )

}

export default Sec2Card
