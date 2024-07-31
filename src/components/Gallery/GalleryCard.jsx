import React from 'react'

function GalleryCard() {
    return (
        <div
            className="block max-w-[30rem] rounded-lg text-surface shadow-secondary-1 bg-[#DFF7F9] animation">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="rounded-t-lg"
                    src="https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
            </div>
            <div className="p-6">
                <p className='text-[#017f84] font-semibold'> Date</p>
                <p className="text-[#017f84]">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
            </div>
        </div>
    )
}

export default GalleryCard