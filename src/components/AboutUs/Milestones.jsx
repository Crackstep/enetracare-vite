import React from 'react'
import MSEventLeft from './MSEventLeft'
import MSEventRight from './MSEventRight'

function Milestones() {
    return (

        <div className="min-h-screen bg-[#017F98] flex flex-col py-10 sm:py-10">
            <h1 className='text-5xl text-white text-center capitalize PY-4'>OUR MILESTONES</h1>

            <div className="py-1 sm:max-w-2xl sm:mx-auto w-full px-2 my-10 sm:px-0">

                <div className="relative text-gray-700 antialiased text-sm font-semibold">

                    <div className="hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div>

                    <MSEventLeft
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventRight
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventLeft
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventRight
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventLeft
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventRight
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventLeft
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                    <MSEventRight
                        text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ipsum.' />
                </div>

            </div>
        </div>

    )
}

export default Milestones
