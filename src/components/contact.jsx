import React from "react";
import { Link } from "react-scroll";
import { FcGoogle } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";
import Arrow from "../assets/Arrow.png"
import { toast } from "react-hot-toast";

const Contact = () => {
  return (
    <div
      name="contact"
      className="flex-col items-center justify-center bg-[#121120] relative pt-24 overflow-hidden "
    >
    
    <div className=" absolute  animate-trans-right left-12 top-80">
      <img src={Arrow} alt="" className="w-[15vw] -rotate-90 " />
    </div>
    <div className=" absolute animate-trans-up left-[80vw] top-[25vh]">
      <img src={Arrow} alt="" className="w-[15vw] " />
    </div>
    <Fade>
    <div className="pb-8 text-gray-400 flex flex-col justify-center items-center w-[100vw]">
    <h1 className="text-[#483285] text-5xl font-bold "><span className="text-gray-500">C</span>ontact</h1>

        <p className="py-6">Submit the form below to get in touch with me</p>
      </div>

      {/* login form*/}
      <form
        action="https://getform.io/f/0b4d35d7-dcf3-44eb-a3c8-950c4e9e3efd"
        method="POST"
        className="flex flex-col gap-4 mt-6 w-[80vw] lg:w-[50vw] mx-auto "
        onSubmit={()=>(toast.success("Submitted"))}
      >
        <label>
          <p className="text-xl text-richblack-5 leading-5  text-gray-300 mb-9">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            placeholder="Enter email address"
            name="email"
            className="bg-richblack-800 rounded-lg text-richblack-5 w-full px-4 py-3"
          />
        </label>

        <label className="relative">
          <p className="text-xl mt-9 text-gray-300 leading-5 mb-9">
            text<sup className="text-pink-200">*</sup>
          </p>
          <textarea
            required
            rows="10"
            placeholder="Enter text here"
            name="text"
            className="bg-white rounded-lg text-richblack-5 w-full px-4 py-3 "
          />

          <Link to="#">
            <p className="text-xs mt-1 text-gray-300 max-w-max ml-auto">
              required
            </p>
          </Link>
        </label>

        <button className="bg-yellow-500 rounded-lg font-medium text-richblack-900 px-4 py-2 mt-6 animate-trans-right overflow-hidden">
          Let's talk
          <div className="w-20 h-3 bg-gray-100 absolute rounded-xl -rotate-45 -translate-x-5 -translate-y-5 overflow-hidden -z-10">
          </div>
        </button>
      </form>

      <div className="flex w-full items-center my-4 gap-x-2">
        <div className="w-full h-[1px] bg-richblack-700"></div>
        <p className="text-richblack-700 font-medium leading[1.375rem] text-white">
          OR
        </p>
        <div className="w-full h-[1px] bg-richblack-700"></div>
      </div>

      <button
        className="w-[50vw] flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 translate-x-[25vw] text-white mb-12 "
        onClick={() =>
          (window.location.href = "mailto:mokshithmokshith7@gmail.com")
        }
      >
        <FcGoogle />
        <p>Google Mail</p>
      </button>
    </Fade>
      
    </div>
  );
};

export default Contact;
