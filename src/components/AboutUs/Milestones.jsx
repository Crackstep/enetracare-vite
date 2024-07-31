import React, { useState } from "react";
import MSEventLeft from "./MSEventLeft";
import MSEventRight from "./MSEventRight";
import InputModal from "./InputModal";
import useSWR,{mutate} from "swr";
import Loader from "../Loader/Loader";
import { LucidePlus } from 'lucide-react';
import { useAuth } from "../../context/AuthProvider";
import UpdateModal from "./UpdateModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import Cookies from "js-cookie";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Milestones() {
  const {role} = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [milestone,setMilestone] = useState({});
  const [visibility, setVisibility] = useState('hidden');
  const [id, setId] = useState(null);
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/milestones`,
    fetcher
  );

  const handleDelete = async (id) => {
    try {
      setIsSubmitting(true);
      const token = Cookies.get('accessToken');
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
    <div className="relative bg-[#017F98] flex flex-col py-20 px-[40vh]">
      <h1 className="text-5xl text-white text-center py-4" id="milestone-title">
        MILESTONES
      </h1>

      <div className="py-1 w-full px-2 flex justify-center items-center my-10 ">
        <div
          className="relative text-gray-700 antialiased text-sm font-semibold"
          id="events-container"
        >
          <div className="block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {!isLoading &&
            !error &&
            data?.data?.length &&
            data.data.map((milestone, index) => {
              if (index % 2) {
                return (<MSEventRight setVisibility={setVisibility} setId={setId} setOpenUpdateModal={setOpenUpdateModal} setMilestone={setMilestone} key={index} milestone={milestone} />)
              }
              else {
                return (<MSEventLeft setVisibility={setVisibility} setId={setId} setOpenUpdateModal={setOpenUpdateModal} setMilestone={setMilestone} key={index} milestone={milestone} />)
              }
            })}
        </div>
      </div>

      {role === "admin" && (
        <button
          className={`fixed hidden md:block bottom-10 right-10 bg-[#017F84] text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-[#015f64] ${
            isSubmitting ? "border-4 border-gray-300 animate-spin" : ""
          }`}
          onClick={() => setOpenModal(true)}
          disabled={isSubmitting}
        >
          {!isSubmitting ? (
            <LucidePlus className="h-8 w-8" />
          ) : (
            <svg
              className="animate-spin h-8 w-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V2.5A9.5 9.5 0 007.5 12H4zm2 5.291A8.004 8.004 0 014 12H2.5a9.5 9.5 0 009.5 9.5V20a8 8 0 01-5.5-2.209zM20 12a8 8 0 01-8 8v1.5a9.5 9.5 0 009.5-9.5H20zm-2-5.291A8.004 8.004 0 0120 12h1.5a9.5 9.5 0 00-9.5-9.5V4a8 8 0 015.5 2.209z"
              ></path>
            </svg>
          )}
        </button>
      )}

      {openModal && <InputModal setOpenModal={setOpenModal} setIsSubmitting={setIsSubmitting} />}
      {openUpdateModal && <UpdateModal setOpenUpdateModal={setOpenUpdateModal} milestone={milestone} setIsSubmitting={setIsSubmitting} />}

    <DeleteModal onDelete={()=>handleDelete(id)} visibility={visibility} setVisibility={setVisibility} />


    </div>
  );
}

export default Milestones;
