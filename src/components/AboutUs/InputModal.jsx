import React from 'react'

function InputModal() {
    return (
        <div className='bg-white flex flex-col w-1/5 p-4 absolute bottom-5 right-10'>
                <label htmlFor="date" className='text-black'>Date: </label>
                <input type="text" name='date' className='bg-transparent border border-[#017f84] outline-none p-1' />
                <label htmlFor="date" className='text-black'>Text: </label>
                <input type="text" className='bg-transparent border border-[#017f84] outline-none p-1' />
                <button className='bg-[#017f84] text-white p-2 rounded-sm my-4 w-2/5 '>Submit</button>

        </div>
    )
}

export default InputModal
