import React from 'react'

function GalleryCard({image}) {
    
    
    let tempDate = `${image?.imageDate.split(" ")[1]} ${image?.imageDate.split(" ")[2]} ${image?.imageDate.split(" ")[3]}`;
    if(!image?.imageDate.split(" ")[1] || !image?.imageDate.split(" ")[2] || !image?.imageDate.split(" ")[3]){
        tempDate = `${parseInt(image?.imageDate.split("-")[2]?.slice(0,2))+1}/${image?.imageDate.split("-")[1]}/${image?.imageDate.split("-")[0]}`;
    }
    //2024-08-05

    

    return (
        <div
            className="block max-w-[30rem]  rounded-lg text-surface shadow-secondary-1 bg-[#DFF7F9] animation">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="rounded-t-lg"
                    src={image?.image}
                    alt="image" />
            </div>
            <div className="p-6">
                <p className='text-[#017f84] font-semibold'>{tempDate}</p>
                <p className="text-[#017f84]">
                    {image?.description}
                </p>
            </div>
        </div>
    )
}

export default GalleryCard