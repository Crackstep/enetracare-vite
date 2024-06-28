import React, { useEffect, useState } from 'react'
import IMAGES from './images'
import { Link } from 'react-router-dom'
import './HomeCustomCSS.css'

function ServiceCard({ img, text }) {
    const [imgurl, setImgurl] = useState('')
    const [title, setTitle] = useState('')
    useEffect(() => {
        setImgurl(img)
        setTitle(text)
    }, [])

    return (
        <div
            className="relative grid h-[30rem] w-full max-w-[25rem] items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 hover:scale-[1.04] hover:duration-200 my-8">
            <div
                className={`absolute inset-0 m-0 overflow-hidden rounded-none bg-transparent bg-opacity-80`} 
                style={{backgroundImage:`url('${imgurl}')`, 
                        backgroundPosition: 'center',
                        backgroundSize:'cover'}}>

                <div className="absolute inset-0 to-bg-black-10 hover:duration-300 hover:bg-gradient-to-t hover:from-black/80 hover:via-black/50">
                </div>
            </div>
           
            <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    {title}
                </h2>

                <Link to='/services' className="flex items-center justify-center ">
                    <div className='relative text-4xl flex items-center justify-center h-[55px] cursor-pointer w-[55px] !rounded-full  object-center text-center bg-white'>
                        <i className={`fa-solid fa-chevron-right text-black`}></i>
                    </div>
                </Link >
            </div>
        </div>
    )
}

export default ServiceCard
