import React from "react";

const AboutMeComponent = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <nav className="z-[1] bg-gray-900 sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-4">
              <a
                href="test"
                className="text-white hover:text-emerald-500 px-1  lg:px-10 py-2 rounded-md text-base lg:text-xl"
              >
                ABOUT
              </a>
              <a
                href="test"
                className="text-white hover:text-emerald-500 px-1 lg:px-10 py-2 rounded-md text-base lg:text-xl"
              >
                PROJECTS
              </a>
              <a
                href="test"
                className="text-white hover:text-emerald-500 px-1 lg:px-10 py-2 rounded-md text-base lg:text-xl"
              >
                CONTACT
              </a>
              <a
                href="test"
                className="text-white hover:text-emerald-500 px-1 lg:px-10  py-2 rounded-md text-base lg:text-xl"
              >
                HOME
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Content of your About Me component */}
      </div>
    </div>
  );
};

export default AboutMeComponent;
