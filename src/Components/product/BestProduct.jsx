import React, { useEffect } from "react";
import ProductCards from "./ProductCards";
import { bestProducts } from "../../../APIs/Api";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const BestProduct = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="h-auto flex flex-col items-center px-4 bg-gradient-to-r from-green-950 to-green-800">
      {/* Header Section */}
      <div className="mt-10 w-full sm:w-2/4 text-center">
        <h2 className="px-10 py-1 bg-customPink rounded-2xl font-bold text-center inline">
          ...The Best Product...
        </h2>
        <h1 className="text-white text-4xl sm:text-5xl font-bold font-sans mt-10">
          Our Best Product
        </h1>
        <h3 className="text-customPink text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus,
          <br className="hidden sm:block" /> luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </h3>
      </div>

      {/* Best Product Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
        {bestProducts.map((item, index) => {
          return (
            <ProductCards
              item={item}
              key={index}
              data-aos="fade-up" // AOS animation for each card
              data-aos-duration="1000"
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestProduct;
