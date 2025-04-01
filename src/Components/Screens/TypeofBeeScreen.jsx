import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeofBeeCard from "../typeofBeeCard/TypeofBeeCard";
import { beeSpecies } from "../../../APIs/Api";

const TypeofBeeScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Trigger animation only once
    });
  }, []);

  return (
    <div className="w-full bg-customPink py-10 px-5">
      {/* Header Section */}
      <div className="w-full flex flex-wrap justify-between items-center gap-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="px-6 py-2 bg-customGreen text-white rounded-2xl inline-block">
            Type of Bee
          </p>
          <h1 className="mt-5 text-4xl md:text-5xl font-bold">
            Maintaining Your Colony To Produce Honey
          </h1>
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo est sit amet vestibulum sodales. Curabitur lobortis sapien mauris non vestibulum odio pharetra sit amet.
          </p>
        </div>
      </div>

      {/* Bee Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {beeSpecies.map((item, index) => (
          <TypeofBeeCard
            key={index}
            icon={item.icon}
            name={item.name}
            description={item.description}
            className={`w-full sm:w-[80%] md:flex-[48%] lg:flex-[30%] p-6 rounded-3xl shadow-md ${
              index % 2 === 0 ? "bg-customPink" : "border-2 border-customGreen"
            }`}
            data-aos="fade-up"  // Added AOS fade-up animation
          />
        ))}
      </div>
    </div>
  );
};

export default TypeofBeeScreen;
