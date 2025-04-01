import React from "react";
import { FaShippingFast, FaHome } from "react-icons/fa";

const DeliveryScreenCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-center px-4" data-aos="fade-up">
      {/* Icon */}
      <div className="text-6xl md:text-7xl text-customPink">
        {React.createElement(icon)}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mt-4">{title}</h1>

      {/* Description */}
      <p className="text-base md:text-l mt-3">{description}</p>
    </div>
  );
};

export default DeliveryScreenCard;
