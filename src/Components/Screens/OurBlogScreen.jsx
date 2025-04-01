import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurBlogCard from "../ourBlogCard/OurBlogCard";
import { blogData } from "../../../APIs/Api";

const OurBlogScreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full py-10 flex flex-col items-center bg-customGreen/80">
      <div className="text-center">
        <p className="px-4 py-2 font-bold rounded-2xl bg-customPink inline-block">
          Our Blog
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-customPink/60">
          The Latest News
        </h1>
      </div>

      <div className="w-full mt-5 flex flex-wrap justify-center gap-10 px-4 md:px-10">
        {blogData.map((item, index) => (
          <OurBlogCard
            key={index}
            img={item.img}
            alt={item.alt}
            date={item.date}
            category={item.category}
            title={item.title}
            description={item.description}
            data-aos="fade-up"
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlogScreen;
