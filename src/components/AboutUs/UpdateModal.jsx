import React, { useEffect, useState } from 'react';
import { LucideX } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';
import { mutate } from 'swr';
import axios from 'axios';

function UpdateModal({ setOpenUpdateModal,setIsSubmitting,milestone}) {
  const [date, setDate] = useState(null);
  const [text, setText] = useState('');

  useEffect(()=>{
    setDate(milestone.milestoneDate);
    setText(milestone.milestoneText);
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const token = Cookies.get('accessToken');
      console.log(token);
      setOpenUpdateModal(false);
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/milestones/update-content/${milestone._id}`,
        {newMilestoneText:text,newMilestoneDate:date},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      mutate(`${import.meta.env.VITE_BACKEND_URL}/milestones`);
      setIsSubmitting(false);
    } catch (error) {
      console.log("Error : ", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div id="input-modal" className='fixed inset-0 flex z-30 items-center justify-center bg-black bg-opacity-50'>
      <div className='relative bg-white w-1/5 p-6 rounded-lg shadow-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <button
            type='button'
            className='absolute top-2 right-2 text-[#017f84] px-2 text-xl rounded-full'
            onClick={() => setOpenUpdateModal(false)}
          >
            <LucideX className='h-6 w-6' />
          </button>
          
          <div className='flex flex-col mb-4'>
            <label htmlFor="text" className='text-black mb-2'>Text:</label>
            <input
              type="text"
              name='text'
              className='bg-transparent border text-black border-[#017f84] outline-none p-2 rounded'
              value={text}
              placeholder='Enter Text'
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="date" className='text-black mb-2'>Date:</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className='bg-transparent border text-black border-[#017f84] outline-none p-2 rounded'
              placeholderText='Select Date'
              dateFormat='yyyy/MM/dd'
            />
          </div>
          <button
            type='submit'
            className='bg-[#017f84] text-white p-2 rounded-md my-4 w-2/5 self-center'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;
