import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-[#121120] p-4 md:px-16 border-b-[1px] border-b-gray-600 h-20 overflow-hidden">
      <div className="flex items-center">
        <Link to="home" smooth duration={500}>
          <h1 className="text-5xl font-signature cursor-pointer ml-2 py-5 text-[#483285]">
            Moksh
          </h1>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <FaBars
          className="text-white text-3xl cursor-pointer"
          onClick={toggleNav}
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 text-lg cursor-pointer capitalize font-semibold text-gray-400 hover:scale-125 hover:text-yellow-500 duration-200"
          >
            {link !== "contact" ? (
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            ) : (
              <Link
                to={link}
                smooth
                duration={500}
                className="bg-yellow-500 p-2 rounded-lg text-black hover:text-black"
              >
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Sidebar */}
      {navOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#121120] text-white z-50  -translate-x-3 bg-opacity-80  ">
          <div className=" ml-[90vw] overflow-hidden ">
  
            <FaTimes
              className="text-white text-3xl cursor-pointer "
              onClick={toggleNav}
            />
          </div>
          <ul className="mt-8  translate-x-[30vw] ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 text-3xl cursor-pointer capitalize font-semibold text-yellow-400 hover:text-yellow-500 duration-200 py-2 mt-16 "
              >
                {link !== "contact" ? (
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    onClick={toggleNav}
                  >
                    {link}
                  </Link>
                ) : (
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="bg-yellow-500 p-2 rounded-lg text-black hover:text-black"
                    onClick={toggleNav}
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
