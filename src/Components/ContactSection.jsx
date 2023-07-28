import React from "react";
import {
  PiFacebookLogo,
  PiFacebookLogoBold,
  PiFacebookLogoFill,
  PiPhoneCallFill,
} from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import instagram from "../assets/Social/Group 1000001750.png";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import {} from "react-icons/pi";
import line2 from "../assets/line 1.png";

import { CiFacebook } from "react-icons/ci";

const ContactSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-20 relative">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold">Get in Touch with Us</h2>
        <img className="w-36 mb-2" src={line2} alt="" />
        <p className="text-gray-500 text-lg font-semibold mb-12">
          Elevate Your Institute Management and Student Success - Contact Us
          Now!
        </p>
      </div>
      <div
        style={{ boxShadow: "0px 5px 15px 0px #00000059" }}
        className="flex rounded-3xl "
      >
        <div className="w-10/12 py-20 px-20 pb-20">
          <h1 className="font-bold text-4xl">Contact Us</h1>
          <p className="font-semibold text-xl">
            Feel Free to contact us any time. We will get <br /> back to you as
            soon as we can!.
          </p>
          <label class="mt-4 block text-gray-700 text-lg font-semibold " for="username">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className=" border-gray-400 block  border-2 py-3 border-t-0 border-l-0 border-r-0   w-5/12"
          />
          <label class="mt-4 block text-gray-700 text-lg font-semibold " for="username">
            Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            className=" bor border-gray-400 block  border-2 py-3 border-t-0 border-l-0 border-r-0   w-5/12"
          />
          <label class="mt-4 block text-gray-700 text-lg font-semibold " for="username">
           Message
          </label>
          <textarea
            type="tex"
            placeholder="Write your message.."
            className="  border-gray-400 block  border-2 py-3 border-t-0 border-l-0 border-r-0   w-5/12"
          />
        </div>
        <div className="w-2/12 bg-blue-600 h-[43rem] text-white">
          <div className=" rounded-3xl absolute right-0 top-[16rem] bg-[#001E43] py-10 ">
            <div className="mx-20">
              <h2 className="text-2xl my-4 font-semibold">
                Contact Information
              </h2>
              <div className="flex gap-2 my-4 items-center">
                <PiPhoneCallFill className="h-8 w-5" /> <p>+1012 3456 789</p>
              </div>
              <div className="flex gap-2  my-4  items-center">
                <IoMailSharp className="h-8 w-5" />
                <p>demo@gmail.com</p>
              </div>
              <div className="flex gap-2 my-4  items-center">
                <HiLocationMarker className="h-8 w-5" />
                <p>
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United{" "}
                  <br /> States
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-around absolute gap-6 right-6 bottom-20 ">
            <img className="h-8 w-8" src={instagram} alt="" />
            <FaFacebook className="w-8 h-8" />
            <AiFillTwitterCircle className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
