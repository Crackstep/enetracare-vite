import React, { useState } from 'react'
import './ServicesCustomCSS.css'

function AppCard({
    img,
    text,
    stepNum,
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
            <div className={`absolute top-0 left-0 h-full m-auto p-4 bg-white  rounded-lg ${display} `} id='app-text'>
                <h2 className='text-[1vw] text-[#0E93D2] '> Step {stepNum}</h2>
                <p className='text-[#0E93D2] text-[1vw]'>
                    {text}
                </p>
            </div>
        </div>

    )
}

export default AppCard
