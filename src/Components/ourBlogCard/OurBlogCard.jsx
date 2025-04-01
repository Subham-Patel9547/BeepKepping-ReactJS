import React from "react";

const OurBlogCard = ({ img, alt, date, category, title, description }) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-[30%] bg-customPink rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <div className="flex justify-between text-customGreen font-bold text-lg">
          <p>{date}</p>
          <p>{category}</p>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-customGreen">{title}</h1>
        <p className="mt-1 text-base text-gray-800">{description}</p>

        {/* Read More Button */}
        <button className="mt-4 px-4 py-2 bg-customGreen text-white rounded-xl hover:bg-customGreen/90 transition-all duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default OurBlogCard;
