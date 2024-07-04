import React from 'react'
import AbhayPic from './images/AbhayPic.jpg'
import InvCommas from './images/inv-commas.png'

function TeamCard({
    img,
    name,
    qualification,
    currentStatus,
    experience,
    research,
}) {
    return (
        <div className='flex flex-col items-center justify-center p-4 rounded-xl bg-[#f5f5f5] w-[23vw]'>
            <div id="img-container" className='relative p-4'>
                <img src={img} alt="team-member1.jpg" className='max-h-60 rounded-xl' />
                <div id="inv-commas" className='absolute top-0 left-0 bg-[#017F84] text-white flex items-center p-3 justify-center rounded-full text-6xl'><img src={InvCommas} className='h-6' /></div>
            </div>
            <div id="text-container" className='px-8 py-2 text-sm'>
                <div id="name" className='mb-2'>
                    <h4 className='text-black text-lg'>{name}</h4>
                    <p className='italic'>Co-founder, Innovease India Pvt. Ltd.</p>
                </div>
                <div id="info" >{qualification} <br />
                    {currentStatus} <br />
                    {experience} <br />
                    {research}
                </div>
            </div>
        </div>
    )
}

export default TeamCard
