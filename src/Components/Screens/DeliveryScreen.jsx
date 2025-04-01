import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DeliveryScreenCard from "../deliveryScreenCard/DeliveryScreenCard";
import { services } from "../../../APIs/Api";

const DeliveryScreen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration
      once: true,      // Trigger animation only once
    });
  }, []);

  return (
    <div className="w-full bg-customGreen flex flex-wrap justify-center items-center gap-10 py-10 px-4">
      {/* Left Card */}
      <div className="w-full md:w-1/3 lg:w-1/4" data-aos="fade-up">
        <DeliveryScreenCard
          icon={services[0].icon}
          title={services[0].title}
          description={services[0].description}
        />
      </div>

      {/* Center Content */}
      <div className="w-full md:w-2/3 lg:w-1/3 text-center" data-aos="zoom-in">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Fresh from the Hive to Your Home Delivery
        </h1>
        <img
          src="/IMAGES/Van-Mock-up.png"
          alt="Van-Mock-up"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] mx-auto mt-6 transition-all duration-300 transform hover:translate-x-4"
        />
      </div>

      {/* Right Card */}
      <div className="w-full md:w-1/3 lg:w-1/4" data-aos="fade-up">
        <DeliveryScreenCard
          icon={services[1].icon}
          title={services[1].title}
          description={services[1].description}
        />
      </div>
    </div>
  );
};

export default DeliveryScreen;
