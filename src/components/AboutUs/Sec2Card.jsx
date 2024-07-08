import React from 'react'

function Sec2Card({
    img,
    text,
    isBorderAllowed
}) {
    if(isBorderAllowed) return (
        <div className='flex flex-col items-center border-r-2 w-[300px] border-[#017F84] p-4 gap-4'>
          <img src={img} alt="" className='max-h-[50px]'/>
          <p className='text-[#017f84] text-lg'>{text}</p>
        </div>
      )

      else return (
        <div className='flex flex-col items-center w-[300px] p-4 gap-4'>
          <img src={img} alt="" className='max-h-[50px]'/>
          <p className='text-[#017f84] text-lg'>{text}</p>
        </div>
      )
  
}

export default Sec2Card
