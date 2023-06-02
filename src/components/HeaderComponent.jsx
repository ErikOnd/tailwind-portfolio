import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const HeaderComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showLinks, setShowLinks] = useState(false); // Add showLinks state

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks); // Toggle showLinks state
  };

  return (
    <nav className=" bg-gray-900 sticky top-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {isSmallScreen ? (
            <span
              className="react-bars ml-auto pr-10"
              onClick={handleToggleLinks}
            >
              <FaBars color="white" size={23} cursor="pointer" />
            </span>
          ) : (
            <div className="flex space-x-20">
              <a
                href="test"
                className="text-white hover:text-emerald-500 bg-gray-700"
              >
                HOME
              </a>
              <a href="test" className="text-white hover:text-emerald-500">
                ABOUT
              </a>
              <a href="test" className="text-white hover:text-emerald-500">
                PROJECTS
              </a>
              <a href="test" className="text-white hover:text-emerald-500">
                CONTACT
              </a>
            </div>
          )}
        </div>
      </div>

      {isSmallScreen && showLinks && (
        <div className="bg-gray-900">
          <a
            href="test"
            className="block text-white hover:text-emerald-500 py-2 px-4"
          >
            HOME
          </a>
          <a
            href="test"
            className="block text-white hover:text-emerald-500 py-2 px-4"
          >
            ABOUT
          </a>
          <a
            href="test"
            className="block text-white hover:text-emerald-500 py-2 px-4"
          >
            PROJECTS
          </a>
          <a
            href="test"
            className="block text-white hover:text-emerald-500 py-2 px-4"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
