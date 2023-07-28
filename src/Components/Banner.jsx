import React from "react";
import tikIcon from "../assets/Line.png";
import student1 from "../assets/img-student-3 2.png";
import bgShape from "../assets/Group 21.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="flex mt-20 max-w-6xl mx-auto">
      <div className="w-1/2">
        <h1 className="text-3xl  font-bold text-center">
          Start Your IELTS Preparation <br /> And Get Desire Bands
        </h1>
        <p className="text-[#00000099] text-center my-4">
          <li>Get access to IELTS Centralised Library</li>
          <li>British Council Certified Teacher</li>
        </p>

        <div
          style={{
            boxShadow: "0px 4px 50px 0px #0D19481F",
          }}
          className="card w-96 mx-auto bg-base-100"
        >
          <div className="card-body text-center">
            <div className="flex justify-around">
              <div className="flex items-center gap-2">
                <img src={tikIcon} alt="" />
                <p>Start</p>
              </div>
              <div className="flex items-center   gap-2">
                <div className="bg-gray-400 rounded-full h-5 w-5 flex items-center justify-center  text-white">
                  2
                </div>
                <p> Fill Detail</p>
              </div>
              <div className="flex items-center gap-2 ">
                <div className="bg-gray-400 rounded-full h-5 w-5 flex items-center justify-center  text-white">
                  3
                </div>
                <p>Confirm</p>
              </div>
            </div>
            <h2 className="card-title text-[#001E43] font-bold my-3 text-2xl">
              Free IELTS Classes
            </h2>
            <div>
              <input
                style={{ boxShadow: "0px 7px 29px 0px #64646F33" }}
                type="text"
                placeholder="Enter Your Full Name "
                className="input input-bordered w-full max-w-xs my-2"
              />
              <div className="flex gap-2 my-3">
                <svg
                  className="absolute ml-9 h-6 mt-3 "
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="50"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.371094 18 L 27.773438 18 L 27.773438 23.921875 L 2.371094 23.921875 Z M 2.371094 18 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="id2">
                      <path
                        d="M 2.371094 10 L 27.773438 10 L 27.773438 19 L 2.371094 19 Z M 2.371094 10 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="id3">
                      <path
                        d="M 2.371094 5.050781 L 27.773438 5.050781 L 27.773438 11 L 2.371094 11 Z M 2.371094 5.050781 "
                        clip-rule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clip-path="url(#id1)">
                    <path
                      fill="rgb(7.449341%, 53.329468%, 3.138733%)"
                      d="M 2.375 21.019531 C 2.375 22.625 3.640625 23.921875 5.199219 23.921875 L 24.945312 23.921875 C 26.503906 23.921875 27.769531 22.625 27.769531 21.019531 L 27.769531 18.117188 L 2.375 18.117188 Z M 2.375 21.019531 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                  <g clip-path="url(#id2)">
                    <path
                      fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                      d="M 2.375 10.859375 L 27.769531 10.859375 L 27.769531 18.117188 L 2.375 18.117188 Z M 2.375 10.859375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                  <g clip-path="url(#id3)">
                    <path
                      fill="rgb(100%, 59.999084%, 19.999695%)"
                      d="M 27.769531 10.859375 L 27.769531 7.957031 C 27.769531 6.351562 26.503906 5.050781 24.945312 5.050781 L 5.199219 5.050781 C 3.640625 5.050781 2.375 6.351562 2.375 7.957031 L 2.375 10.859375 Z M 27.769531 10.859375 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                    />
                  </g>
                  <path
                    fill="rgb(0%, 0%, 50.19989%)"
                    d="M 17.894531 14.488281 C 17.894531 14.871094 17.820312 15.242188 17.679688 15.597656 C 17.535156 15.953125 17.332031 16.269531 17.066406 16.539062 C 16.804688 16.8125 16.496094 17.023438 16.152344 17.167969 C 15.804688 17.316406 15.445312 17.390625 15.074219 17.390625 C 14.699219 17.390625 14.339844 17.316406 13.992188 17.167969 C 13.648438 17.023438 13.34375 16.8125 13.078125 16.539062 C 12.8125 16.269531 12.609375 15.953125 12.464844 15.597656 C 12.324219 15.242188 12.25 14.871094 12.25 14.488281 C 12.25 14.101562 12.324219 13.730469 12.464844 13.375 C 12.609375 13.019531 12.8125 12.707031 13.078125 12.433594 C 13.34375 12.164062 13.648438 11.953125 13.992188 11.804688 C 14.339844 11.65625 14.699219 11.585938 15.074219 11.585938 C 15.445312 11.585938 15.804688 11.65625 16.152344 11.804688 C 16.496094 11.953125 16.804688 12.164062 17.066406 12.433594 C 17.332031 12.707031 17.535156 13.019531 17.679688 13.375 C 17.820312 13.730469 17.894531 14.101562 17.894531 14.488281 Z M 17.894531 14.488281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                  <path
                    fill="rgb(93.328857%, 93.328857%, 93.328857%)"
                    d="M 17.1875 14.488281 C 17.1875 14.777344 17.136719 15.054688 17.027344 15.320312 C 16.921875 15.585938 16.765625 15.824219 16.570312 16.027344 C 16.371094 16.230469 16.140625 16.390625 15.882812 16.5 C 15.621094 16.609375 15.351562 16.664062 15.074219 16.664062 C 14.792969 16.664062 14.523438 16.609375 14.261719 16.5 C 14.003906 16.390625 13.773438 16.230469 13.578125 16.027344 C 13.378906 15.824219 13.226562 15.585938 13.117188 15.320312 C 13.011719 15.054688 12.957031 14.777344 12.957031 14.488281 C 12.957031 14.199219 13.011719 13.921875 13.117188 13.65625 C 13.226562 13.386719 13.378906 13.152344 13.578125 12.949219 C 13.773438 12.742188 14.003906 12.585938 14.261719 12.476562 C 14.523438 12.367188 14.792969 12.308594 15.074219 12.308594 C 15.351562 12.308594 15.621094 12.367188 15.882812 12.476562 C 16.140625 12.585938 16.371094 12.742188 16.570312 12.949219 C 16.765625 13.152344 16.921875 13.386719 17.027344 13.65625 C 17.136719 13.921875 17.1875 14.199219 17.1875 14.488281 Z M 17.1875 14.488281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                  <path
                    fill="rgb(39.99939%, 39.99939%, 70.199585%)"
                    d="M 15.074219 12.308594 L 15.175781 13.953125 L 15.882812 12.476562 L 15.367188 14.035156 L 16.570312 12.949219 L 15.511719 14.183594 L 17.027344 13.65625 L 15.589844 14.382812 L 17.1875 14.488281 L 15.589844 14.59375 L 17.027344 15.320312 L 15.511719 14.789062 L 16.570312 16.027344 L 15.367188 14.941406 L 15.882812 16.5 L 15.175781 15.023438 L 15.074219 16.664062 L 14.96875 15.023438 L 14.261719 16.5 L 14.777344 14.941406 L 13.574219 16.027344 L 14.632812 14.789062 L 13.117188 15.320312 L 14.554688 14.59375 L 12.957031 14.488281 L 14.554688 14.382812 L 13.117188 13.65625 L 14.632812 14.183594 L 13.574219 12.949219 L 14.777344 14.035156 L 14.261719 12.476562 L 14.96875 13.953125 Z M 15.074219 12.308594 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                  <path
                    fill="rgb(0%, 0%, 50.19989%)"
                    d="M 15.777344 14.488281 C 15.777344 14.6875 15.707031 14.859375 15.570312 15 C 15.433594 15.140625 15.265625 15.214844 15.074219 15.214844 C 14.878906 15.214844 14.710938 15.140625 14.574219 15 C 14.4375 14.859375 14.367188 14.6875 14.367188 14.488281 C 14.367188 14.289062 14.4375 14.117188 14.574219 13.972656 C 14.710938 13.832031 14.878906 13.761719 15.074219 13.761719 C 15.265625 13.761719 15.433594 13.832031 15.570312 13.972656 C 15.707031 14.117188 15.777344 14.289062 15.777344 14.488281 Z M 15.777344 14.488281 "
                    fill-opacity="1"
                    fill-rule="nonzero"
                  />
                </svg>

                <select
                  style={{ boxShadow: "0px 7px 29px 0px #64646F33" }}
                  className="select select-bordered max-w-xs w-2/5"
                >
                  <option disabled selected>
                    +91
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <input
                  style={{ boxShadow: "0px 7px 29px 0px #64646F33" }}
                  type="text"
                  placeholder="Phone Number "
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <button className="btn btn-block bg-[#001E43] text-white mt-5">
                Continue
              </button>
              <p className="text-[10px] mt-3">
                By continuing, you agree to our Term of services & Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative  flex items-center justify-center ">
        <div className="relative">
          <div className=" relative bg-[#001E43] rounded-full w-[350px] h-[350px]">
            <img
              style={{
                borderRadius: "50% 50% 50% 50% / 50% 0% 26% 38%",
              }}
              className=" bottom-[0px] left-[16px]  absolute h-[380px]  w-[325
                  px]  "
              src={student1}
              alt=""
            />
          </div>
          <div className="absolute bottom-[220px] my-2 py-5 right-[290px] text-center blurEffect w-1/2 rounded-full">
            <p className="text-xs font-bold">Student Visa</p>
            <div className="badge badge-primary badge-sm top-[-6px] left-[30px] absolute "></div>
          </div>
          <div className="absolute bottom-[130px] my-2 py-5  left-[240px] text-center blurEffect w-1/2 rounded-full">
            <p className="text-xs font-bold">Work Visa</p>
            <div className="badge badge-success badge-sm top-[-6px] right-[30px] absolute "></div>
          </div>
          <div className="absolute bottom-[55px] my-2 py-5 right-[240px] text-center blurEffect w-1/2 rounded-full">
            <p className="text-xs font-bold">Permanent Residence</p>
            <div className="badge badge-info badge-sm top-[-6px] right-[30px] absolute "></div>
          </div>
        </div>
        <img
          className="absolute  left-16 -z-10 h-[850px] w-[610px]"
          src={bgShape}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
