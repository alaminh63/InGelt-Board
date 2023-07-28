import React from "react";
import quote from "../assets/Quotes.png";
import rating from "../assets/rating.png";
import divider from "../assets/Divider.png";
import girlPhoto from "../assets/GirlPhoto.png";
import rectangle from "../assets/Rectangle 5423.png";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";


const ReviewSection = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 50px 0px #0D19481F",
      }}
      className="max-w-4xl mx-auto mb-36 relative px-12 items-center flex left-[-60px]  rounded-3xl py-20 w-6/12"
    >
      <div className="w-1/2">
        <h1 className="font-bold text-3xl my-2">Freda Collier</h1>
        <img className="w-3/12 h-[3px]" src={divider} alt="" />
        <img className="my-2 pt-4 w-4" src={quote} alt="" />
        <p className="font-bold ">
          Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et
          est minima dolorem eum modi atque sint nobis. Enim quod facere.
          Reiciendis necessitatibus ipsam non aspernatur voluptate id.
        </p>
        <img className="my-2 absolute left-[250px]  w-4" src={quote} alt="" />
        <img className="my-12 w-36" src={rating} alt="" />
      </div>

      <div className="w-1/2">
        <img
          className="h-[400px] absolute right-[-80px] top-20"
          src={girlPhoto}
          alt=""
        />
        <img
          className="h-[450px] absolute right-[-130px] top-[55px] -z-10"
          src={rectangle}
          alt=""
        />
        <img
          className="mask mask-triangle-4"
          src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
        />
        <div
          className="absolute left-[100px] bottom-[-60px] "
          style={{
            width: "0",
            height: "0px",
            color: "#FFFFFF",
            borderStyle: "solid",
            borderTop: "65px solid  transparent",
            borderBottom: "80px solid transparent",
            borderLeft: "100px solid ",
            borderRight: "0",
          }}
        ></div>
        <div className="flex items-center absolute bottom-[-3rem] left-[10rem]">
          <FaLessThan className="h-8 w-8" />
          <span className="text-4xl">01 </span><span className="text-xs mt-6">/ 04</span>
          <FaGreaterThan className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
