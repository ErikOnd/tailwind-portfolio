import React from "react";
import porfileImg from "../assets/profile-img.jpg";

const AboutMeComponent = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <div className="z-10 container mx-auto max-w-5xl px-10">
        <div className="text-gray-700 text-5xl font-bold my-20 justify-center underline section-header max-sm:text-3xl">
          ABOUT
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center md:justify-between mb-20">
          <div className=" flex flex-col shadow-md  p-4 rounded-md h-60 w-60 items-center justify-starttransition duration-300 transform hover:-translate-y-2 hover:shadow-md ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              alt="react-logo"
              className="h-20"
            />
            <div className="mt-auto">
              <p className="font-black text-gray-800 text-3xl ">React</p>
              <p className=" text-gray-800 mt-2 text-sm">
                My favourite JavaScript library for frontend development.
              </p>
            </div>
          </div>
          <div className="flex flex-col shadow-md p-4 rounded-md h-60 w-60 items-center justify-start transition duration-300 transform hover:-translate-y-2 hover:shadow-md">
            <img
              src="https://logowik.com/content/uploads/images/nodejs.jpg"
              alt="react-logo"
              className="h-20"
            />
            <div className="mt-auto">
              <p className="font-black text-gray-800 text-3xl ">Node.js</p>
              <p className=" text-gray-800 mt-2 text-sm">
                My go-to runtime environment for server-side JavaScript
                development.
              </p>
            </div>
          </div>
          <div className="flex flex-col shadow-md  p-4 rounded-md h-60 w-60 items-center justify-start transition duration-300 transform hover:-translate-y-2 hover:shadow-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              alt="react-logo"
              className="h-20"
            />
            <div className="mt-auto">
              <p className="font-black text-gray-800 text-3xl ">Tailwind</p>
              <p className=" text-gray-800 mt-2 text-sm">
                My preferred utility-first CSS framework for building modern and
                responsive web interfaces.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out mb-20">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className=" w-full object-cover md:w-48"
                src={porfileImg}
                alt=""
              />
            </div>
            <div className="p-8">
              <p className="block mt-1 text-3xl leading-tight font-medium text-emerald-500">
                Hey there!
              </p>
              <p className="mt-2 text-gray-800">
                I'm a passionate full-stack developer from Stuttgart, Germany. I
                specialize in creating user-friendly web applications using
                front-end frameworks like React and back-end technologies like
                Node.js. To stay up-to-date with the latest industry trends, I
                actively participate in web development communities, attend
                workshops, and take online courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
