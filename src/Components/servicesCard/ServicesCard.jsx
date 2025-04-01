import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ServicesCard = ({ items, className }) => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animations
      once:true, // Ensure animation happens only once
    });
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row m-2 items-center sm:items-start rounded-2xl ${className}`}
      style={{
        width: "90%", // Mobile: Full width
        maxWidth: "600px", // Prevents cards from becoming too large
        minWidth: "150px", // Ensures minimum size for readability
        flex: "1 1 25%", // Makes sure 4 cards fit in a row
      }}
      data-aos="fade-up" // AOS fade-up animation when card is in view
      data-aos-duration="1000"
    >
      <img
        src={items.icon}
        alt="Service Icon"
        className="w-16 sm:w-20 -mt-2 -ml-3"
      />
      <div className="text-center sm:text-left ml-3">
        <h1 className="text-yellow-900 font-bold text-lg sm:text-2xl">
          {items.title}
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-white">
          {items.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
