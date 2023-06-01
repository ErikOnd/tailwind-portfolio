import React from "react";

const StartComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-800">
      <div className="text-white text-3xl text-center sm:text-3xl md:text-4xl lg:text-5xl">
        Hello, I'm <span className="text-rose-500">Erik Ondra</span>.<br /> I'm
        a full-stack developer.
      </div>
      <button className="bg-transparent text-white hover:text-gray-800 py-2 px-4 border border-white mt-10 text-xl hover:bg-white transition-colors duration-300">
        View my work
      </button>
    </div>
  );
};

export default StartComponent;
