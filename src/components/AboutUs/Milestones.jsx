import React from "react";
import MSEventLeft from "./MSEventLeft";
import MSEventRight from "./MSEventRight";
import InputModal from "./InputModal";
import useSWR from "swr";
import Loader from "../Loader/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

let count = 0;

function Milestones() {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/milestones`,
    fetcher
  );

  const createEventLeft = (text) => {
    const element = document.createElement("div");
    element.className = "mt-6";
    element.innerHTML = `<div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-start w-full mx-auto items-center">
                    <div class="w-1/2 pr-8">
                        <div class="p-4 bg-white rounded shadow animation">
                           ${text}
                        </div>
                    </div>
                </div>
                <div class="rounded-full bg-[#017F98] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            </div>`;

    return element;
  };
  const createEventRight = (text) => {
    const element = document.createElement("div");
    element.className = "mt-6";
    element.innerHTML = `<div class="flex flex-col sm:flex-row items-center text-white">
                <div class="flex justify-end w-full mx-auto items-center">
                    <div class="w-1/2  pl-8">
                        <div class="p-4 bg-white rounded shadow animation bg-opacity-40">
                            ${text}
                        </div>
                    </div>
                </div>
                <div class="rounded-full bg-[#017F98] border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <i class="fa-solid fa-circle text-white"></i>
                </div>
            </div>`;

    return element;
  };
  return (
    <div className="relative min-h-screen bg-[#017F98] flex flex-col py-10 ">
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
                return (<MSEventRight text={milestone.milestoneText} />)
              }
              else {
                return (<MSEventLeft text={milestone.milestoneText} />)
              }
            })}

        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            // let element = count % 2 == 0 ? createEventLeft('HelloTextblah blah lkfrfri') : createEventRight('HellowTextblah blah lkfrfri')
            // count++;
            // console.log(count)
            // document.getElementById('events-container').appendChild(element)
            // console.log(document.getElementById('events-container'))
            // element.innerText = 'Hellow'
            document.getElementById("input-modal").style.display = "block";
            console.log("block");
          }}
          className="bg-white text-[#017f83] w-28 p-1 rounded-sm"
        >
          Add Event
        </button>
      </div>

      <div id="input-modal" className="hidden">
        <InputModal />
      </div>
    </div>
  );
}

export default Milestones;
