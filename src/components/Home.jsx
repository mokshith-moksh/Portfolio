import React from "react";
import ellip from "../assets/ellip.png";
import bg from "../assets/bg.png";
import me from "../assets/me.png";
import { TypeAnimation } from "react-type-animation";
import cir from "../assets/cir.png";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-[#121120] w-[100vw] h-screen relative flex justify-center  -z-1"
    >
      <div className="w-[100%] relative -z-2">
        <div className="relative w-[100%] h-[100vh] translate-y-40 xl:-translate-y-2 ">
          <img src={bg} alt="" className="h-[100vh]  " />
        </div>
        <div className="-translate-y-[90vh] -translate-x-6 animate-pulse">
          <img src={ellip} alt="" className="h-[100vh]" />
        </div>
      </div>
      <Fade className=" absolute translate-y-8 text-gray-300 font-semibold text-5xl">
        <h1>
          <div>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                2500,
                "Hey there!", // initially rendered starting point
                500,
                "I'm Mokshith",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </h1>
      </Fade>

      {/* <span className=" absolute translate-y-12 -rotate-12">
        <img src={arrow} alt="" />
      </span> */}
      <span className=" absolute translate-y-36  w-28">
        <img src={me} alt="" />
      </span>

      <Fade className=" absolute translate-y-[40vh] z-10 ">
        <div className=" -z-40">
          <div className="flex flex-col justify-center items-center text-8xl md:mt-[10vh] lg:-mt-[1vh] animate-trans-right">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                // 500,
                // "WEB", // initially rendered starting point
                500,
                "Full Stack",
                500,
                `Web Dev!`,
                500,
              ]}
              speed={50}
              className="text-5xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 mt-32 white-space:pre-line"
            />
          </div>
        </div>
      </Fade>

      <Fade className="absolute mt-[50vh] object-fill ">
        <div>
        <div href="#"  className="animate-trans-right top-[50%]">
        <img
            src={cir}
            alt=""
            className="-translate-x-1 -translate-y-52 -rotate-12 w-[80vw]  "
          />

        </div>
     
          <div className=" animate-trans-up top-[100%]">
            <a href="https://www.instagram.com/encrypted.ghost/">
              <AiFillInstagram className=" translate-x-[55vw] -translate-y-[37vh] xl:-translate-y-72 text-5xl text-gray-400 rotate-12 xl:translate-x-10 hover:scale-[150%] hover:text-pink-500 transition-all duration-300 " />
            </a>
          </div>
          <div className="animate-trans-up top-[110%]">
           
            <a href="https://twitter.com/mokshith_s_">
              <AiOutlineTwitter className="-translate-y-[45vh] lg:-translate-y-[33vh] text-5xl text-gray-400  xl:translate-x-[25vw] hover:scale-[150%] hover:text-blue-500 transition-all duration-300" />
            </a>
          </div>

          <div className=" animate-trans-up top-[120%]">
            <a href="https://www.linkedin.com/in/mokshith-s/
">
              <AiFillLinkedin className="-translate-y-[45vh] translate-x-[10vw]  xl:-translate-y-[44vh] text-5xl text-gray-400 rotate-12 xl:translate-x-[50vw]  hover:text-blue-700 hover:scale-150 transition-all duration-300" />
            </a>
          </div>

          <div className="animate-trans-up top-[100%]">
            <a href="https://github.com/mokshith-moksh">
              <AiFillGithub className=" translate-x-[71vw] -translate-y-[68vh]  xl:-translate-y-[78vh] text-5xl text-gray-400  xl:translate-x-[75vw] hover:scale-[150%] hover:text-red-600 transition-all duration-300" />
            </a>
          </div>
        </div>
      </Fade>    
    </div>
  );
};

export default Home;
