import React, { useEffect } from "react";
import FeedBackCard from "../FeedBack/FeedBackCard";
import { FeedBackData } from "../../../APIs/Api";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const FeedBackScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animations
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div className="h-auto w-full flex flex-col lg:flex-row items-center pt-5 px-5 bg-customPink">
      {/* FeedBack Section */}
      <div
        className="w-full lg:w-8/12 p-4"
        data-aos="fade-right" // AOS fade-right animation for feedback section
        data-aos-duration="1000"
      >
        <FeedBackCard feedBackData={FeedBackData} />
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-4/12 flex justify-center mt-5 lg:mt-0"
        data-aos="fade-left" // AOS fade-left animation for image section
        data-aos-duration="1000"
      >
        <img
          src="/IMAGES/beekeeper-with-honey.png"
          alt="beekeeper-with-honey"
          className="w-60 sm:w-96 md:w-96 h-auto"
        />
      </div>
    </div>
  );
};

export default FeedBackScreen;
