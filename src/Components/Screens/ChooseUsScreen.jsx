import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ChooseUsCard from "../WhyChooseUsCard/ChooseUsCard";
import { beekeepingServices, statsData } from "../../../APIs/Api";
import StatsDataCard from "../WhyChooseUsCard/StatsDataCard";

const ChooseUsScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full bg-customPink/45 lg:py-10">
      <div className="w-full flex flex-wrap justify-center sm:justify-between items-center px-4 sm:px-10">
        {/* Image Section */}
        <div className="relative w-full sm:w-1/2 flex justify-center mt-28">
          {/* First Image (Base Image) */}
          <img
            src="/IMAGES/honeycomb-with-pollen.png"
            alt="honeycomb-with-pollen"
            className="object-contain"
          />

          {/* Second Image (Overlaid on Top-Left) */}
          <img
            src="/IMAGES/goldsealart.png"
            alt="goldsealart"
            className="absolute -top-2 left-10 md:-mt-10 w-28 sm:w-36 lg:w-44"
          />
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left px-4 sm:px-8 mt-10 sm:mt-0">
          <h2 className="px-6 py-1 bg-customPink text-center rounded-3xl font-bold text-yellow-900">
            Why Choose Us?
          </h2>
          <h1 className="mt-5 text-4xl font-bold">
            Trusted Source for Premium Honey Products
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We provide high-quality, sustainable beekeeping solutions designed
            to support both new and experienced beekeepers. Our mission is to
            promote eco-friendly practices that enhance honey production.
          </p>

          {/* Services Section */}
          <div className="flex flex-wrap justify-center items-center w-full">
            {beekeepingServices?.length > 0 ? (
              beekeepingServices.map((item, index) => (
                <ChooseUsCard
                  items={item}
                  key={index}
                  className={`${
                    [0, 3].includes(index)
                      ? "bg-customPink"
                      : "border-2 border-customPink"
                  }`}
                  data-aos="fade-up" // Added AOS animation
                />
              ))
            ) : (
              <p className="text-red-500">No services available.</p>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 w-full flex flex-wrap justify-center items-center sm:justify-around">
          {statsData.map((item, index) => {
            return (
              <StatsDataCard
                item={item}
                key={index}
                data-aos="flip-left" // Added AOS animation
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseUsScreen;
