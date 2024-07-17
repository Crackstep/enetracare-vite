import React from 'react';
import { LucideEdit, LucideTrash } from 'lucide-react';
import { useAuth } from '../../context/AuthProvider';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mutate } from 'swr';

function MSEventLeft({milestone,setIsSubmitting,setMilestone,setOpenUpdateModal}) {

    const {role} = useAuth();
    const handleEdit = ()=>{
        setMilestone(milestone);
        setOpenUpdateModal(true);
    }
    
    const handleDelete = async (id) => {
        try {
          setIsSubmitting(true);
          const token = Cookies.get('accessToken');
          console.log(token);
          await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/milestones/delete/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
            withCredentials: true,
          });
          mutate(`${import.meta.env.VITE_BACKEND_URL}/milestones`);
          setIsSubmitting(false);
        } catch (error) {
          console.log(error);
          setIsSubmitting(false);
        }
      };

    return (
        <div className="mt-6 relative">
            <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-1/2 pr-8">
                        <div className="p-4 bg-white rounded shadow animation">
                           {milestone.milestoneText}
                        </div>
                    </div>
                </div>
                {role==="admin" && <div className="absolute top-0 -left-14 flex flex-col items-center space-y-2 pl-4">
                    <button
                        className="text-gray-500 hover:text-blue-500 focus:outline-none"
                        onClick={handleEdit}
                    >
                        <div className="bg-gray-200 rounded-full p-2">
                            <LucideEdit className="h-4 w-4" />
                        </div>
                    </button>
                    <button
                        className="text-gray-500 hover:text-red-500 focus:outline-none"
                        onClick={()=>handleDelete(milestone._id)}
                    >
                        <div className="bg-gray-200 rounded-full p-2">
                            <LucideTrash className="h-4 w-4" />
                        </div>
                    </button>
                </div>}
            </div>
        </div>
    );
}

export default MSEventLeft;
