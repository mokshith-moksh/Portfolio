import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const About = () => {
  const code =
    "<!DocType>\n<title>!welcome<title/>\n<html>\n<head>\n</head>\n<body>\n<h1>HelloWorld</h1>\n<p>Best Dev</p>\n<p>Need Help?</p>\n</body>\n</html>";
  return (
    <div name="about" className="flex justify-center items-center w-[100%] h-screen bg-[#121120] overflow-hidden ">
    
      <div className="w-[80vw] flex flex-col md:flex-row ">
     
        <Fade className="flex flex-col flex-wrap justify-center items-center">
          <div>
       
          <h1 className="text-[#483285] text-5xl font-bold absolute  -translate-y-[8vh]"><span className="text-gray-500">A</span>bout</h1>
          <span className="  w-[10vw] h-1 bg-gray-400 absolute "></span>

            <p className="text-gray-200 mt-16 text-lg">
              Hello! I'm Mokshith S, a passionate MERN stack developer with a
              strong focus on creating exceptional web applications. With my
              expertise in MongoDB, Express.js, React.js, and Node.js, I bring
              innovative and interactive digital experiences to life. I have a
              solid foundation in front-end development, utilizing HTML, CSS,
              and JavaScript to build intuitive user interfaces. 
            </p>
            <Link to="contact" smooth duration={500} >
              <button className=" relative bg-yellow-500 rounded-lg py-2 px-4 mt-12 mb-12 hover:scale-150 transition-all duration-300 animate-trans-up z-10 overflow-hidden">
              Contact me
              <div className="w-16 h-3 bg-gray-100 absolute rounded-xl -rotate-45 -translate-x-5 -translate-y-5 overflow-hidden -z-10">
            
            </div>
            </button>
            </Link>
     
          </div>
        </Fade>

        <div className="w-1/2 flex justify-center items-center text-2xl">
        <div className=" absolute w-[250px] h-[250px] bg-gradient-to-r from-[#763CAC] z-10 opacity-25 backdrop-filter rounded-full animate-ping"></div>
          <div className="w-[30vw] flex z-20 -ml-32 md:ml-0">
            <div className=" relative  text-center flex flex-col w-1/12 font-bold text-gray-400 mx-5">
              {[...Array(11)].map((_, index) => (
                <p key={index}>{index + 1}</p>
              ))}
            </div>

            <div className="flex gap-2 font-bold text-yellow-500 w-[22vw] md:overflow-hidden">
              <TypeAnimation
                sequence={[code, 1000, ""]}
                repeat={Infinity}
                cursor={true}
                style={{ whiteSpace: "pre-line", display: "block" }}
                omitDeletionAnimation={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
