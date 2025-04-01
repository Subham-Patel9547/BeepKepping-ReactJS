import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const HomeScreen = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="h-screen w-full relative mt-16 flex flex-col bg-sky-950 lg:flex-row items-center justify-center overflow-hidden">
      {/* Image Section */}
      {/* <img
        src="/IMAGES/homeBackground.jpg"
        alt="Home Illustration"
        className="absolute  w-full h-screen "
      /> */}

      <div className="relative flex flex-col lg:flex-row items-center w-full">
        {/* Beekeeping Enthusiasts section */}
        <div
          className="text-white w-full lg:w-1/2 h-auto text-center lg:text-left"
          data-aos="fade-right" // AOS animation on this section
          data-aos-duration="1000"
        >
          <div className="py-10 px-5">
            <div className="mb-5">
              <h2 className="bg-customPink rounded-2xl px-7 py-1 inline">
                Welcome to Beekeeper
              </h2>
            </div>
            <div className="mb-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-black bg-gradient-to-r from-green-100 via-green-300 to-purple-500 bg-clip-text text-transparent">
                Ultimate Resource for Beekeeping Enthusiasts
              </h1>
            </div>
            <div>
              <h2 className=" font-bold text-lg sm:text-xl">
                Discover the fascinating world of beekeeping and learn how you
                can get involved in this rewarding hobby, whether you’re a
                seasoned beekeeper or just starting out.
              </h2>
            </div>

            <div className="mt-7 sm:mt-7 flex flex-col sm:flex-row gap-5 sm:gap-7 justify-center lg:justify-start">
              <Link
                to="/learn-more"
                className="bg-yellow-200 text-yellow-950 hover:text-yellow-200 hover:bg-yellow-950 transition-colors duration-500 cursor-pointer px-8 sm:px-10 py-3 rounded-full font-bold text-lg"
                data-aos="zoom-in" // Zoom-in animation for this button
                data-aos-duration="1000"
              >
                Learn More
              </Link>{" "}
              <Link
                to="/contact-us"
                className="border-2 border-yellow-950 hover:text-yellow-200 hover:bg-yellow-950 transition-colors duration-500 cursor-pointer px-8 sm:px-10 py-3 rounded-full font-bold text-lg"
                data-aos="zoom-in" // Zoom-in animation for this button
                data-aos-duration="1200"
              >
                Contact Us
              </Link>{" "}
            </div>
          </div>
        </div>

        {/* Beekeepers image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-12"
          data-aos="fade-left" // AOS animation on this section
          data-aos-duration="1200"
        >
          <img
            src="IMAGES/beekeepers.png"
            alt="beekeepers image"
            className="drop-shadow-xl w-10/12 sm:w-2/3 md:w-1/2 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
