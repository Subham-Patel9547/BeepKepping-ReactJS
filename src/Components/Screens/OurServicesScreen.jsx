import React, { useEffect } from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import { servicesData } from "../../../APIs/Api";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animations
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div className="w-full bg-cyan-950 flex flex-col justify-center items-center">
      {/* Overlay Content */}
      <p
        className="text-xl mt-10 sm:text-2xl font-bold bg-customPink text-yellow-900 rounded-3xl px-6 sm:px-20 py-2"
        data-aos="fade-up" // AOS animation for the "Our Services" title
        data-aos-duration="1000"
      >
        Our Services
      </p>
      <h1
        className="mt-5 text-center font-bold text-3xl sm:text-5xl bg-gradient-to-r from-yellow-600 via-green-500 to-yellow-900 bg-clip-text text-transparent"
        data-aos="fade-up" // AOS fade-up animation for heading
        data-aos-duration="1000"
      >
        Educational Workshops on <br className="hidden sm:block" />
        Sustainable Beekeeping
      </h1>

      <div
        className="w-full mt-10 flex flex-col lg:flex-row justify-center items-center py-10"
        data-aos="fade-up" // AOS fade-up animation for the card section
        data-aos-duration="1200"
      >
        {servicesData?.map((items, index) => (
          <ServicesCard
            items={items}
            key={index}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-2xl ${
              index % 2 === 0 ? "bg-customPink" : "border-2 border-customPink"
            }`}
            data-aos="flip-left" // Flip animation for each service card
            data-aos-duration="800"
          />
        ))}
      </div>

      <div className="m-5 w-full flex flex-col lg:flex-row justify-around text-white">
        <h3
          className="text-lg sm:text-xl text-center m-2 bg-yellow-900 px-6 sm:px-10 py-2 rounded-2xl hover:bg-customPink hover:text-cyan-900 transition-colors duration-500 cursor-pointer"
          data-aos="fade-up" // Fade-up animation for the first call to action
          data-aos-duration="1000"
        >
          Beekeeping Service Solutions for Your Business
        </h3>
        <h3
          className="text-lg sm:text-xl text-center m-2 bg-customPink px-6 sm:px-10 py-2 rounded-2xl hover:bg-cyan-200 hover:text-yellow-900 transition-colors duration-500 cursor-pointer"
          data-aos="fade-up" // Fade-up animation for the second call to action
          data-aos-duration="1000"
        >
          Request a Quote for Your Company
        </h3>
      </div>
    </div>
  );
};

export default OurServices;
