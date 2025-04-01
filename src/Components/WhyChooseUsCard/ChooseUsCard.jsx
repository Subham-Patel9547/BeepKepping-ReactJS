import React from "react";

const ChooseUsCard = ({ items, className }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row w-full sm:w-56 items-center rounded-2xl px-2 gap-2 py-5 m-3 shadow-lg hover:bg-customPink transition duration-300 ease-in-out ${className}`}
      data-aos="fade-up" // Added AOS animation
    >
      <img
        src={items.icon}
        alt={items.title}
        className="w-16 h-16 object-contain"
      />
      <h1 className="font-bold text-lg sm:text-xl text-center sm:text-left">
        {items.title}
      </h1>
    </div>
  );
};

export default ChooseUsCard;
