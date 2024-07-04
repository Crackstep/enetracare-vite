import React from 'react'

function MSEventRight({
    text,
}) {
    return (
        <div className="mt-6 ">
            <div className="flex flex-col sm:flex-row items-center text-white">
                <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-1/2  pl-8">
                        <div className="p-4 bg-white rounded shadow animation bg-opacity-40">
                            {text}
                        </div>
                    </div>
                </div>
                <div className="rounded-full bg-[#017F98] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            </div>
        </div>
    )
}

export default MSEventRight
