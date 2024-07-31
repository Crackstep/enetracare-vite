import React from 'react'
import GalleryCard from './GalleryCard'
import GalleryFormModal from './GalleryFormModal'

function Gallery() {
    return (
        <div className='relative'>
            <div className='grid grid-cols-3 gap-8 p-4'>
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
            <GalleryFormModal />

            <button className='bg-[#017f84] cursor-pointer px-4 py-2 shadow-lg text-5xl absolute bottom-[5%] right-[5%] text-white rounded-full'>&#43;</button>
        </div>

    )
}

export default Gallery