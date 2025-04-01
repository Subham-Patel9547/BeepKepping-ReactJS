import React from "react";

const StatsDataCard = ({ item }) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-b-2 px-4 py-5 m-3 border-customGreen rounded-2xl text-center w-full"
      style={{ width: "270px", maxWidth: "90%", minWidth: "270px" }}
      data-aos="flip-left" // Added AOS animation
    >
      <div className="flex items-center">
        <h1 className="text-6xl font-bold sm:text-7xl md:text-8xl text-customGreen">
          {item.number}
        </h1>
        <h1 className="text-2xl font-bold sm:text-5xl md:text-6xl -mt-9 text-yellow-900">+</h1>
      </div>
      <h1 className="text-lg font-bold sm:text-xl md:text-2xl text-customGreen mt-2">
        {item.label}
      </h1>
    </div>
  );
};

export default StatsDataCard;
