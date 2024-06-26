import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeCustomCSS.css'

function ServiceCard({ img }) {
    const [imgurl, setImgurl] = useState()
    useEffect(() => {
        setImgurl(img)
    }, [])

    return (
        <div>
            <Link to='/services' className='service-box animation' >
                <div className="service-text-container">
                    <h1>Service</h1>
                    <p>Service description</p>
                </div>
                <div className="service-img-container">
                    <img src={imgurl} className='service-img' />
                </div>
            </Link>

        </div>
    )
}

export default ServiceCard
