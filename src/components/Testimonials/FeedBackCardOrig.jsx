import React from 'react'

function FeedBackCardOrig({
    name,
    feedBackText,
    patientImage
}) {
    return (
        <div className='flex items-center shadow-lg p-4 rounded-lg bg-white m-1 gap-8 hover:bg-[#017F98] hover:text-white hover:duration-300 hover:scale-[1.03] animation' id='feedback-box'>
            <div id="text-orig" className='w-[60%]'>
                <p className='text-[1.15vw]'><span className='font-customFont text-4xl'>&#8220;</span>{feedBackText}<span className='font-customFont text-lg'>"</span><h1 className='text-end my-2'>- {name}</h1></p>

            </div>
            <div id="photo">
                <img src={patientImage} alt="user-image.jpg" className='max-h-32 h-auto  w-32 rounded-full' />
            </div>
        </div>
    )
}

export default FeedBackCardOrig
