import React from "react";
import Projects from "./Projects";

const ProjectsComponent = () => {
  return (
    <div className="flex flex-col relative min-h-screen min-w-screen bg-zinc-50 ">
      <div className="z-10 container mx-auto max-w-5xl ">
        <div className="text-gray-700 text-5xl font-bold my-20 justify-center underline section-header max-sm:text-3xl">
          PROJECTS
        </div>
        <div className="flex flex-col">
          <p>
            My biggest project so far is the workouttracker u can do this and
            that. (Add btn live preview and appstoe)
          </p>
          <Projects></Projects>
          <p>
            Feel free to check out my github account u can find more interesting
            project like a whatsapp cole build with socket.io or an linked in
            clone.
          </p>
          <div className="hover:underline cursor-pointer text-2xl mb-20">
            <a href="https://github.com/ErikOnd">Visit my GitHub account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
