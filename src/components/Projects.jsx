import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import workoutTrackerImg from "../assets/workoutTracker.png";
import workoutTrackerImg2 from "../assets/workoutTracker2.png";
import workoutTrackerImg3 from "../assets/workoutTracker3.png";
import workoutTrackerImg4 from "../assets/workoutTracker4.png";
import workoutTrackerImg5 from "../assets/workoutTracker5.png";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const customArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    backgroundColor: "transparent",
    color: "#000",
    fontSize: "2rem",
    padding: "0.5rem",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
  };

  const renderCustomArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...customArrowStyles, left: "1rem" }}
        onMouseEnter={() => handleMouseEnter(hoveredIndex)}
        onMouseLeave={handleMouseLeave}
      >
        <FaChevronLeft className="" />
      </button>
    );

  const renderCustomArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{ ...customArrowStyles, right: "1rem" }}
        onMouseEnter={() => handleMouseEnter(hoveredIndex)}
        onMouseLeave={handleMouseLeave}
      >
        <FaChevronRight />
      </button>
    );

  return (
    <Carousel
      className="mb-10"
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      renderArrowPrev={renderCustomArrowPrev}
      renderArrowNext={renderCustomArrowNext}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      showStatus={false}
    >
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={workoutTrackerImg}
          alt="Workout Tracker"
          className="mx-auto w-full h-auto rounded-xl"
        />
      </div>
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={workoutTrackerImg2}
          alt="workoutTracker"
          className="mx-auto w-full h-auto rounded-xl"
        />
      </div>
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={workoutTrackerImg3}
          alt="workoutTracker"
          className="mx-auto w-full h-auto rounded-xl"
        />
      </div>
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={workoutTrackerImg4}
          alt="workoutTracker"
          className="mx-auto w-full h-auto rounded-xl"
        />
      </div>
      <div
        className="group relative"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={workoutTrackerImg5}
          alt="workoutTracker"
          className="mx-auto w-full h-auto rounded-xl"
        />
      </div>
    </Carousel>
  );
};

export default Projects;
