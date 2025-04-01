import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const TypeofBeeCard = ({ icon, name, description, className }) => {
  return (
    <div
      className={`w-full sm:w-[80%] md:flex-[48%] lg:flex-[24%]  flex flex-col justify-center items-center rounded-3xl shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg ${className}`}
    >
      <img
        src={icon}
        alt="Bee Icon"
        className="w-24 h-24 transition-all duration-300 transform hover:scale-110"  // Added scale on hover
      />
      <h1 className="text-customGreen text-2xl md:text-3xl font-bold text-center mt-3">
        {name}
      </h1>
      <p className="text-lg md:text-xl text-center mt-4 text-gray-700">
        {description}
      </p>
      <div className="flex justify-center items-center p-2 cursor-pointer">
        <p className="text-lg md:text-xl font-mono">Read More</p>
        <IoIosArrowDroprightCircle className="ml-2 size-6" />
      </div>
    </div>
  );
};

export default TypeofBeeCard;
