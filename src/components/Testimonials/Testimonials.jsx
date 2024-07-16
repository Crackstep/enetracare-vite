import React, { useState, useEffect } from "react";
import FeedBackCardOrig from "./FeedBackCardOrig";
import "./TestimonialsCustomCSS.css";
import TestimonialInputModal from "./TestimonialInputModal";
import useSWR from "swr";
import Loader from "../Loader/Loader";
import { LucidePlus } from "lucide-react";
import { useAuth } from "../../context/AuthProvider";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Testimonials() {
  const { role } = useAuth();
  const [showAll, setShowAll] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/testimonials`,
    fetcher
  );

  const visibleTestimonials = showAll ? data?.data : data?.data?.slice(0, 4);

  return (
    <div className="min-h-screen my-8">
      <h1
        className="text-[3vw] text-center text-[#017F84] mt-8 font-semibold"
        id="title"
      >
        What our patients say about us
      </h1>
      <div className="divider divider-success text-[#017F84] p-0 m-0 h-0 px-20"></div>

      {!isLoading && !error && (
        <div>
          <div id="container" className="grid grid-cols-3 p-3 m-4 gap-8">
            {data?.data?.length &&
              data?.data?.map((testimonial, index) => (
                <FeedBackCardOrig
                  key={index}
                  name={testimonial.patientName}
                  feedBackText={testimonial.content}
                  patientImage={testimonial.patientImage}
                />
              ))}
          </div>

          <div className="text-center flex gap-4 justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#017f84] text-white p-3 rounded-md text-lg mt-4"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>

            {role === "admin" && (
              <button
                className={`fixed bottom-10 right-10 bg-white p-4 rounded-full shadow-lg text-[#017F98] ${
                  isSubmitting ? "border-4 border-gray-300 animate-spin" : ""
                }`}
                onClick={()=>setOpenModal(true)}
                disabled={isSubmitting}
              >
                {!isSubmitting ? (
                  <LucidePlus className="h-8 w-8" />
                ) : (
                  <svg
                    className="animate-spin h-8 w-8 text-[#017F98]"
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
          </div>
        </div>
      )}

      {isLoading && <Loader style={"lg:mt-[15rem] md:mt-[10rem]"} />}
      {!isLoading && error && (
        <div className="text-3xl text-center lg:mt-[15rem] md:mt-[10rem]">
          Some error occurred
        </div>
      )}

      {openModal && <TestimonialInputModal setOpenModal={setOpenModal} setIsSubmitting={setIsSubmitting} />}
    </div>
  );
}

export default Testimonials;
