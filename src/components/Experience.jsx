import React from "react";
import { Fade } from "react-awesome-reveal";
import N from "../assets/1.png";
import E from "../assets/3.png";
import M from "../assets/2.png";
import R from "../assets/4.png";
import F from "../assets/5.png";
import T from "../assets/6.png";
import Ne from "../assets/7.png";
import ta from "../assets/8.png";



const Experience = () => {
  return (
    <div
      name="experience"
      className=" flex flex-col md:flex-row  h-[120vh] md:h-[100vh] w-full bg-[#121120] overflow-hidden pt-10 md:pt-1 "
    >
    

            <div className="w-full md:w-[50%] flex flex-col items-center justify-center z-30 gap-6 ">
          {/* Content */}
          <h1 className="text-[#483285] text-5xl font-bold "><span className="text-gray-500">E</span>xperience</h1>
          <span className="w-[10vw] h-1 bg-gray-400 "></span>

          <div className=" w-[80%] h-[45%] flex justify-center items-center mt-9 ">
<p className=" font-semibold text-xl text-gray-300">"My learning journey resembles a solar system, with each new skill I acquire orbiting around a central nucleus of knowledge, expanding my expertise like celestial bodies in space."</p></div>
        </div>



      <Fade className="w-full h-[100vh] md:w-[50%] flex justify-center items-center">



        <div className="flex justify-center flex-col  ">
        
          <div className="flex justify-center items-center animate-trans-up">
            {/* Grid 1 */}
            <div className=" absolute w-[250px] h-[250px] bg-gradient-to-r from-[#763CAC] z-10 opacity-25 backdrop-filter rounded-full animate-ping"></div>

            <div className="grid grid-cols-2 grid-rows-2 relative gap-52  lg:gap-64 rounded-full  border-2 animate-rotate-clockwise bg-[#121120]">
              <img
                src={M}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseSA"
              />
              <img
                src={E}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseSA"
              />
              <img
                src={R}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseSA"
              />
              <img
                src={N}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseSA "
              />
              
              
            </div>

            {/* Grid 2 */}
            <div className=" absolute grid grid-cols-2 grid-rows-2  gap-28 md:gap-12 lg:gap-24  rounded-full animate-rotate-counterclockwise bg-gray-900">
              <img
                src={F}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseS "
              />
              <img
                src={T}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseS "
              />
              <img
                src={Ne}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseS"
              />
              <img
                src={ta}
                alt=""
                className="w-12 md:w-16 rounded-full animate-rotate-counterclockwiseS "
              />
            </div>

          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Experience;
