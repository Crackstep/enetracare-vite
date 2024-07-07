import React, { useState } from 'react'
import './ServicesCustomCSS.css'

function AppCard({
    img,
    text,
}) {
    let [display, setDisplay] = useState('hidden')

    const showText = () => {
        setDisplay('block')
        
    }
    const hideText = () => {
        setDisplay('hidden')
    }

    return (

        <div 
        className='shadow-lg hover:scale-[1.05] hover:duration-500 bg-white rounded-lg relative'
        onMouseOver={showText}
        onMouseOut={hideText}
        >
            <img src={img} className='w-[18vw] rounded-lg'/>
            <div className={`absolute top-0 left-0 h-full m-auto p-4 bg-white bg-opacity-90 rounded-lg ${display} `} id='app-text'>
                <p className='text-[#0E93D2]'>
                    {text}
                </p>
            </div>
        </div>

    )
}

export default AppCard
