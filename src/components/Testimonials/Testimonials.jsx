import React, { useState } from 'react';
import FeedBackCard from '../Home/FeedbackCard';
import FeedBackCardOrig from './FeedBackCardOrig';
import './TestimonialsCustomCSS.css';
import Message from './Message/Message'

function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet con' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' },
    { name: 'Patient Name', feedBackText: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam hic eligendi esse minima obcaecati maiores veniam, impedit nobis rem, velit laudantium repudiandae ratione fugiat! Cum nesciunt saepe esse facilis inventore?' }
  ];

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <div className="min-h-screen my-8">
      <h1 className='text-[3vw] text-center text-[#017F84] mt-8 font-semibold' id='title'>What our patients say about us</h1>
      <div className="divider divider-success text-[#017F84] p-0 m-0 h-0 px-20"></div>
      <div id='container' className='grid grid-cols-3 p-3 m-4 gap-8'>
        {visibleTestimonials.map((testimonial, index) => (
          <FeedBackCardOrig
            key={index}
            name={testimonial.name}
            feedBackText={testimonial.feedBackText}
          />
        ))}
      </div>
      <div className="text-center">
        <button onClick={() => setShowAll(!showAll)} className="btn btn-primary mt-4">
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div><Message/></div>
    </div>
  );
}

export default Testimonials;
