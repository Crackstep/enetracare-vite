import React, { useState } from 'react';
import { Image, LucideX, LucideEdit, LucideText } from 'lucide-react';
import Cookies from 'js-cookie';
import axios from 'axios';
import useSWR, { mutate } from 'swr';

function TestimonialInputModal({ setOpenModal, setIsSubmitting }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const token = Cookies.get('accessToken');
      const formData = new FormData();
      formData.append('patientName', name);
      formData.append('content', feedback);
      if (image) {
        formData.append('image', image);
      }
      setOpenModal(false);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/testimonials/post`,
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      
      console.log(response.data);
      mutate(`${import.meta.env.VITE_BACKEND_URL}/testimonials`);
      setIsSubmitting(false);
    } catch (error) {
      console.log("Error : ", error);
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-6'>
          <button
            type='button'
            className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
            onClick={() => setOpenModal(false)}
          >
            <LucideX className='h-6 w-6' />
          </button>
          <h2 className='text-2xl font-bold text-[#017f84] mb-4 text-center'>Add Testimonial</h2>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-[#017f84] font-semibold flex items-center mb-2'>
              <LucideText className='mr-2' />
              Name
            </label>
            <input
              type='text'
              id='name'
              className='bg-blue-50 outline-none p-3 text-gray-800 rounded-lg shadow-sm'
              value={name}
              placeholder='Enter Patient Name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='feedback' className='text-[#017f84] font-semibold flex items-center mb-2'>
              <LucideEdit className='mr-2' />
              Feedback
            </label>
            <textarea
              id='feedback'
              className='bg-blue-50 text-gray-800 p-3 rounded-lg shadow-sm'
              value={feedback}
              placeholder="Enter Patient's Feedback"
              rows={5}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='image' className='text-[#017f84] font-semibold flex items-center mb-2'>
              <Image className='mr-2' />
              Patient&apos;s Image
            </label>
            <div className='relative'>
              <input
                type='file'
                id='image'
                className='hidden'
                onChange={handleImageChange}
              />
              <label
                htmlFor='image'
                className='flex items-center justify-center bg-blue-50 text-[#017f84] w-full p-3 rounded-lg shadow-sm cursor-pointer hover:bg-blue-100'
              >
                {image && <Image className='mr-2' />}
                {image ? image.name : 'Upload Image'}
              </label>
              {imagePreview && (
                <div className='mt-4 flex justify-center'>
                  <img src={imagePreview} alt="Preview" className='rounded-lg shadow-md' />
                </div>
              )}
            </div>
          </div>
          <button type='submit' className='bg-[#017f84] my-2 p-3 text-lg rounded-lg text-white hover:bg-[#016a6e] transition duration-300'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TestimonialInputModal;
