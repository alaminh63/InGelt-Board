import React from "react";

const AllServiceCard = ({ service }) => {
  const { image, title, description1, subDescription, description2, bg_image } =
    service;
  return (
    <div>
      <div className=" flex flex-col pt-10 pl-6 w-56 h-48  border border-[#F5FBF270] relative border-gray-200 rounded-3xl">
        <div className="bg-white p-4 rounded-2xl absolute top-[-35px]">
          <img className="h-8" src={image} alt="" />
        </div>
        <h2 className="text-lg  font-semibold mb-3">{title}</h2>

        <li className="text-xs">{description1}</li>
        <p className="ml-4 text-xs">{subDescription}</p>

        <li className="text-xs">{description2}</li>

        <img className="absolute w-40 top-0 right-0" src={bg_image} alt="" />
      </div>
    </div>
  );
};

export default AllServiceCard;
