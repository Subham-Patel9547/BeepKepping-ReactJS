import React, { useState, useEffect } from "react";

const FeedBackCard = ({ feedBackData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(
    "opacity-100 translate-x-0"
  );

  useEffect(() => {
    if (!feedBackData || feedBackData.length === 0) return;

    const interval = setInterval(() => {
      setSlideDirection("opacity-0 -translate-x-full"); // Fade-out and slide

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedBackData.length);
        setSlideDirection("opacity-100 translate-x-0"); // Fade-in effect
      }, 500); // Smooth transition duration
    }, 3000); // Change feedback every 3 seconds

    return () => clearInterval(interval);
  }, [feedBackData]);

  if (!feedBackData || feedBackData.length === 0) {
    return <p className="text-center text-gray-600">Loading feedback...</p>;
  }

  const { name, profileImage, profession, feedback } =
    feedBackData[currentIndex];

  return (
    <div className="mt-10 w-full max-w-2xl mx-auto overflow-hidden px-4">
      {/* Feedback Text */}
      <div
        className={`transition-all duration-500 text-center sm:text-left ${slideDirection}`}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-8 sm:leading-10">
          {feedback}
        </h1>
      </div>

      {/* Profile Section */}
      <div
        className={`flex  sm:flex-row items-center gap-5 mt-5 transition-all duration-500 ${slideDirection}`}
      >
        {/* Profile Image */}
        <div className="border-4 sm:border-8 border-yellow-950 rounded-full ">
          <img
            src={profileImage}
            alt={name}
            className="w-14 sm:w-16 md:w-20 h-auto rounded-full"
          />
        </div>

        {/* User Info */}
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-lg sm:text-2xl text-yellow-950">
            {name}
          </h1>
          <h3 className="font-medium text-sm sm:text-base">{profession}</h3>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
