import React from "react";

const NewsletterSignUp = () => {
  return (
    <div className="w-full flex flex-col gap-10 lg:flex-row justify-center items-center bg-customPink py-10 px-4">
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <img
          src="/IMAGES/honey-with-honeycombs.png"
          alt="Honey with Honeycombs"
          className="w-full max-w-xs lg:max-w-full"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="font-bold text-3xl mb-2 text-customGreen text-center lg:text-left">
          Newsletter Sign Up
        </h1>

        <p className="my-2 text-gray-900 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
          commodo est sit amet vestibulum sodales curabitur lobortis sapien
          mauris non vestibulum odio pharetra sit amet eu maximus felis semper
          quis.
        </p>
        <p className="text-gray-900 text-center lg:text-left">
          est sit amet vestibulum sodales curabitur lobortis sapien mauris non
          vestibulum odio pharetra sit amet eu maximus felis semper quis.
        </p>

        <div className="my-3">
          <h1 className="text-3xl font-bold text-customGreen text-center lg:text-left">
            Subscribe Our Newsletter
          </h1>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-center">
            <input
              type="text"
              className="w-full lg:w-[70%] placeholder-customGreen text-customGreen xl:w-1/2 h-12 my-3 rounded-2xl sm:rounded-2xl bg-customPink/35 border-2 border-customGreen outline-0 px-2"
              placeholder="Enter your email"
            />
            <button className="h-12 w-full lg:w-1/3 font-bold text-customPink bg-customGreen rounded-2xl sm:rounded-2xl border-2 border-customGreen hover:bg-customPink hover:text-customGreen hover:border-customPink mt-3 lg:mt-0 lg:ml-4">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignUp;
