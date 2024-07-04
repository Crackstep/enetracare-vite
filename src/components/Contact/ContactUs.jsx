import React from 'react'
import './ContactCSS.css'

function ContactUs() {
  return (
    <div className="contact-page bg-white min-h-screen p-4">
      <div className="contact-container gap-4 flex items-center justify-around py-[4%]">
        <div className="left row text-[#017F84]">
          <div className="address-box">
            <h1 id="company-name" className="text-3xl font-semibold">Innovease India Private Limited</h1>
            <div className="address-text px-[5px]">
              <p>P NO 27, MOTI DOONGRI YOJANA,<br />
                GOVIND MARG,<br />
                Jaipur, Rajasthan, India, 302004<br />
                Year of Founding: 2021<br />
                Phone: +91-9923795140 / +91-9284197126</p>
            </div>
          </div>

          <div className='email-details my-8'>
            <div id='email-title' className='text-2xl font-semibold'>Email <i className="fa-regular fa-envelope"></i></div>
            <div className="email-list flex flex-col px-[5px]">
              <a href="mailto:#" className='hover:underline'> innoveaseindia@rediffmail.com </a>
              <a href="mailto:#" className='hover:underline'> aabhamaikar1982@gmail.com</a>
            </div>
          </div>

        </div>
        <div className="right w-[30rem] h-[20rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.154063706936!2d75.81483931450769!3d26.872315668382107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a5f4d5ed8f%3A0xe9a9cde4814b0ed4!2sInnovease%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1622543421470!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className='hover:scale-110 hover:duration-300 shadow-lg'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
