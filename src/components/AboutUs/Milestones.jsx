import React from 'react'
import MSEventLeft from './MSEventLeft'
import MSEventRight from './MSEventRight'

let count = 0

function Milestones() {

    const createEventLeft = (text) => {
        const element = document.createElement('div')
        element.className = 'mt-6'
        element.innerHTML = `<div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-1/2 pr-8">
                        <div className="p-4 bg-white rounded shadow animation">
                           ${text}
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-[#017F98] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            </div>`

        return element
    }
    const createEventRight = (text) => {
        const element = document.createElement('div')
        element.className = 'mt-6'
        element.innerHTML = `<div className="flex flex-col sm:flex-row items-center text-white">
                <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-1/2  pl-8">
                        <div className="p-4 bg-white rounded shadow animation bg-opacity-40">
                            ${text}
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-[#017F98] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            </div>`

        return element
    }
    return (

        <div className="min-h-screen bg-[#017F98] flex flex-col py-10 ">
            <h1 className='text-5xl text-white text-center py-4' id='milestone-title'>MILESTONES</h1>

            <div className="py-1 w-full px-2 flex justify-center items-center my-10 ">

                <div className="relative text-gray-700 antialiased text-sm font-semibold" id='events-container'>

                    <div className="block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div>

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
            <button
                onClick={(e) => {
                    e.preventDefault()
                    let element = count%2==0 ? createEventLeft('HellowTextblah blah lkfrfri') : createEventRight('HellowTextblah blah lkfrfri')
                    count++;
                    console.log(count)
                    document.getElementById('events-container').appendChild(element)
                    console.log(document.getElementById('events-container'))
                    // element.innerText = 'Hellow'

                }}
            >Add Event</button>
        </div>

    )
}

export default Milestones
