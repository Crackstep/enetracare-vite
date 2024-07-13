import React, { useState } from 'react';
import FeedBackCard from '../Home/FeedbackCard';
import FeedBackCardOrig from './FeedBackCardOrig';
import './TestimonialsCustomCSS.css';
import Message from './Message/Message'
import TestimonialInputModal from './TestimonialInputModal';
import useSWR from "swr";
import Loader from "../Loader/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_BACKEND_URL}/testimonials`,fetcher);

  const visibleTestimonials = showAll ? data?.data : data?.data?.slice(0, 4);

  return (
    <div className="min-h-screen my-8">
      <h1 className='text-[3vw] text-center text-[#017F84] mt-8 font-semibold' id='title'>What our patients say about us</h1>
      <div className="divider divider-success text-[#017F84] p-0 m-0 h-0 px-20"></div>
      {!isLoading && !error && 
      <div>
      <div id='container' className='grid grid-cols-3 p-3 m-4 gap-8'>
        { data?.data?.length && data?.data?.map((testimonial, index) => (
          <FeedBackCardOrig
            key={index}
            name={testimonial.patientName}
            feedBackText={testimonial.content}
            patientImage={testimonial.patientImage}
          />
        ))}
      </div>
      <div className="text-center flex gap-4 justify-center">
        <button onClick={() => setShowAll(!showAll)} className="bg-[#017f84] text-white p-3 rounded-md text-lg mt-4">
          {showAll ? 'Show Less' : 'Show More'}
        </button>
        <button 
        className="bg-[#017f84] text-white p-3 rounded-md text-lg mt-4"
        onClick={()=>{
          document.getElementById('testi-modal').style.display = 'block'
        }}
        >
          Add a Testimonial
        </button>
      </div>
      </div>
      }
      {
        isLoading && <Loader style={"lg:mt-[15rem] md:mt-[10rem]"} />
      }
      {!isLoading && error && <div className='text-3xl text-center lg:mt-[15rem] md:mt-[10rem]'>Some error occured</div>}
      <div className='relative'>

        {/* <div id='testi-modal' className='hidden'>
          <TestimonialInputModal />
        </div> */}
      </div>
      {/* <div><Message/></div> */}
    </div>
  );
}

export default Testimonials;
