import React from "react";

const SingleService = ({ service }) => {
  const { image, title, description, bg_image } = service;
  return (
    <div>
      <div className="card  bg-[#0D1948]  text-neutral-content rounded-3xl">
        <div className="card-body items-center text-center">
          <div className="bg-white p-4 rounded-full">
            <img src={image} alt="" />
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="text-xs">{description}</p>
          <img className="absolute w-48 top-0 right-0" src={bg_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleService;
