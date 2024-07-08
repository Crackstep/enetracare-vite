import React from 'react'

function Sec2Card({
  img,
  text,
  isBorderAllowed
}) {
  if (isBorderAllowed) return (
    <div className='border-r-2 w-[300px] border-[#017F84] p-4 gap-4 flex items-center justify-center'>
      <div className='flex flex-col items-center hover:scale-[1.1] hover:duration-300'>
        <img src={img} alt="" className='max-h-[50px]' />
        <p className='text-[#017f84] text-lg'>{text}</p>
      </div>
    </div>
  )

  else return (
    <div className=' w-[300px]  p-4 gap-4 flex items-center justify-center'>
      <div className='flex flex-col items-center hover:scale-[1.1] hover:duration-300'>
        <img src={img} alt="" className='max-h-[50px]' />
        <p className='text-[#017f84] text-lg'>{text}</p>
      </div>
    </div>
  )

}

export default Sec2Card
