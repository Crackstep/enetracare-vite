import React, { useState } from "react";
import Loader from "../Loader/Loader";
import useSWR, { mutate } from "swr";
import NewsInputModal from "./NewsInputModal";
import { LucidePlus, LucideTrash, LucideEdit } from "lucide-react";
import { useAuth } from "../../context/AuthProvider";
import axios from "axios";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { role } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/news`,
    fetcher
  );

  const handleEdit = (id) => {
    console.log(`Editing news with ID: ${id}`);
  };

  const handleDelete = async (id) => {
    setIsSubmitting(true);
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/news/delete/${id}`, {
        withCredentials: true
      });
      mutate(`${import.meta.env.VITE_BACKEND_URL}/news`);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  if (error) return <div className="mx-[7%] px-4 py-8 min-h-screen">failed to load</div>;

  return (
    <div className="mx-[7%] px-4 py-8 min-h-screen relative">
      <div className="text-[#017F84] text-4xl lg:text-7xl font-semibold mb-10 text-center">
        News Section
      </div>
      {!isLoading && data?.data.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.data.map((article, index) => {
            const date = new Date(article.createdAt);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
            const year = date.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg ${
                  !article.title ? "hidden" : ""
                } shadow-md overflow-hidden relative`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-2xl font-bold text-black mb-2">
                    {article.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-500 text-sm">
                      <span className="font-semibold">Date:</span>{" "}
                      {formattedDate}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                  {role === "admin" && (
                    <div className="absolute top-2 right-2 flex items-center space-x-4">
                      <div className="relative">
                        <button
                          className="text-gray-500 hover:text-blue-500 focus:outline-none"
                          onClick={() => handleEdit(article._id)}
                        >
                          <div className="bg-gray-200 rounded-full p-1">
                            <LucideEdit className="h-6 w-6" />
                          </div>
                        </button>
                      </div>
                      <div className="relative">
                        <button
                          className="text-gray-500 hover:text-red-500 focus:outline-none"
                          onClick={() => handleDelete(article._id)}
                        >
                          <div className="bg-gray-200 rounded-full p-1">
                            <LucideTrash className="h-6 w-6" />
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {role === "admin" && (
        <button
          className={`fixed bottom-10 right-10 bg-white p-4 rounded-full shadow-lg text-[#017F98] ${
            isSubmitting ? "border-4 border-gray-300 animate-spin" : ""
          }`}
          onClick={() => setOpenModal(true)}
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

      {isLoading && <Loader style={"lg:mt-[15rem] md:mt-[10rem]"} />}

      {openModal && (
        <NewsInputModal
          setOpenModal={setOpenModal}
          setIsSubmitting={setIsSubmitting}
        />
      )}
    </div>
  );
}

export default App;
