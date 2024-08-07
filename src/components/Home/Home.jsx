import React, { useRef } from "react";
import eyeMask from "./images/eye-mask.svg";
import { CarouselDefault } from "./CarouselDefault";
import ServiceCard from "./ServiceCard";
import IMAGES from "./images/index";
import "./HomeCustomCSS.css";
import { Link } from "react-router-dom";
import AboutImg from "./images/about-img.jpeg";
import FeedbackCard from "./FeedbackCard";
import useSWR from "swr";
import Loader from "../Loader/Loader";
import SwatiPic from './images/swati-pic.jpeg'
import { motion } from "framer-motion";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Home() {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND_URL}/testimonials`,
    fetcher
  );

  const scrollContainer = document.querySelector(".container");
  const containerRef = useRef();

  return (
    <div className="">
      {/* Adjust margin-top to prevent overlap */}
      <div className="h-screen -mt-20 bg-[#DFF7F9] flex flex-col-reverse px-[5%] lg:flex-row justify-center items-center" id="home-home-sec-1">
        <div className="text-center lg:text-left">
          <motion.p
            className="text-[#017F84] text-4xl lg:text-7xl font-semibold mb-4 lg:mb-10"
            id="home-home-sec-1-title"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            Welcome to eNetraCare
          </motion.p>
          <motion.p
            className="text-[#017F84] text-3xl lg:text-6xl font-medium mb-1"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            Your trusted
          </motion.p>
          <motion.p
            className="text-[#017F84] text-3xl lg:text-6xl font-medium mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            Eye Care Center
          </motion.p>
          <motion.button
            className="bg-[#017F84] mt-6 lg:mt-14 text-white py-2 px-4 text-base lg:text-xl font-light rounded-full"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            Get in touch →
          </motion.button>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          <img src={eyeMask} alt="eye-mask" className="w-auto" />
        </motion.div>
      </div>
      {/* home-sec-1 ends */}

      <div className="divider px-8 bg-[#FFF] h-0 m-0 p-0 text-[#017F84] divider-success"></div>

      {/* home-sec-2 starts */}
      <div>
        <div className="flex items-center justify-center bg-[#FFFFFF]">
          <h1
            className="text-6xl text-center text-[#017F84] py-10"
            id="home-sec-2-title"
          >
            {" "}
            Eye Care Par Excellence
          </h1>
        </div>
        <div className="h-2/5 flex justify-center items-center">
          <CarouselDefault />
        </div>
      </div>
      {/* home-sec-2 ends */}

      {/* home-sec-3 starts */}
      <div
        className="flex items-center justify-center bg-white px-24 py-32 gap-16"
        id="home-sec-3"
      >
        <div className="w-3/5" id="home-sec-3-text">
          <h1 className="text-5xl text-[#017F84] py-2" id="home-sec-3-title">
            About eNetraCare
          </h1>
          <p className="text-xl text-black">
            eNetraCare by{" "}
            <Link to="/contact-us" style={{ color: "#017F84" }}>
              {" "}
              Innovease India Private Limited
            </Link>{" "}
            offers an affordable, portable eye care solution that brings vision
            testing and cataract screening to patients' doorsteps. Using a
            mobile app integrated with an AI-based Software, We address
            challenges like transportation, healthcare worker availability and
            data precision, focusing on underserved rural and slum areas in
            India.black
          </p>
        </div>

        <div id="home-sec-3-img">
          <motion.img
            src={AboutImg}
            className="max-h-[48vh] rounded-md hover:scale-110 hover:duration-300 shadow-xl"
            id="intro-img"
            alt="about-img.jpg"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          />
        </div>
      </div>
      {/* home-sec-3 ends */}

      {/* home-sec-4 starts */}
      <div
        className=" bg-[#DFF7F9] flex flex-col items-center p-20"
        id="home-sec-4"
      >
        <h1 className="text-5xl text-[#017F84]" id="home-sec-4-title">
          Our Services
        </h1>

        <div className="divider mx-20 divider-success mt-0"></div>

        <div id="service-home-box" className="container-wrap">
          <div
            className="container grid bg-white grid-cols-3 gap-8"
            id="service-home-container"
          >
            <motion.div className="service-card-box" initial="hidden" animate="visible" variants={fadeInVariants}>
              <ServiceCard
                img={IMAGES.serviceImg}
                text="Rural-to-Rural Cataract Screening"
              />
            </motion.div>
            <motion.div className="service-card-box" initial="hidden" animate="visible" variants={fadeInVariants}>
              <ServiceCard
                img={IMAGES.eyeImg}
                text="Immediate Cataract Health Status"
              />
            </motion.div>
            <motion.div className="service-card-box" initial="hidden" animate="visible" variants={fadeInVariants}>
              <ServiceCard
                img={IMAGES.prodImg}
                text="Quick, Sharp Eye Imaging for Cataracts"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* home-sec-4 ends */}

      {/* home-sec-5 starts  */}
      <div
        className="flex items-center justify-around pb-40 pt-10 bg-white"
        id="home-sec-5"
      >
        <div className="founder-left w-2/5 relative">
          <div id="founder-msg">
            <h1 className="text-5xl text-[#017F84]" id="home-sec-5-title">
              <span className="text-8xl font-customFont inv-comma">
                &#8220;
              </span>
              Founder's Message
            </h1>
            <p className="text-lg text-[#017F84] p-3 inline-block">
              Innovease India Pvt Ltd. is dedicated to providing equitable and
              accessible eye care to underserved communities in India and
              worldwide. I am personally driven by my desire to help people
              reach their full vision potential, especially Cataract related
              blindness. We have a team of passionate and skilled professionals
              who share our vision of transforming lives through better eye care
              opportunities and removing reversible blindness. We work
              successfully expanding our reach, impact, and partnerships,
              leveraging our expertise in medical device development, and
              providing eye care to the underprivileged in the most inaccessible
              area. There is a myriad of ways to join our mission and we are
              open to collaborate with any organisation and individual who
              shares our vision and mission.
              <span className="text-2xl font-bold font-customFont rotate-180 ">
                &#8221;
              </span>
            </p>
          </div>
          <div id="founder-name " className="text-end text-xl my-3">
            <p>- Dr. Swati Tomar </p>
            <p className="italic text-sm">
              Cofounder and Director, Innovease India Private Limited
            </p>
          </div>
        </div>
        <motion.div className="founder-right" initial="hidden" animate="visible" variants={fadeInVariants}>
          <img src={IMAGES.swati} className="max-h-[400px] h-auto" />
        </motion.div>
      </div>
      {/* home-sec-5 ends */}

      {/* home-sec-6 starts */}
      <div className="flex bg-[#DFF7F9] flex-col px-4 py-8" id="home-sec-6">
        <h1
          className="text-5xl text-[#017F84] py-6 text-center"
          id="home-sec-6-title"
        >
          Patient feedback{" "}
        </h1>

        {isLoading && <Loader style={""} />}
        {!isLoading && error && (
          <div className="text-center py-10">Something went wrong</div>
        )}

        {!isLoading && !error && (
          <div className="text-center md:text-right">
            <Link
              to="/testimonials"
              className="text-lg  hidden md:block mr-20  text-[#017F84] hover:underline"
            >
              + See more{" "}
            </Link>
            <div className="container-wrap">
              <div
                className="container"
                onWheel={(e) => {
                  e.preventDefault();
                  scrollContainer.scrollLeft += e.deltaY;
                  scrollContainer.style.scrollBehavior = "smooth";
                }}
                ref={containerRef}
              >
                {data.data.length &&
                  data.data.map((feedback, index) => (
                    <FeedbackCard
                      key={index}
                      feedBackText={feedback.content}
                      name={feedback.patientName}
                      patientImage={feedback.patientImage}
                    />
                  ))}
              </div>
            </div>
            <Link
              to="/testimonials"
              className="text-lg md:hidden  text-[#017F84] hover:underline"
            >
              + See more{" "}
            </Link>
          </div>
        )}
      </div>
      {/* home-sec-6 ends */}
    </div>
  );
}

export default Home;
