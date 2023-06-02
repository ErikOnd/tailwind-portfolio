import React from "react";
import HeaderComponent from "./HeaderComponent";
import AboutMeComponent from "./AboutMeComponent";
import ProjectsComponent from "./ProjectsComponent";

const ContentPart = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AboutMeComponent></AboutMeComponent>
      <ProjectsComponent></ProjectsComponent>
    </>
  );
};

export default ContentPart;
