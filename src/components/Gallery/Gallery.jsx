import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { LucidePlus, LucideTrash, LucideEdit } from "lucide-react";
import Cookies from "js-cookie";
import Loader from "../Loader/Loader";
import "./GalleryCustomCSS.css";
import { useAuth } from "../../context/AuthProvider";
import GalleryInputModal from "./GalleryInputModal";
import EditGalleryModal from "./EditGalleryModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Gallery() {
  const { role } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [gallery, setGallery] = useState({});
  const [visibility, setVisibility] = useState("hidden");
  const [id, setId] = useState(null);

  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/gallery`,
    fetcher
  );

  const handleEditModal = (image) => {
    setGallery(image);
    setOpenUpdateModal(true);
  };

  const handleDelete = async (id) => {
    try {
      setIsSubmitting(true);
      const token = Cookies.get("accessToken");
      console.log(token);
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/gallery/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      mutate(`${import.meta.env.VITE_BACKEND_URL}/gallery`);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  if (error)
    return <div className="mx-[7%] px-4 py-8 min-h-screen">Failed to load</div>;

  return (
    <div className="relative min-h-screen text-[#017f83]">
      <h2 className="text-center text-4xl py-4">Our Gallery</h2>
      {!isLoading && data?.data?.length ? (
        <div className="grid grid-cols-3 gap-8 p-4 mx-auto">
          {data.data.map((image, index) => (
            <div key={index} className="relative">
              <GalleryCard image={image} />
              {role === "admin" && (
                <div className="flex gap-2 justify-center mt-2">
                  <button
                    className="text-gray-500 hover:text-blue-500 focus:outline-none"
                    onClick={() => handleEditModal(image)}
                  >
                    <div className="bg-gray-200 rounded-full p-2">
                      <LucideEdit className="h-5 w-5" />
                    </div>
                  </button>
                  <button
                    className="text-gray-500 hover:text-red-500 focus:outline-none"
                    onClick={() => {
                      setVisibility("block");
                      setId(image._id);
                    }}
                  >
                    <div className="bg-gray-200 rounded-full p-2">
                      <LucideTrash className="h-5 w-5" />
                    </div>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        !isLoading && <div className="text-center text-gray-500">No gallery items available</div>
      )}

      {role === "admin" && (
        <button
          className={`fixed bottom-10 right-10 bg-[#017F84] text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-[#015f64] ${
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

      {isLoading && <Loader style={"lg:mt-[15rem] md:mt-[10rem]"} />}
      {!isLoading && error && (
        <div className="text-3xl text-center lg:mt-[15rem] md:mt-[10rem]">
          Some error occurred
        </div>
      )}

      {openModal && (
        <GalleryInputModal
          setOpenModal={setOpenModal}
          setIsSubmitting={setIsSubmitting}
        />
      )}

      {openUpdateModal && (
        <EditGalleryModal
          setOpenUpdateModal={setOpenUpdateModal}
          setIsSubmitting={setIsSubmitting}
          galleryItem={gallery}
        />
      )}

      <DeleteModal onDelete={() => handleDelete(id)} visibility={visibility} setVisibility={setVisibility} />
    </div>
  );
}

export default Gallery;
