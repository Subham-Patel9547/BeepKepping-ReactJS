import React from "react";

const ProductCards = (props) => {
  return (
    <div
      className="w-full sm:w-1/2 lg:w-1/4 m-5 pb-3 bg-green-950 text-white rounded-2xl shadow-black shadow-md hover:shadow-xl transition-shadow duration-300"
      data-aos="zoom-in" // AOS animation for zoom-in effect
      data-aos-duration="800"
    >
      {/* Product Image */}
      <div className="h-64 overflow-hidden rounded-t-2xl">
        <img src={props.item.imageUrl} className="h-full w-full object-cover" />
      </div>

      {/* Product Details */}
      <div>
        <div className="px-1">
          <h1 className="mt-2 font-bold text-xl md:text-2xl">
            {props.item.name}
          </h1>
          <h3 className="mt-3 text-sm md:text-base">
            {props.item.description}
          </h3>

          {/* Price Button */}
          <h2 className="mt-5 inline-block px-5 py-2 rounded-2xl bg-yellow-200 text-yellow-950 hover:text-yellow-200 hover:bg-yellow-950 transition-colors duration-500 cursor-pointer">
            $ {props.item.price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
