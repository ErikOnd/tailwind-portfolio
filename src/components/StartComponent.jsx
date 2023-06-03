import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const StartComponent = () => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    const targetElement = document.getElementById("projects");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800"
      id="start"
    >
      <div className="z-[1] text-white text-3xl text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Hello, I'm{" "}
        <span className="text-emerald-500 font-black">Erik Ondra</span>.
        <br /> I'm a full-stack developer.
      </div>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="z-[1] bg-transparent text-white hover:text-gray-800 py-2 px-4 border
       border-white mt-10 text-xl hover:bg-emerald-500 transition-colors duration-300 hover:border-emerald-500 my-word-btn"
      >
        <span>View my work</span> <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default StartComponent;
