import React from "react";
import HeaderComponent from "./HeaderComponent";

const AboutMeComponent = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <HeaderComponent></HeaderComponent>
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Content of your About Me component */}
      </div>
    </div>
  );
};

export default AboutMeComponent;
