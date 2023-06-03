import React from "react";
import Projects from "./Projects";

const ProjectsComponent = () => {
  return (
    <div
      className="flex flex-col relative min-h-screen min-w-screen bg-zinc-50"
      id="projects"
    >
      <div className="z-10 container mx-auto max-w-5xl ">
        <div className="text-gray-700 text-5xl font-bold mt-20 mb-10 justify-center underline section-header max-sm:text-3xl">
          PROJECTS
        </div>
        <div className="flex flex-col px-5">
          <p className="mb-10">
            Introducing my biggest project to date: the{" "}
            <a
              href="https://www.my-workout-tracker.com"
              className="font-bold text-orange-500"
              target="_blank"
            >
              MyWorkoutTracker
            </a>{" "}
            website. This application, built with React, TypeScript, and
            Node.js, allows you to effortlessly track your workouts, import
            routines from other users, customize them to fit your preferences,
            and visualize your progress through insightful charts.
          </p>
          <p>
            In addition to the website, I have developed an app using React
            Native and Expo. This exercise tracking app seamlessly integrates
            with your MyWorkoutTracker Account, enabling you to effortlessly
            track your exercises throughout your workout sessions.
          </p>
          <a
            className="flex items-center justify-center mb-10 "
            href="https://apps.apple.com/de/app/myworkouttracker-app/id6449734647"
          >
            <div className="flex mt-3 w-48 h-14 bg-transparent text-black border border-black rounded-xl items-center justify-center cursor-pointer hover:bg-white">
              <div className="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-2xl font-semibold font-sans -mt-1">
                  App Store
                </div>
              </div>
            </div>
          </a>

          <Projects></Projects>
          <p className="mb-10">
            Please feel free to explore my GitHub account for more exciting
            projects, such as a{" "}
            <a
              href="https://github.com/ErikOnd/whatsapp-fe"
              className="font-bold text-green-500"
              target="_blank"
            >
              WhatsApp
            </a>{" "}
            clone built with Socket.IO or a{" "}
            <a
              href="https://github.com/ErikOnd/linkedIn_postgreSQL"
              className="font-bold text-blue-700"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            replica.
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
