import React from 'react'

function GalleryFormModal() {
    return (
        <div className='flex items-center justify-center absolute w-full top-[10%] '>
            <div className='flex flex-col w-3/5 text-white items-center justify-center relative bg-[#017f83] rounded-lg bg-opacity-70 p-20 backdrop-blur'>
                <h2 className='text-4xl '>Upload an image</h2>
                <div className='flex flex-col gap-8 py-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="inputDate" className='text-lg'><i className="fa-regular fa-calendar"></i> Date: </label>
                        <input type="date" name="inputDate" className='bg-[#DFF7F9] shadow p-2 rounded-lg text-white bg-opacity-40' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="inputText" className='text-lg'><i className="fa-solid fa-bars-staggered"></i> Description: </label>
                        <textarea type="text" name="inputText" placeholder='Enter text here...' className='placeholder-white bg-[#DFF7F9] shadow p-2 rounded-lg text-[#017f84] bg-opacity-40' />
                    </div>
                    <div className='flex flex-col gap-2 rounded'>
                        <label htmlFor="imageUpload" className='text-lg'><i className="fa-regular fa-image"></i> Image: </label>
                        <input type="file" name="imageUpload" className='bg-white shadow rounded' />
                    </div>
                </div>
            <button className='text-4xl absolute top-5 right-5'><i className="fa-solid fa-xmark"></i></button>
            </div>
        </div>
    )
}

export default GalleryFormModal