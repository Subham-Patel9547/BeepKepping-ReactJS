import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutBeekeeper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust duration for animations
      once: true, // Ensure animations trigger only once
    });
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center bg-customPink/40 p-5 lg:-10">
      {/* Left Side (Images) */}
      <div
        className="lg:w-1/2 flex flex-col lg:flex-row justify-center items-center gap-5"
        data-aos="fade-right" // AOS fade animation for left side
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center">
          <img
            src="/IMAGES/Graphic-1.png"
            alt="Graphic 1"
            className="w-16 md:w-20 lg:w-24 mb-5 ml-44 hidden md:block "
          />
          <img
            src="/IMAGES/beekeepersWithHoney102.jpg"
            alt="Beekeeper"
            className="w-full max-w-[350px] md:max-w-[800px] lg:max-w-[350px] rounded-2xl "
          />

          <div className="w-96 lg:w-72 px-5 md:px-36 lg:px-8 py-4 lg:py-6 mt-6 inline-block text-end lg:text-right rounded-3xl bg-yellow-950 text-customPink">
            <h5 className="text-3xl text-red-200 font-bold">56+</h5>
            <h5 className="text-2xl text-red-200">Years Experience</h5>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/IMAGES/beekeepersWithHoney101.jpg"
            alt="Beekeeper 2"
            className="w-full rounded-2xl max-w-[350px] md:max-w-[180px] lg:max-w-[400px]"
          />
          <div className="flex lg:gap-3">
            <img
              src="/IMAGES/beekeepersWithHoney.jpg"
              className="rounded-2xl mt-7 max-w-[350px] md:max-w-[300px] lg:max-w-[250px]"
            />

            <img
              src="/IMAGES/Graphic-2.png"
              className="size-16 mt-7 rounded-2xl hidden md:block"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Text Content) */}
      <div
        className="lg:w-1/2 flex flex-col justify-center p-5 md:p-10"
        data-aos="fade-left" // AOS fade animation for right side
        data-aos-duration="1000"
      >
        <p className="px-6 py-2 bg-customPink inline-block rounded-3xl text-sm md:text-base">
          About Beekeeper
        </p>
        <h1 className="text-3xl md:text-5xl text-yellow-950 mt-4 font-bold">
          Experience & Expertise in Beekeeping
        </h1>
        <p className="mt-4 text-sm md:text-lg text-yellow-900">
          Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque
          commodo est sit amet vestibulum sodales curabitur lobortis sapien
          mauris non vestibulum odio pharetra sit amet eu maximus felis semper
          quis.
        </p>

        {/* Feature 1 */}
        <div
          className="mt-6 flex gap-4 p-4 items-center bg-customPink rounded-2xl"
          data-aos="fade-up" // Fade-up effect for features
          data-aos-duration="1000"
        >
          <img
            src="/IMAGES/Icon-1.png"
            alt="icon-1"
            className="w-12 md:w-16 lg:w-20"
          />
          <div>
            <h1 className="text-xl md:text-3xl text-yellow-950 font-bold">
              Passionate Beekeepers
            </h1>
            <p className="text-xs md:text-base text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div
          className="mt-6 flex gap-4 rounded-2xl p-4 items-center border-2 border-customPink"
          data-aos="fade-up" // Fade-up effect for features
          data-aos-duration="1200"
        >
          <img
            src="/IMAGES/Icon-2.png"
            alt="icon-2"
            className="w-12 md:w-16 lg:w-20"
          />
          <div>
            <h1 className="text-xl md:text-3xl text-yellow-950 font-bold">
              Educational Advocates
            </h1>
            <p className="text-xs md:text-base text-slate-900">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBeekeeper;
