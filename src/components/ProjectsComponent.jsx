import React from "react";
import Projects from "./Projects";

const ProjectsComponent = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-zinc-50">
      <div className="z-10 container mx-auto max-w-5xl ">
        <div className="text-gray-700 text-5xl font-bold my-20 justify-center underline section-header">
          PROJECTS
        </div>
        <div className="flex flex-col">
          <Projects></Projects>
          <div className="hover:underline cursor-pointer text-2xl ">
            <a href="https://github.com/ErikOnd">Visit my GitHub account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
