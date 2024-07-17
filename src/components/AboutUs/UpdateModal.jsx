import React, { useEffect, useState } from 'react';
import { LucideX, LucideText, LucideCalendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cookies from 'js-cookie';
import { mutate } from 'swr';
import axios from 'axios';

function UpdateModal({ setOpenUpdateModal, setIsSubmitting, milestone }) {
  const [date, setDate] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    setDate(milestone.milestoneDate);
    setText(milestone.milestoneText);
  }, [milestone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const token = Cookies.get('accessToken');
      setOpenUpdateModal(false);
      const response = await axios.patch(
        `${import.meta.env.VITE_BACKEND_URL}/milestones/update-content/${milestone._id}`,
        { newMilestoneText: text, newMilestoneDate: date },
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
      <div className='relative bg-white w-full max-w-lg p-8 rounded-lg shadow-lg mx-4'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <button
            type='button'
            className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
            onClick={() => setOpenUpdateModal(false)}
          >
            <LucideX className='h-6 w-6' />
          </button>
          <h2 className="text-2xl font-bold text-[#017f84] mb-4 text-center">Update Milestone</h2>
          <div className='flex flex-col'>
            <label htmlFor="text" className='text-[#017f84] font-semibold flex items-center mb-2'>
              <LucideText className="mr-2" />
              Text
            </label>
            <textarea
              name='text'
              className='bg-blue-50 outline-none p-3 text-gray-800 rounded-lg shadow-sm'
              value={text}
              placeholder='Enter Text'
              onChange={(e) => setText(e.target.value)}
              rows="4"
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="date" className='text-[#017f84] font-semibold flex items-center mb-2'>
              <LucideCalendar className="mr-2" />
              Date
            </label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className='bg-blue-50 outline-none p-3 text-gray-800 rounded-lg shadow-sm'
              placeholderText='Select Date'
              dateFormat='yyyy/MM/dd'
            />
          </div>
          <button
            type='submit'
            className='bg-[#017f84] text-white p-3 rounded-lg my-4 w-2/5 self-center hover:bg-[#016a6e] transition duration-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateModal;
