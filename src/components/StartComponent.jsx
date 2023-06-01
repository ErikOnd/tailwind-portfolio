import React from "react";

const StartComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800">
      <div className="z-[1] text-white text-3xl text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Hello, I'm{" "}
        <span className="text-emerald-500 font-black">Erik Ondra</span>.
        <br /> I'm a full-stack developer.
      </div>
      <button
        className=" z-[1] bg-transparent text-white hover:text-gray-800 py-2 px-4 border
       border-white mt-10 text-xl hover:bg-emerald-500 transition-colors duration-300 hover:border-emerald-500"
      >
        View my work
      </button>
    </div>
  );
};

export default StartComponent;
