import React, { useEffect, useState } from "react";
import mobile from "../assets/mobile.png";
import AllServiceCard from "./AllServiceCard";
import womanImage from "../assets/women-png-img 1.png";
import logo from '../assets/board logo_high 1.png'
const OurService = () => {
  const [allService, setAllService] = useState([]);
  useEffect(() => {
    fetch("allService.json")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
      });
  }, []);
  return (
    <div
      className="max-w-6xl mx-auto my-20 text-white flex  rounded-3xl"
      style={{
        background: "linear-gradient(107.83deg, #001E43 0%, #570169 98.78%)",
      }}
    >
      <div className="w-1/2 relative flex justify-center">
        <img className="w-80  mt-24" src={mobile} alt="Album" />
        <img
          className="absolute bottom-0 left-[6rem] w-[420px] h-[460px]"
          src={womanImage}
          alt=""
        />
        <img className="absolute w-40 top-[170px] " src={logo} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center  ">
        <div className="w-1/2 mt-10">
          <h2 className="card-title text-4xl">Our Services</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 gap-y-14  my-20">
          {allService.map((s, i) => (
            <div className="">
              <AllServiceCard key={i} service={s} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
