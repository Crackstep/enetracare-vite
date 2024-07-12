import React from 'react'

function InputModal() {
    return (
        <div className='bg-white w-1/5 absolute bottom-5 right-10'>
            <div className='relative flex flex-col p-4'>
                <label htmlFor="date" className='text-black'>Date: </label>
                <input type="text" name='date' className='bg-transparent border text-black border-[#017f84] outline-none p-1' />
                <label htmlFor="date" className='text-black'>Text: </label>
                <input type="text" className='bg-transparent border text-black border-[#017f84] outline-none p-1' />
                <button className='bg-[#017f84] text-white p-2 rounded-sm my-4 w-2/5 '>Submit</button>
                <button 
                className='absolute top-0 right-0 text-[#017f84] px-2 text-xl rounded-[100%]'
                onClick={()=>{
                    document.getElementById('input-modal').style.display = 'none'
                    // e.target.parentElement.parentElement.parentElement.style.display = 'none'
                }}
                ><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
    )
}

export default InputModal
