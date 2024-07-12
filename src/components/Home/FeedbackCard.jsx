import React from 'react'
import User from './images/user-picture.png'

function FeedbackCard({
    name, 
    feedBackText,
    patientImage,
}) {
    return (
        <div className='flex justify-center shadow-lg p-6 rounded-lg bg-white m-2 gap-8'>
            <div id="text" className='w-60'>
                <p><span className='font-customFont text-4xl'>"</span>{feedBackText}<span className='font-customFont text-lg'>"</span><h1 className='text-end my-2'>- {name}</h1></p>
                
            </div>
            <div id="photo">
                <img src={patientImage} alt="user-image.jpg" className='h-32 mt-[50%] w-32 rounded-full' />
            </div>
        </div>
    )
}

export default FeedbackCard
