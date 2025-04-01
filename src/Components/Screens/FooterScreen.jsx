import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaAngleRight,
} from "react-icons/fa";

const FooterScreen = () => {
  return (
    <div className="w-full bg-customGreen pt-10">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:justify-around px-4">
        {/* Logo Section */}
        <div className="w-full lg:w-1/4 m-2 text-center lg:text-left">
          <img
            src="/IMAGES/Logo-4.png"
            alt="logo-4"
            className="bg-white rounded-2xl mx-auto lg:mx-0"
          />
          <p className="text-white my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* social media icon */}
          <div className="mt-10 flex gap-5 justify-center lg:justify-start items-center">
            <SocialIcon Icon={FaFacebook} />
            <SocialIcon Icon={FaTwitter} />
            <SocialIcon Icon={FaYoutube} />
            <SocialIcon Icon={FaLinkedinIn} />
            <SocialIcon Icon={FaInstagram} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full lg:w-1/4 m-2 text-center lg:text-left">
          <h1 className="my-2 font-bold text-3xl text-customPink border-b-2 border-customPink h-12">
            Quick Links
          </h1>
          <div className="flex flex-col gap-3 font-bold items-center lg:items-start text-xl text-white">
            <LinkItem text="About Us" />
            <LinkItem text="Services" />
            <LinkItem text="Blog" />
            <LinkItem text="Pricing Plan" />
            <LinkItem text="FAQ" />
          </div>
        </div>

        {/* Our Services */}
        <div className="w-full lg:w-1/4 m-2 text-center lg:text-left">
          <h1 className="my-2 font-bold text-3xl text-customPink border-b-2 border-customPink h-12">
            Our Services
          </h1>
          <div className="flex flex-col gap-3  items-center lg:items-start font-bold text-xl text-white">
            <LinkItem text="Swarm Removal" />
            <LinkItem text="Harvesting" />
            <LinkItem text="Specialization" />
            <LinkItem text="Workshop" />
            <LinkItem text="Home Delivery" />
            <LinkItem text="Honey Treatment" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/4 m-2 text-center lg:text-left">
          <h1 className="my-2 font-bold text-3xl text-customPink border-b-2 border-customPink h-12">
            Contact Info
          </h1>
          <div className="flex flex-col gap-5 text-white">
            <p>
              Lorem ipsum dolor sit amet, co adipiscing elit ut elit tellus
              luctus nec.
            </p>
            <div className="font-bold hover:text-customPink transition-colors duration-300">
              <h3>Pekanbaru, Indonesia, 99 Roving St., Big City, PKU 23456</h3>
              <h3>Call Us: 7266896432</h3>
              <h3 className="mt-3">We are open from Monday to Friday</h3>
              <h3>09:00 AM-07:00 PM</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 py-5 px-4 sm:px-6 lg:px-8 text-center sm:text-center text-customGreen text-sm sm:text-base lg:text-xl bg-customPink">
        Copyright © 2024 Rometheme. All Rights Reserved.
      </div>
    </div>
  );
};

export default FooterScreen;

const LinkItem = ({ text }) => {
  return (
    <Link className="flex items-center mt-3 gap-2 text-lg text-center lg:text-left hover:text-customPink transition-colors duration-300">
      <FaAngleRight className="text-customPink" /> {text}
    </Link>
  );
};

const SocialIcon = ({ Icon }) => {
  return (
    <Icon className="text-3xl text-customPink hover:translate-y-[-10px] transition-all duration-300" />
  );
};
