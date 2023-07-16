import React, { useState, useEffect } from "react";
import rocket from "../assets/up.png";
import { Link } from "react-scroll";

const FixedButton = () => {
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollPosition / maxScroll) * 100;

      // Check if scroll position is at least 50% of the document height
      if (scrollPercentage >= 10) {
        setShowRocket(true);
      } else {
        setShowRocket(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Perform any action you want when the button is clicked
    console.log("Rocket clicked!");
  };

  return (
    <>
      {showRocket && (
        <Link to="home" smooth duration={500}>
          <img
            src={rocket}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
            }}
            className="cursor-pointer z-20 w-[10vw] lg:w-[4vw] "
            onClick={handleClick}
            alt="Rocket Icon"
          />
        </Link>
      )}
    </>
  );
};

export default FixedButton;
